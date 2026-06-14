<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = ref('')

const loginForm = reactive({
  email: '',
  password: ''
})

const registerForm = reactive({
  name: '',
  email: '',
  phone: '',
  password: ''
})

function login() {
  if (loginForm.email && loginForm.password) {
    router.push({ name: 'admin-dashboard' })
  }
}

function register() {
  message.value = `Đã tạo tài khoản cho ${registerForm.name}`
  registerForm.name = ''
  registerForm.email = ''
  registerForm.phone = ''
  registerForm.password = ''
}
</script>

<template>
  <section class="bg-light py-5 border-bottom">
    <div class="container text-center">
      <p class="text-success text-uppercase small mb-2">Tài khoản</p>
      <h2 class="mb-3">Đăng nhập hoặc đăng ký</h2>
      <p class="text-muted mb-0">Đăng nhập quản trị hoặc tạo tài khoản khách hàng demo.</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div v-if="message" class="alert alert-success mx-auto" style="max-width: 860px">{{ message }}</div>
      <div class="row g-0 border mx-auto bg-white" style="max-width: 860px">
        <div class="col-md-6 p-4 p-lg-5">
          <h4 class="mb-2">Đăng nhập</h4>
          <p class="text-muted small mb-4">Demo đăng nhập sẽ chuyển vào trang quản trị</p>

          <form @submit.prevent="login">
            <div class="mb-3">
              <label class="form-label small">Email</label>
              <input v-model="loginForm.email" required type="email" class="form-control" placeholder="admin@biteeth.vn" />
            </div>

            <div class="mb-4">
              <label class="form-label small">Mật khẩu</label>
              <input v-model="loginForm.password" required type="password" class="form-control" placeholder="123456" />
            </div>

            <button class="btn btn-success w-100">Đăng nhập</button>
          </form>
        </div>

        <div id="register" class="col-md-6 p-4 p-lg-5 border-start">
          <h4 class="mb-2">Đăng ký</h4>
          <p class="text-muted small mb-4">Tạo tài khoản khách hàng demo</p>

          <form @submit.prevent="register">
            <div class="mb-3">
              <label class="form-label small">Họ và tên</label>
              <input v-model="registerForm.name" required type="text" class="form-control" placeholder="Nguyễn Văn A" />
            </div>

            <div class="mb-3">
              <label class="form-label small">Email</label>
              <input v-model="registerForm.email" required type="email" class="form-control" placeholder="email@example.com" />
            </div>

            <div class="mb-3">
              <label class="form-label small">Số điện thoại</label>
              <input v-model="registerForm.phone" required type="tel" class="form-control" placeholder="0901 234 567" />
            </div>

            <div class="mb-4">
              <label class="form-label small">Mật khẩu</label>
              <input v-model="registerForm.password" required type="password" class="form-control" placeholder="Tối thiểu 6 ký tự" />
            </div>

            <button class="btn btn-outline-success w-100">Tạo tài khoản</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
