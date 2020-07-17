<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" withCredentials="true">微信登录</Button>
		<!--#endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getUserInfo(res) {
				if(!res.detail.iv) {
					uni.showToast({
						title: '您取消了授权，登陆失败',
						icon: 'none'
					});
					return false;
				}
				uni.login({
					provider:'weixin',
					success(res) {
						// console.log(res)
						// 获取sessionKey
						// uni.request({
						// 	url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
						// 	success(res3) {
						// 		console.log(res3)
						// 	},
						// 	fail(error) {
						// 		console.log(error)
						// 	}
						// })
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>

</style>
