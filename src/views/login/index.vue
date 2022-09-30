<template>
  <div class="login">
    <el-form class="form" size="medium">
      <div class="img">
        <img src="@/assets/common/login-logo.png" alt="">
      </div>
      <el-form-item>
        <el-input
          v-model="form.mobile"
          clearable
          prefix-icon="el-icon-user-solid"
          placeholder="请输入手机号码"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          prefix-icon="el-icon-lock"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary">登录</el-button>
      </el-form-item>
      <p class="tip">帐号:13800000002 密码:123456</p>
    </el-form>
  </div>
</template>

<script>
import { sysLogin } from '@/api/login.js'
export default {
  data() {
    return {
      form: {
        mobile: '',
        password: ''
      }
    }
  },
  async created() {
    const res = await sysLogin(this.form)
    console.log('res:', res)
  }
}
</script>

<style lang="scss" scoped>
$btn-color: #407ffe;
.login {
  height: 100%;
  background-image: url('~@/assets/common/logBg.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 450px;

    .img {
      text-align: center;
      margin-bottom: 30px;
    }
    ::v-deep .el-input__inner {
      height: 50px;
    }
    .btn {
      width: 100%;
      height: 50px;
      background-color: $btn-color;
    }
    .tip {
      color: #fff;
    }
  }
}
</style>
