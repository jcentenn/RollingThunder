import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from "./rules/rules.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent }
    , { path: 'rules', component: RulesComponent }
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

