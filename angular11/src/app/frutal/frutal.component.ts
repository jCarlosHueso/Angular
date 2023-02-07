import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent {
  @Input() mensajeEntradaFrutal:String='';
  @Output() mensajeSalidaFrutal=new EventEmitter();
textoParaPadre:String='';
enviarMensaje(){
  this.mensajeSalidaFrutal.emit({mensaje:this.textoParaPadre})
}

}
