<script setup>
import { computed, reactive, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import FormButtons from '@/components/admin/FormButtons.vue'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const roleFilter = ref('Tất cả')
const editingId = ref(null)

const staffForm = reactive({
  name: '',
  role: 'Bác sĩ',
  specialty: '',
  experience: '',
  phone: '',
  schedule: '',
  image: '',
  active: true
})

const filteredStaff = computed(() =>
  adminDataStore.staff.filter((staffItem) => {
    const sameKeyword = staffItem.name.toLowerCase().includes(keyword.value.toLowerCase())
    const sameRole = roleFilter.value === 'Tất cả' || staffItem.role === roleFilter.value
    return sameKeyword && sameRole
  })
)

function resetForm() {
  editingId.value = null
  staffForm.name = ''
  staffForm.role = 'Bác sĩ'
  staffForm.specialty = ''
  staffForm.experience = ''
  staffForm.phone = ''
  staffForm.schedule = ''
  staffForm.image = ''
  staffForm.active = true
}

function editStaff(staffItem) {
  editingId.value = staffItem.id
  staffForm.name = staffItem.name
  staffForm.role = staffItem.role
  staffForm.specialty = staffItem.specialty
  staffForm.experience = staffItem.experience
  staffForm.phone = staffItem.phone
  staffForm.schedule = staffItem.schedule
  staffForm.image = staffItem.image
  staffForm.active = staffItem.active
}

function saveStaff() {
  const staffData = {
    name: staffForm.name,
    role: staffForm.role,
    specialty: staffForm.specialty,
    experience: staffForm.experience,
    phone: staffForm.phone,
    schedule: staffForm.schedule,
    image: staffForm.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop',
    active: staffForm.active
  }

  if (editingId.value) {
    adminDataStore.updateItem('staff', editingId.value, staffData)
  } else {
    adminDataStore.createItem('staff', staffData)
  }

  resetForm()
}

function deleteStaff(id) {
  if (confirm('Bạn có chắc muốn xóa nhân viên này không?')) {
    adminDataStore.deleteItem('staff', id)
  }
}
</script>

<template>
  <PageHeader title="Quản lý nhân viên" description="Thêm, sửa, xóa bác sĩ và lễ tân">
    <div class="d-flex gap-2">
      <input v-model="keyword" class="form-control form-control-sm" style="width: 180px" placeholder="Tìm nhân viên" />
      <select v-model="roleFilter" class="form-select form-select-sm" style="width: 120px">
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
          <h6 class="mb-3">{{ editingId ? 'Sửa nhân viên' : 'Thêm nhân viên' }}</h6>
          <form @submit.prevent="saveStaff">
            <div class="mb-3">
              <label class="form-label small">Họ tên</label>
              <input v-model="staffForm.name" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Chức vụ</label>
              <select v-model="staffForm.role" class="form-select form-select-sm">
                <option>Bác sĩ</option>
                <option>Lễ tân</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Chuyên môn</label>
              <input v-model="staffForm.specialty" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Kinh nghiệm</label>
              <input v-model="staffForm.experience" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Điện thoại</label>
              <input v-model="staffForm.phone" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Lịch làm việc</label>
              <input v-model="staffForm.schedule" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="staffForm.image" class="form-control form-control-sm" />
            </div>
            <div class="form-check form-switch mb-3">
              <input id="staffActive" v-model="staffForm.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="staffActive">Đang làm việc</label>
            </div>
            <FormButtons :editing="Boolean(editingId)" @cancel="resetForm" />
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
                <tr v-for="staffItem in filteredStaff" :key="staffItem.id">
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
                    <button class="btn btn-sm btn-link text-success" @click="editStaff(staffItem)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="deleteStaff(staffItem.id)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="filteredStaff.length === 0">
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
