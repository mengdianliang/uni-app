<template>
	<view v-if="newsList.length > 0">
		<view class="news-item" v-for="item in newsList" :key="item.id" @click="handleDetail(item)">
			<image :src="item.img" />
			<view class="news-desc">
				<view class="news-tit">{{item.title}}</view>
				<view class="news-info">
					<text>发表时间：{{item.time}}</text>
					<text>浏览：{{item.scan || 0}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			newsList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			handleDetail(item) {
				this.$emit('detailPage', item)
			}
		}
	}
</script>

<style lang="scss">
.news-item {
	display: flex;
	padding: 10rpx 20rx;
	border-bottom: 1px solid #b50e03;
	image {
		flex: 0 0 200rpx;
		height: 150rpx;
	}
	.news-desc {
		flex: 1;
		padding-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.news-tit {
			font-size: 36rpx;
		}
		.news-info {
			font-size: 24rpx;
			color: #cccccc;
			text:nth-child(2) {
				margin-left: 15rpx;
			}
		}
	}
}
</style>
