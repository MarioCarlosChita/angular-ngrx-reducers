import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
