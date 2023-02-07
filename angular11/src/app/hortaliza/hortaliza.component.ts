import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {

  @Input()
  mensajeDeEntradaHortaliza: string='';
  @Output()
  mensajeSalidaParaPadre=new EventEmitter();
textoParaPadre:string="";

enviarMensaje() {

this.mensajeSalidaParaPadre.emit({mensaje:this.textoParaPadre})

  }
}
