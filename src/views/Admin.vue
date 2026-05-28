<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPage = ref('dashboard')

const pages = {
  dashboard: 'Dashboard',
  booking: 'Bán hàng / Đặt lịch',
  customers: 'Quản lý khách hàng',
  staff: 'Quản lý nhân viên',
  services: 'Quản lý dịch vụ',
  invoices: 'Quản lý hoá đơn',
}

function navigate(page) {
  currentPage.value = page
}
</script>

<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <div class="sidebar">
      <div class="sidebar-brand">
        BiTeeth
        <span>Admin Panel</span>
      </div>

      <p class="sidebar-section">Tổng quan</p>
      <ul class="sidebar-nav">
        <li>
          <a
            href="#"
            @click.prevent="navigate('dashboard')"
            :class="{ active: currentPage === 'dashboard' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/1828/1828765.png" alt="" />
            Dashboard
          </a>
        </li>
      </ul>

      <p class="sidebar-section">Quản lý</p>
      <ul class="sidebar-nav">
        <li>
          <a
            href="#"
            @click.prevent="navigate('booking')"
            :class="{ active: currentPage === 'booking' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/2693/2693507.png" alt="" />
            Bán hàng / Đặt lịch
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="navigate('customers')"
            :class="{ active: currentPage === 'customers' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/1077/1077012.png" alt="" />
            Quản lý khách hàng
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="navigate('staff')"
            :class="{ active: currentPage === 'staff' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/3135/3135715.png" alt="" />
            Quản lý nhân viên
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="navigate('services')"
            :class="{ active: currentPage === 'services' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/2966/2966327.png" alt="" />
            Quản lý dịch vụ
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="navigate('invoices')"
            :class="{ active: currentPage === 'invoices' }"
          >
            <img src="https://cdn-icons-png.flaticon.com/64/3135/3135706.png" alt="" />
            Quản lý hoá đơn
          </a>
        </li>
      </ul>

      <div class="sidebar-footer">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop"
          alt="Admin"
        />
        <div>
          <div class="name">Admin</div>
          <div class="role">Quản trị viên</div>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <div class="main-content">
      <!-- TOPBAR -->
      <div class="topbar">
        <h5>{{ pages[currentPage] }}</h5>
        <div class="d-flex align-items-center gap-3">
          <span class="date-pill">Thứ Năm, 28/05/2026</span>
          <button
            @click="router.push('/')"
            class="btn btn-sm btn-outline-secondary"
            style="border-radius: 2px; font-size: 0.8rem"
          >
            ← Trang chủ
          </button>
        </div>
      </div>

      <!-- ── DASHBOARD ── -->
      <div v-show="currentPage === 'dashboard'" class="page-body">
        <div class="page-header">
          <h4>Tổng quan</h4>
          <p>Chào buổi sáng! Hôm nay có 12 lịch hẹn đang chờ xác nhận.</p>
        </div>
        <div class="row g-3 mb-4">
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Lịch hẹn hôm nay</div>
              <div class="value mb-2">24</div>
              <span class="badge-change bg-success bg-opacity-10 text-success"
                >+3 so với hôm qua</span
              >
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Doanh thu tháng</div>
              <div class="value mb-2">48.2M</div>
              <span class="badge-change bg-success bg-opacity-10 text-success">+12% so với T4</span>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Khách hàng mới</div>
              <div class="value mb-2">38</div>
              <span class="badge-change bg-warning bg-opacity-10 text-warning"
                >Trong 30 ngày qua</span
              >
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Hoá đơn chờ</div>
              <div class="value mb-2">7</div>
              <span class="badge-change bg-danger bg-opacity-10 text-danger">Chưa thanh toán</span>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-lg-8">
            <div class="section-title">
              <span>Lịch hẹn gần đây</span>
              <a
                href="#"
                @click.prevent="navigate('booking')"
                style="font-size: 0.8rem; color: var(--teal); text-decoration: none"
                >Xem tất cả →</a
              >
            </div>
            <div class="data-table">
              <table class="table table-borderless mb-0">
                <thead>
                  <tr>
                    <th>Khách hàng</th>
                    <th>Dịch vụ</th>
                    <th>Bác sĩ</th>
                    <th>Giờ hẹn</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <img
                          class="avatar-sm"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
                          alt=""
                        />
                        <span>Nguyễn Thị Mai</span>
                      </div>
                    </td>
                    <td>Niềng răng</td>
                    <td>BS. Nguyễn Minh</td>
                    <td>09:00</td>
                    <td><span class="badge-status badge-confirmed">Xác nhận</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <img
                          class="avatar-sm"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop"
                          alt=""
                        />
                        <span>Trần Văn Bình</span>
                      </div>
                    </td>
                    <td>Nhổ răng khôn</td>
                    <td>BS. Lê Văn Hùng</td>
                    <td>10:00</td>
                    <td><span class="badge-status badge-pending">Chờ xác nhận</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <img
                          class="avatar-sm"
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop"
                          alt=""
                        />
                        <span>Lê Thị Hoa</span>
                      </div>
                    </td>
                    <td>Tẩy trắng răng</td>
                    <td>BS. Trần Thị Linh</td>
                    <td>14:00</td>
                    <td><span class="badge-status badge-confirmed">Xác nhận</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <img
                          class="avatar-sm"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop"
                          alt=""
                        />
                        <span>Phạm Thanh Long</span>
                      </div>
                    </td>
                    <td>Trám răng</td>
                    <td>BS. Phạm Thị Lan</td>
                    <td>15:30</td>
                    <td><span class="badge-status badge-cancelled">Huỷ</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="section-title"><span>Dịch vụ phổ biến</span></div>
            <div class="summary-card">
              <div class="d-flex flex-column gap-3">
                <div
                  v-for="item in [
                    { name: 'Niềng răng', pct: 75 },
                    { name: 'Implant', pct: 60 },
                    { name: 'Răng sứ', pct: 50 },
                    { name: 'Tẩy trắng', pct: 40 },
                    { name: 'Nhổ răng', pct: 30 },
                  ]"
                  :key="item.name"
                  class="d-flex align-items-center justify-content-between"
                >
                  <span style="font-size: 0.875rem">{{ item.name }}</span>
                  <div class="d-flex align-items-center gap-2">
                    <div style="width: 80px; height: 6px; background: #e5e7eb; border-radius: 3px">
                      <div
                        :style="{
                          width: item.pct + '%',
                          height: '100%',
                          background: 'var(--teal)',
                          borderRadius: '3px',
                        }"
                      ></div>
                    </div>
                    <span style="font-size: 0.78rem; color: var(--muted); width: 30px"
                      >{{ item.pct }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── BOOKING ── -->
      <div v-show="currentPage === 'booking'" class="page-body">
        <div class="page-header">
          <h4>Bán hàng / Đặt lịch</h4>
          <p>Quản lý lịch hẹn và tạo lịch hẹn mới cho khách hàng</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="mini-form">
              <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 1.25rem">
                Tạo lịch hẹn mới
              </h6>
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label">Khách hàng</label>
                  <input type="text" class="form-control" placeholder="Tên hoặc SĐT khách hàng" />
                </div>
                <div class="col-12">
                  <label class="form-label">Dịch vụ</label>
                  <select class="form-select">
                    <option value="">Chọn dịch vụ</option>
                    <option>Niềng răng – 15.000.000đ</option>
                    <option>Nhổ răng khôn – 500.000đ</option>
                    <option>Trám răng – 300.000đ</option>
                    <option>Răng sứ Zirconia – 3.500.000đ/răng</option>
                    <option>Implant – 25.000.000đ</option>
                    <option>Tẩy trắng – 1.500.000đ</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label">Bác sĩ</label>
                  <select class="form-select">
                    <option value="">Chọn bác sĩ</option>
                    <option>BS. Nguyễn Minh</option>
                    <option>BS. Trần Thị Linh</option>
                    <option>BS. Lê Văn Hùng</option>
                    <option>BS. Phạm Thị Lan</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label">Ngày</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-6">
                  <label class="form-label">Giờ</label>
                  <select class="form-select">
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
                <div class="col-12">
                  <label class="form-label">Ghi chú</label>
                  <textarea
                    class="form-control"
                    rows="2"
                    placeholder="Ghi chú nội bộ..."
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-teal w-100">Tạo lịch hẹn</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="section-title">
              <span>Lịch tháng 5/2026</span>
              <div class="d-flex gap-2">
                <button class="btn btn-outline-teal btn-sm">← Trước</button>
                <button class="btn btn-outline-teal btn-sm">Sau →</button>
              </div>
            </div>
            <div class="calendar-grid mb-1">
              <div
                v-for="d in ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']"
                :key="d"
                class="cal-header-day"
              >
                {{ d }}
              </div>
            </div>
            <div class="calendar-grid">
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">27</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">28</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">29</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">30</div></div>
              <div class="cal-day"><div class="day-num">1</div></div>
              <div class="cal-day">
                <div class="day-num">2</div>
                <div class="cal-event">09:00 Trần Bình</div>
              </div>
              <div class="cal-day"><div class="day-num">3</div></div>
              <div class="cal-day"><div class="day-num">4</div></div>
              <div class="cal-day">
                <div class="day-num">5</div>
                <div class="cal-event">10:00 Lê Hoa</div>
                <div class="cal-event">14:00 Mai Anh</div>
              </div>
              <div class="cal-day"><div class="day-num">6</div></div>
              <div class="cal-day">
                <div class="day-num">7</div>
                <div class="cal-event">09:30 Nguyễn Minh</div>
              </div>
              <div class="cal-day"><div class="day-num">8</div></div>
              <div class="cal-day">
                <div class="day-num">9</div>
                <div class="cal-event">11:00 Phương Linh</div>
              </div>
              <div class="cal-day"><div class="day-num">10</div></div>
              <div class="cal-day"><div class="day-num">11</div></div>
              <div class="cal-day">
                <div class="day-num">12</div>
                <div class="cal-event">08:30 Quang Huy</div>
              </div>
              <div class="cal-day"><div class="day-num">13</div></div>
              <div class="cal-day"><div class="day-num">14</div></div>
              <div class="cal-day">
                <div class="day-num">15</div>
                <div class="cal-event">15:00 Thảo Vy</div>
              </div>
              <div class="cal-day">
                <div class="day-num">16</div>
                <div class="cal-event">09:00 Thành Nam</div>
              </div>
              <div class="cal-day"><div class="day-num">17</div></div>
              <div class="cal-day"><div class="day-num">18</div></div>
              <div class="cal-day"><div class="day-num">19</div></div>
              <div class="cal-day">
                <div class="day-num">20</div>
                <div class="cal-event">10:30 Bích Ngọc</div>
              </div>
              <div class="cal-day"><div class="day-num">21</div></div>
              <div class="cal-day">
                <div class="day-num">22</div>
                <div class="cal-event">14:00 Văn Khải</div>
              </div>
              <div class="cal-day"><div class="day-num">23</div></div>
              <div class="cal-day"><div class="day-num">24</div></div>
              <div class="cal-day"><div class="day-num">25</div></div>
              <div class="cal-day">
                <div class="day-num">26</div>
                <div class="cal-event">09:00 Minh Châu</div>
              </div>
              <div class="cal-day"><div class="day-num">27</div></div>
              <div class="cal-day cal-today">
                <div class="day-num" style="color: var(--teal)">28</div>
                <div class="cal-event">09:00 Thị Mai</div>
                <div class="cal-event">14:00 Lê Hoa</div>
              </div>
              <div class="cal-day"><div class="day-num">29</div></div>
              <div class="cal-day">
                <div class="day-num">30</div>
                <div class="cal-event">11:00 Bảo Long</div>
              </div>
              <div class="cal-day"><div class="day-num">31</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">1</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">2</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">3</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">4</div></div>
              <div class="cal-day" style="opacity: 0.4"><div class="day-num">5</div></div>
            </div>
          </div>
        </div>

        <div class="section-title mt-4">
          <span>Danh sách lịch hẹn</span>
          <div class="d-flex gap-2">
            <input class="search-bar" type="search" placeholder="Tìm khách hàng..." />
            <select class="filter-select form-select" style="width: auto">
              <option>Tất cả</option>
              <option>Xác nhận</option>
              <option>Chờ xác nhận</option>
              <option>Huỷ</option>
            </select>
          </div>
        </div>
        <div class="data-table">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Khách hàng</th>
                <th>Dịch vụ</th>
                <th>Bác sĩ</th>
                <th>Ngày & Giờ</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="color: var(--muted)">001</td>
                <td>Nguyễn Thị Mai</td>
                <td>Niềng răng</td>
                <td>BS. Nguyễn Minh</td>
                <td>28/05/2026 – 09:00</td>
                <td><span class="badge-status badge-confirmed">Xác nhận</span></td>
                <td>
                  <button class="action-btn">Sửa</button
                  ><button class="action-btn danger">Huỷ</button>
                </td>
              </tr>
              <tr>
                <td style="color: var(--muted)">002</td>
                <td>Trần Văn Bình</td>
                <td>Nhổ răng khôn</td>
                <td>BS. Lê Văn Hùng</td>
                <td>28/05/2026 – 10:00</td>
                <td><span class="badge-status badge-pending">Chờ xác nhận</span></td>
                <td>
                  <button class="action-btn">Duyệt</button
                  ><button class="action-btn danger">Huỷ</button>
                </td>
              </tr>
              <tr>
                <td style="color: var(--muted)">003</td>
                <td>Lê Thị Hoa</td>
                <td>Tẩy trắng răng</td>
                <td>BS. Trần Thị Linh</td>
                <td>28/05/2026 – 14:00</td>
                <td><span class="badge-status badge-confirmed">Xác nhận</span></td>
                <td>
                  <button class="action-btn">Sửa</button
                  ><button class="action-btn danger">Huỷ</button>
                </td>
              </tr>
              <tr>
                <td style="color: var(--muted)">004</td>
                <td>Phạm Thanh Long</td>
                <td>Trám răng</td>
                <td>BS. Phạm Thị Lan</td>
                <td>27/05/2026 – 15:30</td>
                <td><span class="badge-status badge-cancelled">Huỷ</span></td>
                <td><button class="action-btn">Tạo lại</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ── CUSTOMERS ── -->
      <div v-show="currentPage === 'customers'" class="page-body">
        <div class="page-header">
          <h4>Quản lý khách hàng</h4>
          <p>Danh sách và hồ sơ bệnh nhân</p>
        </div>
        <div class="filter-row">
          <input class="search-bar" type="search" placeholder="Tìm theo tên, SĐT, email..." />
          <button class="btn btn-teal">+ Thêm khách hàng</button>
        </div>
        <div class="data-table">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th>Khách hàng</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Lần khám gần nhất</th>
                <th>Số lượt khám</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="c in [
                  {
                    img: 'photo-1494790108377-be9c29b29330',
                    name: 'Nguyễn Thị Mai',
                    gender: 'Nữ – 28 tuổi',
                    phone: '0901 234 567',
                    email: 'mai.nguyen@email.com',
                    date: '28/05/2026',
                    visits: 5,
                    active: true,
                  },
                  {
                    img: 'photo-1507003211169-0a1dd7228f2d',
                    name: 'Trần Văn Bình',
                    gender: 'Nam – 35 tuổi',
                    phone: '0912 345 678',
                    email: 'binh.tran@email.com',
                    date: '28/05/2026',
                    visits: 2,
                    active: true,
                  },
                  {
                    img: 'photo-1544005313-94ddf0286df2',
                    name: 'Lê Thị Hoa',
                    gender: 'Nữ – 42 tuổi',
                    phone: '0923 456 789',
                    email: 'hoa.le@email.com',
                    date: '15/05/2026',
                    visits: 8,
                    active: true,
                  },
                  {
                    img: 'photo-1500648767791-00dcc994a43e',
                    name: 'Phạm Thanh Long',
                    gender: 'Nam – 50 tuổi',
                    phone: '0934 567 890',
                    email: 'long.pham@email.com',
                    date: '20/04/2026',
                    visits: 1,
                    active: false,
                  },
                ]"
                :key="c.name"
              >
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <img
                      class="avatar-sm"
                      :src="`https://images.unsplash.com/${c.img}?w=64&h=64&fit=crop`"
                      alt=""
                    />
                    <div>
                      <div style="font-weight: 500">{{ c.name }}</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">{{ c.gender }}</div>
                    </div>
                  </div>
                </td>
                <td>{{ c.phone }}</td>
                <td>{{ c.email }}</td>
                <td>{{ c.date }}</td>
                <td>{{ c.visits }}</td>
                <td>
                  <span
                    class="badge-status"
                    :class="c.active ? 'badge-active' : 'badge-inactive'"
                    >{{ c.active ? 'Hoạt động' : 'Không hoạt động' }}</span
                  >
                </td>
                <td>
                  <button class="action-btn">Hồ sơ</button
                  ><button class="action-btn">Đặt lịch</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ── STAFF ── -->
      <div v-show="currentPage === 'staff'" class="page-body">
        <div class="page-header">
          <h4>Quản lý nhân viên</h4>
          <p>Danh sách bác sĩ và nhân viên phòng khám</p>
        </div>
        <div class="filter-row">
          <div class="d-flex gap-2">
            <input class="search-bar" type="search" placeholder="Tìm nhân viên..." />
            <select class="filter-select form-select" style="width: auto">
              <option>Tất cả</option>
              <option>Bác sĩ</option>
              <option>Lễ tân</option>
            </select>
          </div>
          <button class="btn btn-teal">+ Thêm nhân viên</button>
        </div>
        <div class="data-table">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th>Nhân viên</th>
                <th>Chức vụ</th>
                <th>Chuyên khoa</th>
                <th>Điện thoại</th>
                <th>Lịch làm việc</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="s in [
                  {
                    img: 'photo-1612349317150-e413f6a5b16d',
                    name: 'Nguyễn Minh',
                    exp: '10 năm kinh nghiệm',
                    role: 'Bác sĩ',
                    spec: 'Chỉnh nha – Implant',
                    phone: '0901 111 222',
                    schedule: 'T2 – T6',
                    active: true,
                  },
                  {
                    img: 'photo-1559839734-2b71ea197ec2',
                    name: 'Trần Thị Linh',
                    exp: '7 năm kinh nghiệm',
                    role: 'Bác sĩ',
                    spec: 'Nha khoa thẩm mỹ',
                    phone: '0902 222 333',
                    schedule: 'T2 – T7',
                    active: true,
                  },
                  {
                    img: 'photo-1622253692010-333f2da6031d',
                    name: 'Lê Văn Hùng',
                    exp: '12 năm kinh nghiệm',
                    role: 'Bác sĩ',
                    spec: 'Phẫu thuật răng miệng',
                    phone: '0903 333 444',
                    schedule: 'T3 – T7',
                    active: true,
                  },
                  {
                    img: 'photo-1594824476967-48c8b964273f',
                    name: 'Phạm Thị Lan',
                    exp: '5 năm kinh nghiệm',
                    role: 'Bác sĩ',
                    spec: 'Nha khoa trẻ em',
                    phone: '0904 444 555',
                    schedule: 'T2 – T6',
                    active: true,
                  },
                  {
                    img: 'photo-1438761681033-6461ffad8d80',
                    name: 'Vũ Thu Hà',
                    exp: 'Lễ tân',
                    role: 'Lễ tân',
                    spec: '–',
                    phone: '0905 555 666',
                    schedule: 'T2 – T7',
                    active: false,
                  },
                ]"
                :key="s.name"
              >
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <img
                      class="avatar-sm"
                      :src="`https://images.unsplash.com/${s.img}?w=64&h=64&fit=crop`"
                      alt=""
                    />
                    <div>
                      <div style="font-weight: 500">{{ s.name }}</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">{{ s.exp }}</div>
                    </div>
                  </div>
                </td>
                <td>{{ s.role }}</td>
                <td>{{ s.spec }}</td>
                <td>{{ s.phone }}</td>
                <td>{{ s.schedule }}</td>
                <td>
                  <span
                    class="badge-status"
                    :class="s.active ? 'badge-active' : 'badge-inactive'"
                    >{{ s.active ? 'Đang làm việc' : 'Nghỉ phép' }}</span
                  >
                </td>
                <td>
                  <button class="action-btn">Sửa</button
                  ><button class="action-btn danger">Xoá</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ── SERVICES ── -->
      <div v-show="currentPage === 'services'" class="page-body">
        <div class="page-header">
          <h4>Quản lý dịch vụ</h4>
          <p>Danh sách dịch vụ và bảng giá</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="mini-form">
              <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 1.25rem">
                Thêm dịch vụ mới
              </h6>
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label">Tên dịch vụ</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="VD: Niềng răng trong suốt"
                  />
                </div>
                <div class="col-12">
                  <label class="form-label">Nhóm dịch vụ</label>
                  <select class="form-select">
                    <option>Chỉnh nha</option>
                    <option>Phẫu thuật</option>
                    <option>Thẩm mỹ</option>
                    <option>Phục hình</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label">Giá (đ)</label
                  ><input type="number" class="form-control" placeholder="0" />
                </div>
                <div class="col-6">
                  <label class="form-label">Thời gian (phút)</label
                  ><input type="number" class="form-control" placeholder="60" />
                </div>
                <div class="col-12">
                  <label class="form-label">Mô tả</label
                  ><textarea class="form-control" rows="2" placeholder="Mô tả ngắn..."></textarea>
                </div>
                <div class="col-12"><button class="btn btn-teal w-100">Thêm dịch vụ</button></div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="filter-row">
              <input class="search-bar" type="search" placeholder="Tìm dịch vụ..." />
              <select class="filter-select form-select" style="width: auto">
                <option>Tất cả nhóm</option>
                <option>Chỉnh nha</option>
                <option>Phẫu thuật</option>
                <option>Thẩm mỹ</option>
              </select>
            </div>
            <div class="data-table">
              <table class="table table-borderless mb-0">
                <thead>
                  <tr>
                    <th>Dịch vụ</th>
                    <th>Nhóm</th>
                    <th>Giá</th>
                    <th>Thời gian</th>
                    <th>Lượt dùng</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="sv in [
                      {
                        img: 'https://nhakhoaparkway.com/wp-content/uploads/2024/03/Nieng-rang-mac-cai_.jpg',
                        name: 'Niềng răng mắc cài',
                        group: 'Chỉnh nha',
                        price: '15.000.000đ',
                        time: '90 phút',
                        uses: 142,
                        active: true,
                      },
                      {
                        img: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Nho%CC%82%CC%89-ra%CC%86ng-kho%CC%82n.png',
                        name: 'Nhổ răng khôn',
                        group: 'Phẫu thuật',
                        price: '500.000đ',
                        time: '45 phút',
                        uses: 89,
                        active: true,
                      },
                      {
                        img: 'https://nhakhoaparkway.com/wp-content/uploads/2024/02/Di%CC%A3ch-vu%CC%A3-ha%CC%80n-tra%CC%81m-ra%CC%86ng-sa%CC%82u-ma%CC%A3%CC%86t-nhai.jpeg',
                        name: 'Trám răng Composite',
                        group: 'Phục hình',
                        price: '300.000đ',
                        time: '30 phút',
                        uses: 210,
                        active: true,
                      },
                      {
                        img: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Implant-rang.jpg',
                        name: 'Cấy ghép Implant',
                        group: 'Phục hình',
                        price: '25.000.000đ',
                        time: '120 phút',
                        uses: 34,
                        active: true,
                      },
                      {
                        img: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Tay-trang-rang-1.jpg',
                        name: 'Tẩy trắng răng',
                        group: 'Thẩm mỹ',
                        price: '1.500.000đ',
                        time: '60 phút',
                        uses: 76,
                        active: false,
                      },
                    ]"
                    :key="sv.name"
                  >
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <img class="service-icon" :src="sv.img" alt="" />
                        <span>{{ sv.name }}</span>
                      </div>
                    </td>
                    <td>{{ sv.group }}</td>
                    <td>{{ sv.price }}</td>
                    <td>{{ sv.time }}</td>
                    <td>{{ sv.uses }}</td>
                    <td>
                      <span
                        class="badge-status"
                        :class="sv.active ? 'badge-active' : 'badge-inactive'"
                        >{{ sv.active ? 'Hiển thị' : 'Ẩn' }}</span
                      >
                    </td>
                    <td>
                      <button class="action-btn">Sửa</button
                      ><button class="action-btn danger">{{ sv.active ? 'Ẩn' : 'Hiện' }}</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- ── INVOICES ── -->
      <div v-show="currentPage === 'invoices'" class="page-body">
        <div class="page-header">
          <h4>Quản lý hoá đơn</h4>
          <p>Theo dõi thanh toán và xuất hoá đơn</p>
        </div>
        <div class="row g-3 mb-4">
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Tổng doanh thu tháng</div>
              <div class="value mb-1">48.2M</div>
              <span style="font-size: 0.78rem; color: var(--muted)">đồng</span>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Đã thanh toán</div>
              <div class="value mb-1" style="color: var(--teal)">41.5M</div>
              <span style="font-size: 0.78rem; color: var(--muted)">86%</span>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Chưa thanh toán</div>
              <div class="value mb-1" style="color: #ef4444">6.7M</div>
              <span style="font-size: 0.78rem; color: var(--muted)">7 hoá đơn</span>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="stat-card">
              <div class="label">Tổng hoá đơn</div>
              <div class="value mb-1">58</div>
              <span style="font-size: 0.78rem; color: var(--muted)">trong tháng 5</span>
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="d-flex gap-2">
            <input class="search-bar" type="search" placeholder="Tìm hoá đơn, khách hàng..." />
            <select class="filter-select form-select" style="width: auto">
              <option>Tất cả</option>
              <option>Đã thanh toán</option>
              <option>Chưa thanh toán</option>
              <option>Thanh toán 1 phần</option>
            </select>
          </div>
          <button class="btn btn-teal">+ Tạo hoá đơn</button>
        </div>
        <div class="data-table">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th>Mã HĐ</th>
                <th>Khách hàng</th>
                <th>Dịch vụ</th>
                <th>Ngày</th>
                <th>Tổng tiền</th>
                <th>Thanh toán</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="inv in [
                  {
                    code: 'HD-2605001',
                    name: 'Nguyễn Thị Mai',
                    service: 'Niềng răng',
                    date: '28/05/2026',
                    total: '15.000.000đ',
                    method: 'Tiền mặt',
                    status: 'paid',
                  },
                  {
                    code: 'HD-2605002',
                    name: 'Trần Văn Bình',
                    service: 'Nhổ răng khôn',
                    date: '28/05/2026',
                    total: '500.000đ',
                    method: 'Chuyển khoản',
                    status: 'unpaid',
                  },
                  {
                    code: 'HD-2605003',
                    name: 'Lê Thị Hoa',
                    service: 'Tẩy trắng răng',
                    date: '28/05/2026',
                    total: '1.500.000đ',
                    method: 'Tiền mặt',
                    status: 'paid',
                  },
                  {
                    code: 'HD-2505004',
                    name: 'Vũ Quang Huy',
                    service: 'Cấy ghép Implant',
                    date: '25/05/2026',
                    total: '25.000.000đ',
                    method: 'Chuyển khoản',
                    status: 'partial',
                  },
                  {
                    code: 'HD-2405005',
                    name: 'Bùi Thị Phương',
                    service: 'Răng sứ Zirconia',
                    date: '24/05/2026',
                    total: '7.000.000đ',
                    method: 'Tiền mặt',
                    status: 'paid',
                  },
                ]"
                :key="inv.code"
              >
                <td style="font-family: monospace; color: var(--teal)">{{ inv.code }}</td>
                <td>{{ inv.name }}</td>
                <td>{{ inv.service }}</td>
                <td>{{ inv.date }}</td>
                <td>{{ inv.total }}</td>
                <td>{{ inv.method }}</td>
                <td>
                  <span
                    class="badge-status"
                    :class="{
                      'badge-paid': inv.status === 'paid',
                      'badge-unpaid': inv.status === 'unpaid',
                      'badge-partial': inv.status === 'partial',
                    }"
                  >
                    {{
                      inv.status === 'paid'
                        ? 'Đã thanh toán'
                        : inv.status === 'unpaid'
                          ? 'Chưa thanh toán'
                          : 'Thanh toán 1 phần'
                    }}
                  </span>
                </td>
                <td>
                  <button v-if="inv.status === 'paid'" class="action-btn">In HĐ</button>
                  <button v-else class="action-btn">Thu tiền</button>
                  <button class="action-btn">Chi tiết</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --teal: #1a7a5e;
  --teal-light: #2a9d7a;
  --teal-pale: #e8f5f0;
  --sidebar-bg: #0f172a;
  --sidebar-text: #94a3b8;
  --sidebar-active: #1e293b;
  --dark: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --danger: #ef4444;
}

.sidebar {
  width: 240px;
  min-height: 100vh;
  background: var(--sidebar-bg);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.sidebar-brand {
  padding: 1.75rem 1.5rem 1.25rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #fff;
  border-bottom: 1px solid #1e293b;
}
.sidebar-brand span {
  font-size: 0.7rem;
  font-family: 'DM Sans', sans-serif;
  color: var(--teal-light);
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-top: 2px;
}
.sidebar-section {
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #475569;
  padding: 1.25rem 1.5rem 0.5rem;
  margin: 0;
}
.sidebar-nav {
  list-style: none;
  padding: 0;
}
.sidebar-nav li a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1.5rem;
  color: var(--sidebar-text);
  text-decoration: none;
  font-size: 0.88rem;
  transition: all 0.15s;
  border-left: 3px solid transparent;
}
.sidebar-nav li a:hover {
  color: #fff;
  background: var(--sidebar-active);
}
.sidebar-nav li a.active {
  color: #fff;
  background: var(--sidebar-active);
  border-left-color: var(--teal-light);
}
.sidebar-nav li a img {
  width: 16px;
  height: 16px;
  filter: brightness(0.7);
  flex-shrink: 0;
}
.sidebar-nav li a.active img,
.sidebar-nav li a:hover img {
  filter: brightness(1.5);
}
.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #1e293b;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
}
.sidebar-footer img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.sidebar-footer .name {
  font-size: 0.82rem;
  color: #cbd5e1;
}
.sidebar-footer .role {
  font-size: 0.72rem;
  color: #475569;
}

.main-content {
  margin-left: 240px;
  min-height: 100vh;
  background: #f8fafc;
}
.topbar {
  background: #fff;
  border-bottom: 1px solid var(--line);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
}
.topbar h5 {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
}
.date-pill {
  font-size: 0.8rem;
  color: var(--muted);
  background: #f1f5f9;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
}

.page-body {
  padding: 2rem;
}
.page-header {
  margin-bottom: 1.75rem;
}
.page-header h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-family: 'Playfair Display', serif;
}
.page-header p {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
}

.stat-card {
  background: #fff;
  border: 1px solid var(--line);
  padding: 1.5rem;
  border-radius: 4px;
}
.stat-card .label {
  font-size: 0.75rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}
.stat-card .value {
  font-size: 1.9rem;
  font-family: 'Playfair Display', serif;
  color: var(--dark);
  line-height: 1;
}
.badge-change {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
}

.section-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.data-table {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
}
.data-table table {
  margin: 0;
}
.data-table thead th {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--muted);
  background: #f8fafc;
  border-bottom: 1px solid var(--line);
  padding: 0.9rem 1.25rem;
}
.data-table tbody td {
  font-size: 0.875rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
}
.data-table tbody tr:last-child td {
  border-bottom: none;
}
.data-table tbody tr:hover td {
  background: #fafcff;
}

.badge-status {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.25rem 0.65rem;
  border-radius: 2px;
}
.badge-confirmed {
  background: #d1fae5;
  color: #065f46;
}
.badge-pending {
  background: #fef3c7;
  color: #92400e;
}
.badge-cancelled {
  background: #fee2e2;
  color: #991b1b;
}
.badge-paid {
  background: #d1fae5;
  color: #065f46;
}
.badge-unpaid {
  background: #fee2e2;
  color: #991b1b;
}
.badge-partial {
  background: #fef3c7;
  color: #92400e;
}
.badge-active {
  background: #d1fae5;
  color: #065f46;
}
.badge-inactive {
  background: #f1f5f9;
  color: #64748b;
}

.btn-teal {
  background: var(--teal);
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.5rem 1.2rem;
}
.btn-teal:hover {
  background: var(--teal-light);
  color: #fff;
}
.btn-outline-teal {
  border: 1px solid var(--teal);
  color: var(--teal);
  background: transparent;
  border-radius: 2px;
  font-size: 0.82rem;
  padding: 0.45rem 1rem;
}
.btn-outline-teal:hover {
  background: var(--teal);
  color: #fff;
}

.action-btn {
  background: none;
  border: none;
  font-size: 0.8rem;
  color: var(--muted);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: color 0.2s;
}
.action-btn:hover {
  color: var(--teal);
}
.action-btn.danger:hover {
  color: var(--danger);
}

.search-bar {
  border: 1px solid var(--line);
  border-radius: 2px;
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  outline: none;
  width: 260px;
  font-family: 'DM Sans', sans-serif;
}
.search-bar:focus {
  border-color: var(--teal);
}
.filter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.filter-select {
  border: 1px solid var(--line);
  border-radius: 2px;
  font-size: 0.82rem;
  padding: 0.45rem 0.9rem;
  font-family: 'DM Sans', sans-serif;
  color: var(--dark);
}

.mini-form {
  background: #fff;
  border: 1px solid var(--line);
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
.mini-form .form-label {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--dark);
}
.mini-form .form-control,
.mini-form .form-select {
  border: 1px solid var(--line);
  border-radius: 2px;
  font-size: 0.875rem;
  font-family: 'DM Sans', sans-serif;
}
.mini-form .form-control:focus,
.mini-form .form-select:focus {
  border-color: var(--teal);
  box-shadow: none;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.cal-header-day {
  text-align: center;
  font-size: 0.72rem;
  color: var(--muted);
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cal-day {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 2px;
  min-height: 90px;
  padding: 0.5rem;
  font-size: 0.78rem;
}
.cal-today {
  border-color: var(--teal);
}
.day-num {
  font-weight: 500;
  font-size: 0.85rem;
  margin-bottom: 4px;
}
.cal-event {
  background: var(--teal-pale);
  color: var(--teal);
  border-radius: 2px;
  padding: 2px 5px;
  font-size: 0.68rem;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.service-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
}
.summary-card {
  background: #fff;
  border: 1px solid var(--line);
  padding: 1.25rem;
  border-radius: 4px;
}
</style>
