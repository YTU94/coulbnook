<template>
<div>
  <br>
  <Row>
    <Col span="12" offset="6"><h1>分类管理</h1></Col>
  </Row>
  <br>
  <Row>
    <Col span="12" offset="6">
    <Form>
      <FormItem prop="" >
          <Input type="text" v-model="classify" size="large" placeholder="classify">
              <Icon type="navicon-round" slot="prepend"></Icon>
          </Input>
      </FormItem>
    </Form>  
      <Button type="default" @click="addClassify(classify)">添加</Button>
    </Col>
    <Col span="12" offset="6">
      <ul>
        <Col span="24">
          <li v-for="item in classifyList" :key="item.id">
            <Card style="margin-top:10px;">
              <p>{{item.cname}} | {{item.id}}</p>
              <Button slot="extra" @click="deleteClassify(item.id)">删除</Button>
            </Card>
          </li>
        </Col>
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
      classify: '',
      classifyList: []
    }
  },
  created () {
    api.getClassify()
      .then(res => {
        console.log(res)
        this.classifyList = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    addClassify(classify) {
      api.addClassify(classify)
        .then(res => {
          console.log(res)
          this.$Message.success({
            content: '添加成功',
            onClose: function() {
              window.location.reload()
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteClassify(id) {
      api.deleteClassify(id)
        .then(res => {
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

</style>
