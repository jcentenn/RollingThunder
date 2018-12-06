import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , HttpClientModule
    , MenuModule
    , MenubarModule
    , ButtonModule
    , CodeHighlighterModule
  ],
  providers: [AppService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

