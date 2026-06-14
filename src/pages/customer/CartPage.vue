<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/data/services'

const cartStore = useCartStore()
const successMessage = ref('')

const hasCartItems = computed(() => cartStore.cartItems.length > 0)

function confirmOrder() {
  successMessage.value = 'Đã xác nhận đơn đặt lịch. Nhân viên sẽ liên hệ lại với bạn.'
  cartStore.clearCart()
}
</script>

<template>
  <section class="bg-light py-5 border-bottom">
    <div class="container">
      <p class="text-success text-uppercase small mb-2">Giỏ hàng</p>
      <h2 class="mb-0">Thông tin đơn đặt lịch</h2>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>

      <div v-if="!hasCartItems" class="text-center py-5 border bg-light">
        <h5>Giỏ hàng đang trống</h5>
        <p class="text-muted mb-4">Bạn hãy đặt lịch từ trang chủ để tạo đơn hàng.</p>
        <RouterLink class="btn btn-success" :to="{ name: 'home' }">Về trang chủ</RouterLink>
      </div>

      <div v-else class="row g-4">
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle">
                  <thead class="table-light">
                    <tr>
                      <th class="small">Dịch vụ</th>
                      <th class="small">Lịch hẹn</th>
                      <th class="small">Số lượng</th>
                      <th class="small">Tạm tính</th>
                      <th class="small text-end">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cartStore.cartItems" :key="item.id">
                      <td class="small">
                        <div class="fw-bold">{{ item.serviceName }}</div>
                        <div class="text-muted">{{ item.customerName }} - {{ item.phone }}</div>
                        <div class="text-muted">{{ item.doctorName }}</div>
                      </td>
                      <td class="small">
                        <div>{{ item.appointmentDate }}</div>
                        <div class="text-muted">{{ item.appointmentTime }}</div>
                      </td>
                      <td style="width: 110px">
                        <input
                          :value="item.quantity"
                          type="number"
                          min="1"
                          class="form-control form-control-sm"
                          @input="cartStore.changeQuantity(item.id, $event.target.value)"
                        />
                      </td>
                      <td class="small fw-bold">{{ formatPrice(item.price * item.quantity) }}</td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-link text-danger" @click="cartStore.removeCartItem(item.id)">Xóa</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h5 class="mb-3">Tóm tắt đơn hàng</h5>
              <div class="d-flex justify-content-between border-bottom py-2 small">
                <span>Số dịch vụ</span>
                <strong>{{ cartStore.totalQuantity }}</strong>
              </div>
              <div class="d-flex justify-content-between border-bottom py-2 small">
                <span>Tổng tiền</span>
                <strong>{{ formatPrice(cartStore.totalMoney) }}</strong>
              </div>
              <p class="text-muted small mt-3">
                Sau khi xác nhận, phòng khám sẽ gọi lại để chốt lịch và hướng dẫn thanh toán.
              </p>
              <button class="btn btn-success w-100 mb-2" @click="confirmOrder">Xác nhận đặt lịch</button>
              <button class="btn btn-outline-secondary w-100" @click="cartStore.clearCart()">Xóa giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
