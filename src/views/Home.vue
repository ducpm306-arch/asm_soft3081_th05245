<script setup>
import { useRouter } from 'vue-router'
import { services, formatPrice } from '@/data/services'
import { doctors } from '@/data/doctors'

const router = useRouter()
const currentYear = new Date().getFullYear()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold text-success" href="#">BiTeeth</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMain"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="scrollTo('services')" href="#">Dịch vụ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="scrollTo('about')" href="#">Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="scrollTo('doctors')" href="#">Đội ngũ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="scrollTo('booking')" href="#">Liên hệ</a>
          </li>
        </ul>
        <button @click="router.push('/auth')" class="btn btn-success">Đặt lịch ngay</button>
      </div>
    </div>
  </nav>

  <div class="position-relative bg-dark text-white" style="height: 500px">
    <img
      src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=80"
      class="w-100 h-100 object-fit-cover position-absolute opacity-50"
      alt="Dental clinic"
    />
    <div class="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
      <h1 class="display-4 fw-bold mb-3">Chăm sóc hàm răng Việt</h1>
      <p class="mb-4">
        Chăm sóc răng miệng toàn diện với đội ngũ bác sĩ giàu kinh nghiệm và thiết bị hiện đại.
      </p>
      <a @click.prevent="scrollTo('booking')" href="#" class="btn btn-light">Đặt lịch khám</a>
    </div>
  </div>

  <div class="bg-light py-4 border-bottom">
    <div class="container">
      <div class="row g-3">
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark">
            <div
              class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
              style="width: 64px; height: 64px"
            >
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-8d86c9fa-f9db-418d-a70d-cd2a40268e5c.png"
                style="width: 36px; height: 36px"
                alt="Tư vấn"
              />
            </div>
            <div class="mt-2 small fw-bold">Tư vấn</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a @click.prevent="scrollTo('booking')" href="#" class="text-decoration-none text-dark">
            <div
              class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
              style="width: 64px; height: 64px"
            >
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-88c603f4-ddb1-4e00-ae58-048dddfd1306.png"
                style="width: 36px; height: 36px"
                alt="Đặt dịch vụ"
              />
            </div>
            <div class="mt-2 small fw-bold">Đặt dịch vụ</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark">
            <div
              class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
              style="width: 64px; height: 64px"
            >
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-f207f708-4524-4c7c-a221-04ebfd617689.png"
                style="width: 36px; height: 36px"
                alt="Phòng khám"
              />
            </div>
            <div class="mt-2 small fw-bold">Phòng khám</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark">
            <div
              class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
              style="width: 64px; height: 64px"
            >
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-e0a55d2c-b9a0-493d-a116-6a975fdb1424.png"
                style="width: 36px; height: 36px"
                alt="Kiến thức"
              />
            </div>
            <div class="mt-2 small fw-bold">Kiến thức</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <section id="services" class="py-5">
    <div class="container">
      <p class="text-success text-uppercase small text-center mb-2">Dịch vụ</p>
      <div class="row g-4">
        <div v-for="service in services" :key="service.id" class="col-6 col-md-4">
          <div class="card border-0">
            <img
              :src="service.image"
              class="card-img-top"
              style="height: 220px; object-fit: cover"
              :alt="service.name"
            />
            <div class="card-body px-0">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="text-success fw-bold mb-2">
                {{ formatPrice(service.price) }}{{ service.unit ? '/' + service.unit : '' }}
              </p>
              <p class="card-text text-muted small">{{ service.description }}</p>
              <a
                @click.prevent="scrollTo('booking')"
                href="#"
                class="text-success text-decoration-none small"
                >Đặt lịch →</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="bg-light py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffbb172c2e4?w=800&q=80"
            class="img-fluid"
            style="height: 400px; width: 100%; object-fit: cover"
            alt="Phòng khám"
          />
        </div>
        <div class="col-md-6">
          <p class="text-success text-uppercase small mb-2">Giới thiệu</p>
          <h2 class="mb-4">Hơn 10 năm chăm sóc nụ cười Việt</h2>
          <p class="text-muted">
            BiTeeth là phòng khám nha khoa uy tín tại Hà Nội, được thành lập năm 2014 với sứ mệnh
            mang lại dịch vụ chăm sóc răng miệng chất lượng cao, thân thiện và hiệu quả.
          </p>
          <p class="text-muted">
            Đội ngũ bác sĩ được đào tạo trong và ngoài nước, trang thiết bị hiện đại đạt tiêu chuẩn
            quốc tế, môi trường vô trùng tuyệt đối.
          </p>
          <div class="row g-3 mt-3 pt-3 border-top">
            <div class="col-4 text-center">
              <h3 class="text-success">10+</h3>
              <p class="small text-muted mb-0">Năm kinh nghiệm</p>
            </div>
            <div class="col-4 text-center">
              <h3 class="text-success">15k+</h3>
              <p class="small text-muted mb-0">Bệnh nhân</p>
            </div>
            <div class="col-4 text-center">
              <h3 class="text-success">20+</h3>
              <p class="small text-muted mb-0">Bác sĩ chuyên khoa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="doctors" class="py-4 py-md-5 bg-white">
    <div class="container">
      <p class="text-success text-uppercase small text-center mb-2">Đội ngũ</p>
      <h2 class="text-center mb-4 mb-md-5 fs-3 fs-md-2">Bác sĩ của chúng tôi</h2>
      <div class="row g-4">
        <div v-for="doctor in doctors" :key="doctor.id" class="col-6 col-md-3 text-center">
          <img
            :src="doctor.image"
            class="rounded-circle mb-3"
            style="width: 120px; height: 120px; object-fit: cover"
            :alt="doctor.name"
          />
          <h5>{{ doctor.name }}</h5>
          <p class="small text-muted">{{ doctor.specialty }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="booking" class="py-4 py-md-5">
    <div class="container">
      <div class="row g-4 g-md-5">
        <div class="col-md-5">
          <p class="text-success text-uppercase small mb-2">Đặt lịch</p>
          <h2 class="mb-3 mb-md-4 fs-3 fs-md-2">Đặt lịch khám ngay hôm nay</h2>
          <p class="text-muted mb-4">
            Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 30 phút. Vui lòng đến trước 10 phút để
            hoàn thiện hồ sơ.
          </p>
          <div class="d-flex gap-3 mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/64/684/684908.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <span class="small text-muted">123 Đường Láng, Đống Đa, Hà Nội</span>
          </div>
          <div class="d-flex gap-3 mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/64/126/126341.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <span class="small text-muted">1900 1234 – Thứ 2 đến Thứ 7, 8:00–18:00</span>
          </div>
          <div class="d-flex gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/64/732/732200.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <span class="small text-muted">contact@biteeth.vn</span>
          </div>
        </div>
        <div class="col-md-7">
          <div class="border p-3 p-md-4">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small">Họ và tên</label>
                <input type="text" class="form-control" placeholder="Nguyễn Văn A" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Số điện thoại</label>
                <input type="tel" class="form-control" placeholder="0901 234 567" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Email</label>
                <input type="email" class="form-control" placeholder="email@example.com" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Ngày sinh</label>
                <input type="date" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Dịch vụ</label>
                <select class="form-select">
                  <option value="">Chọn dịch vụ</option>
                  <option v-for="service in services" :key="service.id" :value="service.id">
                    {{ service.name }} – {{ formatPrice(service.price)
                    }}{{ service.unit ? '/' + service.unit : '' }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small">Bác sĩ</label>
                <select class="form-select">
                  <option value="">Chọn bác sĩ</option>
                  <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small">Ngày hẹn</label>
                <input type="date" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Giờ hẹn</label>
                <select class="form-select">
                  <option value="">Chọn giờ</option>
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
              <div class="col-12">
                <label class="form-label small">Ghi chú</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Triệu chứng hoặc yêu cầu đặc biệt..."
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-success w-100">Xác nhận đặt lịch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-light py-4">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <h5 class="fw-bold">BiTeeth</h5>
          <p class="small">
            Phòng khám nha khoa chuyên nghiệp tại Hà Nội. Chăm sóc nụ cười của bạn là sứ mệnh của
            chúng tôi.
          </p>
        </div>
        <div class="col-md-2">
          <h6 class="text-uppercase small">Dịch vụ</h6>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Niềng răng</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Nhổ răng khôn</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Trám răng</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Răng sứ</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Implant</a>
        </div>
        <div class="col-md-2">
          <h6 class="text-uppercase small">Thông tin</h6>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Giới thiệu</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Đội ngũ</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Tin tức</a>
          <a href="#" class="d-block text-light text-decoration-none small mb-2">Liên hệ</a>
        </div>
        <div class="col-md-4">
          <h6 class="text-uppercase small">Liên hệ</h6>
          <p class="small mb-0">123 Đường Láng, Đống Đa, Hà Nội</p>
          <p class="small mb-0">1900 1234</p>
          <p class="small mb-0">contact@biteeth.vn</p>
          <p class="small mt-2">Thứ 2 – Thứ 7: 8:00 – 18:00</p>
        </div>
      </div>
      <hr class="border-secondary my-3" />
      <p class="text-center small mb-0">© {{ currentYear }} BiTeeth. All rights reserved.</p>
    </div>
  </footer>
</template>
