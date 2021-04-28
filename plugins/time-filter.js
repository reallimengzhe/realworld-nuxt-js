import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('timeFilter', val => {
  return dayjs(val).format('MMMM DD, YYYY')
})
