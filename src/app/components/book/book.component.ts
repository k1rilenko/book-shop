import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBookModel } from './../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Input() bookData: IBookModel;
  @Output() addtoCart = new EventEmitter<IBookModel>();

  constructor() {}

  ngOnInit(): void {}

  onBuy(): void {
    this.addtoCart.emit(this.bookData);
  }
}
