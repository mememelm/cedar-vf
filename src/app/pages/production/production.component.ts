import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  public navigation: any

  constructor() { }

  ngOnInit(): void {
    this.navigation = 'menu'
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
}
