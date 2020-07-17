<template>
	<view class="goods_wrap">
		<goodList :goodsList="goodsList" @linkGoodsDetail="goGoodsDetail"/>
		<view class="isOver" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodList from '../../components/good-list/good-list'
	export default {
		components: {
			goodList
		},
		data() {
			return {
				pageIndex: 1,
				goodsList: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表
			getGoodsList(callback) {
				setTimeout(() => {
					const tempList = [
						{
							id: 1,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 2,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 3,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 4,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 1,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 2,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 3,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						},
						{
							id: 4,
							name: '华为（HUAWEI）荣耀6Plus 16G双4G版',
							currentPrice: 2199,
							price: 2499,
							img: '/static/images/O82C38_mZssh4Rjx2tfjrQ.jpg'
						}
					]
					this.goodsList = [...this.goodsList, ...tempList]
					// 回调函数
					callback && callback()
				}, 1000)
			},
			// 去商品详情页
			goGoodsDetail(item) {
				uni.navigateTo({
					url: `/pages/goods-detail/goods-detail?id=${item.id}`
				})
			}
		},
		onReachBottom() {
			console.log('触底了')
			if(this.pageIndex === 5) {
				this.flag = true
				return
			}
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageIndex= 1
			this.goodsList = []
			this.getGoodsList(() => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
.goods_wrap {
	background-color: #eeeeee;
	.isOver {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background-color: #ffffff;
		font-size: 28rpx;
	}
}
</style>
