import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getDiscountedClasses(product: IProduct) {
    if (product.discount !== 0) {
      return 'strikethrough';
    } else {
      return '';
    }
  }

  buyBtnClicked(product: IProduct) {
    this.buy.emit();
  }
}
