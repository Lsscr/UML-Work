import { api } from '../api/index';
<template>
    <div class="login" h="screen">
        <el-card class="login-card">
            <div class="logo">
                <img src="your-logo.png" alt="logo">
            </div>
            <el-form ref="form" :model="formData" :rules="rules" label-width="80px" class="login-form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model.trim="formData.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model.trim="formData.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <el-button type="primary" class="ml-22" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { api } from '@/api';
const form = ref()
const formData = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const login = async () => {
    // 处理登录逻辑
    const [e, r] = await api.userLogin(formData)
    console.log(e, r)
}
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f7fa;
}

.login-card {
    width: 400px;
}

.logo {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.login-form {
    margin-top: 30px;
}
</style>
