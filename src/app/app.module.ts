import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarClientComponent } from './components/navbar-client/navbar-client.component';
import { FormComponent } from './components/form/form.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompanyComponent } from './components/company/company.component';
import { AbmGridComponent } from './components/abm-grid/abm-grid.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarClientComponent,
    FormComponent,
    NavbarAdminComponent,
    SearchComponent,
    ProductsComponent,
    NotFoundComponent,
    CompanyComponent,
    AbmGridComponent,
    HomeAdminComponent,
    ContactFormComponent,
    CardComponent
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
