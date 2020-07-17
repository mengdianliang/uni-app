<template>
	<view class="contact">
		<image class="img" src="../../static/images/193.jpg" />
		<view class="info">
			<view @click="callMe">联系电话：400-618-9090（点击拨打）</view>
			<view>地址：北京似懂非懂梵蒂冈豆腐干反对的官方的双方都是</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 116.329702,
				latitude: 39.975849,
				scale: 13,
				covers: [
					{	
						longitude: 116.329702,
						latitude: 39.975849,
						iconPath: '../../static/images/service-active.png'
					}
				]
			}
		},
		methods: {
			// 拨打电话
			callMe() {
				uni.makePhoneCall({
					phoneNumber: '13693658278'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eeeeee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
