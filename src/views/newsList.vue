<template>
    <div class="news-list">
        <div class="news-header">
            <h1 class="news-title">新闻列表</h1>
            <div m2 flex justify-center text-2xl op60 hover="op90">
                <router-link to='/' class="i-carbon-arrow-left ">
                </router-link>
            </div>
        </div>
        <div class="news-list-container">
            <template v-for="items in newsList">
                <NewsCard :title="items.title" :id="items.id" :content="items.description" :image="items.image"
                    :date="items.createTime" @click="handleClick"></NewsCard>
            </template>
            <div v-if="newsList.length === 0" class="no-data">暂无数据</div>
        </div>
</div>
</template>
  
<script setup lang="ts">
import { api } from "@/api"
import NewsCard from '@/components/NewsCard.vue';

type NewsItemType = {
    "classifyId"?: string,
    "code"?: string,
    "createTime"?: string,
    "createUser"?: number,
    "description"?: string,
    "id"?: string
    "image"?: string,
    "sort"?: number,
    "status"?: number,
    "title"?: string,
    "updateTime"?: string,
    "updateUser"?: number
}

const newsList = ref<NewsItemType[]>([])
const categories = ref([
    { id: 1, label: '全部' },
    { id: 2, label: '国内' },
    { id: 3, label: '国际' },
    { id: 4, label: '社会' }
])
const currentCategory = ref(categories.value[0])

const fetchNewsList = async () => {
    // 使用异步请求获取新闻列表数据，例如：
    const [e, r] = await api.getNewsList({ page: 1, pageSize: 10 })
    if (!e && r) {
        newsList.value = r?.data.records as NewsItemType[]
        console.log(newsList.value)
    }
}

const handleCommand = (category: any) => {
    currentCategory.value = category
    fetchNewsList()
}

const handleClick = (id) => {
    console.log(id)
}

onMounted(() => {
    fetchNewsList()
})

</script>
  
<style scoped>
.news-list {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    height: 100%;
}

.news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.news-title {
    font-size: 24px;
    font-weight: bold;
}

.news-list-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #fff;
}
</style>