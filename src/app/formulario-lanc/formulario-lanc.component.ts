import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-lanc',
  templateUrl: './formulario-lanc.component.html',
  styleUrls: ['./formulario-lanc.component.css']
})
export class FormularioLancComponent implements OnInit {

  nome: string;

  @Output() aoSalvar: EventEmitter<string> = new EventEmitter;

  @Input() nomeAExibir: string;

  constructor() { }

  salvar() {

    this.aoSalvar.emit(this.nome);
   }

  ngOnInit() {

  }

}
