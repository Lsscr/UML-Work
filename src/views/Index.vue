import Icons from 'unplugin-icons/vite';
<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <div w="230px" />
            <el-menu-item index="1"> <el-icon>
                    <HomeFilled />
                </el-icon>首页</el-menu-item>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <div class="flex-grow" />
            <div class="flex items-center justify-between b-0" w="70px" m-r="70px">
                <el-link type="primary" :underline="false" size="small" @click="$router.push('/login')">登录</el-link>
                <el-link type="primary" :underline="false" size="small" @click="$router.push('/login')">注册</el-link>
            </div>
        </el-menu>
        <div class="mb-8 pl-140px pr-140px">
            <el-carousel :interval="5000" tyep="card" arrow="always">
                <el-carousel-item v-for="(news, index) in state.newsList" :key="index">
                    <h2>{{ news.title }}</h2>
                    <p>{{ news.content }}</p>
                </el-carousel-item>
            </el-carousel>
        </div>
        <newsList></newsList>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const state = reactive({
    newsList: [
        {
            title: '新闻标题1',
            content: '新闻内容1'
        },
        {
            title: '新闻标题2',
            content: '新闻内容2'
        },
        {
            title: '新闻标题3',
            content: '新闻内容3'
        },
        {
            title: '新闻标题4',
            content: '新闻内容4'
        }
    ]
})
</script>

<style scoped>
h2 {
    font-size: 24px;
    color: #333;
}

p {
    font-size: 18px;
    color: #666;
}
</style>