<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()
const keyword = ref('')
const locTrangThai = ref('Tất cả')
const viTriCanUpdate = ref(-1)

const newLichHen = ref({
  customerName: '',
  phone: '',
  serviceName: '',
  doctorName: '',
  appointmentDate: '',
  appointmentTime: '08:00',
  note: '',
  status: 'Chờ xác nhận',
  totalPrice: 0
})

function listBacSi() {
  return adminDataStore.staff.filter((staffItem) => staffItem.role === 'Bác sĩ')
}

function listLichHenHienThi() {
  return adminDataStore.appointments.filter((appointment) => {
    const keywordText = keyword.value.toLowerCase()
    const sameKeyword =
      appointment.customerName.toLowerCase().includes(keywordText) ||
      appointment.phone.toLowerCase().includes(keywordText) ||
      appointment.serviceName.toLowerCase().includes(keywordText)
    const sameStatus = locTrangThai.value === 'Tất cả' || appointment.status === locTrangThai.value
    return sameKeyword && sameStatus
  })
}

function chooseService() {
  const selectedService = adminDataStore.services.find((service) => service.name === newLichHen.value.serviceName)

  if (selectedService) {
    newLichHen.value.totalPrice = selectedService.price
  }
}

function resetForm() {
  newLichHen.value = {
    customerName: '',
    phone: '',
    serviceName: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '08:00',
    note: '',
    status: 'Chờ xác nhận',
    totalPrice: 0
  }
  viTriCanUpdate.value = -1
}

function detailLichHen(appointment) {
  newLichHen.value = { ...appointment }
  viTriCanUpdate.value = adminDataStore.appointments.findIndex((item) => item.id === appointment.id)
}

function addLichHen() {
  adminDataStore.appointments.push({
    id: adminDataStore.appointments.length + 1,
    ...newLichHen.value,
    totalPrice: Number(newLichHen.value.totalPrice)
  })

  resetForm()
}

function updateLichHen() {
  if (viTriCanUpdate.value === -1) {
    alert('Bạn hãy chọn lịch hẹn cần sửa')
    return
  }

  adminDataStore.appointments[viTriCanUpdate.value] = {
    ...newLichHen.value,
    totalPrice: Number(newLichHen.value.totalPrice)
  }

  resetForm()
}

function removeLichHen(appointment) {
  const index = adminDataStore.appointments.findIndex((item) => item.id === appointment.id)

  if (index !== -1 && confirm('Bạn có chắc muốn xóa lịch hẹn này không?')) {
    adminDataStore.appointments.splice(index, 1)
    resetForm()
  }
}

function changeTrangThai(appointment, status) {
  appointment.status = status
}
</script>

<template>
  <PageHeader title="Quản lý đặt lịch" description="Tạo lịch hẹn, duyệt lịch và hủy lịch">
    <div class="d-flex gap-2">
      <input v-model="keyword" class="form-control form-control-sm" style="width: 220px" placeholder="Tìm lịch hẹn" />
      <select v-model="locTrangThai" class="form-select form-select-sm" style="width: 150px">
        <option>Tất cả</option>
        <option>Chờ xác nhận</option>
        <option>Đã xác nhận</option>
        <option>Đã hủy</option>
      </select>
    </div>
  </PageHeader>

  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">{{ viTriCanUpdate === -1 ? 'Thêm lịch hẹn' : 'Sửa lịch hẹn' }}</h6>
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label small">Khách hàng</label>
              <input v-model="newLichHen.customerName" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Số điện thoại</label>
              <input v-model="newLichHen.phone" required class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Dịch vụ</label>
              <select v-model="newLichHen.serviceName" required class="form-select form-select-sm" @change="chooseService">
                <option value="">Chọn dịch vụ</option>
                <option v-for="service in adminDataStore.services" :key="service.id" :value="service.name">
                  {{ service.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Bác sĩ</label>
              <select v-model="newLichHen.doctorName" required class="form-select form-select-sm">
                <option value="">Chọn bác sĩ</option>
                <option v-for="doctor in listBacSi()" :key="doctor.id" :value="`BS. ${doctor.name}`">
                  BS. {{ doctor.name }}
                </option>
              </select>
            </div>
            <div class="row g-2">
              <div class="col-6 mb-3">
                <label class="form-label small">Ngày hẹn</label>
                <input v-model="newLichHen.appointmentDate" required type="date" class="form-control form-control-sm" />
              </div>
              <div class="col-6 mb-3">
                <label class="form-label small">Giờ hẹn</label>
                <select v-model="newLichHen.appointmentTime" class="form-select form-select-sm">
                  <option>08:00</option>
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small">Trạng thái</label>
              <select v-model="newLichHen.status" class="form-select form-select-sm">
                <option>Chờ xác nhận</option>
                <option>Đã xác nhận</option>
                <option>Đã hủy</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small">Tổng tiền</label>
              <input v-model="newLichHen.totalPrice" required type="number" min="0" class="form-control form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label small">Ghi chú</label>
              <textarea v-model="newLichHen.note" rows="2" class="form-control form-control-sm"></textarea>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-success btn-sm flex-fill" @click="addLichHen">Thêm</button>
              <button type="button" class="btn btn-warning btn-sm flex-fill" @click="updateLichHen">Cập nhật</button>
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
                  <th class="small">Dịch vụ</th>
                  <th class="small">Thời gian</th>
                  <th class="small">Tiền</th>
                  <th class="small">Trạng thái</th>
                  <th class="small text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="appointment in listLichHenHienThi()" :key="appointment.id">
                  <td class="small">
                    <div class="fw-bold">{{ appointment.customerName }}</div>
                    <div class="text-muted">{{ appointment.phone }}</div>
                  </td>
                  <td class="small">
                    <div>{{ appointment.serviceName }}</div>
                    <div class="text-muted">{{ appointment.doctorName }}</div>
                  </td>
                  <td class="small">{{ appointment.appointmentDate }} {{ appointment.appointmentTime }}</td>
                  <td class="small">{{ formatPrice(appointment.totalPrice) }}</td>
                  <td>
                    <span
                      class="badge"
                      :class="appointment.status === 'Đã xác nhận' ? 'bg-success' : appointment.status === 'Đã hủy' ? 'bg-secondary' : 'bg-warning text-dark'"
                    >
                      {{ appointment.status }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-link text-success" @click="detailLichHen(appointment)">Sửa</button>
                    <button
                      v-if="appointment.status !== 'Đã xác nhận'"
                      class="btn btn-sm btn-link text-success"
                      @click="changeTrangThai(appointment, 'Đã xác nhận')"
                    >
                      Duyệt
                    </button>
                    <button
                      v-if="appointment.status !== 'Đã hủy'"
                      class="btn btn-sm btn-link text-warning"
                      @click="changeTrangThai(appointment, 'Đã hủy')"
                    >
                      Hủy
                    </button>
                    <button class="btn btn-sm btn-link text-danger" @click="removeLichHen(appointment)">Xóa</button>
                  </td>
                </tr>
                <tr v-if="listLichHenHienThi().length === 0">
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
