import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChatComponent } from './chat/chat.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent }
    , { path: 'rules', component: RulesComponent }
    , { path: 'chat', component: ChatComponent }
    , { path: 'login', component: LandingPageComponent }
    , { path: 'auth', component: AuthComponent }
];

@NgModule( {
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                onSameUrlNavigation: 'reload',
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
} )

export class AppRoutingModule { }

