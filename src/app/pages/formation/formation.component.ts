import { Component, OnInit, OnChanges } from '@angular/core';
import { Subject } from "rxjs";
import { DatatableLanguage } from 'app/constant/french';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit, OnChanges {

  public dtOptions: any = {}
  public dtTigger = new Subject()

  public listDomaine: any
  public listFormation: any

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      language: DatatableLanguage.datatableFrench
    }

    this.loadFormation()
  }

  ngOnChanges(): void {
    this.loadFormation()
    this.dtTigger.next()
  }

  /**
   * getFormationOperator
   */
  public loadFormation() {
    this.spinner.show()

    const array = []
    const operator = this.angularFireDatabase.database.ref().child('exploitants')
    const cedar = this.angularFireDatabase.database.ref().child('Cedar')

    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId;
      const exploitantFirstName = snap.val().exploitantFirstName
      const exploitantLastName = snap.val().exploitantLastName
      const exploitantCedar = snap.val().exploitantCedar
      const exploitantDate = snap.val().exploitantDate
      const exploitantSex = snap.val().exploitantSex
      const exploitantDomaine = snap.val().exploitantDomaine
      const exploitantAge = snap.val().exploitantAge
      const exploitantCommune = snap.val().exploitantCommune
      const exploitantDistrict = snap.val().exploitantDistrict
      const exploitantFokotany = snap.val().exploitantFokotany
      const exploitantRegion = snap.val().exploitantRegion
      const exploitantActivite1 = snap.val().exploitantActivite1
      const exploitantActivite2 = snap.val().exploitantActivite2
      const exploitantSpeciality1 = snap.val().exploitantSpeciality1
      const exploitantSpeciality2 = snap.val().exploitantSpeciality2
      const exploitantFormation = snap.val().exploitantFormation
      const exploitantSchooling = snap.val().exploitantSchooling

      cedar.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach(cedarData => {
          array.push({
            exploitantId,
            exploitantFirstName,
            exploitantLastName,
            exploitantCedar,
            exploitantDate,
            exploitantSex,
            exploitantDomaine,
            exploitantAge,
            exploitantCommune,
            exploitantDistrict,
            exploitantFokotany,
            exploitantRegion,
            exploitantActivite1,
            exploitantActivite2,
            exploitantSpeciality1,
            exploitantSpeciality2,
            exploitantFormation,
            exploitantSchooling,
            ...cedarData.val()
          })

          this.listFormation = array
          this.spinner.hide()
        })
      })      
    })    
  }

  /**
   * formationFilter
   */
  public formationFilter(param) {
    const array = []
    const operator = this.angularFireDatabase.database.ref().child('exploitants')
    const cedar = this.angularFireDatabase.database.ref().child('Cedar')

    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId;
      const exploitantFirstName = snap.val().exploitantFirstName
      const exploitantLastName = snap.val().exploitantLastName
      const exploitantCedar = snap.val().exploitantCedar
      const exploitantDate = snap.val().exploitantDate
      const exploitantSex = snap.val().exploitantSex
      const exploitantDomaine = snap.val().exploitantDomaine
      const exploitantAge = snap.val().exploitantAge
      const exploitantCommune = snap.val().exploitantCommune
      const exploitantDistrict = snap.val().exploitantDistrict
      const exploitantFokotany = snap.val().exploitantFokotany
      const exploitantRegion = snap.val().exploitantRegion
      const exploitantActivite1 = snap.val().exploitantActivite1
      const exploitantActivite2 = snap.val().exploitantActivite2
      const exploitantSpeciality1 = snap.val().exploitantSpeciality1
      const exploitantSpeciality2 = snap.val().exploitantSpeciality2
      const exploitantFormation = snap.val().exploitantFormation
      const exploitantSchooling = snap.val().exploitantSchooling

      cedar.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach(cedarData => {
          if (exploitantCedar == param) {
            array.push({
              exploitantId,
              exploitantFirstName,
              exploitantLastName,
              exploitantCedar,
              exploitantDate,
              exploitantSex,
              exploitantDomaine,
              exploitantAge,
              exploitantCommune,
              exploitantDistrict,
              exploitantFokotany,
              exploitantRegion,
              exploitantActivite1,
              exploitantActivite2,
              exploitantSpeciality1,
              exploitantSpeciality2,
              exploitantFormation,
              exploitantSchooling,
              ...cedarData.val()
            })
          }

          this.listFormation = array
        })
      })
    })
  }

}
