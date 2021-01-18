import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'app/services/connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public email: any
  public password: any

  constructor(
    private connexionService: ConnexionService
  ) { }

  ngOnInit(): void {
  }

  /**
   * register
   */
  public register() {
    this.connexionService.addUser(this.email, this.password)
    this.resetField()
  }

  /**
   * login
   */
  public login() {
    this.connexionService.loginUser(this.email, this.password)
  }

  /**
   * resetField
   */
  public resetField() {
    this.email = this.password = ''
  }

}
