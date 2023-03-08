import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Adnilec';
  genero: string = 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    other: 'invitarte',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Oscar', 'David', 'Adnilec'];
  clientesMapa = {
    '=0': 'no tenemos nigún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  cambiarCliente() {
    if (this.genero === 'masculino') {
      this.nombre = 'Adnilec';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Oscar';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Oscar Soto',
    edad: 27,
    direccion: 'Bogotá, Cll 6D # 80B-89',
    altura: '165cm',
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'AquaMan',
      vuela: false,
    },
  ];

  //AsyncPipe
  miObservable = interval(3000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
