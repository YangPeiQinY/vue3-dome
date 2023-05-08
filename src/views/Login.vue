<template>
  <div class="container">
    <div id="login_box">
      <h2>客服系统</h2>
      <el-form
        :label-position="labelPosition"
        :model="formLabelAlign"
      >
        <el-form-item>
          <el-input
            v-model="formLabelAlign.name"
            placeholder="请输入用户名"
            :prefix-icon="User"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formLabelAlign.region"
            placeholder="请输入密码"
            :prefix-icon="Lock"
            size="large"
          />
        </el-form-item>
      </el-form>
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref} from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import router from '@/router/index.js'

const labelPosition = ref('right')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})

function login()
{
  router.push('/')
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
  background-size: 100% 130%;
  display: flex;
}

#login_box {
  width: 30%;
  height: 300px;
  background-color: #00000060;
  margin: auto;
  margin-top: 10%;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}

h2 {
  color: #ffffff90;
  margin-top: 5%;
  margin-bottom: 5%;
}

button {
  margin-top: 50px;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}
</style>
