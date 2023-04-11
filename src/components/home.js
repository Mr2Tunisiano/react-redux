import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProd } from "../rtk/slices/product-slice"
import { addToCart } from "../rtk/slices/cart-slice"

function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProd())
  },[])
  console.log(products)
  return (
    <div className="container pt-5 mt-5">
      <div className="row">
          {
            products.map((product) => {
              return (
                <div className="col" key={product.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="btn btn-primary"
                      >
                        Add to cart 
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          }
      </div>
    </div>
  )
}
export default Home