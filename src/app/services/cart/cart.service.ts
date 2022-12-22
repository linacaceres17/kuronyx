import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { clothes } from 'src/app/shared/models/clothes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart= new Cart();
 
  addToCard(clothes:clothes):void{
    let cartItem = this.cart.items.find(item => item.clothes.id === clothes.id);
    if(cartItem){
      this.changeQuantity(clothes.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(clothes));
  }

  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.clothes.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.clothes.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}