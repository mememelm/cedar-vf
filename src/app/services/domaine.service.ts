import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Domaine } from "../constant/domaine";

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  public urlDomaine = 'domaine'
  public domaineRef: AngularFireList<Domaine> = null

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  public createDomaine(domaine: Domaine) {
    this.domaineRef.push(domaine)
  }

  public getDomaineList(): AngularFireList<Domaine> {
    return this.domaineRef = this.angularFireDatabase.list(this.urlDomaine)
  }
}
