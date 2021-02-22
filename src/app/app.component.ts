import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Category, IBookModel } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'book-shop';

  @ViewChild('appTitle') componentTitle: ElementRef;

  data: IBookModel[] = [
    {
      id: 1,
      name: 'Some book1',
      description: 'Some description',
      price: 120,
      category: Category.Horror,
      createDate: 1613731619918,
      isAvailable: true,
      count: 5,
    },
    {
      id: 2,
      name: 'Some book2',
      description: 'Some description',
      price: 120,
      category: Category.Classics,
      createDate: 1613731619918,
      isAvailable: true,
      count: 1,
    },
    {
      id: 3,
      name: 'Some book3',
      description: 'Some description',
      price: 120,
      category: Category.Fiction,
      createDate: 1613731619918,
      isAvailable: false,
      count: 3,
    },
    {
      id: 4,
      name: 'Some book4',
      description: 'Some description',
      price: 120,
      category: Category.Fantasy,
      createDate: 1613731619918,
      isAvailable: true,
      count: 6,
    },
  ];

  cartData: IBookModel[] = [];

  ngAfterViewInit(): void {
    this.componentTitle.nativeElement.textContent = this.title;
  }

  saveToCart(book: IBookModel): void {
    this.data.map(el => {
      if (el.id === book.id) {
        if (el.count) {
          el.count--;
          if (el.count === 0) {
            el.isAvailable = false;
          }
        }
      }
    });

    if (!this.cartData.some(el => el.id === book.id)) {
      book.countInCart = 1;
      this.cartData.push(book);
    } else {
      this.cartData.map(el => {
        if (el.id === book.id) {
          if (el.countInCart) {
            el.countInCart++;
          }
        }
      });
    }
    const [...clone] = this.cartData;
    this.cartData = clone;
  }

  remove(id: number): void {
    const [...clone] = this.cartData.filter(el => el.id !== id);
    this.cartData = clone;
  }

  increase(id: number): void {
    this.data.map(el => {
      if (el.id === id) {
        if (el.count) {
          el.count--;
        }
      }
    });
    this.cartData.map(el => {
      if (el.id === id) {
        if (el.countInCart) {
          el.countInCart++;
        }
      }
    });
  }

  decrease(id: number): void {
    console.log(id);
  }
}
