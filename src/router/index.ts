import loadable from '@loadable/component'

const main = loadable(() => import('@/pages/main'))

export default [
  {
    name: 'main',
    component: main,
    path: '/'
  },
  {
    name: 'result',
    component: loadable(() => import('@/pages/result')),
    path: '/result'
  }
]