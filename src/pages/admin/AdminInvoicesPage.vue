<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const locTrangThai = ref('Tất cả')
const viTriCanUpdate = ref(-1)

const newHoaDon = ref({
  invoiceCode: '',
  customerName: '',
  serviceName: '',
  amount: '',
  createdDate: '',
  status: 'Chưa thanh toán',
  paymentMethod: 'Tiền mặt',
  note: ''
})

function listHoaDonHienThi() {
  return adminDataStore.invoices.filter((invoice) => {
    const keywordText = keyword.value.toLowerCase()
    const sameKeyword =
      invoice.invoiceCode.toLowerCase().includes(keywordText) ||
      invoice.customerName.toLowerCase().includes(keywordText) ||
      invoice.serviceName.toLowerCase().includes(keywordText)
    const sameStatus = locTrangThai.value === 'Tất cả' || invoice.status === locTrangThai.value
    return sameKeyword && sameStatus
  })
}

function resetForm() {
  newHoaDon.value = {
    invoiceCode: '',
    customerName: '',
    serviceName: '',
    amount: '',
    createdDate: '',
    status: 'Chưa thanh toán',
    paymentMethod: 'Tiền mặt',
    note: ''
  }
  viTriCanUpdate.value = -1
}

function detailHoaDon(invoice) {
  newHoaDon.value = { ...invoice }
  viTriCanUpdate.value = adminDataStore.invoices.findIndex((item) => item.id === invoice.id)
}

function chooseService() {
  const selectedService = adminDataStore.services.find((service) => service.name === newHoaDon.value.serviceName)

  if (selectedService) {
    newHoaDon.value.amount = selectedService.price
  }
}

function addHoaDon() {
  adminDataStore.invoices.push({
    id: adminDataStore.invoices.length + 1,
    ...newHoaDon.value,
    amount: Number(newHoaDon.value.amount)
  })

  resetForm()
}

function updateHoaDon() {
  if (viTriCanUpdate.value === -1) {
    alert('Bạn hãy chọn hóa đơn cần sửa')
    return
  }

  adminDataStore.invoices[viTriCanUpdate.value] = {
    ...newHoaDon.value,
    amount: Number(newHoaDon.value.amount)
  }

  resetForm()
}

function removeHoaDon(invoice) {
  const index = adminDataStore.invoices.findIndex((item) => item.id === invoice.id)

  if (index !== -1 && confirm('Bạn có chắc muốn xóa hóa đơn này không?')) {
    adminDataStore.invoices.splice(index, 1)
    resetForm()
  }
}

function markPaid(invoice) {
  invoice.status = 'Đã thanh toán'
}
</script>

<template>
  <PageHeader title="Quản lý hóa đơn" description="Tạo hóa đơn, sửa trạng thái và xóa hóa đơn">
    <div class="d-flex gap-2">
      <input v-model="keyword" class="form-control form-control-sm" style="width: 220px" placeholder="Tìm hóa đơn" />
      <select v-model="locTrangThai" class="form-select form-select-sm" style="width: 150px">
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
          <h6 class="mb-3">{{ viTriCanUpdate === -1 ? 'Thêm hóa đơn' : 'Sửa hóa đơn' }}</h6>
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label small">Mã hóa đơn</label>
              <input v-model="newHoaDon.invoiceCode" required class="form-control form-control-sm" placeholder="HD005" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Khách hàng</label>
              <input v-model="newHoaDon.customerName" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Dịch vụ</label>
              <select v-model="newHoaDon.serviceName" required class="form-select form-select-sm" @change="chooseService">
                <option value="">Chọn dịch vụ</option>
                <option v-for="service in adminDataStore.services" :key="service.id" :value="service.name">
                  {{ service.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Số tiền</label>
              <input v-model="newHoaDon.amount" required type="number" min="0" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ngày tạo</label>
              <input v-model="newHoaDon.createdDate" required type="date" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Trạng thái</label>
              <select v-model="newHoaDon.status" class="form-select form-select-sm">
                <option>Chưa thanh toán</option>
                <option>Đã thanh toán</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Phương thức</label>
              <select v-model="newHoaDon.paymentMethod" class="form-select form-select-sm">
                <option>Tiền mặt</option>
                <option>Chuyển khoản</option>
                <option>Thẻ</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Ghi chú</label>
              <textarea v-model="newHoaDon.note" rows="2" class="form-control form-control-sm"></textarea>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-success btn-sm flex-fill" @click="addHoaDon">Thêm</button>
              <button type="button" class="btn btn-warning btn-sm flex-fill" @click="updateHoaDon">Cập nhật</button>
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
                  <th class="small">Mã</th>
                  <th class="small">Khách hàng</th>
                  <th class="small">Dịch vụ</th>
                  <th class="small">Số tiền</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in listHoaDonHienThi()" :key="invoice.id">
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
                    <button class="btn btn-sm btn-link text-success" @click="detailHoaDon(invoice)">Sửa</button>
                    <button
                      v-if="invoice.status !== 'Đã thanh toán'"
                      class="btn btn-sm btn-link text-success"
                      @click="markPaid(invoice)"
                    >
                      Thu tiền
                    </button>
                    <button class="btn btn-sm btn-link text-danger" @click="removeHoaDon(invoice)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="listHoaDonHienThi().length === 0">
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
