<template>
	<!--该组件的bug，结束日期不能早于今天-->
	<view>
	    <uni-calendar 
	    :insert="true"
	    :lunar="true" 
	    :start-date="'2019-3-2'"
	    :end-date="'2020-6-20'"
	    @change="change"
	     />
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {}
		},
		methods: {
			change(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
