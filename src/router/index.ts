import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/index.vue'),
		},
		{
			path: '/download',
			name: 'download',
			component: () => import('@/views/download/index.vue'),
		}
	],
})

export default router
