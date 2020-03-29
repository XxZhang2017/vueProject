import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import moreRouter from './more'
import cinemaRouter from './cinema'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  moreRouter,
  cinemaRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
