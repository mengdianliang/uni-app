<template>
	<view>
		<view>
			这是列表页
		</view>
		<view v-for="(item, index) in list" :key="index" class="line-styl">{{item}}</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["前端", 'JAVA', "前端", 'JAVA', 'UI', '测试', '大数据']
			}
		},
		methods: {
			pullDown() {
				uni.startPullDownRefresh()
			}
		},
		onPullDownRefresh() {
			console.log('出发了下拉')
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},
		onReachBottom() {
			console.log('触底了')
		}
	}
</script>

<style lang="scss" scoped>
.line-styl {
	line-height: 300rpx;
}
</style>
