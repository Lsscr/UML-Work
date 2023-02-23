import Icons from 'unplugin-icons/vite';
<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <div w="230px" />
            <el-menu-item index="1"> <el-icon>
                    <HomeFilled />
                </el-icon>首页</el-menu-item>
            <template v-for="(item, index) in category">
                <el-menu-item :index="index + 2">{{ item.name }}</el-menu-item>
            </template>
            <div class="flex-grow" />
            <div v-if="!userStore.userInfoObj['username']" class="flex items-center justify-between b-0" w="70px"
                m-r="70px">
                <el-link type="primary" :underline="false" size="small" @click="$router.push('/login')">登录</el-link>
                <el-link type="primary" :underline="false" size="small" @click="$router.push('/login')">注册</el-link>
            </div>
            <div v-else class="flex items-center justify-between" w="70px" m-r="70px">
                <el-dropdown :hide-on-click="false">
                    <span class="text-yellow-500 flex items-center justify-between">
                        <el-icon class="m-2">
                            <Avatar />
                        </el-icon>
                        {{ userStore.userInfoObj['username'] }}
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                            <el-dropdown-item @click="visible = true">发表文章</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-menu>
        <div class="mb-8 pl-140px pr-140px">
            <el-carousel :interval="5000" tyep="card" arrow="always">
                <el-carousel-item v-for="(news, index) in bannerState" :key="index">
                    <h2>{{ news.title }}</h2>
                    <p>{{ news.content }}</p>
                    <el-image style="width: 1200px; height: 200px"
                        :src="`http://121.4.146.92:8080/common/download?name=` + news.image" fit="fill" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <newsList :newsListData="newsListData"></newsList>
    </div>
    <a-drawer v-model:visible="visible" width="520" :maskClosable="false" destroyOnClose class="custom-class" title="添加文章"
        placement="right" @after-visible-change="afterVisibleChange">
        <news-add></news-add>
    </a-drawer>
</template>

<script setup lang="ts">
import { api } from '@/api'
import { useUserStore } from '@/store/userStore';
import { NewsItemType } from '@/types/globals';
import NewsAdd from '@/views/NewsAdd.vue'
const activeIndex2 = ref('1')
const visible = ref<boolean>(false);
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const userStore = useUserStore()

let newsListData = ref<NewsItemType>([])
let category = ref([

])
let bannerState = ref(
    [
        {
            id: "1621144972673384450",
            name: "法律新闻"
        },
        {
            id: "1621148934742949890",
            name: "娱乐新闻"
        },
        {
            id: "1621152644667772929",
            name: "学校新闻"
        },
        {
            id: "1621473779682844673",
            name: "军事新闻"
        }
    ]
)

const fetchCategoryList = async () => {
    // 使用异步请求获取新闻列表数据，例如：
    const [e, r] = await api.getNewCategoryList({ page: 1, pageSize: 10 })
    if (!e && r) {
        category.value = r?.data.records
    }
}

const fetchNewsList = async () => {
    // 使用异步请求获取新闻列表数据，例如：
    const [e, r] = await api.getNewsList({ page: 1, pageSize: 10 })
    if (!e && r) {
        newsListData.value = r?.data.records as NewsItemType[]
        bannerState.value = r?.data.records.slice(0, 3)
        console.log(bannerState.value)
    }
}

onMounted(() => {
    fetchCategoryList()
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