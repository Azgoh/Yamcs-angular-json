import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ParameterInfo } from 'ParameterInteface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css'],
})
export class ParameterComponent implements OnInit {
  parameters: any = [];
  parameterInfo: ParameterInfo[] = [];

  constructor(private service: ServiceService) {}

  //you make the request on initialise in order to make the connect when you open the component

  ngOnInit(): void {
    this.service.getParameters().subscribe((data) => {
      this.parameterInfo = [...this.parameterInfo, ...data.parameters]; // you add the data.paramters inside the paramterinfo array
      console.log(data.parameters);
    });
    console.log('these are the parameter info' + this.parameterInfo); //if you see the console it seems that this is empty
    /* this is due to the way angular does the commands
        when you make the request you have to wait in order for it to load the data. But in the meantime angular console.logs the parameter info 
        this is why we have to implement async await as best practise but this is out of the scope of this tutorial  */
  }

  // in order for this to work you need to work with promises
  async getParams() {
    this.parameters = await lastValueFrom(this.service.getParameters());
  }
}
