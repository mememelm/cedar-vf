import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from "rxjs";
import { DatatableLanguage } from 'app/constant/french';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  public dtOptions: DataTables.Settings = {}
  public dtTigger = new Subject()

  public listDomaine: any
  public listFormation: any

  public dateBegin: Date
  public dateEnd: Date

  public initTable: boolean
  public filterTable: boolean
  public showEmpty: boolean

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private spinner: NgxSpinnerService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      language: DatatableLanguage.datatableFrench,
      destroy: true,
      order: [[2, 'DESC']],
      responsive: true
    }

    this.initTable = true
    this.filterTable = false

    this.spinner.show()

    this.loadFormation()
  }

  /**
   * getFormationOperator
   */
  public loadFormation() {
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
  public filterCedar(param) {

    this.initTable = false
    this.filterTable = true

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
            this.listFormation = array

            console.log(array.length)

            if (array.length !== 0) {
              this.showEmpty = false
            } else {
              this.showEmpty = true
            }
          }
        })
      })
    })
  }


  /**
   * periodeFilter
   */
  public periodeFilter() {

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
          if (exploitantDate > this.dateBegin && exploitantDate < this.dateEnd) {
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
          }
        })
      })
    })
  }

  // print
  public print() {
    let printContent = ''
    const WindowObject = window.open('', 'PrintWindow', 'width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes')
    printContent +=
      `<table style="border:1px solid black">
              <thead style="background-color: #007E3A; color:white">
                  <tr>
                      <th>Etat civil</th>
                      <th>Domaine</th>
                      <th>Adhésion</th>
                      <th>Localisation</th> 
                      <th>Activités</th>
                      <th>Spécialité</th>
                  </tr>
              </thead>`;
    this.listFormation.map(data => {
      let date = this.datePipe.transform(data.exploitantDate, 'dd MMMM yyyy')
      printContent +=
        `<tbody>
                  <tr style="border:1px solid black; padding: 10px">
                      <td>${data.exploitantFirstName} ${data.exploitantLastName} 
                          <br> ${data.exploitantAge} ans
                      </td>
                      <td>${data.exploitantCedar}</td>
                      <td>${date}</td>
                      <td>${data.exploitantRegion}<br>${data.exploitantDistrict}</td> 
                      <td>${data.exploitantActivite1}<br>${data.exploitantActivite2}</td>
                      <td>${data.exploitantSpeciality1}<br>${data.exploitantSpeciality2}</td>
                  </tr>
              </tbody>`;
      const htmlData = `<html><body>${printContent}</body></html>`

      WindowObject.document.writeln(htmlData)
      WindowObject.document.close()
      WindowObject.focus()
    })
  }

}
