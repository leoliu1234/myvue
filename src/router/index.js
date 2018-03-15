import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = (resolve) => {
  import('@/pages/Login').then((module) => {
    resolve(module)
  })
}

const Dashboard = (resolve) => {
  import('@/pages/Dashboard').then((module) => {
    resolve(module)
  })
}

const ProductList = (resolve) => {
  import('@/pages/ProductList').then((module) => {
    resolve(module)
  })
}

const ShoppingCart = (resolve) => {
  import('@/pages/ShoppingCart').then((module) => {
    resolve(module)
  })
}

const Hello = (resolve) => {
  import('@/pages/HelloWorld').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: Hello
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
  ]
})
