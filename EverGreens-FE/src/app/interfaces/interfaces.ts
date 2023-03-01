

export interface Users{
    id: number
  name: string
  email: string
  password: string
  is_admin:string
  created_at:string
}

export interface AddProducts{
    
    name:string
    description:string
    image:string
    price:string
    category: string
    
}

// export interface Product{
//     id:number
//     name:string
//     description:string
//     image:string
//     price:string
//     category:string
// }

export interface Cart {
    id:number
    product: string
    productId:number
    userName: string
    quantity: number
    price:number
}

export interface Message{
    message: string
}

