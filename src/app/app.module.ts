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
import { ResponsiveMenuDirective } from './responsive-menu.directive';
import { AppRoutingModule } from "./app-routing.module";
import { Router } from "@angular/router";
import { RulesComponent } from "./rules/rules.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveMenuDirective,
    RulesComponent,
    LandingPageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , HttpClientModule
    , MenuModule
    , MenubarModule
    , ButtonModule
    , CodeHighlighterModule
    , AppRoutingModule
  ],
  providers: [AppService, ChatService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        
    }
    
}

