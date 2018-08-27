<template>
	<div class="row">
    <br>
    <Row>
      <Col span="12" offset="6"><h1>视频列表</h1></Col>
    </Row>
    <br>
		<Row align="middle">
			<Col span="6" offset="4" v-for="item in msgList" :key="item.id" style="">
          <Card style="background:#fff; margin-bottom:20px;">
            <router-link tag="div" :to="{name: 'videoPlay', params: {id: '1'}}">
              <video width="320" height="240" controls>
              <source src="http://117.41.231.145/676FD6E6AC3B7AF7EAED2914/03000801005AD37002D92AE4E5698DB6B0E248-E53D-4709-1DAD-6C359301D88B.mp4?ccode=050F&duration=59&expire=18000&psid=b306b882ef124610a154f2a85c1e5646&sp=&ups_client_netip=b79fa2ff&ups_ts=1535386809&ups_userid=754650399&utid=emzVEfppJHwCAXrqRhOnRWVA&vid=XMzQyNzc5MjkyOA%3D%3D&vkey=B0f1d02a8e1c9bddb7d81017e8a1abd74"  type="video/mp4">
              <source src="http://117.41.231.145/676FD6E6AC3B7AF7EAED2914/03000801005AD37002D92AE4E5698DB6B0E248-E53D-4709-1DAD-6C359301D88B.mp4?ccode=050F&duration=59&expire=18000&psid=b306b882ef124610a154f2a85c1e5646&sp=&ups_client_netip=b79fa2ff&ups_ts=1535386809&ups_userid=754650399&utid=emzVEfppJHwCAXrqRhOnRWVA&vid=XMzQyNzc5MjkyOA%3D%3D&vkey=B0f1d02a8e1c9bddb7d81017e8a1abd74"  type="video/ogg">
              您的浏览器不支持 HTML5 video 标签。
            </video>
            </router-link>
            
            <p slot="title">{{item.name}}</p>
            <span slot="extra">类别：{{item.classify}}
                <!-- <Button v-show="btnShow === 1" type="warning" @click="delMsg(item.id, $event)">删除</Button> -->
            </span>
            <p>{{item.content}}</p>
            <p style="text-align:right;">时间：{{item.created_at}}</p>
          </Card>
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
      this.getAllCourse()
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
      getAllCourse() {
        api.getAllCourse('123')
          .then(res => {
            console.log('getAllCourse', res)
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