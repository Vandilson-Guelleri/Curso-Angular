import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
    <h1>Aulas de diretiva de atributo</h1>
    <hr>
  </app-diretivas-atributos> -->
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;
  public addValue: number = 0;
  public add(){
    this.addValue += 1;
  }
  constructor() { }

  ngOnInit(): void { }

  
}
