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
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

  ngOnInit(): void { }
}
