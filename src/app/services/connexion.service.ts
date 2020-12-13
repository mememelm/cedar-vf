import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  /**
   * addUser
   */
  public addUser(email, password) {
    this.spinner.show()
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.spinner.hide()
        this.toastrService.success('Enregistrement réussi')
      })
      .catch(() => {
        this.spinner.hide()
        this.toastrService.error('Format email incorrect ou vérifiez que le mot de passe doit au moins contenir 6 caractères')
      })
  }

  /**
   * loginUser
   */
  public loginUser(email, password) {
    this.spinner.show()
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.getCurrentUser()
        this.router.navigateByUrl('operator')
        this.toastrService.success(email)
        this.spinner.hide()
      })
      .catch(() => {
        this.spinner.hide()
        this.toastrService.error('Email ou mot de passe incorrect')
      })
  }

  /**
   * getCurrentUser
   */
  public getCurrentUser() {
    this.angularFireAuth.authState
      .subscribe((res: any) => {
        localStorage.setItem('currentUser', res.email)
      })
  }

  /**
   * signout
   */
  public logoutUser() {
    this.angularFireAuth.signOut()
      .then(() => {
        this.router.navigateByUrl('')
        localStorage.clear()
      })
  }
}
