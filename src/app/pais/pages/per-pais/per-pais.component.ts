import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-per-pais',
  templateUrl: './per-pais.component.html',
  styles: [ ` li { cursor: pointer} ` ]

})
export class PerPaisComponent {

  terme    : string = ''
  hihaError: boolean = false
  paisos   : PaisInterface[] = []

  paisosSugerits: PaisInterface[] = []

  constructor( private paisService: PaisService) { }

  cercar(terme:string){
    this.hihaError = false
    this.terme = terme
    
    this.paisService.cercaPais( this.terme )
    .subscribe((paisos) => {

      this.paisos = paisos
  
    }, (err) =>{
      this.hihaError = true
      this.paisos    = []
    } )
    
  }
  sugerencies(terme:string){
    this.hihaError = false
   
    this.paisService.cercaPais(terme)
    .subscribe(
      paisos => this.paisosSugerits = paisos.splice(0,5),
      (err)  => this.paisosSugerits = []
    )
  }

}
