<script setup>
import { computed } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import StatCard from '@/components/admin/StatCard.vue'
import { formatPrice } from '@/data/services'
import { useAdminDataStore } from '@/stores/adminData'

const adminDataStore = useAdminDataStore()

const confirmedAppointments = computed(() =>
  adminDataStore.appointments.filter((item) => item.status === 'Đã xác nhận')
)

const unpaidInvoices = computed(() =>
  adminDataStore.invoices.filter((item) => item.status === 'Chưa thanh toán')
)

const totalRevenue = computed(() =>
  adminDataStore.invoices
    .filter((item) => item.status === 'Đã thanh toán')
    .reduce((total, item) => total + Number(item.amount || 0), 0)
)
</script>

<template>
  <PageHeader title="Tổng quan" description="Theo dõi nhanh hoạt động của phòng khám" />

  <div class="row g-3 mb-4">
    <div class="col-6 col-lg-3">
      <StatCard label="Lịch hẹn" :value="adminDataStore.appointments.length" note="Tất cả lịch" />
    </div>
    <div class="col-6 col-lg-3">
      <StatCard label="Đã xác nhận" :value="confirmedAppointments.length" note="Sẵn sàng khám" />
    </div>
    <div class="col-6 col-lg-3">
      <StatCard label="Doanh thu" :value="formatPrice(totalRevenue)" note="Đã thanh toán" />
    </div>
    <div class="col-6 col-lg-3">
      <StatCard label="Hóa đơn chờ" :value="unpaidInvoices.length" note="Cần thu tiền" color="warning" />
    </div>
  </div>

  <div class="row g-3">
    <div class="col-lg-8">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0">Lịch hẹn gần đây</h6>
            <RouterLink class="text-success text-decoration-none small" :to="{ name: 'admin-appointments' }">
              Xem tất cả
            </RouterLink>
          </div>
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th class="small">Khách hàng</th>
                  <th class="small">Dịch vụ</th>
                  <th class="small">Bác sĩ</th>
                  <th class="small">Thời gian</th>
                  <th class="small">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="appointment in adminDataStore.appointments.slice(0, 5)" :key="appointment.id">
                  <td class="small">{{ appointment.customerName }}</td>
                  <td class="small">{{ appointment.serviceName }}</td>
                  <td class="small">{{ appointment.doctorName }}</td>
                  <td class="small">{{ appointment.appointmentDate }} {{ appointment.appointmentTime }}</td>
                  <td>
                    <span
                      class="badge"
                      :class="appointment.status === 'Đã xác nhận' ? 'bg-success' : appointment.status === 'Đã hủy' ? 'bg-secondary' : 'bg-warning text-dark'"
                    >
                      {{ appointment.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h6 class="mb-3">Dữ liệu quản trị</h6>
          <div class="d-flex justify-content-between border-bottom py-2 small">
            <span>Dịch vụ</span>
            <strong>{{ adminDataStore.services.length }}</strong>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2 small">
            <span>Khách hàng</span>
            <strong>{{ adminDataStore.customers.length }}</strong>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2 small">
            <span>Nhân viên</span>
            <strong>{{ adminDataStore.staff.length }}</strong>
          </div>
          <div class="d-flex justify-content-between py-2 small">
            <span>Hóa đơn</span>
            <strong>{{ adminDataStore.invoices.length }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
