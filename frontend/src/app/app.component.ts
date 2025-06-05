import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './core/services/product.service';
import { ProductFormComponent } from './features/products/product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
