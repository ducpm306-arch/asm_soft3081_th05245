<script setup>
import { computed, reactive, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import FormButtons from '@/components/admin/FormButtons.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const editingId = ref(null)

const serviceForm = reactive({
  name: '',
  price: '',
  unit: '',
  description: '',
  image: '',
  active: true
})

const filteredServices = computed(() =>
  adminDataStore.services.filter((service) =>
    service.name.toLowerCase().includes(keyword.value.toLowerCase())
  )
)

function resetForm() {
  editingId.value = null
  serviceForm.name = ''
  serviceForm.price = ''
  serviceForm.unit = ''
  serviceForm.description = ''
  serviceForm.image = ''
  serviceForm.active = true
}

function editService(service) {
  editingId.value = service.id
  serviceForm.name = service.name
  serviceForm.price = service.price
  serviceForm.unit = service.unit || ''
  serviceForm.description = service.description
  serviceForm.image = service.image
  serviceForm.active = service.active
}

function saveService() {
  const serviceData = {
    name: serviceForm.name,
    price: Number(serviceForm.price),
    unit: serviceForm.unit,
    description: serviceForm.description,
    image: serviceForm.image || 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    active: serviceForm.active
  }

  if (editingId.value) {
    adminDataStore.updateItem('services', editingId.value, serviceData)
  } else {
    adminDataStore.createItem('services', serviceData)
  }

  resetForm()
}

function deleteService(id) {
  if (confirm('Bạn có chắc muốn xóa dịch vụ này không?')) {
    adminDataStore.deleteItem('services', id)
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
          <h6 class="mb-3">{{ editingId ? 'Sửa dịch vụ' : 'Thêm dịch vụ' }}</h6>
          <form @submit.prevent="saveService">
            <div class="mb-3">
              <label class="form-label small">Tên dịch vụ</label>
              <input v-model="serviceForm.name" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Giá</label>
              <input v-model="serviceForm.price" required type="number" min="0" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Đơn vị</label>
              <input v-model="serviceForm.unit" class="form-control form-control-sm" placeholder="Ví dụ: răng" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ảnh</label>
              <input v-model="serviceForm.image" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Mô tả</label>
              <textarea v-model="serviceForm.description" required rows="3" class="form-control form-control-sm"></textarea>
            </div>
            <div class="form-check form-switch mb-3">
              <input id="serviceActive" v-model="serviceForm.active" class="form-check-input" type="checkbox" />
              <label class="form-check-label small" for="serviceActive">Đang hoạt động</label>
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
                  <th class="small">Dịch vụ</th>
                  <th class="small">Giá</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="service in filteredServices" :key="service.id">
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
                    <button class="btn btn-sm btn-link text-success" @click="editService(service)">Sửa</button>
                    <button class="btn btn-sm btn-link text-danger" @click="deleteService(service.id)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="filteredServices.length === 0">
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
