import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../modelos/usuario";
import { UsuarioService } from "../../servicios/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UsuarioService ]
})
export class LoginComponent implements OnInit {
  public titulo : string;
  public user : Usuario;
  public status : string;
  
  constructor(private _userService: UsuarioService) {     
    this.user = new Usuario('','','Admin');
  }

  onSubmit(form){
    console.log(this.user);
    this._userService.acceder(this.user).subscribe(
      response=>{
        if(response.user){

          this.status ="ok";
        }
        else{
          this.status ="error";
        }
      },
      error=>{
        this.status ="error";
      }
    );
  }

  ngOnInit() {
    this.titulo = 'IDENTIFICATE ES UN TEST';
  }

}
