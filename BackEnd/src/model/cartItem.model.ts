
class CartItemModel {
  id: string;
  user_id: string;
  product_id: string;
  quantity: string;

  constructor(id: string, user_id: string, product_id: string, quantity: string) {
    this.id = id;
    this.user_id = user_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }
}


export default CartItemModel;