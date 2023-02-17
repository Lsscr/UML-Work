<template>
    <div class="news-detail">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/news' }">新闻</el-breadcrumb-item>
            <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="news-header">
            <h1 class="news-title">{{ news.title }}</h1>
            <div class="news-info">
                <span class="news-date">{{ news.date }}</span>
                <span class="news-source">来源：{{ news.source }}</span>
            </div>
        </div>
        <div class="news-content" v-html="news.content"></div>
</div>
</template>

<script setup lang="ts">
const news = defineProps({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
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