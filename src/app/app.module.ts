import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { DataService } from './service/data.service';

const appRoutes: Routes = [

  { path: "landing", component: LandingComponent },

  {
    path: "",
    redirectTo: "/landing",
    pathMatch: "full"
  },

  { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    PageNotFoundComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
