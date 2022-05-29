import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Add } from 'src/app/action/actional-model';
import { CartModel } from 'src/app/model/card-model';
import { Contacto } from 'src/app/model/contacto';
import { ProductModel } from 'src/app/model/prodcut-model';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListarComponent implements OnInit {

  oForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<CartModel>
  ) { }

  ngOnInit(): void {}

  async Add(product: ProductModel) {
    return this.store.dispatch(Add(product));
  }

  onSubmit() {
    const params: ProductModel = {
      category: 'producto',
      description: 'this is product to shop',
      images: [""],
      price: 120,
      title: 'Arroz',
      _id: 1
    }
    this.Add(params);
  }
}




