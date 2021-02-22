import { ChangeDetectionStrategy, Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IBookModel } from './../../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() increaseProduct = new EventEmitter<number>();
  @Output() decreaseProduct = new EventEmitter<number>();

  @Input() cartData: IBookModel[];

  constructor() {}

  ngOnInit(): void {}

  remove(id: number): void {
    this.deleteProduct.emit(id);
  }

  increase(id: number): void {
    this.increaseProduct.emit(id);
  }

  decrease(id: number): void {
    this.decreaseProduct.emit(id);
  }
}
