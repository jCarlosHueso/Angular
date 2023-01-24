import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
cargarNombre(us: string) {
this.user=us;

}

cambiarNombreOriginal() {
  this.ciclo='DAM'
}
cambiarNombre() {
this.ciclo='Desarrollo de Aplicaciones Multiplataformas'
}
  nombre:string = 'Ralph';
  ciclo:string='DAM';
  user:string='';
  nombres:string='';
  numeroRandom:number=Math.random()*100;
}
