import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';


@Injectable({ providedIn: 'root' })

export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor( private http: HttpClient) { }

  get filtre(){  //! Passo d'utilitzar-lo. incomprensible... pero em va més lent?!
    return new HttpParams().set('fields','name;capital;flag;population;area;alpha2Code;region')
  }


  //? ====================  PAIS ========================>
  cercaPais( terme:string ):Observable<PaisInterface[]> {
    const url = `${ this.apiUrl}/name/${ terme }`

    return this.http.get<PaisInterface[]>( url )
  }


  //? ====================  CAPITAL ========================>
  cercaCapital( terme:string ):Observable<PaisInterface[]> {
    const url = `${ this.apiUrl}/capital/${ terme }`

    return this.http.get<PaisInterface[]>( url )
  }


  //? ====================  VEURE PAIS ========================>
  getPaisPerAlpha( terme:string ):Observable<PaisInterface> {
    const url = `${ this.apiUrl}/alpha/${ terme }`

    return this.http.get<PaisInterface>( url )
  }


  //? ====================  CONTINENTS ========================>

  //  ?fields=name;capital;flag;population;area;alpha2Code
  getContinents( continent:string ):Observable<PaisInterface[]> {
    const url = `${ this.apiUrl}/region/${ continent }`
    console.log (url)
    return this.http.get<PaisInterface[]>( url )
  }
}
