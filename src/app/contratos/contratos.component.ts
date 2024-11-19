import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service'; 

@Component({
  selector: 'app-contrato',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratoComponent implements OnInit {
  contratos: any[] = [];
  nuevoContrato: any = { 
    identificador: '',
    precio: null,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    this.cargarContratos(); 
  }


  cargarContratos(): void {
    this.contratoService.obtenerTodosLosContratos().subscribe((data: any[]) => {
      this.contratos = data;
    });
  }


  agregarContrato(): void {
    this.contratoService.insertarContrato(this.nuevoContrato).subscribe((data: any) => {
      this.cargarContratos();  
      this.nuevoContrato = { 
        identificador: '',
        precio: null,
        nombreContratante: '',
        documentoContratante: '',
        nombreContratantista: '',
        documentoContratantista: '',
        fechaInicial: '',
        fechaFinal: ''
      };
    });
  }
}
