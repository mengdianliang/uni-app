<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="previewImg(item)" />
		<!--#ifdef H5 -->
		<view>只在h5看到</view>
		<!--#endif -->
		<!--#ifdef MP-WEIXIN -->
		<view>只在小程序看到</view>
		<!--#endif -->
	</view>
</template>

<script>
	export default {
		onLoad() {
			// #ifdef H5
			console.log('只在h5里打印')
			// #endif
			// #ifdef MP-WEIXIN
			console.log('只在小程序里打印')
			// #endif
		},
		data() {
			return {
				imgArr: []
			}
		},
		methods: {
			// 上传
			chooseImg() {
				uni.chooseImage({
					count: 5,
					success: res => {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			// 预览
			previewImg(current) {
				uni.previewImage({
					current,
					urls: this.imgArr,
					loop: true,
					indicator: 'number'
				})
			}
		}
	}
</script>

<style>

</style>
