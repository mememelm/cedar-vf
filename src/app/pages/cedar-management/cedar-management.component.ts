import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomaineService } from 'app/services/domaine.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cedar-management',
  templateUrl: './cedar-management.component.html',
  styleUrls: ['./cedar-management.component.css']
})
export class CedarManagementComponent implements OnInit {

  @ViewChild('actionCedar') actionCedar: any

  public domaineFormGroup: FormGroup
  public listDomaine: any

  constructor(
    private domaineService: DomaineService,
    private formBuilder: FormBuilder,
    private modal: NgbModal,
    private alert: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadDomaineList()
    this.domaineService.getDomaineList()
    this.domaineForm()
  }

  public get domaineName() {
    return this.domaineFormGroup.get('domaineName').value
  }

  public domaineForm() {
    this.domaineFormGroup = this.formBuilder.group({
      domaineName: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  public resetForm() {
    return this.domaineFormGroup.reset()
  }

  public addDomaine() {
    if(this.domaineFormGroup.value.domaineName == '') {
      this.alert.warning('Veuillez décrire le CEDAR')
    } else {
      this.domaineService.createDomaine(this.domaineFormGroup.value)
      this.alert.success('Insertion de ' + `${this.domaineFormGroup.value.domaineName}` + ' réussie')
      this.closeModal()      
    }    
  }

  public loadDomaineList() {
    this.domaineService.getDomaineList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(res => {
      this.listDomaine = res
    })
  }

  /**
   * openModal
   */
  public openModal(modal) {
    this.modal.open(modal)
  }

  /**
   * closeModal
   */
  public closeModal() {
    this.modal.dismissAll()
    this.resetForm()
  }

}
