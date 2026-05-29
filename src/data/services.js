export const services = [
  {
    id: 1,
    name: 'Niềng răng',
    price: 15000000,
    description: 'Chỉnh nha hiện đại, kết quả bền vững và thẩm mỹ cao.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/03/Nieng-rang-mac-cai_.jpg',
    active: true
  },
  {
    id: 2,
    name: 'Nhổ răng khôn',
    price: 500000,
    description: 'Xử lý nhanh, an toàn, giảm thiểu đau đớn tối đa.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Nho%CC%82%CC%89-ra%CC%86ng-kho%CC%82n.png',
    active: true
  },
  {
    id: 3,
    name: 'Trám răng',
    price: 300000,
    description: 'Phục hình răng sâu, vỡ với vật liệu composite cao cấp.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/02/Di%CC%A3ch-vu%CC%A3-ha%CC%80n-tra%CC%81m-ra%CC%86ng-sa%CC%82u-ma%CC%A3%CC%86t-nhai.jpeg',
    active: true
  },
  {
    id: 4,
    name: 'Răng sứ thẩm mỹ',
    price: 3500000,
    description: 'Bọc sứ Zirconia siêu bền, màu sắc tự nhiên.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Rang-su-toan-su-zirconia-1.jpg',
    active: true,
    unit: 'răng'
  },
  {
    id: 5,
    name: 'Implant răng',
    price: 25000000,
    description: 'Cấy ghép implant vĩnh viễn, chức năng như răng thật.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Implant-rang.jpg',
    active: true
  },
  {
    id: 6,
    name: 'Tẩy trắng răng',
    price: 1500000,
    description: 'Công nghệ tẩy trắng hiện đại, an toàn cho men răng.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Tay-trang-rang-1.jpg',
    active: true
  }
]

export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
