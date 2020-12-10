import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import * as firebase from "firebase/app";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  /**
   * addUser
   */
  public addUser(email, password) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.toastrService.success('Enregistrement réussi')
      })
      .catch(() => {
        this.toastrService.error('Format email incorrect ou vérifiez que le mot de passe doit au moins contenir 6 caractères')
      })
  }

  /**
   * loginUser
   */
  public loginUser(email, password) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.getCurrentUser()
        this.router.navigateByUrl('dashboard')
        this.toastrService.success(email)
      })
      .catch(() => {
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
      })
  }
}
