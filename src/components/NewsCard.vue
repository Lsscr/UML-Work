import { ref } from 'vue';
<template>
    <div class="news-card hover:border-collapse min-h-195px min-w-1200px" w="80%" h="20%">
        <div class="news-card-header">
            <img :src="`http://121.4.146.92:8080/common/download?name=` + image" :alt="title" class="news-card-image" />
            <h3 class="news-card-title">{{ title }}</h3>
        </div>
        <div class="news-card-body">
            <p class="news-card-content">{{ content }}</p>
        </div>
        <div class="news-card-footer">
            <span class="news-card-date">{{ date }}</span>
            <el-button class="news-card-button" type="primary" @click="$emit('click', id)">阅读全文</el-button>
        </div>
</div>
</template>
  
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    }
})
</script>
  
<style scoped>
.news-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
    margin-top: 6px;
    margin-bottom: 6px;
}

.news-card-header {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.news-card-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-card-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
}

.news-card-body {
    padding: 20px;
}

.news-card-content {
    line-height: 1.5;
    text-align: justify;
}

.news-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f5f5f5;
}

.news-card-date {
    font-size: 14px;
    color: #999;
}

.news-card-button {
    padding: 5px 20px;
}
</style>
  