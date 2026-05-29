<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <nav class="navbar navbar-light bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold text-success" @click.prevent="router.push('/')" href="#">BiTeeth</a>
    </div>
  </nav>

  <section class="bg-light py-5 border-bottom">
    <div class="container text-center">
      <p class="text-success text-uppercase small mb-2">Tài khoản</p>
      <h2 class="mb-3">Đăng nhập hoặc đăng ký</h2>
      <p class="text-muted">Quản lý lịch hẹn và theo dõi hồ sơ sức khoẻ răng miệng của bạn</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-0 border" style="max-width: 860px; margin: 0 auto">
        <div class="col-md-6 p-4 p-lg-5">
          <h4 class="mb-2">Đăng nhập</h4>
          <p class="text-muted small mb-4">Chào mừng bạn trở lại</p>

          <div class="mb-3">
            <label class="form-label small">Email</label>
            <input type="email" class="form-control" placeholder="email@example.com" />
          </div>

          <div class="mb-2">
            <label class="form-label small">Mật khẩu</label>
            <input type="password" class="form-control" placeholder="••••••••" />
          </div>

          <div class="text-end mb-4">
            <a href="#" class="text-success text-decoration-none small">Quên mật khẩu?</a>
          </div>

          <button @click="router.push('/admin')" class="btn btn-success w-100 mb-4">Đăng nhập</button>

          <div class="text-center text-muted small mb-3">hoặc</div>

          <button class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/64/2991/2991148.png" style="width: 18px; height: 18px" alt="Google" />
            Tiếp tục với Google
          </button>

          <p class="text-center mt-4 small text-muted mb-0">
            Chưa có tài khoản?
            <a href="#register" class="text-success text-decoration-none">Đăng ký ngay</a>
          </p>
        </div>

        <div class="col-md-6 p-4 p-lg-5 border-start" id="register">
          <h4 class="mb-2">
            Đăng ký
            <span class="badge bg-success bg-opacity-10 text-success ms-2">Miễn phí</span>
          </h4>
          <p class="text-muted small mb-4">Tạo tài khoản chỉ mất 1 phút</p>

          <div class="mb-3">
            <label class="form-label small">Họ và tên</label>
            <input type="text" class="form-control" placeholder="Nguyễn Văn A" />
          </div>

          <div class="mb-3">
            <label class="form-label small">Email</label>
            <input type="email" class="form-control" placeholder="email@example.com" />
          </div>

          <div class="mb-3">
            <label class="form-label small">Số điện thoại</label>
            <input type="tel" class="form-control" placeholder="0901 234 567" />
          </div>

          <div class="mb-4">
            <label class="form-label small">Mật khẩu</label>
            <input type="password" class="form-control" placeholder="Tối thiểu 6 ký tự" />
          </div>

          <button class="btn btn-outline-success w-100">Tạo tài khoản</button>

          <p class="text-center text-muted small mt-3 mb-0">
            Bằng cách đăng ký, bạn đồng ý với
            <a href="#" class="text-success text-decoration-none">Điều khoản sử dụng</a> và
            <a href="#" class="text-success text-decoration-none">Chính sách bảo mật</a>.
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-light py-3">
    <div class="container text-center">
      <p class="small mb-0">© {{ new Date().getFullYear() }} BiTeeth. All rights reserved.</p>
    </div>
  </footer>
</template>
