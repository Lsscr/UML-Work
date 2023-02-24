<template>
    <a-list v-if="comments.length" :data-source="comments"
        :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`" item-layout="horizontal">
        <template #renderItem="{ item }">
            <a-list-item class="border-gray-500">
                <a-comment :author="item.author" :avatar="item.avatar" :content="item.content" :datetime="item.datetime">
                    <template #actions>
                        <span key="comment-basic-like">
                            <a-tooltip title="Like">
                                <template v-if="action === 'liked'">
                                    <LikeFilled @click="like" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like" />
                                </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                                {{ likes }}
                            </span>
                        </span>
                        <span key="comment-basic-dislike">
                            <a-tooltip title="Dislike">
                                <template v-if="action === 'disliked'">
                                    <DislikeFilled @click="dislike" />
                                </template>
                                <template v-else>
                                    <DislikeOutlined @click="dislike" />
                                </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                                {{ dislikes }}
                            </span>
                        </span>
                    </template>
                </a-comment>
            </a-list-item>
        </template>
    </a-list>
    <a-comment>
        <template #avatar>
            <a-avatar src="https://api.yimian.xyz/img?type=bed" alt="Han Solo" />
        </template>
        <template #content>
            <a-form-item>
                <a-textarea v-model:value="value" :rows="4" />
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                    评论
                </a-button>
            </a-form-item>
        </template>
    </a-comment>
</template>
<script setup lang="ts">
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Comment = Record<string, string>;

const likes = ref<number>(0);
const dislikes = ref<number>(0);
const action = ref<string>();
const comments = ref<Comment[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>('');

const like = () => {
    likes.value = 1;
    dislikes.value = 0;
    action.value = 'liked';
};

const dislike = () => {
    likes.value = 0;
    dislikes.value = 1;
    action.value = 'disliked';
};

const handleSubmit = () => {
    if (!value.value) {
        return;
    }

    submitting.value = true;

    setTimeout(() => {
        submitting.value = false;
        comments.value = [
            {
                author: 'Han Solo',
                avatar: 'https://api.yimian.xyz/img?type=moe',
                content: value.value,
                datetime: dayjs().fromNow(),
            },
            ...comments.value,
        ];
        value.value = '';
    }, 1000);
};
</script>
  
  