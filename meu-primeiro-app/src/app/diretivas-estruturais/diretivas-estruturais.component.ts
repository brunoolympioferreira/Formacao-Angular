import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Bruno Ferreira", idade: 35 },
    { nome: "Vivian Servelo", idade: 39 },
    { nome: "Vinicius Ferreira", idade: 3 },
    { nome: "Celia Maria", idade: 69 }
  ];

  public nome: string = 'vivian';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public OnClick() {
    if (this.condition) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public OnClickAddList() {
    this.list.push({ nome: "Bruno", idade: 31 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
