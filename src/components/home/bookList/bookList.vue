<template>
	<div class="row">
    <br>
    <Row>
      <Col span="12" offset="6"><h1>书签列表</h1></Col>
    </Row>
    <br>
		<Row align="middle">
			<Col span="12" offset="6">
				<ul class="">
					<li class="" v-for="item in msgList" :key="item.id" style="">
            <Card style="background:#fff; margin-bottom:20px;">
              <p slot="title">{{item.name}}</p>
              <span slot="extra">类别：{{item.classify}}
                <transition name="slide-fade">
                  <Button v-show="btnShow === 1" type="warning" @click="delMsg(item.id)">删除</Button>
                </transition>
              </span>
              <p>{{item.content}}</p>
              <p style="text-align:right;">时间：{{item.created_at}}</p>
            </Card>
					</li>
				</ul>
			</Col>
		</Row>
	</div>
</template>

<script>
  import api from 'api/api'
  export default {
    data () {
      return {
        btnShow: 1,
        msgList: []
      }
    },
    mounted () {
      this.getAllMsg()
    },
    methods: {
      getAllMsg() {
        api.getAllMsg('123')
          .then(res => {
            console.log(res)
            this.msgList = res.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      delMsg(id) {
        api.delMsg(id)
          .then(res => {
            console.log(res)
            this.$Message.success({
              content: '删除成功',
              onClose: function() {
                window.location.reload()
              }
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
