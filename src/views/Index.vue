import Icons from 'unplugin-icons/vite';
<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/news' }">新闻</el-breadcrumb-item>
            <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
        </el-breadcrumb>
        新闻 Index,vue 文件
</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>