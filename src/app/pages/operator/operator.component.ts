import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { OperatorService } from 'app/services/operator.service';
import { DatatableLanguage } from "../../constant/french";
import { map } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from "rxjs";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormationService } from 'app/services/formation.service';
import { InnovationService } from 'app/services/innovation.service';
import { AngularFireDatabase } from '@angular/fire/database';
import Chart from 'chart.js';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('operatorDetail') operatorDetail: any
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  public dtOptions: any = {}
  public dtTiggers = new Subject()
  public listOperator: any
  public listDomaine: any

  public operatorDomaine: any

  public firstname: any
  public lastname: any
  public activity1: any
  public activity2: any
  public age: any
  public childrenNumber: any
  public commune: any
  public dateInitiation: any
  public district: any
  public fokontany: any
  public formation: any
  public hamlet: any
  public maritalStatus: any
  public region: any
  public schooling: any
  public sex: any
  public speciality1: any
  public speciality2: any
  public state: any

  public formationDoing: any
  public innovationAcquis: any
  public innovationPerso: any
  public innovationAppli: any

  public listHistoCuma: any

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  constructor(
    private operatorService: OperatorService,
    private spinner: NgxSpinnerService,
    private modal: NgbModal,
    private formationService: FormationService,
    private innovationService: InnovationService,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.spinner.show()

    this.dtOptions = {
      language: DatatableLanguage.datatableFrench
    }

    this.operatorService.getOperator().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe((res: any) => {
        this.listOperator = res
        this.dtTiggers.next()
        this.spinner.hide()
      })
  }

  ngOnChanges(): void {
    this.loadOperator()
  }

  ngOnDestroy(): void {
    this.dtTiggers.unsubscribe()
  }

  /**
   * loadOperator
   */
  public loadOperator() {
    this.dtElement.dtInstance.then((res: DataTables.Api) => {
      res.destroy()
      this.operatorService.getOperator().snapshotChanges().pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
        .subscribe((res: any) => {
          this.listOperator = res
          this.dtTiggers.next()
        })
    })
  }

  /**
   * emitDataOperator
   */
  public async emitDataOperator(param: any) {

    this.activity1 = param.exploitantActivite1
    this.activity2 = param.exploitantActivite2
    this.age = param.exploitantAge
    this.childrenNumber = param.exploitantChildrenNumber
    this.commune = param.exploitantCommune
    this.dateInitiation = param.exploitantDate
    this.district = param.exploitantDistrict
    this.operatorDomaine = param.exploitantCedar
    this.firstname = param.exploitantFirstName
    this.fokontany = param.exploitantFokotany
    this.formation = param.exploitantFormation
    this.hamlet = param.exploitantHamlet
    this.lastname = param.exploitantLastName
    this.maritalStatus = param.exploitantMaritalStatus
    this.region = param.exploitantRegion
    this.schooling = param.exploitantSchooling
    this.sex = param.exploitantSex
    this.speciality1 = param.exploitantSpeciality1
    this.speciality2 = param.exploitantSpeciality2
    this.state = param.exploitantState

    this.formationOperator(param.exploitantId)
    this.innovationAp(param.exploitantId)
    this.innovationAq(param.exploitantId)
    this.innovationPers(param.exploitantId)

    this.detailCuma(this.firstname, this.lastname)

    await <any>this.modal.open(this.operatorDetail, { size: 'lg', backdrop: 'static' })

    // this.loadGraphCuma()
  }

  /**
   * getOperatorFIlter
   */
  public getOperatorFilter(param) {
    const operator = []
    this.operatorService.getOperatorOnChange(param)
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined)
            operator.push(res[i])
        }
      })
    this.listOperator = operator
    console.log(this.listOperator)
  }

  /**
   * formationOperator
   */
  public formationOperator(operator) {
    this.formationService.getFormationById(operator)
      .subscribe((res: any) => {
        let formation = []
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined) {
            for (let j in res[i]) {
              formation.push(res[i][j])
            }
          }
          this.formationDoing = formation.length
        }
      })
  }

  /**
   * innovationAcquis
   */
  public innovationAq(operator) {
    this.innovationService.getInnovAcquiById(operator)
      .subscribe((res: any) => {
        let innovation = []
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined) {
            for (let j in res[i]) {
              innovation.push(res[i][j])
            }
          }
          this.innovationAcquis = innovation.length
        }
      })
  }

  /**
   * innovationApplique
   */
  public innovationAp(operator) {
    this.innovationService.getInnovAppliById(operator)
      .subscribe((res: any) => {
        let innovation = []
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined) {
            for (let j in res[i]) {
              innovation.push(res[i][j])
            }
          }
          this.innovationAppli = innovation.length
        }
      })
  }

  /**
   * innovationPersonnelle
   */
  public innovationPers(operator) {
    this.innovationService.getInnovPersoById(operator)
      .subscribe((res: any) => {
        let innovation = []
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined) {
            for (let j in res[i]) {
              innovation.push(res[i][j])
            }
          }
          this.innovationPerso = innovation.length
        }
      })
  }

  /**
   * name
   */
  public detailCuma(firstname, lastname) {
    const array = []
    const operator = this.angularFireDatabase.database.ref().child('exploitants')
    const cuma = this.angularFireDatabase.database.ref().child('HistoricMarket')

    operator.on('child_added', snap => {
      const exploitantId = snap.val().exploitantId
      const exploitantFirstName = snap.val().exploitantFirstName
      const exploitantLastName = snap.val().exploitantLastName

      cuma.orderByChild('exploitantId').equalTo(exploitantId).on('value', snapshot => {
        snapshot.forEach((res: any) => {
          if (exploitantFirstName == firstname && exploitantLastName == lastname) {
            array.push({
              exploitantFirstName,
              exploitantLastName,
              ...res.val()
            })

            this.listHistoCuma = array
            console.log(this.listHistoCuma)

            var speedCanvas = document.getElementById("speedChart")

            for (let item of this.listHistoCuma) {
              var dataY: any = []
              var dataX: any = []
              dataY = item.historicQtyCUMA
              dataX = item.historicDate

              var dataFirst = {
                data: [dataY],
                fill: false,
                borderColor: '#fbc658',
                backgroundColor: 'transparent',
                pointBorderColor: '#fbc658',
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBorderWidth: 8,
              }

              var speedData = {
                labels: [dataX],
                datasets: [dataFirst]
              }

              var chartOptions = {
                legend: {
                  display: false,
                  position: 'top'
                }
              }

              var lineChart = new Chart(speedCanvas, {
                type: 'line',
                hover: false,
                data: speedData,
                options: chartOptions
              })
            }
          }
        })
      })
    })
  }

  /**
   * loadGraph
   */
  public loadGraphCuma() {
    let speedCanvas = document.getElementById("speedChart")

    for (let i = 0; i < this.listHistoCuma.length; i++) {
      let dataY: any = []
      let dataX: any = []
      dataY[i] = this.listHistoCuma[i].historicQtyCUMA
      dataX[i] = this.listHistoCuma[i].historicDate

      let dataFirst = {
        data: [dataY[i]],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      }

      let speedData = {
        labels: [dataX[i]],
        datasets: [dataFirst]
      }

      let chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      }

      let lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      })
    }


  }

  /**
   * closeModal
   */
  public closeModal() {
    this.modal.dismissAll()
    this.innovationPerso = this.innovationAppli = this.innovationAcquis = ''
  }

}
