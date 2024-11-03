import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { gsap } from 'gsap/all'
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import $ from 'jquery';
import '@/assets/download_4/font_jvcvbwruwxp/iconfont'

gsap.registerPlugin(MotionPathPlugin)


createApp(App).use(router).use(ElementPlus).use(gsap).use($).mount('#app')