<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { services, formatPrice } from '@/data/services'
import { staff } from '@/data/staff'
import { customers } from '@/data/customers'

const router = useRouter()
const currentPage = ref('dashboard')

function navigate(page) {
  currentPage.value = page
}
</script>

<template>
  <div class="d-flex">
    <div class="bg-dark text-white d-flex flex-column" style="width: 250px; min-height: 100vh">
      <div class="p-4 border-bottom border-secondary">
        <h5 class="mb-0">BiTeeth</h5>
        <small class="text-muted">Admin Panel</small>
      </div>

      <div class="p-3">
        <p class="text-uppercase small text-muted mb-2">Tổng quan</p>
        <a href="#" @click.prevent="navigate('dashboard')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'dashboard' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/1828/1828765.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Dashboard</span>
        </a>

        <p class="text-uppercase small text-muted mb-2 mt-3">Quản lý</p>
        <a href="#" @click.prevent="navigate('booking')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'booking' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/2693/2693507.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Bán hàng / Đặt lịch</span>
        </a>
        <a href="#" @click.prevent="navigate('customers')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'customers' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/1077/1077012.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Quản lý khách hàng</span>
        </a>
        <a href="#" @click.prevent="navigate('staff')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'staff' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/3135/3135715.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Quản lý nhân viên</span>
        </a>
        <a href="#" @click.prevent="navigate('services')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'services' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/2966/2966327.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Quản lý dịch vụ</span>
        </a>
        <a href="#" @click.prevent="navigate('invoices')" :class="['d-flex align-items-center gap-2 text-white text-decoration-none p-2 rounded mb-1', currentPage === 'invoices' ? 'bg-success' : '']">
          <img src="https://cdn-icons-png.flaticon.com/64/3135/3135706.png" style="width: 20px; height: 20px; filter: invert(1)" alt="" />
          <span class="small">Quản lý hoá đơn</span>
        </a>
      </div>

      <div class="mt-auto p-3 border-top border-secondary d-flex align-items-center gap-2">
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop" class="rounded-circle" style="width: 40px; height: 40px" alt="Admin" />
        <div>
          <div class="small fw-bold">Admin</div>
          <div class="small text-muted">Quản trị viên</div>
        </div>
      </div>
    </div>

    <div class="flex-fill bg-light" style="min-height: 100vh">
      <div class="bg-white border-bottom p-3 d-flex justify-content-between align-items-center">
        <h5 class="mb-0">{{ currentPage === 'dashboard' ? 'Dashboard' : currentPage === 'booking' ? 'Bán hàng / Đặt lịch' : currentPage === 'customers' ? 'Quản lý khách hàng' : currentPage === 'staff' ? 'Quản lý nhân viên' : currentPage === 'services' ? 'Quản lý dịch vụ' : 'Quản lý hoá đơn' }}</h5>
        <div class="d-flex align-items-center gap-3">
          <span class="badge bg-light text-dark">Thứ Năm, 28/05/2026</span>
          <button @click="router.push('/')" class="btn btn-sm btn-outline-secondary">← Trang chủ</button>
        </div>
      </div>

      <div v-show="currentPage === 'dashboard'" class="p-4">
        <h4 class="mb-2">Tổng quan</h4>
        <p class="text-muted mb-4">Chào buổi sáng! Hôm nay có 12 lịch hẹn đang chờ xác nhận.</p>
        <div class="row g-3 mb-4">
          <div class="col-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="small text-muted mb-2">Lịch hẹn hôm nay</div>
                <h3 class="mb-2">24</h3>
                <span class="badge bg-success bg-opacity-10 text-success small">+3 so với hôm qua</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="small text-muted mb-2">Doanh thu tháng</div>
                <h3 class="mb-2">48.2M</h3>
                <span class="badge bg-success bg-opacity-10 text-success small">+12% so với T4</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="small text-muted mb-2">Khách hàng mới</div>
                <h3 class="mb-2">38</h3>
                <span class="badge bg-warning bg-opacity-10 text-warning small">Trong 30 ngày qua</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="small text-muted mb-2">Hoá đơn chờ</div>
                <h3 class="mb-2">7</h3>
                <span class="badge bg-danger bg-opacity-10 text-danger small">Chưa thanh toán</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0">Lịch hẹn gần đây</h6>
                  <a href="#" @click.prevent="navigate('booking')" class="text-success text-decoration-none small">Xem tất cả →</a>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead class="table-light">
                      <tr>
                        <th class="small">Khách hàng</th>
                        <th class="small">Dịch vụ</th>
                        <th class="small">Bác sĩ</th>
                        <th class="small">Giờ hẹn</th>
                        <th class="small">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="small">
                          <div class="d-flex align-items-center gap-2">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                            <span>Nguyễn Thị Mai</span>
                          </div>
                        </td>
                        <td class="small">Niềng răng</td>
                        <td class="small">BS. Nguyễn Minh</td>
                        <td class="small">09:00</td>
                        <td><span class="badge bg-success small">Xác nhận</span></td>
                      </tr>
                      <tr>
                        <td class="small">
                          <div class="d-flex align-items-center gap-2">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                            <span>Trần Văn Bình</span>
                          </div>
                        </td>
                        <td class="small">Nhổ răng khôn</td>
                        <td class="small">BS. Lê Văn Hùng</td>
                        <td class="small">10:00</td>
                        <td><span class="badge bg-warning small">Chờ xác nhận</span></td>
                      </tr>
                      <tr>
                        <td class="small">
                          <div class="d-flex align-items-center gap-2">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                            <span>Lê Thị Hoa</span>
                          </div>
                        </td>
                        <td class="small">Tẩy trắng răng</td>
                        <td class="small">BS. Trần Thị Linh</td>
                        <td class="small">14:00</td>
                        <td><span class="badge bg-success small">Xác nhận</span></td>
                      </tr>
                      <tr>
                        <td class="small">
                          <div class="d-flex align-items-center gap-2">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                            <span>Phạm Thanh Long</span>
                          </div>
                        </td>
                        <td class="small">Trám răng</td>
                        <td class="small">BS. Phạm Thị Lan</td>
                        <td class="small">15:30</td>
                        <td><span class="badge bg-secondary small">Huỷ</span></td>
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
                <h6 class="mb-3">Dịch vụ phổ biến</h6>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small">Niềng răng</span>
                    <span class="small text-muted">75%</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 75%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small">Implant</span>
                    <span class="small text-muted">60%</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 60%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small">Răng sứ</span>
                    <span class="small text-muted">50%</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 50%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small">Tẩy trắng</span>
                    <span class="small text-muted">40%</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 40%"></div>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small">Nhổ răng</span>
                    <span class="small text-muted">30%</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 30%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 'booking'" class="p-4">
        <h4 class="mb-2">Bán hàng / Đặt lịch</h4>
        <p class="text-muted mb-4">Quản lý lịch hẹn và tạo lịch hẹn mới cho khách hàng</p>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h6 class="mb-3">Tạo lịch hẹn mới</h6>
                <div class="mb-3">
                  <label class="form-label small">Khách hàng</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Tên hoặc SĐT khách hàng" />
                </div>
                <div class="mb-3">
                  <label class="form-label small">Dịch vụ</label>
                  <select class="form-select form-select-sm">
                    <option value="">Chọn dịch vụ</option>
                    <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }} – {{ formatPrice(service.price) }}{{ service.unit ? '/' + service.unit : '' }}</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label small">Bác sĩ</label>
                  <select class="form-select form-select-sm">
                    <option value="">Chọn bác sĩ</option>
                    <option v-for="s in staff.filter(s => s.role === 'Bác sĩ')" :key="s.id" :value="s.id">{{ s.name }}</option>
                  </select>
                </div>
                <div class="row g-2 mb-3">
                  <div class="col-6">
                    <label class="form-label small">Ngày</label>
                    <input type="date" class="form-control form-control-sm" />
                  </div>
                  <div class="col-6">
                    <label class="form-label small">Giờ</label>
                    <select class="form-select form-select-sm">
                      <option>08:00</option>
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>11:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label small">Ghi chú</label>
                  <textarea class="form-control form-control-sm" rows="2" placeholder="Ghi chú nội bộ..."></textarea>
                </div>
                <button class="btn btn-success w-100 btn-sm">Tạo lịch hẹn</button>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0">Lịch tháng 5/2026</h6>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-success btn-sm">← Trước</button>
                    <button class="btn btn-outline-success btn-sm">Sau →</button>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered text-center small">
                    <thead class="table-light">
                      <tr>
                        <th>CN</th>
                        <th>T2</th>
                        <th>T3</th>
                        <th>T4</th>
                        <th>T5</th>
                        <th>T6</th>
                        <th>T7</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-muted">27</td>
                        <td class="text-muted">28</td>
                        <td class="text-muted">29</td>
                        <td class="text-muted">30</td>
                        <td>1</td>
                        <td>2<div class="badge bg-success bg-opacity-10 text-success small mt-1">09:00</div></td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>5<div class="badge bg-success bg-opacity-10 text-success small mt-1">10:00</div></td>
                        <td>6</td>
                        <td>7<div class="badge bg-success bg-opacity-10 text-success small mt-1">09:30</div></td>
                        <td>8</td>
                        <td>9<div class="badge bg-success bg-opacity-10 text-success small mt-1">11:00</div></td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>12<div class="badge bg-success bg-opacity-10 text-success small mt-1">08:30</div></td>
                        <td>13</td>
                        <td>14</td>
                        <td>15<div class="badge bg-success bg-opacity-10 text-success small mt-1">15:00</div></td>
                        <td>16<div class="badge bg-success bg-opacity-10 text-success small mt-1">09:00</div></td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20<div class="badge bg-success bg-opacity-10 text-success small mt-1">10:30</div></td>
                        <td>21</td>
                        <td>22<div class="badge bg-success bg-opacity-10 text-success small mt-1">14:00</div></td>
                        <td>23</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>26<div class="badge bg-success bg-opacity-10 text-success small mt-1">09:00</div></td>
                        <td>27</td>
                        <td class="table-success fw-bold">28<div class="badge bg-success small mt-1">09:00</div></td>
                        <td>29</td>
                        <td>30<div class="badge bg-success bg-opacity-10 text-success small mt-1">11:00</div></td>
                        <td>31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0">Danh sách lịch hẹn</h6>
                  <div class="d-flex gap-2">
                    <input class="form-control form-control-sm" type="search" placeholder="Tìm khách hàng..." style="width: 200px" />
                    <select class="form-select form-select-sm" style="width: auto">
                      <option>Tất cả</option>
                      <option>Xác nhận</option>
                      <option>Chờ xác nhận</option>
                      <option>Huỷ</option>
                    </select>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead class="table-light">
                      <tr>
                        <th class="small">#</th>
                        <th class="small">Khách hàng</th>
                        <th class="small">Dịch vụ</th>
                        <th class="small">Bác sĩ</th>
                        <th class="small">Ngày & Giờ</th>
                        <th class="small">Trạng thái</th>
                        <th class="small"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="small text-muted">001</td>
                        <td class="small">Nguyễn Thị Mai</td>
                        <td class="small">Niềng răng</td>
                        <td class="small">BS. Nguyễn Minh</td>
                        <td class="small">28/05/2026 – 09:00</td>
                        <td><span class="badge bg-success small">Xác nhận</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Huỷ</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small text-muted">002</td>
                        <td class="small">Trần Văn Bình</td>
                        <td class="small">Nhổ răng khôn</td>
                        <td class="small">BS. Lê Văn Hùng</td>
                        <td class="small">28/05/2026 – 10:00</td>
                        <td><span class="badge bg-warning small">Chờ xác nhận</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Duyệt</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Huỷ</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small text-muted">003</td>
                        <td class="small">Lê Thị Hoa</td>
                        <td class="small">Tẩy trắng răng</td>
                        <td class="small">BS. Trần Thị Linh</td>
                        <td class="small">28/05/2026 – 14:00</td>
                        <td><span class="badge bg-success small">Xác nhận</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Huỷ</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small text-muted">004</td>
                        <td class="small">Phạm Thanh Long</td>
                        <td class="small">Trám răng</td>
                        <td class="small">BS. Phạm Thị Lan</td>
                        <td class="small">27/05/2026 – 15:30</td>
                        <td><span class="badge bg-secondary small">Huỷ</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0">Tạo lại</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 'customers'" class="p-4">
        <h4 class="mb-2">Quản lý khách hàng</h4>
        <p class="text-muted mb-4">Danh sách và hồ sơ bệnh nhân</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <input class="form-control form-control-sm" type="search" placeholder="Tìm theo tên, SĐT, email..." style="width: 300px" />
          <button class="btn btn-success btn-sm">+ Thêm khách hàng</button>
        </div>
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-light">
                  <tr>
                    <th class="small">Khách hàng</th>
                    <th class="small">Điện thoại</th>
                    <th class="small">Email</th>
                    <th class="small">Lần khám gần nhất</th>
                    <th class="small">Số lượt khám</th>
                    <th class="small">Trạng thái</th>
                    <th class="small"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="customer in customers" :key="customer.id">
                    <td class="small">
                      <div class="d-flex align-items-center gap-2">
                        <img :src="customer.image" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                        <div>
                          <div>{{ customer.name }}</div>
                          <div class="text-muted">{{ customer.gender }} – {{ customer.age }} tuổi</div>
                        </div>
                      </div>
                    </td>
                    <td class="small">{{ customer.phone }}</td>
                    <td class="small">{{ customer.email }}</td>
                    <td class="small">{{ customer.lastVisit }}</td>
                    <td class="small">{{ customer.visits }}</td>
                    <td><span :class="['badge small', customer.active ? 'bg-success' : 'bg-secondary']">{{ customer.active ? 'Hoạt động' : 'Không hoạt động' }}</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">Hồ sơ</button>
                      <button class="btn btn-sm btn-link text-success p-0">Đặt lịch</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 'staff'" class="p-4">
        <h4 class="mb-2">Quản lý nhân viên</h4>
        <p class="text-muted mb-4">Danh sách bác sĩ và nhân viên phòng khám</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex gap-2">
            <input class="form-control form-control-sm" type="search" placeholder="Tìm nhân viên..." style="width: 200px" />
            <select class="form-select form-select-sm" style="width: auto">
              <option>Tất cả</option>
              <option>Bác sĩ</option>
              <option>Lễ tân</option>
            </select>
          </div>
          <button class="btn btn-success btn-sm">+ Thêm nhân viên</button>
        </div>
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-light">
                  <tr>
                    <th class="small">Nhân viên</th>
                    <th class="small">Chức vụ</th>
                    <th class="small">Chuyên khoa</th>
                    <th class="small">Điện thoại</th>
                    <th class="small">Lịch làm việc</th>
                    <th class="small">Trạng thái</th>
                    <th class="small"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="s in staff" :key="s.id">
                    <td class="small">
                      <div class="d-flex align-items-center gap-2">
                        <img :src="s.image" class="rounded-circle" style="width: 32px; height: 32px" alt="" />
                        <div>
                          <div>{{ s.name }}</div>
                          <div class="text-muted">{{ s.experience }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="small">{{ s.role }}</td>
                    <td class="small">{{ s.specialty }}</td>
                    <td class="small">{{ s.phone }}</td>
                    <td class="small">{{ s.schedule }}</td>
                    <td><span :class="['badge small', s.active ? 'bg-success' : 'bg-secondary']">{{ s.active ? 'Đang làm việc' : 'Nghỉ phép' }}</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                      <button class="btn btn-sm btn-link text-danger p-0">Xoá</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 'services'" class="p-4">
        <h4 class="mb-2">Quản lý dịch vụ</h4>
        <p class="text-muted mb-4">Danh sách dịch vụ và bảng giá</p>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h6 class="mb-3">Thêm dịch vụ mới</h6>
                <div class="mb-3">
                  <label class="form-label small">Tên dịch vụ</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Ví dụ: Niềng răng" />
                </div>
                <div class="mb-3">
                  <label class="form-label small">Giá (VNĐ)</label>
                  <input type="number" class="form-control form-control-sm" placeholder="15000000" />
                </div>
                <div class="mb-3">
                  <label class="form-label small">Mô tả</label>
                  <textarea class="form-control form-control-sm" rows="2" placeholder="Mô tả ngắn..."></textarea>
                </div>
                <button class="btn btn-success w-100 btn-sm">Thêm dịch vụ</button>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead class="table-light">
                      <tr>
                        <th class="small">Dịch vụ</th>
                        <th class="small">Giá</th>
                        <th class="small">Mô tả</th>
                        <th class="small">Trạng thái</th>
                        <th class="small"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="small fw-bold">Niềng răng</td>
                        <td class="small">15.000.000đ</td>
                        <td class="small">Chỉnh nha hiện đại</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small fw-bold">Nhổ răng khôn</td>
                        <td class="small">500.000đ</td>
                        <td class="small">Xử lý nhanh, an toàn</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small fw-bold">Trám răng</td>
                        <td class="small">300.000đ</td>
                        <td class="small">Phục hình răng sâu</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small fw-bold">Răng sứ Zirconia</td>
                        <td class="small">3.500.000đ/răng</td>
                        <td class="small">Bọc sứ siêu bền</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small fw-bold">Implant răng</td>
                        <td class="small">25.000.000đ</td>
                        <td class="small">Cấy ghép vĩnh viễn</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="small fw-bold">Tẩy trắng răng</td>
                        <td class="small">1.500.000đ</td>
                        <td class="small">Công nghệ hiện đại</td>
                        <td><span class="badge bg-success small">Hoạt động</span></td>
                        <td>
                          <button class="btn btn-sm btn-link text-success p-0 me-2">Sửa</button>
                          <button class="btn btn-sm btn-link text-danger p-0">Ẩn</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 'invoices'" class="p-4">
        <h4 class="mb-2">Quản lý hoá đơn</h4>
        <p class="text-muted mb-4">Danh sách hoá đơn và thanh toán</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex gap-2">
            <input class="form-control form-control-sm" type="search" placeholder="Tìm hoá đơn..." style="width: 200px" />
            <select class="form-select form-select-sm" style="width: auto">
              <option>Tất cả</option>
              <option>Đã thanh toán</option>
              <option>Chưa thanh toán</option>
            </select>
          </div>
          <button class="btn btn-success btn-sm">+ Tạo hoá đơn</button>
        </div>
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-light">
                  <tr>
                    <th class="small">Mã HĐ</th>
                    <th class="small">Khách hàng</th>
                    <th class="small">Dịch vụ</th>
                    <th class="small">Số tiền</th>
                    <th class="small">Ngày tạo</th>
                    <th class="small">Trạng thái</th>
                    <th class="small"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="small text-muted">HD001</td>
                    <td class="small">Nguyễn Thị Mai</td>
                    <td class="small">Niềng răng</td>
                    <td class="small fw-bold">15.000.000đ</td>
                    <td class="small">28/05/2026</td>
                    <td><span class="badge bg-success small">Đã thanh toán</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">In HĐ</button>
                      <button class="btn btn-sm btn-link text-success p-0">Chi tiết</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="small text-muted">HD002</td>
                    <td class="small">Trần Văn Bình</td>
                    <td class="small">Nhổ răng khôn</td>
                    <td class="small fw-bold">500.000đ</td>
                    <td class="small">28/05/2026</td>
                    <td><span class="badge bg-warning small">Chưa thanh toán</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">Thu tiền</button>
                      <button class="btn btn-sm btn-link text-success p-0">Chi tiết</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="small text-muted">HD003</td>
                    <td class="small">Lê Thị Hoa</td>
                    <td class="small">Tẩy trắng răng</td>
                    <td class="small fw-bold">1.500.000đ</td>
                    <td class="small">27/05/2026</td>
                    <td><span class="badge bg-success small">Đã thanh toán</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">In HĐ</button>
                      <button class="btn btn-sm btn-link text-success p-0">Chi tiết</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="small text-muted">HD004</td>
                    <td class="small">Phạm Thanh Long</td>
                    <td class="small">Trám răng</td>
                    <td class="small fw-bold">300.000đ</td>
                    <td class="small">26/05/2026</td>
                    <td><span class="badge bg-warning small">Chưa thanh toán</span></td>
                    <td>
                      <button class="btn btn-sm btn-link text-success p-0 me-2">Thu tiền</button>
                      <button class="btn btn-sm btn-link text-success p-0">Chi tiết</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
