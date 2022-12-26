<template>
	<view v-show="show">
		<view class="uni-mask"></view>
		<view class="uni-modal">
			<view class="uni-modal__title">{{title}}</view>
			<view class="uni-modal__content">{{content}}</view>
			<view class="uni-modal__footer">
				<button type="primary" size="mini" @click="onCancel">onCancel</button>
				<button type="primary" size="mini" @click="onConfirm">onConfirm</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Modal",
		props: {
			show:{
				type:Boolean,
				default:false
			},
			title: {
				type: String,
				default: ''
			},
			content: {
				type: String,
				default: ''
			},
			onConfirm: {
				type: Function
			},
			onCancel: {
				type: Function
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.uni-modal__title{
		font-size: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}
	.uni-modal__content{
		padding:10px 6px;
	}
	.uni-modal__footer{
		padding: 10px 0;
		display: flex;
		align-items: center;
		border-top: 1px solid #ccc;
	}
</style>