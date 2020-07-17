<template>
	<view class="goods_list" v-if="goodsList && goodsList.length > 0">
		<view class="goods_item" v-for="(item, index) in goodsList" :key="index" @click="goDetail(item)">
			<image :src="item.img" />
			<view class="price">
				<text>￥{{item.currentPrice}}</text>
				<text>￥{{item.price}}</text>
			</view>
			<view class="name">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goDetail(item) {
				this.$emit('linkGoodsDetail', item)
			}
		}
	}
</script>

<style lang="scss">
.goods_list {
	padding: 0 15rpx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.goods_item {
		background-color: #ffffff;
		width: 355rpx;
		margin: 15rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		image {
			width: 80%;
			height: 400rpx;
			display: block;
			margin: auto;
		}
		.price {
			color: #b50e03;
			font-size: 36rpx;
			margin:  20rpx 0 8rpx;
			text:nth-child(2) {
				color: #cccccc;
				font-size: 28rpx;
				margin-left: 17rpx;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 28rpx;
			outline-color: 50rpx;
			padding-top: 10rpx;
			padding-bottom: 15rpx;
		}
	}
}	
</style>
