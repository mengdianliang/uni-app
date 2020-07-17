<template>
	<view class="news">
		<newsItem :newsList="newsList" @detailPage="goDetail"/>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item'
	export default {
		components: {
			newsItem
		},
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			// 获取newsList
			getNewsList() {
				setTimeout(()=> {
					this.newsList = [
						{
							id: 1,
							img: '../../static/images/19300001357258133412489354717.jpg',
							title: '士大夫大师傅但是，似懂非懂',
							time: '2018-09-06',
							scan: 12234
						},
						{
							id: 2,
							img: '../../static/images/19300001357258133412489354717.jpg',
							title: '士大夫大师傅但是，似懂非懂',
							time: '2018-09-06',
							scan: 12234
						},
						{
							id: 3,
							img: '../../static/images/19300001357258133412489354717.jpg',
							title: '士大夫大师傅但是，似懂非懂',
							time: '2018-09-06',
							scan: 12234
						}
					]
				}, 1000)
			},
			// 跳转详情页
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
