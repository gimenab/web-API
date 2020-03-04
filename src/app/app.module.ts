import { CategoryService } from './services/category.service';
import { CurrencyService } from './services/currency.service';
import { CompanyService } from './services/company.service';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';


import { FormsModule } from '@angular/Forms';
import {HttpClientModule} from '@angular/common/http';
import { NotImagePipe } from './pipe/not-image.pipe';
import { Card2Component } from './components/card2/card2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ABMCurrencyComponent } from './components/abmcurrency/abmcurrency.component';
import { ABMCategoriesComponent } from './components/abmcategories/abmcategories.component';
import { ABMCompaniesComponent } from './components/abmcompanies/abmcompanies.component';
import { ABMProductsComponent } from './components/abmproducts/abmproducts.component';
import { FooterComponent } from './components/footer/footer.component';
import { Card3Component } from './components/card3/card3.component';
import { PhoneDirective } from './directives/phone.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProductsComponent,
    NotFoundComponent,
    HomeAdminComponent,
    ContactFormComponent,
    CardComponent,
    CompaniesComponent,
    NavbarComponent,
     NotImagePipe,
    Card2Component,
    CarouselComponent,
    ABMCurrencyComponent,
    ABMCategoriesComponent,
    ABMCompaniesComponent,
    ABMProductsComponent,
    FooterComponent,
    ProductsComponent,
    Card3Component,
    PhoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CompanyService,
    CurrencyService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
