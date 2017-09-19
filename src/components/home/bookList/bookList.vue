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
                  <Button v-show="btnShow === 1" type="warning" @click="delMsg(item.id, $event)">删除</Button>
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
    beforeMount () {
      if (parseInt(sessionStorage.x) === 0) {
        if (this.$route.query.username) {
          sessionStorage.x = 1
          window.location.reload()
        }
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
      delMsg(id, e) {
        api.delMsg(id)
          .then(res => {
            console.log(res)
            this.$Message.success({
              content: '删除成功',
              onClose: function() {
                // window.location.reload()
                e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
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
