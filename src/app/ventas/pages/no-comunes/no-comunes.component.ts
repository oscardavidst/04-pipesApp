import { Component } from '@angular/core';

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
  clientes: string[] = ['Maria', 'Oscar'];
  clientesMapa = {
    '=0': 'no tenemos nigún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };
}
