import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  public navigation: any

  public cuma: any
  public cuvi: any
  public api: any
  public avi: any
  public cunni: any
  public bovin: any
  public porci: any

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.navigation = 'menu'

    this.loadLength()
  }

  /**
   * navigateProduction
   */
  public navigateProduction(navigation) {
    this.navigation = navigation
  }

  /**
   * returnToProduction
   */
  public returnToProduction() {
    this.navigation = 'menu'
  }

  // number menu
  public loadLength() {

    this.spinner.show()

    const arrayCuvi = []
    const arrayCuma = []
    const arrayCunni = []
    const arrayApi = []
    const arrayAvy = []
    const arrayBovin = []
    const arrayPorci = []

    const operator = this.angularFireDatabase.database.ref().child('exploitants')

    const cuvi = this.angularFireDatabase.database.ref().child('FoodCulture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      cuvi.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayCuvi.push({
            exploitantId,
            ...res.val()
          })
          this.cuvi = arrayCuvi.length
        })
      })
    })

    const cuma = this.angularFireDatabase.database.ref().child('MarketCulture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      cuma.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayCuma.push({
            exploitantId,
            ...res.val()
          })
          this.cuma = arrayCuma.length
        })
      })
    })

    const cunni = this.angularFireDatabase.database.ref().child('Cunniculture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      cunni.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayCunni.push({
            exploitantId,
            ...res.val()
          })
          this.cunni = arrayCunni.length
        })
      })
    })

    const api = this.angularFireDatabase.database.ref().child('Apiculture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      api.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayApi.push({
            exploitantId,
            ...res.val()
          })
          this.api = arrayApi.length
        })
      })
    })

    const avi = this.angularFireDatabase.database.ref().child('Aviculture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      avi.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayAvy.push({
            exploitantId,
            ...res.val()
          })
          this.avi = arrayAvy.length
        })
      })
    })

    const bovin = this.angularFireDatabase.database.ref().child('Bovin')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      bovin.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayBovin.push({
            exploitantId,
            ...res.val()
          })
          this.bovin = arrayBovin.length
        })
      })
    })

    const porci = this.angularFireDatabase.database.ref().child('Poriculture')
    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      porci.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          arrayPorci.push({
            exploitantId,
            ...res.val()
          })
          this.porci = arrayPorci.length
        })
      })
    })

    this.spinner.hide()
  }
}
