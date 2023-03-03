import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro campos requeridos';

  ngOnInit():void{

    this.datosPersonalesFG=new FormGroup({
nombre:new FormControl('',[Validators.required,Validators.minLength(3),Validators.minLength(10)]),
apellido:new FormControl('',[Validators.required,Validators.minLength(10),Validators.minLength(20)]),
mail:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.minLength(16)]),
    })

    }

ControlarErrorres(controlName: string,errorName: string): any {

  return this.datosPersonalesFG.controls[controlName].hasError(errorName);


}


Enviar() {
  // en principio no hace nada xD
}



datosPersonalesFG!: FormGroup;
}
