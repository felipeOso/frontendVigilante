import { IngresoModel } from './../model/ingreso.model';
import { Injectable } from '@angular/core';
import {} from '@angular'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private ingresos:Array<IngresoModel>
  constructor(private http: HttpClient ) { }
  public getIngresos():Array<IngresoModel>{
    this.http.get('http://localhost:8080/getIngresos').subscribe(res =>{
    this.ingresos = res as IngresoModel[];
    console.log(this.ingresos);
    });
    return this.ingresos
  }
}
