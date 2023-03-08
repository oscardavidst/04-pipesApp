import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Adnilec';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    other: 'invitarte',
  };
}
