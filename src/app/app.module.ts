import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducer/cart-reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      cart: cartReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
