import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  { path: 'products', component: ProductListComponent },
  {path: 'about', component:AboutComponent}
  // Add other routes as needed
];
