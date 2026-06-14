import { defineStore } from 'pinia'

function getCartFromLocalStorage() {
  const cartText = localStorage.getItem('biteeth_cart')

  if (!cartText) {
    return []
  }

  try {
    return JSON.parse(cartText)
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: getCartFromLocalStorage()
  }),
  getters: {
    totalQuantity(state) {
      return state.cartItems.reduce((total, item) => total + Number(item.quantity || 1), 0)
    },
    totalMoney(state) {
      return state.cartItems.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 1), 0)
    }
  },
  actions: {
    saveCart() {
      localStorage.setItem('biteeth_cart', JSON.stringify(this.cartItems))
    },
    addBookingToCart(bookingData) {
      this.cartItems.push({
        ...bookingData,
        id: Date.now(),
        quantity: Number(bookingData.quantity || 1)
      })
      this.saveCart()
    },
    changeQuantity(id, quantity) {
      const item = this.cartItems.find((cartItem) => cartItem.id === id)

      if (item) {
        item.quantity = Math.max(1, Number(quantity || 1))
        this.saveCart()
      }
    },
    removeCartItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
      this.saveCart()
    },
    clearCart() {
      this.cartItems = []
      this.saveCart()
    }
  }
})
