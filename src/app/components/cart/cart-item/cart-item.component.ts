import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBookModel } from './../../../models/book.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() bookData: IBookModel;

  @Output() deleteProduct = new EventEmitter<number>();
  @Output() increaseProduct = new EventEmitter<number>();
  @Output() decreaseProduct = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  increase(id: number): void {
    this.increaseProduct.emit(id);
  }

  decrease(id: number): void {
    this.decreaseProduct.emit(id);
  }

  remove(id: number): void {
    this.deleteProduct.emit(id);
  }
}
