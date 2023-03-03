import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'oscar';
  nombreUpper: string = 'OSCAR';
  nombreCompleto: string = 'osCaR';

  fecha: Date = new Date();
}
