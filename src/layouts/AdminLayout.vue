<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const adminLinks = [
  { name: 'admin-dashboard', text: 'Tổng quan', path: '/admin/tong-quan' },
  { name: 'admin-appointments', text: 'Đặt lịch', path: '/admin/dat-lich' },
  { name: 'admin-customers', text: 'Khách hàng', path: '/admin/khach-hang' },
  { name: 'admin-staff', text: 'Nhân viên', path: '/admin/nhan-vien' },
  { name: 'admin-services', text: 'Dịch vụ', path: '/admin/dich-vu' },
  { name: 'admin-invoices', text: 'Hóa đơn', path: '/admin/hoa-don' }
]

function getPageTitle() {
  return route.meta.title || 'Quản trị'
}
</script>

<template>
  <div class="d-lg-flex">
    <aside class="bg-dark text-white admin-sidebar">
      <div class="p-4 border-bottom border-secondary">
        <h5 class="mb-0">BiTeeth</h5>
        <small class="text-white-50">Admin Panel</small>
      </div>
      <div class="p-3">
        <RouterLink
          v-for="link in adminLinks"
          :key="link.name"
          :to="link.path"
          class="d-flex align-items-center text-white text-decoration-none p-2 rounded mb-1 admin-menu-link"
          :class="{ 'bg-success': route.name === link.name }"
        >
          {{ link.text }}
        </RouterLink>
      </div>
      <div class="mt-auto p-3 border-top border-secondary">
        <div class="small fw-bold">Admin</div>
        <div class="small text-white-50">Dữ liệu list cứng</div>
      </div>
    </aside>

    <main class="flex-fill bg-light min-vh-100">
      <div class="bg-white border-bottom p-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
        <h5 class="mb-0">{{ getPageTitle() }}</h5>
        <div class="d-flex flex-wrap gap-2 align-items-center">
          <RouterLink class="btn btn-sm btn-outline-secondary" :to="{ name: 'home' }">Trang chủ</RouterLink>
        </div>
      </div>
      <div class="p-3 p-md-4">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.admin-sidebar {
  min-height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.admin-menu-link {
  min-height: 40px;
}

@media (max-width: 991.98px) {
  .admin-sidebar {
    min-height: auto;
    width: 100%;
  }
}
</style>
