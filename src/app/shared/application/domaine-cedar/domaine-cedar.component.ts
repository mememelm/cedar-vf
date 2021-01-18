import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DomaineService } from 'app/services/domaine.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-domaine-cedar',
  templateUrl: './domaine-cedar.component.html',
  styleUrls: ['./domaine-cedar.component.css']
})
export class DomaineCedarComponent implements OnInit {

  public listDomaine: any
  public myDomaine: any

  @Input() public listFilter: any
  @Input() public length: any
  @Input() public title: any

  @Input() public dateBegin: any
  @Input() public dateEnd: any

  @Output() emitData: EventEmitter<any> = new EventEmitter()

  @Output() emitBegin: EventEmitter<any> = new EventEmitter()
  @Output() emitEnd: EventEmitter<any> = new EventEmitter()

  constructor(
    private domaineService: DomaineService
  ) { }

  ngOnInit(): void {
    this.domaineService.getDomaineList()
      .snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe((res: any) => {
        this.listDomaine = res
      })
  }

  /**
   * emitDataForDomaine
   */
  public emitDataForDomaine(param) {
    this.emitData.emit(param)
    this.myDomaine = param
  }

  public emitDataDate() {
    this.emitBegin.emit(this.dateBegin)
    this.emitEnd.emit(this.dateEnd)
  }

}
