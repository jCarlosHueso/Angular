import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component {
  title = 'angular8';
  e_y=138.39;
  e_d=1.08;
  y_e=0.0072;
  y_d=0.0078;
  d_y=128.16;
  d_e=0.93;
  euro: number=0;
  dolar:number=0;
  yen:number=0;
  actualizaDolares() {
    this.euro=Number((this.dolar*this.d_e).toFixed(3));
    this.yen=Number((this.dolar*this.d_y).toFixed(3));

  }
  actualizaEuros() {
    this.yen=Number((this.euro*this.e_y).toFixed(3));
    this.dolar=Number((this.euro*this.e_d).toFixed(3));
  }

    limpia() {
      this.yen=0;
      this.euro=0;
      this.dolar=0;
    }
    actualizaYenes() {
     this.euro=Number((this.yen*this.y_e).toFixed(3));
     this.dolar=Number((this.yen*this.y_d).toFixed(3));
    }
}
