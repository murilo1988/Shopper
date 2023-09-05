import { useFetch } from './hooks/useFetch'

import './App.css'
interface Products {
  id: number,
  name: string,
  cost: number,
  price: number
}
interface ProductsResponse {
  results: Products[]
}

function App() {

  const { data } = useFetch<ProductsResponse>("localhost/3306/products")
  const product = data?.results || []

  console.log(data)

  return (
    <>
      <div>
        {product.map((p: Products) => (
          <li key={p.id}>
            <p>{p.name}</p>
            <p>{p.price}</p>
          </li>

        ))}



      </div>

    </>
  )
}

export default App
