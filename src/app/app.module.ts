import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AppsComponent } from './apps/apps.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AppDetailsComponent } from './app-details/app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    AppsComponent,
    UnderConstructionComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
