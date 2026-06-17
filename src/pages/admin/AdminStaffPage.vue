<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const locChucVu = ref('Tất cả')
const viTriCanUpdate = ref(-1)

const newNhanVien = ref({
  name: '',
  role: 'Bác sĩ',
  specialty: '',
  experience: '',
  phone: '',
  schedule: '',
  image: '',
  active: true
})

function listNhanVienHienThi() {
  return adminDataStore.staff.filter((staffItem) => {
    const sameKeyword = staffItem.name.toLowerCase().includes(keyword.value.toLowerCase())
    const sameRole = locChucVu.value === 'Tất cả' || staffItem.role === locChucVu.value
    return sameKeyword && sameRole
  })
}

function resetForm() {
  newNhanVien.value = {
    name: '',
    role: 'Bác sĩ',
    specialty: '',
    experience: '',
    phone: '',
    schedule: '',
    image: '',
    active: true
  }
  viTriCanUpdate.value = -1
}

function detailNhanVien(staffItem) {
  newNhanVien.value = { ...staffItem }
  viTriCanUpdate.value = adminDataStore.staff.findIndex((item) => item.id === staffItem.id)
}

function addNhanVien() {
  adminDataStore.staff.push({
    id: adminDataStore.staff.length + 1,
    ...newNhanVien.value,
    image: newNhanVien.value.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop'
  })

  resetForm()
}

function updateNhanVien() {
  if (viTriCanUpdate.value === -1) {
    alert('Bạn hãy chọn nhân viên cần sửa')
    return
  }

  adminDataStore.staff[viTriCanUpdate.value] = { ...newNhanVien.value }

  resetForm()
}

function removeNhanVien(staffItem) {
  const index = adminDataStore.staff.findIndex((item) => item.id === staffItem.id)

  if (index !== -1 && confirm('Bạn có chắc muốn xóa nhân viên này không?')) {
    adminDataStore.staff.splice(index, 1)
    resetForm()
  }
}
</script>

<template>
  <PageHeader title="Quản lý nhân viên" description="Thêm, sửa, xóa bác sĩ và lễ tân">
    <div class="d-flex gap-2">
      <input v-model="keyword" class="form-control form-control-sm" style="width: 180px" placeholder="Tìm nhân viên" />
      <select v-model="locChucVu" class="form-select form-select-sm" style="width: 120px">
        <option>Tất cả</option>
        <option>Bác sĩ</option>
        <option>Lễ tân</option>
      </select>
    </div>
  </PageHeader>

  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">{{ viTriCanUpdate === -1 ? 'Thêm nhân viên' : 'Sửa nhân viên' }}</h6>
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label small">Họ tên</label>
              <input v-model="newNhanVien.name" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Chức vụ</label>
              <select v-model="newNhanVien.role" class="form-select form-select-sm">
                <option>Bác sĩ</option>
                <option>Lễ tân</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Chuyên môn</label>
              <input v-model="newNhanVien.specialty" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Kinh nghiệm</label>
              <input v-model="newNhanVien.experience" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Điện thoại</label>
              <input v-model="newNhanVien.phone" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Lịch làm việc</label>
              <input v-model="newNhanVien.schedule" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="newNhanVien.image" class="form-control form-control-sm" />
            </div>
            <div class="form-check form-switch mb-3">
              <input id="staffActive" v-model="newNhanVien.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="staffActive">Đang làm việc</label>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-success btn-sm flex-fill" @click="addNhanVien">Thêm</button>
              <button type="button" class="btn btn-warning btn-sm flex-fill" @click="updateNhanVien">Cập nhật</button>
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
                  <th class="small">Nhân viên</th>
                  <th class="small">Chức vụ</th>
                  <th class="small">Điện thoại</th>
                  <th class="small">Lịch</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="staffItem in listNhanVienHienThi()" :key="staffItem.id">
                  <td class="small">
                    <div class="d-flex align-items-center gap-2">
                      <img :src="staffItem.image" class="rounded-circle" style="width: 36px; height: 36px; object-fit: cover" alt="" />
                      <div>
                        <div class="fw-bold">{{ staffItem.name }}</div>
                        <div class="text-muted">{{ staffItem.specialty }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="small">{{ staffItem.role }}</td>
                  <td class="small">{{ staffItem.phone }}</td>
                  <td class="small">{{ staffItem.schedule }}</td>
                  <td>
                    <span :class="['badge', staffItem.active ? 'bg-success' : 'bg-secondary']">
                      {{ staffItem.active ? 'Đang làm' : 'Nghỉ' }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-link text-success" @click="detailNhanVien(staffItem)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="removeNhanVien(staffItem)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="listNhanVienHienThi().length === 0">
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
