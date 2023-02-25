<template>
  <div w="screen" class="flex flex-col min-h-100vh InBg">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
.InBg {
  background-color: rgb(245, 245, 245);
}
</style>
