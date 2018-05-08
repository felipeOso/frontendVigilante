import { IngresoModel } from './../model/ingreso.model';
import { Component, OnInit } from '@angular/core';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[IngresoService]
})
export class IngresoComponent implements OnInit {
private ingresos: Array<IngresoModel>
  constructor(private ingresoService:IngresoService) { }

  ngOnInit() {
    this.loadIngresos();
  }

  private loadIngresos():void {
    this.ingresoService.getIngresos();
  }

}
