import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithoutStyleComponent } from './without-style/without-style.component';
import { WithoutHtmlComponent } from './without-html/without-html.component';
import { WithouStyleAndComponentComponent } from './withou-style-and-component/withou-style-and-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutStyleComponent,
    WithoutHtmlComponent,
    WithouStyleAndComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
