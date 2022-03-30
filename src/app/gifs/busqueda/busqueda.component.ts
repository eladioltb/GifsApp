import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  /*
   * ViewChild() == document.querySelector()
   * lo que pasa es que su uso es mas sencillo y puedes definirle mas datos.
   * tambien nos permite interactuar con todos sus valores.
  */
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ){

  }

  buscar(){

   const valor =  this.txtBuscar.nativeElement.value;

   this.gifsService.buscarGifs( valor );

   this.txtBuscar.nativeElement.value = "";

  }

}
