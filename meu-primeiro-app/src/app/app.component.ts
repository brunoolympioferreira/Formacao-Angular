import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-data-binding></app-data-binding> -->
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-diretivas-atributos>
  <h1>Aulas de Diretivas Atributo</h1>
  <hr>
  <h3>Final da Aula</h3>
  </app-diretivas-atributos> -->
  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
  <!-- <app-new-component></app-new-component> -->

  <!-- <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button> -->

  <!-- <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output> -->

  <!-- <app-food-add></app-food-add>
  <app-food-list></app-food-list> -->
  <app-forms></app-forms>


  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public valor: number = 1;
  public destruir: boolean = true;

  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() { }

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }
}
