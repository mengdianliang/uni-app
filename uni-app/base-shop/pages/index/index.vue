<template>
	<view class="home">
		<!--轮播图-->
		<swiper indicator-dots circular v-if="loopData && loopData.length > 0">
			<swiper-item v-for="item in loopData" :key="item.id" @click="getLink(item)">
				<image :src="item.img" />
			</swiper-item>
		</swiper>
		<!--导航区域-->
		<view class="nav" v-if="navs && navs.length > 0">
			<view class="nav_item" v-for="item in navs" :key="item.name" @click="navItemClick(item)">
				<view :class="['icon-tupian', item.icon]"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!--推荐商品-->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<goodList :goodsList="goodsList" @linkGoodsDetail="goGoodsDetail"/>
		</view>
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
				loopData: [],
				goodsList: [],
				navs: [
					{   
						name: 'shop',
						icon: 'iconfont iconappstore-fill',
						title: '迷你超市',
						url: '/pages/goods/goods'
					},
					{
						name: 'contact',
						icon: 'iconfont iconappstore',
						title: '联系我们',
						url: '/pages/contact/contact'
					},
					{
					
						name: 'pic',
						icon: 'iconfont iconappstore-fill',
						title: '社区图片',
						url: '/pages/pics/pics'
					},
					{
					
						name: 'video',
						icon: 'iconfont iconappstore',
						title: '学习视频',
						url: '/pages/video/video'
					}
				]
				
			}
		},
		onLoad() {
			this.getLoopData()
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图数据
			getLoopData() {
				setTimeout(() => {
					this.loopData = [
						{
							id: 1,
							url: 'http://www.baidu.com',
							img: '/static/loop/VCG41N1205859881.jpg'
						},
						{
							id: 2,
							url: 'http://www.baidu.com',
							img: '/static/loop/VCG211266828793.jpg'
						},
						{
							id: 3,
							url: 'http://www.baidu.com',
							img: '/static/loop/VCG211271683300.jpg'
						}
					]
				}, 1000)
			},
			getLink(item) {
				console.log(item.url)
			},
			// 获取商品列表
			getGoodsList() {
				setTimeout(() => {
					this.goodsList = [
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
				}, 1000)
			},
			// 导航跳转
			navItemClick(item) {
				uni.navigateTo({
					url: item.url
				})
			},
			// 去商品详情页
			goGoodsDetail(item) {
				uni.navigateTo({
					url: `/pages/goods-detail/goods-detail?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper {
			width: 750rpx;
			image{
				width: 100%;
			}
		}
		.nav {
			display: flex;
			.nav_item {
				flex: 1;
				text-align: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background-color: #b50e03;
					border-radius: 120rpx;
					margin:  10rpx auto;
					text-align: center;
					color: #ffffff;
					line-height: 120rpx;
				}
				.icon-tupian {
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background-color: #eeeeee;
			margin-top: 20rpx;
			overflow: hidden;
			.title {
				height: 100rpx;
				line-height: 100rpx;
				color: #b50e03;
				text-align: center;
				letter-spacing: 40rpx;
				background-color: #ffffff;
				margin:  20rpx 0 5rpx;
			}
		}
	}
</style>
