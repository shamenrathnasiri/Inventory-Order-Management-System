import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../..//core/services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(res => this.products = res);
  }

  handleSave(product: Product) {
    if (product._id) {
      this.productService.updateProduct(product._id, product).subscribe(() => this.loadProducts());
    } else {
      this.productService.addProduct(product).subscribe(() => this.loadProducts());
    }
    this.selectedProduct = null;
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
  }
}
