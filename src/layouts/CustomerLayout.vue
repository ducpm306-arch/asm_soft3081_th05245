<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const currentYear = new Date().getFullYear()

const cartQuantity = computed(() => cartStore.totalQuantity)

function goToHomeSection(sectionId) {
  if (route.name !== 'home') {
    router.push({ name: 'home' }).then(() => {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
    return
  }

  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold text-success" :to="{ name: 'home' }">BiTeeth</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#customerMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="customerMenu" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToHomeSection('services')">Dịch vụ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToHomeSection('about')">Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToHomeSection('doctors')">Đội ngũ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToHomeSection('booking')">Đặt lịch</a>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <RouterLink class="btn btn-outline-success position-relative" :to="{ name: 'cart' }">
            Giỏ hàng
            <span v-if="cartQuantity > 0" class="badge bg-success ms-1">{{ cartQuantity }}</span>
          </RouterLink>
          <RouterLink class="btn btn-success" :to="{ name: 'auth' }">Đăng nhập</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <RouterView />

  <footer class="bg-dark text-light py-4">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <h5 class="fw-bold">BiTeeth</h5>
          <p class="small mb-0">
            Phòng khám nha khoa tại Hà Nội, hỗ trợ đặt lịch nhanh và chăm sóc khách hàng rõ ràng.
          </p>
        </div>
        <div class="col-md-2">
          <h6 class="text-uppercase small">Trang</h6>
          <RouterLink class="d-block text-light text-decoration-none small mb-2" :to="{ name: 'home' }">Trang chủ</RouterLink>
          <RouterLink class="d-block text-light text-decoration-none small mb-2" :to="{ name: 'cart' }">Giỏ hàng</RouterLink>
          <RouterLink class="d-block text-light text-decoration-none small mb-2" :to="{ name: 'auth' }">Tài khoản</RouterLink>
        </div>
        <div class="col-md-3">
          <h6 class="text-uppercase small">Liên hệ</h6>
          <p class="small mb-1">123 Đường Láng, Đống Đa, Hà Nội</p>
          <p class="small mb-1">1900 1234</p>
          <p class="small mb-0">contact@biteeth.vn</p>
        </div>
        <div class="col-md-3">
          <h6 class="text-uppercase small">Thời gian</h6>
          <p class="small mb-0">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
        </div>
      </div>
      <hr class="border-secondary my-3" />
      <p class="text-center small mb-0">© {{ currentYear }} BiTeeth. All rights reserved.</p>
    </div>
  </footer>
</template>
