<template>
  <div class="layout">
       <div class="layout-ceiling">
          <div class="layout-ceiling-main">
            <router-link to="/home/register" v-show="checkLogin === 0"><Icon type="android-person"></Icon> 注册</router-link>
            <router-link to="/home/login" v-show="checkLogin === 0"><Icon type="person-add"></Icon> 登录</router-link>
            <router-link to="/home/person" v-show="checkLogin === 1">{{user}}</router-link>
            <router-link to="/home/add" v-show="checkLogin === 1"><Icon type="android-add-circle"></Icon> 添加书签</router-link>
            <router-link to="/home/management" v-show="checkLogin === 1"><Icon type="android-add-circle"></Icon> 分类管理</router-link>
            <router-link to="/home/bookList" v-show="checkLogin === 1"><Icon type="social-markdown"></Icon> about Me</router-link>
          </div>
      </div> 
      <div class="layout-header">
          <div class="layout-logo" @click="backhome">
            云书签
          </div>
      </div>
      <!-- main body  -->
      <router-view></router-view>
       
      <div style="height: 200px"></div>
      <div class="layout-copy">
          2011-2016 &copy; TalkingData
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '23',
      user: '用户',
      checkLogin: 0
    }
  },
  mounted () {
    if (sessionStorage.username) {
      this.user = sessionStorage.username
      this.checkLogin = 1
    } else {
      this.checkLogin = 0
    }
    console.log(this)
  },
  methods: {
    backhome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 14px 0;
    font-size 14px
    overflow: hidden;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
</style>
