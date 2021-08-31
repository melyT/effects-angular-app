import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    
    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.error = error;
      this.loading = loading;
    });

    this.store.dispatch( cargarUsuarios()) ;
  }

}
