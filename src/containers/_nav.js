export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Usarios']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Usuarios',
    to: '/users',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Mantenimiento']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Libros',
    to: '/books',
    icon: 'cil-circle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Autores',
    to: '/authors',
    icon: 'cil-circle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Géneros',
    to: '/genres',
    icon: 'cil-circle',
  },
]

