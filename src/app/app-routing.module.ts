import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerPaisComponent } from './pais/pages/per-pais/per-pais.component';
import { PerRegioComponent } from './pais/pages/per-regio/per-regio.component';
import { PerCapitalComponent } from './pais/pages/per-capital/per-capital.component';
import { VeurePaisComponent } from './pais/pages/veure-pais/veure-pais.component';
import { SobreWebComponent } from './pais/pages/sobre-web/sobre-web.component';


const routes: Routes = [

    {
        path:'',
        component: PerPaisComponent,
        pathMatch: 'full'
    },
    {
        path:'regio',
        component: PerRegioComponent
    },
    {
        path:'capital',
        component: PerCapitalComponent
    },
    {
        path:'pais/:id',
        component: VeurePaisComponent
    },
    {
        path:'sobre',
        component: SobreWebComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
    

]

@NgModule({

    imports:[
        RouterModule.forRoot (routes)


    ],

    exports: [
        RouterModule

    ]

})
export class AppRoutingModule {

}