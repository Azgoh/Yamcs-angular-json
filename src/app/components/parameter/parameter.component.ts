import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ParameterInfo } from 'ParameterInteface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  parameters: any = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

  }


  async getParams(){
    this.parameters = await lastValueFrom(this.service.getParameters());
  }

}
