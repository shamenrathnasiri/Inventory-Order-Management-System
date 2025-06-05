import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<Product>();

  productData: Product = {
    name: '',
    category: '',
    quantity: 0,
    price: 0
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.productData = { ...this.product };
    }
  }

  submitForm() {
    this.save.emit(this.productData);
    this.productData = { name: '', category: '', quantity: 0, price: 0 };
  }
}
