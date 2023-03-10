import { Component, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario reactivo (no reacciona)';
  public datosPersonalesFG!: FormGroup ;
  ngOnInit():void{
    this.datosPersonalesFG = new FormGroup({

      nombre:new FormControl('',[Validators.required,Validators.minLength(3),Validators.minLength(10)]),
      apellido:new FormControl('',[Validators.required,Validators.minLength(10),Validators.minLength(20)]),
      mail:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.minLength(16)]),

    })

  }
  public ControlarErrorres(NombreControl: string, NombreError: string) {
    return this.datosPersonalesFG.controls[NombreControl].hasError(NombreError);
 }

  Enviar(){

 }

}
