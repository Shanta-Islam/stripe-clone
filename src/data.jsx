import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
const sublinks = [
  {
    page: 'Products',
    links: [
      { label: 'payments', icon: <FaCreditCard />, url: '/products' },
      { label: 'checkouts', icon: <FaCreditCard />, url: '/products' },
      { label: 'elements', icon: <FaCreditCard />, url: '/products' },
      { label: 'Payment links', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Solutions',
    links: [
      { label: 'payments', icon: <FaCreditCard />, url: '/products' },
      { label: 'checkouts', icon: <FaCreditCard />, url: '/products' },
      { label: 'elements', icon: <FaCreditCard />, url: '/products' },
      { label: 'Payment links', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Resources',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
