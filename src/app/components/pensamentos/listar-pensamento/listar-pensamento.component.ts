import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Patrick',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas modi culpa illum suscipit, rerum voluptatum nobis autem iste eius incidunt, accusantium a eligendi perferendis perspiciatis veniam expedita ipsum et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas modi culpa illum suscipit, rerum voluptatum nobis autem iste eius incidunt, accusantium a eligendi perferendis perspiciatis veniam expedita ipsum et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas modi culpa illum suscipit, rerum voluptatum nobis autem iste eius incidunt, accusantium a eligendi perferendis perspiciatis veniam expedita ipsum et.',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
