<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="testShowModal">testShowModal</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			testShowModal(){
				uni.showModal({
					title:'test  title 111',
					content: 'test content',
					onCancel(){
						console.log('用户触发了 onCancel');
					},
					onConfirm(){
						console.log('用户触发了 onConfirm');
					}
				})
				uni.showModal({
					title:'test  title 222',
					content: 'test content',
					onCancel(){
						console.log('用户触发了 onCancel');
					},
					onConfirm(){
						console.log('用户触发了 onConfirm');
					}
				})
			}
		}
	}
</script>

<style>
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
