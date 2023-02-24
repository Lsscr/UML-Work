<template>
    <div>
        <el-menu default-active="/homepage" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <div w="230px" />
            <el-menu-item index="/homepage" @click="$router.replace('/homepage')"> <el-icon>
                    <HomeFilled />
                </el-icon>首页</el-menu-item>
            <template v-for="(item, index) in category" :key="index + 2">
                <el-menu-item :index="index + 2"
                    @click="$router.push({ name: item.nameUrl, params: { urlid: item.id } })">{{
                        item.name
                    }}</el-menu-item>
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
        <router-view></router-view>
    </div>
    <a-drawer v-model:visible="visible" width="520" :maskClosable="false" destroyOnClose class="custom-class" title="添加新闻"
        placement="right" @after-visible-change="afterVisibleChange">
        <news-add v-model="visible"></news-add>
    </a-drawer>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import NewsAdd from '@/views/NewsAdd.vue'

const userStore = useUserStore()
const visible = ref<boolean>(false);
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

let category = ref([
    {
        id: "1621144972673384450",
        name: "法律新闻",
        nameUrl: "LegalNews"
    },
    {
        id: "1621148934742949890",
        name: "娱乐新闻",
        nameUrl: "EntertainmentNews"
    },
    {
        id: "1621152644667772929",
        name: "学校新闻",
        nameUrl: "SchoolNews"
    },
    {
        id: "1621473779682844673",
        name: "军事新闻",
        nameUrl: "MilitaryNews"
    }
])
</script>

<style scoped></style>