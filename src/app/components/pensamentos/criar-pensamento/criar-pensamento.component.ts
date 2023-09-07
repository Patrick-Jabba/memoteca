import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  // property binding
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private service: PensamentoService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  // event binding
  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelar(event: Event): void {
    event?.preventDefault();
    alert('Pensamento cancelado.')
  }
}
