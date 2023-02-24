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
            <p class="min-h-50 m-4 text-left indent text-[1.23rem]">{{ newdata.mainBody }}</p>
            <div class="news-info flex items-start justify-between w-300px ml-4">
                <span class="min-w-140px">{{ newdata.createTime }}</span>
                <span class="min-w-120px">来源：{{ newdata.source }}</span>
            </div>
        </el-page-header>
        <CommentBox />
    </div>
</template>

<script setup lang="ts">
import { api } from '@/api'
import { useRoute } from 'vue-router';
const router = useRoute()
const news = defineProps({
    id: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        defualt: '测试标题'
    },
})
let newdata = ref({})
const getNewsDeail = async () => {
    const [e, r] = await api.getNewsDetails(router.params.id)
    if (!e && r) {
        newdata.value = r.data
        console.log(newdata)
    }
}
onMounted(() => {
    getNewsDeail()
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