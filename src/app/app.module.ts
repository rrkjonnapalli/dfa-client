import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEnvComponent } from './components/core/forms/create-env/create-env.component';
import { FormsModule } from '@angular/forms';
import { CreateServiceComponent } from './components/core/forms/create-service/create-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEnvComponent,
    CreateServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
