import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Books = React.lazy(() => import('./views/books/Books'));
const Book = React.lazy(() => import('./views/books/Book'));

const Authors = React.lazy(() => import('./views/authors/Authors'));
const Author = React.lazy(() => import('./views/authors/Author'));

const Genres = React.lazy(() => import('./views/genres/Genres'));
const Genre = React.lazy(() => import('./views/genres/Genre'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  { path: '/books/', exact: true, name: 'Books', component: Books },
  { path: '/books/:id', exact: true, name: 'Book Details', component: Book },

  { path: '/authors/', exact: true, name: 'Authors', component: Authors },
  { path: '/authors/:id', exact: true, name: 'Author Details', component: Author },

  { path: '/genres/', exact: true, name: 'Géneros', component: Genres },
  { path: '/genres/:id', exact: true, name: 'Género Details', component: Genre },

];

export default routes;
