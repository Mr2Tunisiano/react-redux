import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  let cart = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  const total = cart.reduce((acc, product) => {
    return acc += product.price * product.quantity
  },0)
  return (
    <div className="container mt-3 pt-5">
      <h1 className="mt-4">Cart Page</h1>
      <button className="btn btn-primary" onClick={() => dispatch(clear())}>
        Clear
      </button>
      <h5 className="mt-5">Total : {total.toFixed(2)}$</h5>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qte</th>
            <th scope="col">Image</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>
                  <b>{product.price}$</b>
                </td>
                <td>{product.quantity}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteFromCart(product))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Cart