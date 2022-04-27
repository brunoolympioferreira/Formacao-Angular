import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComida: Array<{ comida: string, preco: string }> = [
    { comida: "X-Salada", preco: "R$10,00" },
    { comida: "X-Bacon", preco: "R$11,00" },
    { comida: "Coxinha", preco: "R$12,00" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    console.log(form.value)
  }
}
