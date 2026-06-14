<script setup>
import { computed, reactive, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import FormButtons from '@/components/admin/FormButtons.vue'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const editingId = ref(null)

const customerForm = reactive({
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

const filteredCustomers = computed(() =>
  adminDataStore.customers.filter((customer) => {
    const keywordText = keyword.value.toLowerCase()
    return (
      customer.name.toLowerCase().includes(keywordText) ||
      customer.phone.toLowerCase().includes(keywordText) ||
      customer.email.toLowerCase().includes(keywordText)
    )
  })
)

function resetForm() {
  editingId.value = null
  customerForm.name = ''
  customerForm.gender = 'Nam'
  customerForm.age = ''
  customerForm.phone = ''
  customerForm.email = ''
  customerForm.lastVisit = ''
  customerForm.visits = 1
  customerForm.image = ''
  customerForm.active = true
}

function editCustomer(customer) {
  editingId.value = customer.id
  customerForm.name = customer.name
  customerForm.gender = customer.gender
  customerForm.age = customer.age
  customerForm.phone = customer.phone
  customerForm.email = customer.email
  customerForm.lastVisit = customer.lastVisit
  customerForm.visits = customer.visits
  customerForm.image = customer.image
  customerForm.active = customer.active
}

function saveCustomer() {
  const customerData = {
    name: customerForm.name,
    gender: customerForm.gender,
    age: Number(customerForm.age),
    phone: customerForm.phone,
    email: customerForm.email,
    lastVisit: customerForm.lastVisit,
    visits: Number(customerForm.visits),
    image: customerForm.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop',
    active: customerForm.active
  }

  if (editingId.value) {
    adminDataStore.updateItem('customers', editingId.value, customerData)
  } else {
    adminDataStore.createItem('customers', customerData)
  }

  resetForm()
}

function deleteCustomer(id) {
  if (confirm('Bạn có chắc muốn xóa khách hàng này không?')) {
    adminDataStore.deleteItem('customers', id)
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
          <h6 class="mb-3">{{ editingId ? 'Sửa khách hàng' : 'Thêm khách hàng' }}</h6>
          <form @submit.prevent="saveCustomer">
            <div class="mb-3">
              <label class="form-label small">Họ tên</label>
              <input v-model="customerForm.name" required class="form-control form-control-sm" />
            </div>
            <div class="row g-2">
              <div class="col-6 mb-3">
                <label class="form-label small">Giới tính</label>
                <select v-model="customerForm.gender" class="form-select form-select-sm">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label small">Tuổi</label>
                <input v-model="customerForm.age" required type="number" min="1" class="form-control form-control-sm" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small">Điện thoại</label>
              <input v-model="customerForm.phone" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Email</label>
              <input v-model="customerForm.email" required type="email" class="form-control form-control-sm" />
            </div>
            <div class="row g-2">
              <div class="col-6 mb-3">
                <label class="form-label small">Lần khám gần nhất</label>
                <input v-model="customerForm.lastVisit" required type="date" class="form-control form-control-sm" />
              </div>
              <div class="col-6 mb-3">
                <label class="form-label small">Số lượt</label>
                <input v-model="customerForm.visits" required type="number" min="0" class="form-control form-control-sm" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="customerForm.image" class="form-control form-control-sm" />
            </div>
            <div class="form-check form-switch mb-3">
              <input id="customerActive" v-model="customerForm.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="customerActive">Hoạt động</label>
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
                  <th class="small">Khách hàng</th>
                  <th class="small">Liên hệ</th>
                  <th class="small">Lần khám</th>
                  <th class="small">Lượt</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in filteredCustomers" :key="customer.id">
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
                    <button class="btn btn-sm btn-link text-success" @click="editCustomer(customer)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="deleteCustomer(customer.id)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="filteredCustomers.length === 0">
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
