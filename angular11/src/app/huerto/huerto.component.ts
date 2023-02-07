import { Component } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css']
})
export class HuertoComponent {

  mostrarMensajeHortaliza:string="";
  mostrarMensajeFrutal:String='';
mensajeParaHortaliza:string='';
mensajeParaFrutal: String='';

actualizarMensajedehortaliza(event: any) {

this.mostrarMensajeHortaliza=event.mensaje;

  }

  actualizarMensajedeFrutal(event: any) {
this.mostrarMensajeFrutal=event.mensaje;
    }
}
