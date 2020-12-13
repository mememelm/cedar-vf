import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatatableLanguage } from 'app/constant/french';
import { DomaineService } from 'app/services/domaine.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bovin',
  templateUrl: './bovin.component.html',
  styleUrls: ['./bovin.component.css']
})
export class BovinComponent implements OnInit {

  @Output() emitData: EventEmitter<any> = new EventEmitter()

  public listDomaine: any
  public listBovin: any
  public dtOptions: any = {}

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private spinner: NgxSpinnerService,
    private domaineService: DomaineService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: DatatableLanguage.datatableFrench
    }

    this.domaineService.getDomaineList()
      .snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe((res: any) => {
        this.listDomaine = res
      })

    this.loadBovin()
  }

  /**
   * returnDoSelection
   */
  public returnDoSelection(data) {
    this.emitData.emit(data)
  }

  /**
   * loadBovin
   */
  public loadBovin() {
    this.spinner.show()

    const array = []
    const operator = this.angularFireDatabase.database.ref().child('exploitants')
    const bovin = this.angularFireDatabase.database.ref().child('Bovin')

    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
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

      bovin.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
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
            ...res.val()
          })

          this.listBovin = array
          this.spinner.hide()

        })
      })
    })
  }

  /**
   * filterMarketFood
   */
  public filterBovin(param) {
    const array = []
    const operator = this.angularFireDatabase.database.ref().child('exploitants')
    const bovin = this.angularFireDatabase.database.ref().child('Bovin')

    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
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

      bovin.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
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
              ...res.val()
            })

            this.listBovin = array
          }
        })
      })
    })
  }

}
