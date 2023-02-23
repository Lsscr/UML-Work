<template>
    <div class="pl-20% pr-20%">
        <el-page-header class="bg-white" @back="$router.go(-1)">
            <template #breadcrumb>
                <el-breadcrumb class="news-detail" separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/news' }">新闻</el-breadcrumb-item>
                    <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
                </el-breadcrumb>
            </template>
            <template class="ml-4" #content>
                <div>
                    <h1>{{ news.title }}</h1>
                </div>
            </template>
            <div class="min-h-50 m-4 flex items-start text-[1.23rem]" v-html="news.content"></div>
            <div class="news-info flex items-start justify-between w-230px ml-4">
                <span>{{ news.date }}</span>
                <span>来源：{{ news.source }}</span>
            </div>
        </el-page-header>
        <CommentBox />
    </div>
</template>

<script setup lang="ts">
const news = defineProps({
    title: {
        type: String,
        required: true,
        defualt: '测试标题'
    },
    date: {
        type: String,
        required: true,
        defualt: '测试标题'
    },
    source: {
        type: String,
        required: true,
        defualt: '测试标题'
    },
    content: {
        type: String,
        required: true,
        defualt: '测试标题'
    },
})
</script>

<style scoped>
.news-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.news-header {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.news-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.news-info {
    color: #999;
}

.news-date {
    margin-right: 10px;
}

.news-content {
    line-height: 1.8;
}
</style>