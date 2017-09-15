<template>
<Row >
  <br>
  <Row>
    <Col span="12" offset="6"><h1>云书签--注册</h1></Col>
  </Row>
  <br>
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
              <Input type="text" v-model="formInline.email" size="large" placeholder="email">
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
  import api from 'api/api'
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: '',
          email: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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
            this._register()
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      _register() {
        api.register(this.formInline.user, this.formInline.password, this.formInline.email)
          .then(res => {
            console.log(res)
            this.$Message.success('提交成功!')
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

