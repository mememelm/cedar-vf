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
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('operatorDetail') operatorDetail: any
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  public dtOptions: DataTables.Settings = {}
  public dtTiggers: Subject<any> = new Subject()
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

  public dateBegin: Date
  public dateEnd: Date

  constructor(
    private operatorService: OperatorService,
    private spinner: NgxSpinnerService,
    private modal: NgbModal,
    private formationService: FormationService,
    private innovationService: InnovationService,
    private angularFireDatabase: AngularFireDatabase,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.spinner.show()

    this.dtOptions = {
      language: DatatableLanguage.datatableFrench,
      destroy: true,
      order: [[2, 'DESC']],
      responsive: true
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
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy()
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
  }

  /**
   * getOperatorFIlter
   */
  public filterCedar(param: any): void {
    let operator = []
    this.operatorService.getOperatorOnChange(param)
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined) {
            operator.push(res[i])  
            const table = $('#datatable').DataTable()
            table.destroy()                 
            this.listOperator = operator
            this.dtTiggers.next() 
          }
        }
      })
  }

  /**
   * getOperatorFIlter
   */
  public periodeFilter(param) {
    const operator = []
    this.operatorService.periodFilterOperator(param, this.dateBegin, this.dateEnd)
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i] !== undefined)
            operator.push(res[i])
        }
      })
    this.listOperator = operator
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
          }
        })
      })
    })
  }

  /**
   * closeModal
   */
  public closeModal() {
    this.modal.dismissAll()
    this.innovationPerso = this.innovationAppli = this.innovationAcquis = ''
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
    this.listOperator.map(data => {
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
