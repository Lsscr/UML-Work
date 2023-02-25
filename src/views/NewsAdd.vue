<template>
    <div class="news-form">
        <el-form ref="formRef" :model="formData" label-width="70px" size="large">
            <el-form-item label="新闻标题" class="form-item">
                <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="新闻作者" class="form-item">
                <el-input v-model="formData.news_detail.author" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="新闻来源" class="form-item">
                <el-input v-model="formData.news_detail.source" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="发布类型">
                <el-select v-model="formData.classify_id" placeholder="选择类型">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="简单描述" class="form-item">
                <el-input v-model="formData.description" placeholder="描述一下"></el-input>
            </el-form-item>
            <el-form-item label="内容" class="form-item">
                <el-input type="textarea" v-model="formData.news_detail.main_body" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="封面图片" class="form-item">
                <el-upload class="upload-demo" :headers="{ 'Access-Control-Allow-Origin': '*' }"
                    action="http://localhost:8089/api/common/upload" ref="uploadRef" v-model:file-list="formData.fileList"
                    multiple :limit="1" :on-preview="handlePreview" :on-remove="handleRemove" :on-exceed="handleExceed"
                    :before-remove="beforeRemove" :auto-upload="false" :on-success="handleSuccess" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item class="form-item">
                <el-button type="primary" @click="submitForm(formRef)">发布</el-button>
                <el-button @click="resetForm(formRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script setup lang="ts">
import type { FormInstance, UploadUserFile, UploadProps, UploadInstance } from 'element-plus';
import {
    ElMessage, ElMessageBox
} from 'element-plus';
import { api } from '@/api'

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const uploadRef = ref<UploadInstance>()
const formRef = ref<FormInstance>()
const formData = reactive<{
    title: string,
    classify_id: string,
    description: string,
    sort?: number,
    content: string,
    image: string,
    fileList: UploadUserFile[],
    news_details: Record<string, string>[],
    news_detail: {
        source: string,
        author: string,
        main_body: string
    }
}>({
    title: '',
    classify_id: '',
    description: '',
    sort: 10,
    content: '',
    image: '',
    fileList: [],
    news_details: [],
    news_detail: {
        source: '',
        author: '',
        main_body: ''
    }
})

const options = [
    {
        value: '1621144972673384450',
        label: '法律新闻',
    },
    {
        value: '1621148934742949890',
        label: '娱乐新闻',
    },
    {
        value: '1621152644667772929',
        label: '学校新闻',
    },
    {
        value: '1621473779682844673',
        label: '军事新闻',
    }
]

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `取消上传的图片 ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `选择超过上限,请删除已选择的图片后在上传`
    )
}

const handleSuccess: UploadProps['onSuccess'] = (res, file, filelist) => {
    formData.image = res.data
    console.log(formData.image)
}


const submitForm = (elformRef: FormInstance | undefined) => {
    if (!elformRef) return
    elformRef.validate((valid) => {
        if (valid) {
            formData.news_details.push(formData.news_detail)
            uploadRef.value?.submit()
            setTimeout(async () => {
                console.log(formData.image)
                const [e, r] = await api.newAdd(formData)
                if (!e && r) {
                    emit('update:modelValue', false)
                    ElMessage({
                        type: 'success',
                        message: '发布成功'
                    })
                    elformRef.resetFields()
                }
            }, 2000)

            // 在这里调用接口或其他逻辑来提交表单数据
        } else {
            return false;
        }
    });
}

const resetForm = (elformRef: FormInstance | undefined) => {
    if (!elformRef) return
    elformRef.resetFields()
}
</script>

<style scoped>
.news-form {
    max-width: 500px;
}

.form-item {
    margin-bottom: 20px;
}

.el-upload__tip {
    margin-top: 10px;
    color: #909399;
}
</style>
