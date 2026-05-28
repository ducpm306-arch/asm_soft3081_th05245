<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = ref({ email: '', password: '' })
const registerForm = ref({ name: '', email: '', phone: '', password: '' })
const loginError = ref('')
const registerSuccess = ref(false)

function handleLogin() {
  loginError.value = ''
  if (!loginForm.value.email || !loginForm.value.password) {
    loginError.value = 'Vui lòng nhập đầy đủ thông tin.'
    return
  }
  if (loginForm.value.email === 'admin@biteeth.vn' && loginForm.value.password === '123456') {
    router.push('/admin')
  } else {
    loginError.value = 'Email hoặc mật khẩu không đúng.'
  }
}

function handleRegister() {
  const { name, email, phone, password } = registerForm.value
  if (!name || !email || !phone || !password) return
  registerSuccess.value = true
  registerForm.value = { name: '', email: '', phone: '', password: '' }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="nav-brand" @click.prevent="router.push('/')" style="cursor: pointer">BiTeeth</a>
    </div>
  </nav>

  <section class="auth-hero">
    <div class="container">
      <div class="text-center">
        <p class="section-label">Tài khoản</p>
        <h2>Đăng nhập hoặc đăng ký</h2>
        <p class="auth-hero-sub">Quản lý lịch hẹn và theo dõi hồ sơ sức khoẻ răng miệng của bạn</p>
      </div>
    </div>
  </section>

  <section class="auth-section">
    <div class="container">
      <div class="row g-0 auth-card">
        <div class="col-md-6 auth-side auth-side-left">
          <div class="auth-form-wrap">
            <h4 class="auth-title">Đăng nhập</h4>
            <p class="auth-sub">Chào mừng bạn trở lại</p>

            <div
              v-if="loginError"
              class="alert alert-danger py-2 px-3 mb-3"
              style="
                font-size: 0.85rem;
                border-radius: 2px;
                border: none;
                background: #fee2e2;
                color: #991b1b;
              "
            >
              {{ loginError }}
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                v-model="loginForm.email"
                type="email"
                class="form-control"
                placeholder="email@example.com"
                @keydown.enter="handleLogin"
              />
            </div>

            <div class="mb-1">
              <label class="form-label">Mật khẩu</label>
              <input
                v-model="loginForm.password"
                type="password"
                class="form-control"
                placeholder="••••••••"
                @keydown.enter="handleLogin"
              />
            </div>

            <div class="text-end mb-4">
              <a href="#" class="forgot-link">Quên mật khẩu?</a>
            </div>

            <button @click="handleLogin" class="btn btn-teal w-100 mb-3">Đăng nhập</button>

            <div class="auth-divider-text">
              <span>hoặc</span>
            </div>

            <button
              class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
              style="border-radius: 2px; font-size: 0.875rem"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/64/2991/2991148.png"
                style="width: 18px; height: 18px"
                alt="Google"
              />
              Tiếp tục với Google
            </button>
          </div>
        </div>

        <div class="auth-vertical-divider d-none d-md-block"></div>

        <div class="col-md-6 auth-side auth-side-right">
          <div class="auth-form-wrap">
            <h4 class="auth-title">
              Đăng ký
              <span class="badge-new ms-2">Miễn phí</span>
            </h4>
            <p class="auth-sub">Tạo tài khoản chỉ mất 1 phút</p>

            <div
              v-if="registerSuccess"
              class="alert py-2 px-3 mb-3"
              style="
                font-size: 0.85rem;
                border-radius: 2px;
                border: none;
                background: #d1fae5;
                color: #065f46;
              "
            >
              Đăng ký thành công! Vui lòng đăng nhập.
            </div>

            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input
                v-model="registerForm.name"
                type="text"
                class="form-control"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                v-model="registerForm.email"
                type="email"
                class="form-control"
                placeholder="email@example.com"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Số điện thoại</label>
              <input
                v-model="registerForm.phone"
                type="tel"
                class="form-control"
                placeholder="0901 234 567"
              />
            </div>

            <div class="mb-4">
              <label class="form-label">Mật khẩu</label>
              <input
                v-model="registerForm.password"
                type="password"
                class="form-control"
                placeholder="Tối thiểu 6 ký tự"
              />
            </div>

            <button
              @click="handleRegister"
              class="btn btn-outline-teal w-100"
              :disabled="
                !registerForm.name ||
                !registerForm.email ||
                !registerForm.phone ||
                !registerForm.password
              "
            >
              Tạo tài khoản
            </button>

            <p class="auth-terms mt-3">
              Bằng cách đăng ký, bạn đồng ý với
              <a href="#">Điều khoản sử dụng</a> và <a href="#">Chính sách bảo mật</a> của chúng
              tôi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="auth-footer-bar">
    <div class="container text-center">
      <p>© {{ new Date().getFullYear() }} BiTeeth. All rights reserved.</p>
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

.auth-hero {
  background: var(--mint);
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--line);
}
.auth-hero h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
.auth-hero-sub {
  font-size: 0.95rem;
  color: var(--muted);
  max-width: 460px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 0.75rem;
}

.auth-section {
  padding: 4rem 0 6rem;
}
.auth-card {
  background: #fff;
  border: 1px solid var(--line);
  max-width: 860px;
  margin: 0 auto;
  position: relative;
}

.auth-side {
  padding: 0;
}
.auth-form-wrap {
  padding: 2.5rem 2.5rem;
}
.auth-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 0.25rem;
  color: var(--dark);
  display: flex;
  align-items: center;
}
.auth-sub {
  font-size: 0.875rem;
  color: var(--muted);
  margin-bottom: 1.75rem;
}

.auth-vertical-divider {
  width: 1px;
  background: var(--line);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
}

.form-label {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--dark);
  margin-bottom: 0.4rem;
}
.form-control {
  border: 1px solid var(--line);
  border-radius: 2px;
  font-size: 0.9rem;
  padding: 0.65rem 1rem;
  font-family: 'DM Sans', sans-serif;
}
.form-control:focus {
  border-color: var(--teal);
  box-shadow: none;
}

.btn-teal {
  background: var(--teal);
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.7rem 1.5rem;
  transition: background 0.2s;
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
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s;
}
.btn-outline-teal:hover {
  background: var(--teal);
  color: #fff;
}
.btn-outline-teal:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.forgot-link {
  font-size: 0.8rem;
  color: var(--teal);
  text-decoration: none;
}
.forgot-link:hover {
  text-decoration: underline;
}
.auth-divider-text {
  text-align: center;
  position: relative;
  margin: 1.25rem 0;
  color: var(--muted);
  font-size: 0.8rem;
}
.auth-divider-text::before,
.auth-divider-text::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 42%;
  height: 1px;
  background: var(--line);
}
.auth-divider-text::before {
  left: 0;
}
.auth-divider-text::after {
  right: 0;
}

.badge-new {
  font-size: 0.68rem;
  font-weight: 500;
  background: var(--mint);
  color: var(--teal);
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
}
.auth-terms {
  font-size: 0.75rem;
  color: var(--muted);
  text-align: center;
}
.auth-terms a {
  color: var(--teal);
  text-decoration: none;
}

.auth-footer-bar {
  background: var(--dark);
  padding: 1.25rem 0;
}
.auth-footer-bar p {
  color: #9ca3af;
  font-size: 0.8rem;
  margin: 0;
}
</style>
