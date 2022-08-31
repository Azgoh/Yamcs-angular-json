import { Component, OnInit, Input } from '@angular/core';
import { ListParametersResponse, ParameterInfo } from 'ParameterInteface';

@Component({
  selector: 'app-parameter-item',
  templateUrl: './parameter-item.component.html',
  styleUrls: ['./parameter-item.component.css'],
})
export class ParameterItemComponent implements OnInit {
  @Input() parameter!: ParameterInfo;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.parameter.type);
  }
}
