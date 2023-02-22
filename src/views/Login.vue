import { api } from '../api/index';
<template>
    <div class="login" h="screen">
        <el-card class="login-card" :body-style="{ padding: '0px' }">
            <el-tabs type="border-card" class="demo-tabs">
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon :size="12">
                                <img class="w-4 h-4" src="../assets/vite.svg" alt="vite-logo">
                            </el-icon>
                            <span>登录</span>
                        </span>
                    </template>
                    <el-form ref="form" :model="formData" :rules="rules" label-width="80px" class="login-form">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model.trim="formData.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model.trim="formData.password" type="password" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item class="flex">
                            <el-button type="primary" class="ml-22" @click="login">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon :size="12">
                                <img class="w-4 h-4" src="../assets/vue.svg" alt="vue.svg">
                            </el-icon>
                            <span>注册</span>
                        </span>
                    </template>

                </el-tab-pane>
            </el-tabs>
        </el-card>
</div>
</template>

<script setup lang="ts">
import { api } from '@/api';
import { useUserStore } from '@/store/userStore'
import { ElMessage } from 'element-plus';
import { setSessionState } from '../utils/seesionStore';
const router = useRouter()
const form = ref()
const formData = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const userStore = useUserStore()
const login = async () => {
    // 处理登录逻辑
    const [e, r] = await api.userLogin(formData)
    if (!e && r && r.code == 200) {
        userStore.userInfoObj = r.data
        setSessionState('role',r.data.username)
        ElMessage({
            message: '登录成功',
            type: 'success'
        })
        router.push('/')
    }
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


.login-form {
    margin-top: 30px;
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>
