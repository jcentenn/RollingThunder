import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from "./rules/rules.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent }
    , { path: 'rules', component: RulesComponent }
    , { path: 'chat', component: ChatComponent }
];

@NgModule( {
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
} )

export class AppRoutingModule { }

