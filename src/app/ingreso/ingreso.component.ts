import { Component, OnInit } from '@angular/core';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[IngresoService]
})
export class IngresoComponent implements OnInit {

  constructor(private ingresoService:IngresoService) { }

  ngOnInit() {
  }

}
