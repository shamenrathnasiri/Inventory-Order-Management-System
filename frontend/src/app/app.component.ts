import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './core/services/product.service';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductListComponent } from "./features/products/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
