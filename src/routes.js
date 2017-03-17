import Home from '@/containers/Home';
import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Portfolio from '@/containers/Portfolio';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/experience',
    component: About,
    children: [
      {
        path: 'skills',
        name: 'Skills',
        component: About,
      },
      {
        path: 'experience',
        name: 'Experience',
        component: About,
      },
    ],
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];
