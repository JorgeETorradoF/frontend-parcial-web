import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service';  // Importa el servicio correcto

@Component({
  selector: 'app-contrato',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratoComponent implements OnInit {
  contratos: any[] = [];
  nuevoContrato: any = { nombre: '', descripcion: '' };  // Suponiendo que los contratos tienen estos campos

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    this.cargarContratos();  // Cargar contratos al inicio
  }

  // Cargar todos los contratos desde el backend
  cargarContratos(): void {
    this.contratoService.obtenerTodosLosContratos().subscribe((data: any[]) => {
      this.contratos = data;
    });
  }

  // Insertar un nuevo contrato en la base de datos
  agregarContrato(): void {
    this.contratoService.insertarContrato(this.nuevoContrato).subscribe((data: any) => {
      this.cargarContratos();  // Recargar los contratos
      this.nuevoContrato = { nombre: '', descripcion: '' };  // Limpiar el formulario
    });
  }
}
