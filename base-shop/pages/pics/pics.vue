<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-if="categoryList.length > 0">
				<view :class="[currentCategory.id === item.id ? 'active' : '']" v-for="item in categoryList" :key="item.id" @click="getCategoryDetail(item)">{{item.title}}</view>
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view v-if="categoryDetail.length > 0">
				<view class="category-item" v-for="item in categoryDetail" :key="item.id">
					<image @click="previewImage(item.img)" :src="item.img"/>
					<text>{{item.desc}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 分类列表
				categoryList: [],
				// 当前分类
				currentCategory: {},
				// 分类详情
				categoryDetail: []
			}
		},
		onLoad() {
			this.getCategoryList()
		},
		methods: {
			// 获取分类列表
			getCategoryList() {
				setTimeout(() => {
					this.categoryList = [
						{
							id: 1,
							title: '家居生活'
						},
						{
							id: 2,
							title: '水果蔬菜'
						},
						{
							id: 3,
							title: '家居生活'
						},
						{
							id: 4,
							title: '水果蔬菜'
						},
						{
							id: 5,
							title: '家居生活'
						},
						{
							id: 6,
							title: '水果蔬菜'
						},
						{
							id: 7,
							title: '家居生活'
						},
						{
							id: 8,
							title: '水果蔬菜'
						},
						{
							id: 9,
							title: '家居生活'
						},
						{
							id: 10,
							title: '水果蔬菜'
						},
						{
							id: 11,
							title: '家居生活'
						},
						{
							id: 12,
							title: '水果蔬菜'
						},
						{
							id: 13,
							title: '家居生活'
						},
						{
							id: 14,
							title: '水果蔬菜'
						}
					]
				}, 1000)
			},
			// 获取当前分类信息
			getCategoryDetail(item) {
				this.currentCategory = item
				// 获取分类详情
				this.categoryDetail = []
				setTimeout(() => {
					this.categoryDetail = [
						{
							id: 1,
							img: 'https://www.zhu1234.com/wp-content/uploads/2020/02/19300001357258133412489354717.jpg',
							desc: 'w瑟夫热望热望热望热尔瓦，而退热退热贴，儿童热帖，而的人退热退热特别，而特热天热'
						},
						{
							id: 2,
							img: 'https://www.zhu1234.com/wp-content/uploads/2020/02/19300001357258133412489354717.jpg',
							desc: 'w瑟夫热望热望热望热尔瓦，而退热退热贴，儿童热帖，而的人退热退热特别，而特热天热'
						},
						{
							id: 3,
							img: 'https://www.zhu1234.com/wp-content/uploads/2020/02/19300001357258133412489354717.jpg',
							desc: 'w瑟夫热望热望热望热尔瓦，而退热退热贴，儿童热帖，而的人退热退热特别，而特热天热'
						}
					]
				}, 1000)
			},
			// 图片预览
			previewImage(current) {
				const urls = this.categoryDetail.map(item => {
					return item.img
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		flex: 0 0 200rpx;
		height: 100%;
		border-right: 1px solid #eeeeee;
		view {
			height: 120rpx;
			line-height: 120rpx;
			text-align: center;
			border-bottom: 1px solid #eeeeee;
		}
		.active {
			background-color:  #b50e03;
			color: #ffffff;
		}
	}
	.right {
		flex: 0 0 520rpx;
		height: 100%;
		margin: 10rpx auto;
		.category-item {
			image {
				width: 520rpx;
				border-radius: 5rpx; 
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
