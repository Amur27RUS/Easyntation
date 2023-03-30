import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";
import {TuiInputFilesModule, TuiTextAreaModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiTextAreaModule,
    TuiInputFilesModule,
    TuiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
