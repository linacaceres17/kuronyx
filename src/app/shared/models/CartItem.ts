import { clothes } from "./clothes";

export class CartItem{
    constructor(clothes:clothes){
        this.clothes = clothes;
        
    }
    clothes:clothes;
    quantity:number =1;

    get price():number{
        return this.clothes.price * this.quantity;
    }

}