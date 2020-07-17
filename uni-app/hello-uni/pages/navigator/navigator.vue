<template>
	<!--组件遵循vue的生命周期-->
	<!--页面遵循小程序生命周期-->
	<view>
		<navigator url="/pages/detail/detail">跳转至详情页</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">跳转至标签页</navigator>
		<uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    :start-date="'2019-3-2'"
		    :end-date="'2020-7-20'"
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
			return {
				
			}
		},
		methods: {
			// 全局监听和触发事件
			// uni.$on()  uni.$emit()
			change(e) {
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
