import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from "./rules/rules.component";

const appRoutes: Routes = [
  { path: 'rules',  component: RulesComponent }
];

@NgModule({
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
})

export class AppRoutingModule { }

