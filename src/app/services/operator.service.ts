import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Operator } from "../constant/operator";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  /**
   * getExploitant
   */
  public getOperator(): AngularFireList<Operator> {
    return this.angularFireDatabase
      .list<Operator>('exploitants', ref => ref.orderByChild('exploitantDate'))
  }

  /**
   * getOperatorById
   */
  public getOperatorOnChange(param) {
    return this.angularFireDatabase
      .list('exploitants').snapshotChanges().pipe(
        map((data: any[]) => data.map(res => {
          if (param !== 'tous') {
            if (res.payload.val().exploitantCedar === param) {
              const payload = res.payload.val()
              const key = res.key
              return <any>{ key, ...payload }
            }
          } else {
            const payload = res.payload.val()
            const key = res.key
            return <any>{ key, ...payload }
          }
        }))
      )
  }
}
