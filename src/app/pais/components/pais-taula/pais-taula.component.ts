import { Component, Input } from '@angular/core';

import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-taula',
  templateUrl: './pais-taula.component.html',

})
export class PaisTaulaComponent {

  constructor() { }

  @Input() paisos: PaisInterface[] = []
  @Input() hihaError: Boolean = false
  

  

}
