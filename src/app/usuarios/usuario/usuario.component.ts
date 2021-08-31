import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import * as usuarioActions from '../../store/actions/index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading = false;
  error: any;
  
  constructor( private activatedRouter: ActivatedRoute,
              private store: Store<AppState> ) { }


  ngOnInit(): void {
   
    this.store.select('usuario').subscribe( ({ user, loading, error }) => {
        this.loading = loading;
        this.usuario = user;
        this.error = error;        
    });

    this.activatedRouter.params.subscribe( ({ id }) => {
        this.store.dispatch( usuarioActions.cargarUsuario({ id }) );
    });

  }

}
