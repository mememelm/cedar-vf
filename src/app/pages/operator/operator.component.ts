import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { OperatorService } from 'app/services/operator.service';
import { DatatableLanguage } from "../../constant/french";
import { map } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from "rxjs";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private operatorService: OperatorService,
    private spinner: NgxSpinnerService,
    private modal: NgbModal
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

    await <any>this.modal.open(this.operatorDetail, { size: 'lg', backdrop: 'static' })
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
   * closeModal
   */
  public closeModal() {
    this.modal.dismissAll()
  }

}
