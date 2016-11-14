import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes.component';

const routes: Routes = [
  { path: 'a2', redirectTo: '/a2/heroes', pathMatch: 'full' },
  { path: 'a2/heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
