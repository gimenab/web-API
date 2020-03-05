import { SearchComponent } from './components/search/search.component';
import { ABMProductsComponent } from './components/abmproducts/abmproducts.component';
import { ABMCurrencyComponent } from './components/abmcurrency/abmcurrency.component';
import { ABMCategoriesComponent } from './components/abmcategories/abmcategories.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ABMCompaniesComponent } from './components/abmcompanies/abmcompanies.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'companies',component:CompaniesComponent},
  {path:'products',component:ProductsComponent},
  {path:'admin',component:HomeAdminComponent},
  {path:'abmCompanies',component:ABMCompaniesComponent},
  // {path:'abmCategories',component:ABMCategoriesComponent},
  {path:'abmCurrencies',component:ABMCurrencyComponent},
  {path:'abmProducts',component:ABMProductsComponent},
  {path:'search/:search',component:SearchComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
