import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-veure-pais',
  templateUrl: './veure-pais.component.html',

})
export class VeurePaisComponent implements OnInit {

  pais!: PaisInterface
    
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService   : PaisService
    
    ) { }
  
  ngOnInit(): void {
    
    this.activatedRoute.params
        .pipe( switchMap( ( parametre ) => this.paisService.getPaisPerAlpha ( parametre.id ) ) )
        .subscribe( pais => this.pais = pais )
    
    
  }

}
