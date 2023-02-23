<template>
    <div>
        <CommentBox />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import CommentBox from './CommentBox.vue'

export default defineComponent({
    components: {
        CommentBox,
    },
})
</script>
  