export const services = [
  {
    id: 1,
    name: 'Niềng răng',
    price: 15000000,
    description: 'Chỉnh nha hiện đại, giúp răng đều hơn và cải thiện khớp cắn.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/03/Nieng-rang-mac-cai_.jpg',
    active: true,
    unit: ''
  },
  {
    id: 2,
    name: 'Nhổ răng khôn',
    price: 500000,
    description: 'Xử lý răng khôn mọc lệch, giảm đau và hạn chế biến chứng.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Nho%CC%82%CC%89-ra%CC%86ng-kho%CC%82n.png',
    active: true,
    unit: ''
  },
  {
    id: 3,
    name: 'Trám răng',
    price: 300000,
    description: 'Phục hồi răng sâu hoặc mẻ bằng vật liệu composite thẩm mỹ.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/02/Di%CC%A3ch-vu%CC%A3-ha%CC%80n-tra%CC%81m-ra%CC%86ng-sa%CC%82u-ma%CC%A3%CC%86t-nhai.jpeg',
    active: true,
    unit: ''
  },
  {
    id: 4,
    name: 'Răng sứ thẩm mỹ',
    price: 3500000,
    description: 'Bọc sứ Zirconia bền đẹp, màu sắc tự nhiên và hài hòa.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Rang-su-toan-su-zirconia-1.jpg',
    active: true,
    unit: 'răng'
  },
  {
    id: 5,
    name: 'Implant răng',
    price: 25000000,
    description: 'Cấy ghép implant chắc chắn, phục hồi chức năng ăn nhai lâu dài.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Implant-rang.jpg',
    active: true,
    unit: ''
  },
  {
    id: 6,
    name: 'Tẩy trắng răng',
    price: 1500000,
    description: 'Tẩy trắng an toàn, giúp răng sáng hơn sau một buổi điều trị.',
    image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Tay-trang-rang-1.jpg',
    active: true,
    unit: ''
  }
]

export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(price || 0))
}
