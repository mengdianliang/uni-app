<template>
	<view class="goods_detail">
		<swiper class="swiper-detail" indicator-dots v-if="swipers.length > 0">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.src" />
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodsDetail.currentPrice}}</text>
				<text>￥{{goodsDetail.price}}</text>
			</view>
			<view class="goods_name">{{goodsDetail.goodsName}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{goodsDetail.goodsNum}}</view>
			<view>库存：{{goodsDetail.leftCount}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">{{goodsDetail.content}}</view>
		</view>
		<!--底部导航-->
		<view class="goods_nav">
		<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {uniGoodsNav},
		data() {
			return {
				swipers: [],
				goodsDetail: {},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					},
					{
						icon: 'cart',
						text: '购物车',
						info: 2
					},
				],
				buttonGroup: [
					{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			console.log(options)
			this.getSwiper()
			this.getGoodsDetail()
		},
		methods: {
			getSwiper() {
				setTimeout(() => {
					this.swipers = [
						{
							id: 1,
							src: "../../static/images/O82C38_mZssh4Rjx2tfjrQ.jpg"
						},
						{
							id: 2,
							src: "../../static/images/O82C38_mZssh4Rjx2tfjrQ.jpg"
						}
					]
				}, 1000)
			},
			// 获取商品详情
			getGoodsDetail() {
				setTimeout(() => {
					this.goodsDetail = {
						id: 1,
						currentPrice: 7699,
						price: 8799,
						goodsName: '的方法的官方的 豆腐干反对广 泛士大夫的官方',
						goodsNum: 'SFD2343',
						leftCount: 234,
						content: '是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的是东方大哥，豆腐干反对，豆腐干豆腐干，的官方的，豆腐干反对，梵蒂冈梵蒂冈发放购房的'
					}
				}, 1000)
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		padding-bottom: 120rpx;
		.swiper-detail {
			height: 480rpx;
			image {
				width: 750rpx;
			}
		}
		.box1 {
			padding: 10rpx;
			.price {
				font-size: 36rpx;
				color: #b50e03;
				text:nth-child(2){
					font-size: 28rpx;
					color: #cccccc;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.line {
			height: 10rpx;
			background-color: #eeeeee;
		}
		.box2 {
			padding: 0 10rpx;
			font-size: 32rpx;
			line-height: 60rpx;
		}
		.box3 {
			padding: 0 10rpx;
			.title {
				font-size: 32rpx;
				line-height: 70rpx;
			}
			.content {
				font-size: 28rpx;
				line-height: 36rpx;
			}
		}
		.goods_nav {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
</style>
