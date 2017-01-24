import './rxjs-extensions';

import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule } 	       from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }        from './app.component';
import { HeroComponent }       from './hero.component';
import { HeroesComponent }     from './heroes.component';
import { HeroModalComponent }  from './hero-modal.component';

import { HolderJsComponent }   from './holderjs.component';

import { HeroService }         from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroModalComponent,
    HolderJsComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
