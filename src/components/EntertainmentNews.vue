<template>
    <div class="news-list">
        <div class="news-header">
            <h1 class="news-title">娱乐新闻</h1>
            <div m2 flex justify-center text-2xl op60 hover="op90">
                <router-link to='/' class="i-carbon-arrow-left ">
                </router-link>
            </div>
        </div>
        <div class="news-list-container">
            <template v-for="items in newsListData">
                <NewsCard :title="items.title" :id="items.id" :content="items.description" :image="items.image"
                    :date="items.createTime"
                    @click="$router.push({ name: 'NewsDetail', params: { id: items.id, title: items.title, date: items.createTime, source: items.source, content: items.description } })">
                </NewsCard>
            </template>
            <div v-if="newsListData.length === 0" class="no-data">暂无数据</div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import NewsCard from '@/components/NewsCard.vue';
import { api } from '@/api'
import { NewsItemType } from "@/types/globals";
const newsListData = ref([])
const fetchNewsList = async () => {
    // 使用异步请求获取新闻列表数据，例如：
    const [e, r] = await api.getNewsByCategory({ classifyId: "1621148934742949890" })
    if (!e && r) {
        newsListData.value = r?.data as NewsItemType[]
    }
}

onMounted(() => {
    fetchNewsList()
})
</script>
  
<style scoped>
.news-list {
    max-width: 1240px;
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