<template>
	<div class="row">
		<Row align="middle">
			<Col span="16" offset="4">
				<ul class="">
					<li class="" v-for="item in msgList" :key="item.id" style="">
						<!-- <Input type="text" v-model="item.classify"></Input>
						<Input v-model="item.content">
								<span slot="prepend">http://</span>
								<span slot="append">.com</span>
						</Input>
            <Col span="12">
							标题-{{item.name}}
						</Col>
						<Col span="12" style="text-align:right">
              {{item.created_at}}
							<Button type="warning">删除</Button>
						</Col> -->
            <Card style="background:#fff; margin-bottom:20px;">
              <p slot="title">{{item.name}}</p>
              <span slot="extra">{{item.classify}} | </span>
              <p>{{item.content}}</p>
              <p>{{item.created_at}}</p>
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
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
