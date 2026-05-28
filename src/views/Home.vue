<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="nav-brand" href="#">BiTeeth</a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMain"
        aria-controls="navMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav mx-auto gap-4">
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
        <button @click="router.push('/auth')" class="btn btn-book">Đặt lịch ngay</button>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <img
      src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=80"
      alt="Dental clinic"
    />
    <div class="hero-content">
      <p class="tag">Nha Khoa Chuyên Nghiệp</p>
      <h1>Nụ cười khoẻ,<br />cuộc sống đẹp</h1>
      <p>Chăm sóc răng miệng toàn diện với đội ngũ bác sĩ giàu kinh nghiệm và thiết bị hiện đại.</p>
      <a @click.prevent="scrollTo('booking')" href="#" class="btn-hero">Đặt lịch khám →</a>
    </div>
  </section>

  <!-- QUICK LINKS -->
  <div class="quick-links">
    <div class="container">
      <div class="row justify-content-center g-4">
        <div class="col-6 col-md-3 d-flex justify-content-center">
          <a href="#" class="quick-link-item">
            <div class="icon-wrap">
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-8d86c9fa-f9db-418d-a70d-cd2a40268e5c.png"
                alt="Tư vấn"
              />
            </div>
            <span>Tư vấn</span>
          </a>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center">
          <a @click.prevent="scrollTo('booking')" href="#" class="quick-link-item">
            <div class="icon-wrap">
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-88c603f4-ddb1-4e00-ae58-048dddfd1306.png"
                alt="Đặt dịch vụ"
              />
            </div>
            <span>Đặt dịch vụ</span>
          </a>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center">
          <a href="#" class="quick-link-item">
            <div class="icon-wrap">
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-f207f708-4524-4c7c-a221-04ebfd617689.png"
                alt="Phòng khám"
              />
            </div>
            <span>Phòng khám</span>
          </a>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center">
          <a href="#" class="quick-link-item">
            <div class="icon-wrap">
              <img
                src="https://cdn.phototourl.com/free/2026-05-26-e0a55d2c-b9a0-493d-a116-6a975fdb1424.png"
                alt="Kiến thức"
              />
            </div>
            <span>Kiến thức</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- SERVICES -->
  <section id="services" class="services-section">
    <div class="container">
      <p class="section-label text-center">Dịch vụ</p>
      <h2 class="text-center mb-5" style="font-size: 2.2rem">Chăm sóc hàm răng Việt</h2>
      <div class="row g-4">
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Nieng-rang-mac-cai_.jpg"
              alt="Niềng răng"
            />
            <div class="card-body">
              <h5 class="card-title">Niềng răng</h5>
              <p class="card-text mb-3">Chỉnh nha hiện đại, kết quả bền vững và thẩm mỹ cao.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/01/Nho%CC%82%CC%89-ra%CC%86ng-kho%CC%82n.png"
              alt="Nhổ răng khôn"
            />
            <div class="card-body">
              <h5 class="card-title">Nhổ răng khôn</h5>
              <p class="card-text mb-3">Xử lý nhanh, an toàn, giảm thiểu đau đớn tối đa.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/02/Di%CC%A3ch-vu%CC%A3-ha%CC%80n-tra%CC%81m-ra%CC%86ng-sa%CC%82u-ma%CC%A3%CC%86t-nhai.jpeg"
              alt="Trám răng"
            />
            <div class="card-body">
              <h5 class="card-title">Trám răng</h5>
              <p class="card-text mb-3">Phục hình răng sâu, vỡ với vật liệu composite cao cấp.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/01/Rang-su-toan-su-zirconia-1.jpg"
              alt="Răng sứ"
            />
            <div class="card-body">
              <h5 class="card-title">Răng sứ thẩm mỹ</h5>
              <p class="card-text mb-3">Bọc sứ Zirconia siêu bền, màu sắc tự nhiên.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/01/Implant-rang.jpg"
              alt="Implant"
            />
            <div class="card-body">
              <h5 class="card-title">Implant răng</h5>
              <p class="card-text mb-3">Cấy ghép implant vĩnh viễn, chức năng như răng thật.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="service-card">
            <img
              src="https://nhakhoaparkway.com/wp-content/uploads/2024/01/Tay-trang-rang-1.jpg"
              alt="Tẩy trắng"
            />
            <div class="card-body">
              <h5 class="card-title">Tẩy trắng răng</h5>
              <p class="card-text mb-3">Công nghệ tẩy trắng hiện đại, an toàn cho men răng.</p>
              <a @click.prevent="scrollTo('booking')" href="#" class="service-link">Đặt lịch →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="about-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-6">
          <img
            class="about-img"
            src="https://images.unsplash.com/photo-1588776814546-1ffbb172c2e4?w=800&q=80"
            alt="Phòng khám"
          />
        </div>
        <div class="col-md-6 about-text">
          <p class="section-label">Giới thiệu</p>
          <h2>Hơn 10 năm chăm sóc nụ cười Việt</h2>
          <p>
            BiTeeth là phòng khám nha khoa uy tín tại Hà Nội, được thành lập năm 2014 với sứ mệnh
            mang lại dịch vụ chăm sóc răng miệng chất lượng cao, thân thiện và hiệu quả.
          </p>
          <p>
            Đội ngũ bác sĩ được đào tạo trong và ngoài nước, trang thiết bị hiện đại đạt tiêu chuẩn
            quốc tế, môi trường vô trùng tuyệt đối.
          </p>
          <div class="stat-row row g-3">
            <div class="col-4 stat-item">
              <h3>10+</h3>
              <p>Năm kinh nghiệm</p>
            </div>
            <div class="col-4 stat-item">
              <h3>15k+</h3>
              <p>Bệnh nhân</p>
            </div>
            <div class="col-4 stat-item">
              <h3>20+</h3>
              <p>Bác sĩ chuyên khoa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DOCTORS -->
  <section id="doctors" class="doctors-section">
    <div class="container">
      <p class="section-label text-center">Đội ngũ</p>
      <h2 class="text-center mb-5" style="font-size: 2.2rem">Bác sĩ của chúng tôi</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-6 col-md-3">
          <div class="doctor-card">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
              alt="BS Minh"
            />
            <h5>BS. Nguyễn Minh</h5>
            <p>Chỉnh nha – Implant</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="doctor-card">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
              alt="BS Linh"
            />
            <h5>BS. Trần Thị Linh</h5>
            <p>Nha khoa thẩm mỹ</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="doctor-card">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
              alt="BS Hùng"
            />
            <h5>BS. Lê Văn Hùng</h5>
            <p>Phẫu thuật răng miệng</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="doctor-card">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop"
              alt="BS Lan"
            />
            <h5>BS. Phạm Thị Lan</h5>
            <p>Nha khoa trẻ em</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BOOKING -->
  <section id="booking" class="booking-section">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-md-5">
          <p class="section-label">Đặt lịch</p>
          <h2 style="font-size: 2.2rem; margin-bottom: 1.5rem">Đặt lịch khám ngay hôm nay</h2>
          <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.8; margin-bottom: 2rem">
            Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 30 phút. Vui lòng đến trước 10 phút để
            hoàn thiện hồ sơ.
          </p>
          <div class="d-flex flex-column gap-3">
            <div class="d-flex gap-3 align-items-start">
              <img
                src="https://cdn-icons-png.flaticon.com/64/684/684908.png"
                style="width: 20px; height: 20px; margin-top: 2px"
                alt=""
              />
              <span style="font-size: 0.9rem; color: var(--muted)"
                >123 Đường Láng, Đống Đa, Hà Nội</span
              >
            </div>
            <div class="d-flex gap-3 align-items-start">
              <img
                src="https://cdn-icons-png.flaticon.com/64/126/126341.png"
                style="width: 20px; height: 20px; margin-top: 2px"
                alt=""
              />
              <span style="font-size: 0.9rem; color: var(--muted)"
                >1900 1234 – Thứ 2 đến Thứ 7, 8:00–18:00</span
              >
            </div>
            <div class="d-flex gap-3 align-items-start">
              <img
                src="https://cdn-icons-png.flaticon.com/64/732/732200.png"
                style="width: 20px; height: 20px; margin-top: 2px"
                alt=""
              />
              <span style="font-size: 0.9rem; color: var(--muted)">contact@biteeth.vn</span>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="booking-form">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Họ và tên</label>
                <input type="text" class="form-control" placeholder="Nguyễn Văn A" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Số điện thoại</label>
                <input type="tel" class="form-control" placeholder="0901 234 567" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="email@example.com" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Ngày sinh</label>
                <input type="date" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Dịch vụ</label>
                <select class="form-select">
                  <option value="">Chọn dịch vụ</option>
                  <option>Niềng răng</option>
                  <option>Nhổ răng khôn</option>
                  <option>Trám răng</option>
                  <option>Răng sứ thẩm mỹ</option>
                  <option>Implant răng</option>
                  <option>Tẩy trắng răng</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Bác sĩ</label>
                <select class="form-select">
                  <option value="">Chọn bác sĩ</option>
                  <option>BS. Nguyễn Minh</option>
                  <option>BS. Trần Thị Linh</option>
                  <option>BS. Lê Văn Hùng</option>
                  <option>BS. Phạm Thị Lan</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Ngày hẹn</label>
                <input type="date" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Giờ hẹn</label>
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
                <label class="form-label">Ghi chú</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Triệu chứng hoặc yêu cầu đặc biệt..."
                ></textarea>
              </div>
              <div class="col-12 mt-2">
                <button class="btn-submit btn">Xác nhận đặt lịch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="row g-5">
        <div class="col-md-4">
          <div class="brand">BiTeeth</div>
          <p>
            Phòng khám nha khoa chuyên nghiệp tại Hà Nội. Chăm sóc nụ cười của bạn là sứ mệnh của
            chúng tôi.
          </p>
        </div>
        <div class="col-md-2">
          <h6>Dịch vụ</h6>
          <a href="#">Niềng răng</a>
          <a href="#">Nhổ răng khôn</a>
          <a href="#">Trám răng</a>
          <a href="#">Răng sứ</a>
          <a href="#">Implant</a>
        </div>
        <div class="col-md-2">
          <h6>Thông tin</h6>
          <a href="#">Giới thiệu</a>
          <a href="#">Đội ngũ</a>
          <a href="#">Tin tức</a>
          <a href="#">Liên hệ</a>
        </div>
        <div class="col-md-4">
          <h6>Liên hệ</h6>
          <p>123 Đường Láng, Đống Đa, Hà Nội<br />1900 1234<br />contact@biteeth.vn</p>
          <p>Thứ 2 – Thứ 7: 8:00 – 18:00</p>
        </div>
      </div>
      <hr class="divider" />
      <p class="copy">© {{ currentYear }} BiTeeth. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --mint: #e8f5f0;
  --teal: #1a7a5e;
  --teal-light: #2a9d7a;
  --dark: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'DM Sans', sans-serif;
  color: var(--dark);
  background: #fff;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Playfair Display', serif;
}

nav.navbar {
  border-bottom: 1px solid var(--line);
  background: #fff !important;
  padding: 1rem 0;
}
.nav-brand {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--teal) !important;
  text-decoration: none;
  letter-spacing: -0.5px;
}
.nav-link {
  font-size: 0.9rem;
  color: var(--muted) !important;
  font-weight: 400;
  transition: color 0.2s;
  cursor: pointer;
}
.nav-link:hover {
  color: var(--teal) !important;
}
.btn-book {
  background: var(--teal);
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 1.4rem;
  transition: background 0.2s;
}
.btn-book:hover {
  background: var(--teal-light);
  color: #fff;
}

.hero {
  position: relative;
  height: 92vh;
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 0 1rem;
}
.hero-content .tag {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 1rem;
}
.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-content p {
  font-size: 1rem;
  opacity: 0.8;
  max-width: 480px;
  margin: 0 auto 2rem;
  font-weight: 300;
}
.btn-hero {
  background: #fff;
  color: var(--teal);
  border: none;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s;
}
.btn-hero:hover {
  opacity: 0.85;
  color: var(--teal);
}

.quick-links {
  background: var(--mint);
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
}
.quick-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--dark);
  transition: color 0.2s;
}
.quick-link-item:hover {
  color: var(--teal);
}
.icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.icon-wrap img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.quick-link-item span {
  font-size: 0.85rem;
  font-weight: 500;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 0.75rem;
}

.services-section {
  padding: 6rem 0;
}
.service-card {
  border: none;
  border-radius: 0;
  overflow: hidden;
  transition: transform 0.3s;
}
.service-card:hover {
  transform: translateY(-4px);
}
.service-card img {
  height: 220px;
  object-fit: cover;
  width: 100%;
}
.service-card .card-body {
  padding: 1.25rem 0;
}
.service-card .card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.service-card .card-text {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 300;
}
.service-link {
  font-size: 0.8rem;
  color: var(--teal);
  text-decoration: none;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--teal);
  padding-bottom: 1px;
}

.about-section {
  background: var(--mint);
  padding: 6rem 0;
}
.about-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}
.about-text h2 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.about-text p {
  font-size: 0.95rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
.stat-row {
  border-top: 1px solid var(--line);
  padding-top: 2rem;
  margin-top: 2rem;
}
.stat-item h3 {
  font-size: 2rem;
  color: var(--teal);
  margin-bottom: 0.25rem;
}
.stat-item p {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 0;
}

.doctors-section {
  padding: 6rem 0;
  background: #fafafa;
}
.doctor-card {
  text-align: center;
}
.doctor-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  filter: grayscale(20%);
}
.doctor-card h5 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.doctor-card p {
  font-size: 0.82rem;
  color: var(--muted);
}

.booking-section {
  padding: 6rem 0;
}
.booking-form {
  background: #fff;
  border: 1px solid var(--line);
  padding: 3rem;
}
.form-label {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--dark);
  margin-bottom: 0.4rem;
}
.form-control,
.form-select {
  border: 1px solid var(--line);
  border-radius: 2px;
  font-size: 0.9rem;
  padding: 0.65rem 1rem;
  color: var(--dark);
  font-family: 'DM Sans', sans-serif;
}
.form-control:focus,
.form-select:focus {
  border-color: var(--teal);
  box-shadow: none;
}
.btn-submit {
  background: var(--teal);
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.75rem 2.5rem;
  width: 100%;
  transition: background 0.2s;
}
.btn-submit:hover {
  background: var(--teal-light);
}

footer {
  background: var(--dark);
  color: #9ca3af;
  padding: 3rem 0 2rem;
}
footer .brand {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 0.75rem;
}
footer p {
  font-size: 0.85rem;
  line-height: 1.7;
}
footer h6 {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1rem;
}
footer a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}
footer a:hover {
  color: #fff;
}
footer .divider {
  border-color: #1f2937;
  margin: 2rem 0 1.5rem;
}
footer .copy {
  font-size: 0.8rem;
  text-align: center;
}
</style>
