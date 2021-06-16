import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [`
    li { cursor: pointer}
  `
  ]
})
export class PerCapitalComponent {

  
  terme    : string = ''
  hihaError: boolean = false
  paisos   : PaisInterface[] = []
 
  
  constructor( private paisService: PaisService) { }
  
  cercar(terme:string){
    
    this.hihaError = false
    this.terme = terme
    
    this.paisService.cercaCapital( this.terme )
    .subscribe((paisos) => {
      this.paisos = paisos

    }, (err) =>{
      this.hihaError = true
      this.paisos    = []
    } )
    
  }
  sugerencies(terme:string){
    this.hihaError = false
   
    //TODO Falta implementar
  }
}
