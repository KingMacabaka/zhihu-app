<!-- 所有收藏页面 -->
<template>
	<div class="hy-favorite-container fill-light-grey">
		<div class="hy-favorite-container-top pos-rel fill-white border-bottom mb-2">
			<div class="hy-favorite-container-top-content d-flex">
				<svg class="Zi Zi--Star" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
				<h2>热门收藏夹</h2>
			</div>
		</div>
		<div v-for="(favorite,index) in  allFavorite" :key="index">
			<v-card class="mx-auto d-flex p-4 mb-2" outlined style="height: 22%;">
				<div class="hy-favorite-card-left">
					<div class="hy-favorite-left-top">
						<span class="font-weight-bold">{{favorite.title}}</span>
					</div>
					<div class="hy-favorite-left-mid pt-2 mt-3">
						<v-avatar tile size="35" style="border-radius: 10%;">
							<img :src="favorite.creatorAvatar">
						</v-avatar>
						<span style="margin-left: 3%;">{{favorite.creatorName}}</span>
						<span class="font-weight-light grey--text">创建</span>
					</div>
					<div class="hy-favorite-left-bottom">
						<v-btn color="blue  lighten-5" depressed>
							<span class="font-weight-bold blue--text">关注收藏夹</span>
						</v-btn>
						<span class="font-weight-light grey--text" style="margin-left: 8%;">{{favorite.follows}}人关注</span>
					</div>
				</div>
			
				<div class="hy-favorite-card-right pl-2 border-bottom">
					<div class="hy-favorite-right-top">
						<span class="font-weight-bold">{{favorite.questionTitle}}</span>
					</div>
					<div class="hy-favorite-right-mid">
						<span>{{favorite.answerAuthorName}}：</span>
						<span v-html="favorite.answerContent.substring(0,58)+'...'"></span>
						<br>
						<span class="font-weight-light grey--text" style="font-size: 13px;">{{favorite.voteupCount}}赞同，{{favorite.commentCounut}}评论</span>
					</div>
					<div class="hy-favorite-right-bottom mt-5">
						<span class="font-weight grey--text">已收藏{{favorite.totalCount}}条内容</span>
					</div>
				</div>
			</v-card>
		</div>
	</div>
</template>

<script >
	export default{
		data(){
			return{
				allFavorite:[]
			}

		},
		methods:{
			getAllFavorite(){
				this.axios({
					methods:'get',
					url:this.GLOBAL.baseUrl+'/favorite/all'
				}).then(res=>{
					console.log(res.data.data)
					this.allFavorite=res.data.data;
				})
			}
			
		},
		created() {
			this.getAllFavorite();
		}
	}
	
</script>

<style scoped="scoped">
	.hy-favorite-container {
		height: 1000px;
		padding:  0 5% 5% 5%;
	}

	.hy-favorite-card-left {
		width: 30%;
		height: 100%;
	}
	.hy-favorite-card-right {
		width: 70%;
		height: 100%;
	}

	.hy-favorite-left-top {
		width: 90%;
		height: 20%;
	}

	.hy-favorite-left-mid {
		width: 90%;
		height: 50%;
	}

	.hy-favorite-left-bottom {
		width: 90%;
		height: 30%;
		margin-top: 8%;
	}

	.hy-favorite-right-top {
		width: 90%;
		height: 20%;
	}

	.hy-favorite-right-mid {
		width: 90%;
		height: 50%;
	}

	.hy-favorite-right-bottom {
		width: 90%;
		height: 30%;
	}
	.hy-favorite-container-top{
		width: 135%;
		height: 12%;
		left: -16%;
		padding: 3% 0 0 16%;
	}
	.hy-favorite-container-top-content{
		width: 15%;
	}
</style>
