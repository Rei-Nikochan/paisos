import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerPaisComponent } from './pages/per-pais/per-pais.component';
import { PerRegioComponent } from './pages/per-regio/per-regio.component';
import { VeurePaisComponent } from './pages/veure-pais/veure-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTaulaComponent } from './components/pais-taula/pais-taula.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { SobreWebComponent } from './pages/sobre-web/sobre-web.component';




@NgModule({
  declarations: [
    PerCapitalComponent,
    PerPaisComponent,
    PerRegioComponent,
    VeurePaisComponent,
    PaisTaulaComponent,
    PaisInputComponent,
    SobreWebComponent
  ],
  exports:[
    PerCapitalComponent,
    PerPaisComponent,
    PerRegioComponent,
    VeurePaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
  ]
})
export class PaisModule { }
