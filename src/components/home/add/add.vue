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
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
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
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    },
    methods: {
      addClass () {
        api.add('test')
          .then(res => {
            debugger
            console.log(res)
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
