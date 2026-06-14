import { createRouter, createWebHistory } from 'vue-router'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import HomePage from '@/pages/customer/HomePage.vue'
import CartPage from '@/pages/customer/CartPage.vue'
import AuthPage from '@/pages/customer/AuthPage.vue'
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage.vue'
import AdminAppointmentsPage from '@/pages/admin/AdminAppointmentsPage.vue'
import AdminCustomersPage from '@/pages/admin/AdminCustomersPage.vue'
import AdminStaffPage from '@/pages/admin/AdminStaffPage.vue'
import AdminServicesPage from '@/pages/admin/AdminServicesPage.vue'
import AdminInvoicesPage from '@/pages/admin/AdminInvoicesPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: 'gio-hang',
          name: 'cart',
          component: CartPage
        },
        {
          path: 'auth',
          name: 'auth',
          component: AuthPage
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      redirect: '/admin/tong-quan',
      children: [
        {
          path: 'tong-quan',
          name: 'admin-dashboard',
          component: AdminDashboardPage,
          meta: { title: 'Tổng quan' }
        },
        {
          path: 'dat-lich',
          name: 'admin-appointments',
          component: AdminAppointmentsPage,
          meta: { title: 'Quản lý đặt lịch' }
        },
        {
          path: 'khach-hang',
          name: 'admin-customers',
          component: AdminCustomersPage,
          meta: { title: 'Quản lý khách hàng' }
        },
        {
          path: 'nhan-vien',
          name: 'admin-staff',
          component: AdminStaffPage,
          meta: { title: 'Quản lý nhân viên' }
        },
        {
          path: 'dich-vu',
          name: 'admin-services',
          component: AdminServicesPage,
          meta: { title: 'Quản lý dịch vụ' }
        },
        {
          path: 'hoa-don',
          name: 'admin-invoices',
          component: AdminInvoicesPage,
          meta: { title: 'Quản lý hóa đơn' }
        }
      ]
    }
  ]
})
