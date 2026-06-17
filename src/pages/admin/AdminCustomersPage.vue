<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const viTriCanUpdate = ref(-1)

const newKhachHang = ref({
  name: '',
  gender: 'Nam',
  age: '',
  phone: '',
  email: '',
  lastVisit: '',
  visits: 1,
  image: '',
  active: true
})

function listKhachHangHienThi() {
  return adminDataStore.customers.filter((customer) => {
    const keywordText = keyword.value.toLowerCase()
    return (
      customer.name.toLowerCase().includes(keywordText) ||
      customer.phone.toLowerCase().includes(keywordText) ||
      customer.email.toLowerCase().includes(keywordText)
    )
  })
}

function resetForm() {
  newKhachHang.value = {
    name: '',
    gender: 'Nam',
    age: '',
    phone: '',
    email: '',
    lastVisit: '',
    visits: 1,
    image: '',
    active: true
  }
  viTriCanUpdate.value = -1
}

function detailKhachHang(customer) {
  newKhachHang.value = { ...customer }
  viTriCanUpdate.value = adminDataStore.customers.findIndex((item) => item.id === customer.id)
}

function addKhachHang() {
  adminDataStore.customers.push({
    id: adminDataStore.customers.length + 1,
    ...newKhachHang.value,
    age: Number(newKhachHang.value.age),
    visits: Number(newKhachHang.value.visits),
    image: newKhachHang.value.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop'
  })

  resetForm()
}

function updateKhachHang() {
  if (viTriCanUpdate.value === -1) {
    alert('Bạn hãy chọn khách hàng cần sửa')
    return
  }

  adminDataStore.customers[viTriCanUpdate.value] = {
    ...newKhachHang.value,
    age: Number(newKhachHang.value.age),
    visits: Number(newKhachHang.value.visits)
  }

  resetForm()
}

function removeKhachHang(customer) {
  const index = adminDataStore.customers.findIndex((item) => item.id === customer.id)

  if (index !== -1 && confirm('Bạn có chắc muốn xóa khách hàng này không?')) {
    adminDataStore.customers.splice(index, 1)
    resetForm()
  }
}
</script>

<template>
  <PageHeader title="Quản lý khách hàng" description="Lưu thông tin khách hàng và số lượt khám">
    <input v-model="keyword" class="form-control form-control-sm" style="width: 280px" placeholder="Tìm tên, SĐT, email" />
  </PageHeader>

  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">{{ viTriCanUpdate === -1 ? 'Thêm khách hàng' : 'Sửa khách hàng' }}</h6>
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label small">Họ tên</label>
              <input v-model="newKhachHang.name" required class="form-control form-control-sm" />
            </div>
            <div class="row g-2">
              <div class="col-6 mb-3">
                <label class="form-label small">Giới tính</label>
                <select v-model="newKhachHang.gender" class="form-select form-select-sm">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label small">Tuổi</label>
                <input v-model="newKhachHang.age" required type="number" min="1" class="form-control form-control-sm" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small">Điện thoại</label>
              <input v-model="newKhachHang.phone" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Email</label>
              <input v-model="newKhachHang.email" required type="email" class="form-control form-control-sm" />
            </div>
            <div class="row g-2">
              <div class="col-6 mb-3">
                <label class="form-label small">Lần khám gần nhất</label>
                <input v-model="newKhachHang.lastVisit" required type="date" class="form-control form-control-sm" />
              </div>
              <div class="col-6 mb-3">
                <label class="form-label small">Số lượt</label>
                <input v-model="newKhachHang.visits" required type="number" min="0" class="form-control form-control-sm" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="newKhachHang.image" class="form-control form-control-sm" />
            </div>
            <div class="form-check form-switch mb-3">
              <input id="customerActive" v-model="newKhachHang.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="customerActive">Hoạt động</label>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-success btn-sm flex-fill" @click="addKhachHang">Thêm</button>
              <button type="button" class="btn btn-warning btn-sm flex-fill" @click="updateKhachHang">Cập nhật</button>
              <button type="button" class="btn btn-outline-secondary btn-sm" @click="resetForm">Làm mới</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th class="small">Khách hàng</th>
                  <th class="small">Liên hệ</th>
                  <th class="small">Lần khám</th>
                  <th class="small">Lượt</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in listKhachHangHienThi()" :key="customer.id">
                  <td class="small">
                    <div class="d-flex align-items-center gap-2">
                      <img :src="customer.image" class="rounded-circle" style="width: 36px; height: 36px; object-fit: cover" alt="" />
                      <div>
                        <div class="fw-bold">{{ customer.name }}</div>
                        <div class="text-muted">{{ customer.gender }} - {{ customer.age }} tuổi</div>
                      </div>
                    </div>
                  </td>
                  <td class="small">
                    <div>{{ customer.phone }}</div>
                    <div class="text-muted">{{ customer.email }}</div>
                  </td>
                  <td class="small">{{ customer.lastVisit }}</td>
                  <td class="small">{{ customer.visits }}</td>
                  <td>
                    <span :class="['badge', customer.active ? 'bg-success' : 'bg-secondary']">
                      {{ customer.active ? 'Hoạt động' : 'Đã khóa' }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-link text-success" @click="detailKhachHang(customer)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="removeKhachHang(customer)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="listKhachHangHienThi().length === 0">
                  <td colspan="6" class="text-center text-muted small">Không có dữ liệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
