import { defineStore } from 'pinia'
import { services } from '@/data/services'
import { staff } from '@/data/staff'
import { customers } from '@/data/customers'
import { appointments } from '@/data/appointments'
import { invoices } from '@/data/invoices'

function copyList(list) {
  return JSON.parse(JSON.stringify(list))
}

export const useAdminDataStore = defineStore('adminData', {
  state: () => ({
    services: copyList(services),
    staff: copyList(staff),
    customers: copyList(customers),
    appointments: copyList(appointments),
    invoices: copyList(invoices)
  })
})
