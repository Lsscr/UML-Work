<template>
    <div>
        <div class="mb-8 pl-140px pr-140px mt-8">
            <el-carousel :interval="5000" tyep="card" arrow="always" indicator-position="outside">
                <el-carousel-item v-for="(news, index) in bannerState" :key="index">
                    <div class="flex flex-row" w="1200px">
                        <el-image class="flex" style="width: 800px; height: 400px"
                            :src="`http://121.4.146.92:8080/common/download?name=` + news.image" fit="fill" />
                        <div class="flex flex-col p-4">
                            <h2>{{ news.title }}</h2>
                            <p class="indent-xl">{{ news.description }}</p>
                        </div>
                    </div>

                </el-carousel-item>
            </el-carousel>
        </div>
        <newsList :newsListData="newsListData"></newsList>
    </div>
</template>

<script setup lang="ts">
import { api } from '@/api'
import { NewsItemType } from '@/types/globals';
let newsListData = ref<any>([
    [
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-17 14:38:51",
            "createUser": 1,
            "description": "苹果的返回功能拉胯，仅供左撇子使用",
            "id": "1626471215044157442",
            "image": "fa56cc98-bff0-4be6-830e-f81d19c6f904.jpg",
            "sort": 10,
            "status": 1,
            "title": "苹果不理会群众意见",
            "updateTime": "2023-02-17 14:38:51",
            "updateUser": 1
        },
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-17 14:30:03",
            "createUser": 1,
            "description": "苹果的返回功能拉胯，仅供左撇子使用",
            "id": "1626469002422956034",
            "image": "25f3057b-5e10-4d57-8134-4c58cca8307a.png",
            "sort": 10,
            "status": 1,
            "title": "果粉压抑中的爆发",
            "updateTime": "2023-02-17 14:30:03",
            "updateUser": 1
        },
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-05 22:51:26",
            "createUser": 1,
            "description": "我国第一百颗人造卫星于广西发射成功",
            "id": "1622246522749685762",
            "image": "9ad8d5a2-5e6b-4617-8981-11afdc68d2a6.jpg",
            "sort": 2,
            "status": 1,
            "title": "卫星发射",
            "updateTime": "2023-02-07 19:48:46",
            "updateUser": 1
        },
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-07 19:43:16",
            "createUser": 1,
            "description": "在经历多年发展后，凭借xxx的硬核技术",
            "id": "1622923945313009665",
            "image": "d8ca0f49-7115-46a1-b8d4-4bcc792aa1e1.png",
            "sort": 3,
            "status": 1,
            "title": "xxx公司上市获值上亿",
            "updateTime": "2023-02-07 19:43:16",
            "updateUser": 1
        },
    ]
])
let bannerState = ref(
    [
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-17 14:38:51",
            "createUser": 1,
            "description": "苹果的返回功能拉胯，仅供左撇子使用",
            "id": "1626471215044157442",
            "image": "fa56cc98-bff0-4be6-830e-f81d19c6f904.jpg",
            "sort": 10,
            "status": 1,
            "title": "苹果不理会群众意见",
            "updateTime": "2023-02-17 14:38:51",
            "updateUser": 1
        },
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-17 14:30:03",
            "createUser": 1,
            "description": "苹果的返回功能拉胯，仅供左撇子使用",
            "id": "1626469002422956034",
            "image": "25f3057b-5e10-4d57-8134-4c58cca8307a.png",
            "sort": 10,
            "status": 1,
            "title": "果粉压抑中的爆发",
            "updateTime": "2023-02-17 14:30:03",
            "updateUser": 1
        },
        {
            "classifyId": "1621144972673384450",
            "code": "",
            "createTime": "2023-02-05 22:51:26",
            "createUser": 1,
            "description": "我国第一百颗人造卫星于广西发射成功",
            "id": "1622246522749685762",
            "image": "9ad8d5a2-5e6b-4617-8981-11afdc68d2a6.jpg",
            "sort": 2,
            "status": 1,
            "title": "卫星发射",
            "updateTime": "2023-02-07 19:48:46",
            "updateUser": 1
        }
    ]
)

const fetchNewsList = async () => {
    // 使用异步请求获取新闻列表数据，例如：
    const [e, r] = await api.getNewsList({ page: 1, pageSize: 10 })
    if (!e && r) {
        newsListData.value = r?.data.records as NewsItemType[]
        bannerState.value = r?.data.records.slice(0, 3)
    }
}

onMounted(() => {
    fetchNewsList()
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