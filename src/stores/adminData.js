import { defineStore } from 'pinia'
import { services } from '@/data/services'
import { staff } from '@/data/staff'
import { customers } from '@/data/customers'
import { appointments } from '@/data/appointments'
import { invoices } from '@/data/invoices'

function cloneData(data) {
  return JSON.parse(JSON.stringify(data))
}

function getNewId(list) {
  if (list.length === 0) {
    return 1
  }

  return Math.max(...list.map((item) => Number(item.id) || 0)) + 1
}

export const useAdminDataStore = defineStore('adminData', {
  state: () => ({
    services: cloneData(services),
    staff: cloneData(staff),
    customers: cloneData(customers),
    appointments: cloneData(appointments),
    invoices: cloneData(invoices)
  }),
  actions: {
    createItem(collectionName, newItem) {
      this[collectionName].push({
        ...newItem,
        id: getNewId(this[collectionName])
      })
    },
    updateItem(collectionName, id, newItem) {
      const index = this[collectionName].findIndex((item) => String(item.id) === String(id))

      if (index !== -1) {
        this[collectionName][index] = {
          ...newItem,
          id
        }
      }
    },
    deleteItem(collectionName, id) {
      this[collectionName] = this[collectionName].filter((item) => String(item.id) !== String(id))
    }
  }
})
