<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { services, formatPrice } from '@/data/services'
import { doctors } from '@/data/doctors'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()
const successMessage = ref('')

const bookingForm = ref({
  customerName: '',
  phone: '',
  email: '',
  birthday: '',
  serviceId: '',
  doctorId: '',
  appointmentDate: '',
  appointmentTime: '',
  note: '',
  quantity: 1
})

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function resetBookingForm() {
  bookingForm.value = {
    customerName: '',
    phone: '',
    email: '',
    birthday: '',
    serviceId: '',
    doctorId: '',
    appointmentDate: '',
    appointmentTime: '',
    note: '',
    quantity: 1
  }
}

function submitBooking() {
  const selectedService = services.find((service) => String(service.id) === String(bookingForm.value.serviceId))
  const selectedDoctor = doctors.find((doctor) => String(doctor.id) === String(bookingForm.value.doctorId))

  if (!selectedService || !selectedDoctor) {
    return
  }

  cartStore.addBookingToCart({
    customerName: bookingForm.value.customerName,
    phone: bookingForm.value.phone,
    email: bookingForm.value.email,
    birthday: bookingForm.value.birthday,
    serviceId: selectedService.id,
    serviceName: selectedService.name,
    doctorId: selectedDoctor.id,
    doctorName: selectedDoctor.name,
    appointmentDate: bookingForm.value.appointmentDate,
    appointmentTime: bookingForm.value.appointmentTime,
    note: bookingForm.value.note,
    price: selectedService.price,
    unit: selectedService.unit || '',
    quantity: bookingForm.value.quantity
  })

  successMessage.value = 'Đã thêm lịch đặt vào giỏ hàng'
  resetBookingForm()

  setTimeout(() => {
    router.push({ name: 'cart' })
  }, 600)
}
</script>

<template>
  <div class="position-relative bg-dark text-white hero-section">
    <img
      src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=80"
      class="w-100 h-100 object-fit-cover position-absolute opacity-50"
      alt="Phòng khám nha khoa"
    />
    <div class="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
      <h1 class="display-4 fw-bold mb-3">BiTeeth</h1>
      <p class="mb-4">Chăm sóc răng miệng rõ ràng, thân thiện và dễ đặt lịch.</p>
      <a href="#" class="btn btn-light" @click.prevent="scrollTo('booking')">Đặt lịch khám</a>
    </div>
  </div>

  <div class="bg-light py-4 border-bottom">
    <div class="container">
      <div class="row g-3">
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark" @click.prevent="scrollTo('booking')">
            <div class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm shortcut-icon">
              <span class="fw-bold text-success">1</span>
            </div>
            <div class="mt-2 small fw-bold">Tư vấn</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark" @click.prevent="scrollTo('booking')">
            <div class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm shortcut-icon">
              <span class="fw-bold text-success">2</span>
            </div>
            <div class="mt-2 small fw-bold">Đặt dịch vụ</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark" @click.prevent="scrollTo('about')">
            <div class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm shortcut-icon">
              <span class="fw-bold text-success">3</span>
            </div>
            <div class="mt-2 small fw-bold">Phòng khám</div>
          </a>
        </div>
        <div class="col-6 col-md-3 text-center">
          <a href="#" class="text-decoration-none text-dark" @click.prevent="scrollTo('services')">
            <div class="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm shortcut-icon">
              <span class="fw-bold text-success">4</span>
            </div>
            <div class="mt-2 small fw-bold">Dịch vụ</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <section id="services" class="py-5">
    <div class="container">
      <p class="text-success text-uppercase small text-center mb-2">Dịch vụ</p>
      <h2 class="text-center mb-4">Dịch vụ nổi bật</h2>
      <div class="row g-4">
        <div v-for="service in services" :key="service.id" class="col-12 col-md-6 col-lg-4">
          <div class="card border-0 h-100">
            <img :src="service.image" class="card-img-top service-image" :alt="service.name" />
            <div class="card-body px-0">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="text-success fw-bold mb-2">
                {{ formatPrice(service.price) }}{{ service.unit ? '/' + service.unit : '' }}
              </p>
              <p class="card-text text-muted small">{{ service.description }}</p>
              <a href="#" class="text-success text-decoration-none small" @click.prevent="scrollTo('booking')">
                Đặt lịch
              </a>
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
            src="https://images.unsplash.com/photo-1588776814546-1ffbb172c2e4?w=900&q=80"
            class="img-fluid about-image"
            alt="Phòng khám"
          />
        </div>
        <div class="col-md-6">
          <p class="text-success text-uppercase small mb-2">Giới thiệu</p>
          <h2 class="mb-4">Hơn 10 năm chăm sóc nụ cười Việt</h2>
          <p class="text-muted">
            BiTeeth có đội ngũ bác sĩ nhiều kinh nghiệm, quy trình tư vấn rõ ràng và không gian khám sạch sẽ.
          </p>
          <p class="text-muted">
            Khách hàng có thể chọn dịch vụ, chọn bác sĩ và gửi lịch mong muốn ngay trên website.
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
              <p class="small text-muted mb-0">Bác sĩ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="doctors" class="py-5 bg-white">
    <div class="container">
      <p class="text-success text-uppercase small text-center mb-2">Đội ngũ</p>
      <h2 class="text-center mb-4">Bác sĩ của chúng tôi</h2>
      <div class="row g-4">
        <div v-for="doctor in doctors" :key="doctor.id" class="col-6 col-md-3 text-center">
          <img :src="doctor.image" class="rounded-circle mb-3 doctor-image" :alt="doctor.name" />
          <h5>{{ doctor.name }}</h5>
          <p class="small text-muted">{{ doctor.specialty }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="booking" class="py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-5">
          <p class="text-success text-uppercase small mb-2">Đặt lịch</p>
          <h2 class="mb-4">Đặt lịch khám ngay hôm nay</h2>
          <p class="text-muted mb-4">
            Form này sẽ đưa thông tin đặt lịch vào giỏ hàng để khách kiểm tra trước khi xác nhận.
          </p>
          <div class="d-flex gap-3 mb-3">
            <span class="text-success fw-bold">ĐC</span>
            <span class="small text-muted">123 Đường Láng, Đống Đa, Hà Nội</span>
          </div>
          <div class="d-flex gap-3 mb-3">
            <span class="text-success fw-bold">SĐT</span>
            <span class="small text-muted">1900 1234 - Thứ 2 đến Thứ 7, 8:00 - 18:00</span>
          </div>
          <div class="d-flex gap-3">
            <span class="text-success fw-bold">@</span>
            <span class="small text-muted">contact@biteeth.vn</span>
          </div>
        </div>
        <div class="col-md-7">
          <form class="border p-3 p-md-4 bg-white" @submit.prevent="submitBooking">
            <div v-if="successMessage" class="alert alert-success py-2 small">{{ successMessage }}</div>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small">Họ và tên</label>
                <input v-model="bookingForm.customerName" required type="text" class="form-control" placeholder="Nguyễn Văn A" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Số điện thoại</label>
                <input v-model="bookingForm.phone" required type="tel" class="form-control" placeholder="0901 234 567" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Email</label>
                <input v-model="bookingForm.email" required type="email" class="form-control" placeholder="email@example.com" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Ngày sinh</label>
                <input v-model="bookingForm.birthday" required type="date" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Dịch vụ</label>
                <select v-model="bookingForm.serviceId" required class="form-select">
                  <option value="">Chọn dịch vụ</option>
                  <option v-for="service in services" :key="service.id" :value="service.id">
                    {{ service.name }} - {{ formatPrice(service.price) }}{{ service.unit ? '/' + service.unit : '' }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small">Bác sĩ</label>
                <select v-model="bookingForm.doctorId" required class="form-select">
                  <option value="">Chọn bác sĩ</option>
                  <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label small">Ngày hẹn</label>
                <input v-model="bookingForm.appointmentDate" required type="date" class="form-control" />
              </div>
              <div class="col-md-4">
                <label class="form-label small">Giờ hẹn</label>
                <select v-model="bookingForm.appointmentTime" required class="form-select">
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
              <div class="col-md-4">
                <label class="form-label small">Số lượng</label>
                <input v-model="bookingForm.quantity" required type="number" min="1" class="form-control" />
              </div>
              <div class="col-12">
                <label class="form-label small">Ghi chú</label>
                <textarea v-model="bookingForm.note" class="form-control" rows="3" placeholder="Triệu chứng hoặc yêu cầu đặc biệt"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-success w-100">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 500px;
}

.shortcut-icon {
  width: 64px;
  height: 64px;
}

.service-image {
  height: 220px;
  object-fit: cover;
}

.about-image {
  height: 400px;
  width: 100%;
  object-fit: cover;
}

.doctor-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>
