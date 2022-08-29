import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParameterComponent } from './components/parameter/parameter.component';
import { ParameterItemComponent } from './components/parameter-item/parameter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ParameterItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
