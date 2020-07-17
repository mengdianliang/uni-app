<template>
	<view class="content">
		<view>
			<navigator class="news-content" url="pages/info/info">
				<image class="news-pic" src="../../static/images/193.jpg" mode="widthFix"></image>
				<view class="news-title">新闻</view>
			</navigator>
		</view>
		<view class="iconfont iconappstore">媒体</view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<button type="primary" @click="share">分享</button>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello...'
			}
		},
		onLoad() {
			let res = global.isLogin()
			if(!res) {
				uni.showModal({
					title: '提醒',
					content: '请登录',
					success: function() {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				})
			}
		},
		methods: {
			share() {
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 1,
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				
				// uni.share({
				//     provider: "weixin",
				//     scene: "WXSceneSession",
				//     type: 2,
				//     imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				//     success: function (res) {
				//         console.log("success:" + JSON.stringify(res));
				//     },
				//     fail: function (err) {
				//         console.log("fail:" + JSON.stringify(err));
				//     }
				// });
				
			}
		},
		onShareAppMessage() {
			return {
				title: 'test...',
				path: 'pages/index/index'
			}
		}
	}
</script>

<style>
	.news-content {
		display: flex;
	}
	.news-pic {
		width: 200upx;
		margin-right: 20upx;
	}
	.news-title {
		width: 530upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
