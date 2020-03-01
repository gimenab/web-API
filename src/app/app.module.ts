import { CompaniesComponent } from './components/companies/companies.component';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompanyComponent } from './components/company/company.component';
import { AbmGridComponent } from './components/abm-grid/abm-grid.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './components/product/product.component';


import { FormsModule } from '@angular/Forms';
import {HttpClientModule} from '@angular/common/http';
import { NotImagePipe } from './pipe/not-image.pipe';
import { Card2Component } from './components/card2/card2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ABMCurrencyComponent } from './components/abmcurrency/abmcurrency.component';
import { ABMCategoriesComponent } from './components/abmcategories/abmcategories.component';
import { ABMCompaniesComponent } from './components/abmcompanies/abmcompanies.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    ProductsComponent,
    NotFoundComponent,
    CompanyComponent,
    AbmGridComponent,
    HomeAdminComponent,
    ContactFormComponent,
    CardComponent, ProductComponent,
    CompaniesComponent,
    NavbarComponent,
     NotImagePipe,
    Card2Component,
    CarouselComponent,
    ABMCurrencyComponent,
    ABMCategoriesComponent,
    ABMCompaniesComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
