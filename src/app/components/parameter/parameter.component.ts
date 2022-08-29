import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ParameterInfo } from 'ParameterInteface';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  parameters: ParameterInfo[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getParameters().subscribe((parameters) => (this.parameters = parameters));
  }

}
