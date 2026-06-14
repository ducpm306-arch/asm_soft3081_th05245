<script setup>
import { computed, reactive, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import FormButtons from '@/components/admin/FormButtons.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const statusFilter = ref('Tất cả')
const editingId = ref(null)

const invoiceForm = reactive({
  invoiceCode: '',
  customerName: '',
  serviceName: '',
  amount: '',
  createdDate: '',
  status: 'Chưa thanh toán',
  paymentMethod: 'Tiền mặt',
  note: ''
})

const filteredInvoices = computed(() =>
  adminDataStore.invoices.filter((invoice) => {
    const keywordText = keyword.value.toLowerCase()
    const sameKeyword =
      invoice.invoiceCode.toLowerCase().includes(keywordText) ||
      invoice.customerName.toLowerCase().includes(keywordText) ||
      invoice.serviceName.toLowerCase().includes(keywordText)
    const sameStatus = statusFilter.value === 'Tất cả' || invoice.status === statusFilter.value
    return sameKeyword && sameStatus
  })
)

function resetForm() {
  editingId.value = null
  invoiceForm.invoiceCode = ''
  invoiceForm.customerName = ''
  invoiceForm.serviceName = ''
  invoiceForm.amount = ''
  invoiceForm.createdDate = ''
  invoiceForm.status = 'Chưa thanh toán'
  invoiceForm.paymentMethod = 'Tiền mặt'
  invoiceForm.note = ''
}

function editInvoice(invoice) {
  editingId.value = invoice.id
  invoiceForm.invoiceCode = invoice.invoiceCode
  invoiceForm.customerName = invoice.customerName
  invoiceForm.serviceName = invoice.serviceName
  invoiceForm.amount = invoice.amount
  invoiceForm.createdDate = invoice.createdDate
  invoiceForm.status = invoice.status
  invoiceForm.paymentMethod = invoice.paymentMethod
  invoiceForm.note = invoice.note
}

function chooseService() {
  const selectedService = adminDataStore.services.find((service) => service.name === invoiceForm.serviceName)

  if (selectedService) {
    invoiceForm.amount = selectedService.price
  }
}

function saveInvoice() {
  const invoiceData = {
    invoiceCode: invoiceForm.invoiceCode,
    customerName: invoiceForm.customerName,
    serviceName: invoiceForm.serviceName,
    amount: Number(invoiceForm.amount),
    createdDate: invoiceForm.createdDate,
    status: invoiceForm.status,
    paymentMethod: invoiceForm.paymentMethod,
    note: invoiceForm.note
  }

  if (editingId.value) {
    adminDataStore.updateItem('invoices', editingId.value, invoiceData)
  } else {
    adminDataStore.createItem('invoices', invoiceData)
  }

  resetForm()
}

function deleteInvoice(id) {
  if (confirm('Bạn có chắc muốn xóa hóa đơn này không?')) {
    adminDataStore.deleteItem('invoices', id)
  }
}

function markPaid(invoice) {
  adminDataStore.updateItem('invoices', invoice.id, {
    ...invoice,
    status: 'Đã thanh toán'
  })
}
</script>

<template>
  <PageHeader title="Quản lý hóa đơn" description="Tạo hóa đơn, sửa trạng thái và xóa hóa đơn">
    <div class="d-flex gap-2">
      <input v-model="keyword" class="form-control form-control-sm" style="width: 220px" placeholder="Tìm hóa đơn" />
      <select v-model="statusFilter" class="form-select form-select-sm" style="width: 150px">
        <option>Tất cả</option>
        <option>Đã thanh toán</option>
        <option>Chưa thanh toán</option>
      </select>
    </div>
  </PageHeader>

  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">{{ editingId ? 'Sửa hóa đơn' : 'Thêm hóa đơn' }}</h6>
          <form @submit.prevent="saveInvoice">
            <div class="mb-3">
              <label class="form-label small">Mã hóa đơn</label>
              <input v-model="invoiceForm.invoiceCode" required class="form-control form-control-sm" placeholder="HD005" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Khách hàng</label>
              <input v-model="invoiceForm.customerName" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Dịch vụ</label>
              <select v-model="invoiceForm.serviceName" required class="form-select form-select-sm" @change="chooseService">
                <option value="">Chọn dịch vụ</option>
                <option v-for="service in adminDataStore.services" :key="service.id" :value="service.name">
                  {{ service.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Số tiền</label>
              <input v-model="invoiceForm.amount" required type="number" min="0" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ngày tạo</label>
              <input v-model="invoiceForm.createdDate" required type="date" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Trạng thái</label>
              <select v-model="invoiceForm.status" class="form-select form-select-sm">
                <option>Chưa thanh toán</option>
                <option>Đã thanh toán</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Phương thức</label>
              <select v-model="invoiceForm.paymentMethod" class="form-select form-select-sm">
                <option>Tiền mặt</option>
                <option>Chuyển khoản</option>
                <option>Thẻ</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Ghi chú</label>
              <textarea v-model="invoiceForm.note" rows="2" class="form-control form-control-sm"></textarea>
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
                  <th class="small">Mã</th>
                  <th class="small">Khách hàng</th>
                  <th class="small">Dịch vụ</th>
                  <th class="small">Số tiền</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in filteredInvoices" :key="invoice.id">
                  <td class="small fw-bold">{{ invoice.invoiceCode }}</td>
                  <td class="small">
                    <div>{{ invoice.customerName }}</div>
                    <div class="text-muted">{{ invoice.createdDate }}</div>
                  </td>
                  <td class="small">{{ invoice.serviceName }}</td>
                  <td class="small">{{ formatPrice(invoice.amount) }}</td>
                  <td>
                    <span :class="['badge', invoice.status === 'Đã thanh toán' ? 'bg-success' : 'bg-warning text-dark']">
                      {{ invoice.status }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-link text-success" @click="editInvoice(invoice)">Sửa</button>
                    <button
                      v-if="invoice.status !== 'Đã thanh toán'"
                      class="btn btn-sm btn-link text-success"
                      @click="markPaid(invoice)"
                    >
                      Thu tiền
                    </button>
                    <button class="btn btn-sm btn-link text-danger" @click="deleteInvoice(invoice.id)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="filteredInvoices.length === 0">
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
