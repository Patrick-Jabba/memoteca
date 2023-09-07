import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  // property binding
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  // event binding
  criarPensamento(event: Event): void {
    event?.preventDefault();
    alert('Novo pensamento criado!');
  }

  cancelar(event: Event): void {
    event?.preventDefault();
    alert('Pensamento cancelado.')
  }

  constructor() {}

  ngOnInit(): void {}
}
