import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueTheMask from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).component('EasyDataTable', Vue3EasyDataTable).component('VueDatePicker', VueDatePicker).use(VueSweetalert2).use(store).use(VueTheMask).mount('#app')
