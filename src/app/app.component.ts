import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from './model/card-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  cart$: Observable<CartModel>;

  constructor(private  store:Store<{cart: CartModel}>) {
    this.cart$ = store.pipe(select("cart"));
  }

  ngOnInit(): void {}

}
