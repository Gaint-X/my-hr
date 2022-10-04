<template>
  <div class="login">
    <el-form ref="form" class="form" :model="form" :rules="rules" size="medium">
      <div class="img">
        <img src="@/assets/common/login-logo.png" alt="">
      </div>
      <el-form-item prop="mobile">
        <el-input
          v-model="form.mobile"
          clearable
          prefix-icon="el-icon-user-solid"
          placeholder="请输入手机号码"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          prefix-icon="el-icon-lock"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submit">登录</el-button>
      </el-form-item>
      <p class="tip">帐号:13800000002 密码:123456</p>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: '',
        password: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'change' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号码',
            trigger: 'change'
          }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'change' },
          { min: 6, max: 12, message: '请输入6-12数的密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    async submit() {
      this.$refs.form.validate(async(result) => {
        if (result) {
          await this.$store.dispatch('login/toLogin', this.form)
          this.$message.success('登录成功')
        }
      })
    }
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
