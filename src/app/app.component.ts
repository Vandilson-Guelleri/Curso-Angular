import { Component, OnInit, DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;
  constructor(){}

  ngOnInit():void{}

}
