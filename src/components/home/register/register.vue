<template>
<Row >
  <Col span="16" offset="4">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline >
      <Row style="text-align: center;">
        <Col span="16" offset="4">
          <FormItem prop="user" >
            <Input type="text" v-model="formInline.user" size="large" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        </Col>
        <Col span="16" offset="4">
          <FormItem prop="email">
              <Input type="email" v-model="formInline.email" size="large" placeholder="email">
                  <Icon type="ios-email-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
        </Col>
        <Col span="16" offset="4">
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" size="large" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
        </Col>
        <Col span="16" offset="4">
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
        </FormItem> 
        </Col>
      </Row>
    </Form>
  </Col>
</Row>

</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>

