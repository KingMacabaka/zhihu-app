<!-- 发现主页面 -->
<template>
	<div>
		<!-- 发现 -->
		
		<div class="hy-explore-smalltips m-2 d-flex">
			<svg class="Zi Zi--LabelSpecial" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>最新专题</h2>
		</div>
		<div class=" d-flex flex-wrap">

			<v-card class="mx-auto hy-explore-card" v-for="(section,index) in recentSpecial" :key="index" style="margin-bottom: 5%;">
				<v-img class="white--text align-end" height="200px" :src="section.banner">
				</v-img>
				<div class="d-flex justify-content-around border-bottom m-1 pos-rel">
					<div class="pos-abs" style="left: 3%;">
						<v-card-title>{{section.title}}</v-card-title>
						<v-card-subtitle class="pb-0">{{section.updated}}更新，{{section.viewCount}}浏览</v-card-subtitle>
					</div>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue   lighten-5" depressed style="position: absolute;right: 3%;">
							<span class="font-weight-bold blue--text">关注专题</span>
						</v-btn>
					</v-card-actions>
					<br><br><br><br>
				</div>
				<v-card-text class="text--primary">
					<div>{{section.introduction.substring(0,30)}}</div>
				</v-card-text>
			</v-card>

			<div class="text-center hy-explore-bottom">
				<router-link to="/special/all">
					<v-btn rounded color="font-weight-bold white grey--text">查看更多专题</v-btn>
				</router-link>
			</div>
		</div>
		<!-- 圆桌 -->
		<div class="hy-explore-smalltips m-2 d-flex">
			<svg class="Zi Zi--LabelRoundtable" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" color="#0084ff">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>圆桌讨论</h2>
		</div>
		
		<div class=" d-flex flex-wrap">
			<v-card class="mx-auto hy-explore-card " v-for="(discuss,index) in roundTable" :key="index" style="margin-bottom: 5%;">
				<div style="height: 60%;" class="pos-rel">
					<div  class="pos-rel" ref="mainBox" style="height: 100%;">
						<v-img class="white--text align-end" style="width: 50%;margin-left: 50%;" height="100%" :src="discuss.banner" ref="mainImg">
							
						</v-img>
						<div style="width: 50%;height: 100%;top: 0; right: 0;" class="pos-abs" ref="mask"></div>
						<div style="width: 50%;height: 100%;top: 0;right: 0;" class="pos-abs" ref="mask2"></div>
						
					</div>
					<div class="pos-abs" style="bottom: 5%;">
						<v-card-title class="font-weight-bold white--text">{{discuss.name}}</v-card-title>
						<v-card-subtitle class="white--text">越是前景光明，越要居安思危。打败你的并不一定是你的敌人，而是自己的故步自封。</v-card-subtitle>
						<v-card-actions>
							<v-card-subtitle class="pb-2 white--text">{{discuss.includeCount}}位嘉宾参与|{{discuss.visitsCount}}人关注</v-card-subtitle>
							<v-spacer></v-spacer>
							<v-btn color="blue  lighten-5" depressed>
								<span class="font-weight-bold"  ref="btn">关注圆桌</span>
							</v-btn>
						</v-card-actions>
					</div>
				</div>
				
				<!-- <v-card-subtitle class="subtitle-1">可以推荐几个值得长期投资的基金吗？</v-card-subtitle>
				<span class="ml-4">456个回答</span> -->
				<div style="height: 40%;" class="p-3">
					<span class="subtitle-1">为什么国内公司远程办公发展滞后？</span>
					<br>
					<p class="meta">123个回答</p>
					<!-- <br> -->
					<span class="subtitle-1">可以推荐几个值得长期投资的基金吗？</span>
					<br>
					<p  class="meta">123个回答</p>
				</div>
				
			</v-card>
			
			
				<!-- <div class="hy-round-container col-6 p-5 mb-5" v-for="(discuss,index) in roundTable" :key="index">
					<div class="hy-round-card">
						<div class="hy-round-card-top d-inline-block">
							<div style="width: 50%;margin-left: 50%;height: 100%;" class="pos-rel" ref="mainBox">
								<img :src="discuss.banner" ref="mainImg" />
								<div style="background-color: green;height: 100%;right: 0;top: 0; width: 100%;" class="pos-abs" ref="mask"></div>
								<div style="background-color: green;height: 100%;right: 0;top: 0; width: 100%;" class="pos-abs" ref="mask2"></div>
							</div>
						</div>
					</div>
				</div> -->
			<div class="text-center hy-explore-bottom">
				<router-link to="/specialnav/discuss/all">
					<v-btn rounded color="font-weight-bold white grey--text ">查看更多圆桌</v-btn>
				</router-link>
			</div>
		</div>
		
		
		<!-- 收藏夹 -->
		<div class="hy-explore-smalltips m-2 d-flex">
			<svg class="Zi Zi--Star" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>热门收藏夹</h2>
		</div>
		<div class=" d-flex flex-wrap">
			<v-card class="mx-auto hy-explore-card" v-for="(favorite,index) in recentfavorite" :key="index" style="margin-bottom: 5%;">
				<div class="hy-explore-card-faviorite-top border-bottom p-3">
					<div style="display: flex;">
						<p class="font-weight-black" style="font-size: 22px;">{{favorite.title}}</p>
						<v-btn color="blue  lighten-5" depressed style="position: absolute;right: 5%;">
							<span class="font-weight-bold blue--text">关注专题</span>
						</v-btn>
					</div>
					<div style="display: flex;margin: 1%;">
						<v-avatar tile size="35" style="border-radius: 10%;">
							<v-img :src="favorite.creatorAvatar">
							</v-img>
						</v-avatar>
						<p class="text-justify" style="font-size: 16px;margin: 1%;">
							{{favorite.creatorName}}
						</p>
						<span class="font-weight-light grey--text" style="font-size: 16px;margin-top: 1%;">创建</span>
						<span class="font-weight-light grey--text" style="font-size: 16px;margin: 1%;">{{favorite.follows}}人关注</span>
					</div>
				</div>
				<div class="hy-explore-card-faviorite-mid m-auto">
					<div class="hy-explore-card-faviorite-mid-row m-2">
						<span class="font-weight-bold" style="font-size:20px;">{{favorite.questionTitle}}</span>
						<br>
						<span class="font-weight-regular">{{favorite.answerAuthorName}}：</span>
						<span class="font-weight-regular" v-html="favorite.answerContent.substring(0,20)+'...'"></span>
						<br>
						<span class="font-weight-light grey--text" style="font-size: 13px;background-color: #e0e0e0;border-radius: 10%;">回答</span>
						<span class="font-weight-light grey--text" style="font-size: 13px;margin-left: 3%;">{{favorite.voteupCount}}赞同·{{favorite.commentCounut}}评论</span>
						<!-- <p class="font-weight-bold" style="font-size:20px;">123</p> -->
						<!-- <p class="font-weight-regular">Normal weight text.</p> -->
						<!-- <p class="font-weight-light" style="font-size: 15px;">Light weight text.</p> -->
					</div>
				</div>

				<div class="hy-explore-card-faviorite-bottom m-auto">
					<span class="font-weight-bold grey--text">已收藏{{favorite.totalCount}}内容</span>
				</div>
			</v-card>

			<div class="text-center hy-explore-bottom">
				<router-link to="/favorite/all">
					<v-btn rounded color="font-weight-bold white grey--text">查看更多收藏夹</v-btn>
				</router-link>
			</div>
		</div>
		<!-- 专栏 -->
		<div class="hy-explore-smalltips m-2 d-flex">
			<svg class="Zi Zi--EditCircle" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>专栏</h2>
		</div>
		<div class=" d-flex flex-wrap">
			<v-card class="mx-auto" height="335" width="23%" style="display: flex;flex-direction: column;align-items: center;padding: 1% 0 1% 0;margin-bottom: 5%;"
			 v-for="(columns,index) in recentColumns" :key="index">
				<v-card-text style="display: flex;flex-direction: column;align-items: center;">
					<a :href="columns.url">
						<v-avatar size="88">
							<img :src="columns.imageUrl">
						</v-avatar>
					</a>

					<a :href="columns.url">
						<p class="font-weight-black" style="font-size: 18px;color: black;">{{columns.title.substring(0,10)}}</p>
					</a>

					<p>{{columns.followers}}关注·{{columns.articlesCount}}文章</p>
					<div class="text--primary">
						{{columns.description.substring(0,20)}}
					</div>
				</v-card-text>
				<br>
				<a :href="columns.url">
					<v-card-actions>
						<v-btn class="font-weight-black blue--text" depressed color="#d9edff">进入专栏</v-btn>
					</v-card-actions>
				</a>


			</v-card>
			<div class="text-center hy-explore-bottom">
				<router-link to="/columnnav/column/all">
					<v-btn rounded color="font-weight-bold white grey--text ">查看更多专栏</v-btn>
				</router-link>
			</div>
		</div>
		<div class="text-center hy-explore-bottom" style="margin:5% 0 15% 0;">
			 <p class="font-weight-regular" style="color: #9e9e9e;">Jack·知乎指南·知乎协议·应用·工作·联系我们@2020知乎</p>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				recentSpecial: [],
				roundTable: [],
				recentfavorite: [],
				recentColumns: [],
				roundTableColor:[]
			}

		},
		methods: {
			getSpeciacl() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/special',
				}).then(res => {
					this.recentSpecial = res.data.data;
					// console.log(this.recentSpecial);
				})

			},
			getRoundTable() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/roundtable'
				}).then(res => {
					this.roundTable = res.data.data;
					// console.log(res.data.data[0].banner)
					this.getColor();
				})
			},
			getFavorite() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/favorite'
				}).then(res => {
					// console.log(res.data.data)
					this.recentfavorite = res.data.data
				})
			},
			getColumns() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/columns'
				}).then(res => {
					// console.log(res.data.data);
					this.recentColumns = res.data.data;
				})
			},
			// 获取所有图片的主色
			getColor(){
				
					this.$nextTick( ()=> {
						let boxArr = this.$refs.mainBox;
						let imgArr = this.$refs.mainImg;
						let maskArr = this.$refs.mask;
						let mask2Arr = this.$refs.mask2;
						let test = this.$refs.test;
						let btnArr = this.$refs.btn;
						let roundTableColor =this.roundTableColor;
						for(var i = 0,len =imgArr.length;i<len;i++){
							let box = boxArr[i];
							let img = imgArr[i];
							let mask = maskArr[i];
							let mask2 = mask2Arr[i];
							let btn = btnArr[i];
							RGBaster.colors(img,{
								success:function(payload){
									box.style.backgroundColor = payload.dominant;
									let str = payload.dominant.substring(4,payload.dominant.length-1);
									let strArr = str.split(",");
									let r = parseInt(strArr[0]);
									let g = parseInt(strArr[1]);
									let b = parseInt(strArr[2]);
									let a = 0;
									let a1 = 0.5;
									
									let maskcolor = `rgba(${r},${g},${b},${a})`;
									let mask2color = `rgba(${r},${g},${b},${a1})`;
									// mask.style.backgroundColor =payload.dominant;									
									mask.style.background = 'linear-gradient(to right,' + payload.dominant + ' 0%,' + maskcolor + ' 100%)';
									mask2.style.background = 'linear-gradient(to right,' + mask2color + ' 0%,' + maskcolor + ' 100%)';
									// console.log(btn.style);
									btn.style.color = payload.dominant;
									// alert("成功")
								}
							})
						}
					});	
			}
		},
		created() {
			this.getSpeciacl()
			this.getFavorite()
			this.getColumns()
			this.getRoundTable()
			
		}
	}
</script>

<style scoped="scoped">
/* 	.hy-round-card-top{
		height: 55%;
		background-color: red;
	}
	.hy-round-card{
		background-color: grey;
		height: 100%;
	}
	.hy-round-container{
		height: 460px;
		padding: 0 3% 0 3%;
	} */
	.hy-explore-bottom {
		height: 10%;
		width: 100%;
	}
	.hy-explore-card {
		height: 400px;
		width: 45%;
	}
	.hy-explore-card-faviorite-top {
		width: 94%;
		height: 30%;
		margin: 3% auto 0 auto;
	}
	.hy-explore-card-faviorite-mid {
		width: 90%;
		height: 55%;
	}
	.hy-explore-card-faviorite-bottom {
		width: 90%;
		height: 15%;
	}
	.hy-explore-card-faviorite-mid-row {
		width: 98%;
		height: 45%;
	}
</style>
