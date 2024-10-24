import React from 'react'
import Products from '../Products/Products'

const ShoppingList = () => {
  const products = [
    {
      name: 'Burger',
      imgUrl: 'https://tse2.mm.bing.net/th?id=OIP.Z34VvdCT6bEordzT-7HgqwHaF-&pid=Api&P=0&h=180',
      price: '150'
    },
    {
      name: 'Pizza',
      imgUrl: 'https://tse2.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&P=0&h=180',
      price: '350'
    },
    {
      name: 'Pasta',
      imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.MiAGrYafshORM2n_HLu4swHaHa&pid=Api&P=0&h=180',
      price: '250'
    },
  ]
  return (
    <section>
      {products.map((product) => {
        return (
          <Products name={product.name} imgUrl = {product.imgUrl} price = {product.price} />
        )
      })}
    </section>
  )
}

export default ShoppingList
