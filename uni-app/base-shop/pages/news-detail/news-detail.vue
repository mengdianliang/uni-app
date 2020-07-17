<template>
	<view class="news-detail">
		<view class="news-detail-title">{{newsDetail.title}}</view>
		<view class="news-detail-info">
			<text>发表时间：{{newsDetail.time}}</text>
			<text>浏览：{{newsDetail.scan}}次</text>
		</view>
		<view class="news-detail-content">{{newsDetail.content}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsDetail: {}
			}
		},
		onLoad() {
			this.getNewsDetail()
		},
		methods: {
			getNewsDetail() {
				setTimeout(() => {
					this.newsDetail = {
						id: 1,
						title: '标题',
						time: '2018—09-06',
						scan: 1289,
						content: '大锅饭大概的，大概豆腐干反对，豆腐干豆腐干反对，豆腐干反对广泛的。'
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
.news-detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.news-detail-title {
		text-align: center;
		margin: 20rpx 0;
	}
	.news-detail-info {
		font-size: 28rpx;
		color: #cccccc;
		text:nth-child(2){
			margin-left: 20rpx;
		}
	}
	.news-detail-content {
		text-indent: 56rpx;
		padding: 20rpx 0;
		font-size: 28rpx;
		line-height: 36rpx;
	}
}
</style>
