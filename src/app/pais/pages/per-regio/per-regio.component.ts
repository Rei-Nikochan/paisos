import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-per-regio',
  templateUrl: './per-regio.component.html',
  styles: [` button { margin-right: 8px } `]
})
export class PerRegioComponent {

  continents     : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  continentActiu : string = ''
  continent      : string = ''
  paisos         : PaisInterface[] = []
  
  constructor( private paisService: PaisService) { }

  activarContinent(continent:string){
    
    if ( continent === this.continentActiu) { return }

    this.continentActiu = continent
    this.paisos = []
  


    this.paisService.getContinents(continent)
    .subscribe( paisos => this.paisos = paisos )

    console.log(continent)
    
    //TODO: Cridar al servei

  }

  getClasseCss(continent:string):string{
    return (continent === this.continentActiu) 
            ? 'btn btn-primary'
            : 'btn btn-outline-primary' 
  }

}
