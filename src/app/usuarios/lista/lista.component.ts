import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( users => {
      this.usuarios = users;
      
    });
  }

}
