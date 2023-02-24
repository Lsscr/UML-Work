<template>
  <div w="screen" class="flex flex-col min-h-100vh InBg">
    <KeepAlive>
      <router-view></router-view>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
.InBg {
  background-color: rgb(245, 245, 245);
}
</style>
