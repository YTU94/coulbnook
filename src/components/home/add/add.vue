<template>
<Row>
  <Col span="16" offset="4">
    <Form :model="formItem" :label-width="80">
        <FormItem label="标题">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="分类" size="small">
          <Row>
            <Col span="8">
               <Select v-model="formItem.select" placeholder="请选择">
                <Option :value="item.cname" v-for="item in classifyList" :key="item.id">{{item.cname}}</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="滑块">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="地址&Msg">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="addClass">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
  </Col>
</Row>

</template>

<script>
  import api from 'api/api'
  export default {
    data () {
      return {
        classifyList: [],
        formItem: {
          input: '', // name
          select: '', // classify
          slider: [20, 50],
          textarea: '' // content
        }
      }
    },
    created() {
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
      addClass () {
        api.addMsg(this.formItem.input, this.formItem.textarea, this.formItem.select)
          .then(res => {
            if (res.status === 1) {
              let that = this
              this.$Message.success({
                content: '添加成功',
                onClose: function() {
                  that.$router.push('/home/bookList')
                }
              })
            }
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
