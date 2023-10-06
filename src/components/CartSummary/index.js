// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let count = 0
      cartList.map(eachProduct => {
        count += parseInt(eachProduct.price * eachProduct.quantity)
        return count
      })

      return (
        <div className="cart-summary-card">
          <h1 className="order-total">
            Order Total:<span className="total">{count}/-</span>
          </h1>
          <p className="items-count">{cartList.length} items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
