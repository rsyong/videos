<template>
	<div>
		<div class="main">
			<div class="flex just-between">
				<div class="gs-title">
					<span class="gs-live-in">直播未开始</span>dd_5cecfa28d4937
				</div>
				<div class="color-fff" style="font-size: 14px;">欢迎您,于学生</div>
			</div>
			<div class="content flex">
				<div class="content-left">
					<div class="content-left-top back"></div>
					<div class="content-left-bottom back mt-10 flex flex-column">
						<div>
							<div class="flex just-between gs-userlist-count color-fff">
								<div>问答</div>
								<div>
									<input type="checkbox">只看我
								</div>
							</div>
						</div>
						<div class="flex1"></div>
						<div class="color-fff quiz">
							专家为你解答疑惑
							<div style="margin-top: 10px;">
								<textarea></textarea>
								<input class="btn" type="button" value="提问">
							</div>
						</div>
					</div>
				</div>
				<div class="flex1 ml-10 flex flex-column">
					<div class="content-center back flex just-center align-center">
						<img src="static/img/doc_bg.png" style="width: 260px;">
					</div>
					<div class="content-bottom back mt-10"></div>
				</div>
				<div class="content-right back ml-10">
					<div class="flex flex-column" style="height: 100%;">
						<div>
							<div class="flex just-between gs-userlist-count color-fff">
								<div>聊天</div>
								<div>
									<input type="checkbox">只看我
								</div>
							</div>
						</div>
						<div class="flex stutent-list">
							<ul>
								<li v-for="(item,index) in studentdata" :key="index">{{item.chatname}}</li>
							</ul>
						</div>
						<div class="color-fff quiz">
							专家为你解答疑惑
							<div style="margin-top: 10px;">
								<textarea style="width: 77%;"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Index",
	data() {
		return {
			studentdata: []
		};
	},
	methods: {
		_fetch() {
			this.axios
				.get(
					"http://lyg.goluckin.com/index.php/api/chatContent?roomid=26"
				)
				.then(res => {
					console.log(res.data.data);
					this.studentdata = res.data.data;
				});
		}
	},
	created() {
		this._fetch();
	}
};
</script>

