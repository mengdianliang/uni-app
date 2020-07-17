<template>
	<view>
		<view>这是列表页</view>
		<view class="box-item" v-for="(item, index) in list" :key="index">{{item}}</view>
		<!-- <button @click="pulldown">开启下拉刷新</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['css', 'js', 'java', 'c++', 'mySql']
			}
		},
		methods: {
			pulldown() {
				uni.startPullDownRefresh()
			}
		},
		onPullDownRefresh() {
			console.log('触发了下拉刷新')
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 2000)
		},
		onReachBottom() {
			console.log('页面触底了')
		}
	}
</script>

<style>
.box-item {
	height: 200px;
	line-height: 200px;
}
</style>
