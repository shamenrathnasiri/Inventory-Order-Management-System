
import { Routes } from '@angular/router';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';


export const routes: Routes = [
  { path: 'products', component: ProductFormComponent },
  { path: 'productlist', component: ProductListComponent },

];

