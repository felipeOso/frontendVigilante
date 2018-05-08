import { IngresoComponent } from './ingreso/ingreso.component';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from "@angular/core";


const routes: Routes =[
    {path : '', redirectTo:'/ingresoComponent', pathMatch:'full'},
    {path:'appComponent', component: AppComponent},
    {path:'ingresoComponent', component: IngresoComponent},
    
];
@NgModule
    (
    {

        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        

    }
    )
export class AppRoutingModule{ }

