<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const viTriCanUpdate = ref(-1)

const newDichVu = ref({
  name: '',
  price: '',
  unit: '',
  description: '',
  image: '',
  active: true
})

function listDichVuHienThi() {
  return adminDataStore.services.filter((service) => {
    return service.name.toLowerCase().includes(keyword.value.toLowerCase())
  })
}

function resetForm() {
  newDichVu.value = {
    name: '',
    price: '',
    unit: '',
    description: '',
    image: '',
    active: true
  }
  viTriCanUpdate.value = -1
}

function detailDichVu(service) {
  newDichVu.value = { ...service }
  viTriCanUpdate.value = adminDataStore.services.findIndex((item) => item.id === service.id)
}

function addDichVu() {
  adminDataStore.services.push({
    id: adminDataStore.services.length + 1,
    ...newDichVu.value,
    price: Number(newDichVu.value.price),
    image: newDichVu.value.image || 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80'
  })

  resetForm()
}

function updateDichVu() {
  if (viTriCanUpdate.value === -1) {
    alert('Bạn hãy chọn dịch vụ cần sửa')
    return
  }

  adminDataStore.services[viTriCanUpdate.value] = {
    ...newDichVu.value,
    price: Number(newDichVu.value.price)
  }

  resetForm()
}

function removeDichVu(service) {
  const index = adminDataStore.services.findIndex((item) => item.id === service.id)

  if (index !== -1 && confirm('Bạn có chắc muốn xóa dịch vụ này không?')) {
    adminDataStore.services.splice(index, 1)
    resetForm()
  }
}
</script>

<template>
  <PageHeader title="Quản lý dịch vụ" description="Thêm, sửa, xóa dịch vụ bằng dữ liệu list cứng">
    <input v-model="keyword" class="form-control form-control-sm" style="width: 260px" placeholder="Tìm dịch vụ" />
  </PageHeader>

  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">{{ viTriCanUpdate === -1 ? 'Thêm dịch vụ' : 'Sửa dịch vụ' }}</h6>
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label small">Tên dịch vụ</label>
              <input v-model="newDichVu.name" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Giá</label>
              <input v-model="newDichVu.price" required type="number" min="0" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Đơn vị</label>
              <input v-model="newDichVu.unit" class="form-control form-control-sm" placeholder="Ví dụ: răng" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="newDichVu.image" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Mô tả</label>
              <textarea v-model="newDichVu.description" required rows="3" class="form-control form-control-sm"></textarea>
            </div>
            <div class="form-check form-switch mb-3">
              <input id="serviceActive" v-model="newDichVu.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="serviceActive">Đang hoạt động</label>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-success btn-sm flex-fill" @click="addDichVu">Thêm</button>
              <button type="button" class="btn btn-warning btn-sm flex-fill" @click="updateDichVu">Cập nhật</button>
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
                  <th class="small">Dịch vụ</th>
                  <th class="small">Giá</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="service in listDichVuHienThi()" :key="service.id">
                  <td class="small">
                    <div class="fw-bold">{{ service.name }}</div>
                    <div class="text-muted">{{ service.description }}</div>
                  </td>
                  <td class="small">{{ formatPrice(service.price) }}{{ service.unit ? '/' + service.unit : '' }}</td>
                  <td>
                    <span :class="['badge', service.active ? 'bg-success' : 'bg-secondary']">
                      {{ service.active ? 'Hoạt động' : 'Đã ẩn' }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-link text-success" @click="detailDichVu(service)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="removeDichVu(service)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="listDichVuHienThi().length === 0">
                  <td colspan="4" class="text-center text-muted small">Không có dữ liệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
