<template>
    <div class="news-form">
        <el-form ref="formRef" :model="formData" label-width="70px" size="large">
            <el-form-item label="标题" class="form-item">
                <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="作者" class="form-item">
                <el-input v-model="formData.author" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="发布时间" class="form-item">
                <el-date-picker v-model="formData.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容" class="form-item">
                <el-input type="textarea" v-model="formData.content" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="封面图片" class="form-item">
                <el-upload class="upload-demo" action="//jsonplaceholder.typicode.com/posts/"
                    v-model:file-list="formData.fileList" multiple :limit="3" :on-preview="handlePreview"
                    :on-remove="handleRemove" :on-exceed="handleExceed" :before-remove="beforeRemove"
                    :on-success="handleSuccess" :on-error="handleError" :auto-upload="false" list-type="picture">
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
import type { FormInstance, UploadUserFile, UploadProps } from 'element-plus';
import {
    ElMessage, ElMessageBox
} from 'element-plus';

const formRef = ref<FormInstance>()
const formData = reactive<{
    title: string,
    author: string,
    date: string,
    content: string,
    fileList: UploadUserFile[]
}>({
    title: '',
    author: '',
    date: '',
    content: '',
    fileList: [],
})


const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const handleSuccess: UploadProps['onSuccess'] = (response, file, fileList) => {
    console.log('handleSuccess', response, file, fileList);
}

const handleError: UploadProps['onError'] = (error, file, fileList) => {
    console.log('handleError', error, file, fileList);
}

const submitForm = (elformRef: FormInstance | undefined) => {
    if (!elformRef) return
    elformRef.validate((valid) => {
        if (valid) {
            ElMessage({
                type: 'success',
                message: '发布成功'
            })
            elformRef.resetFields()
            // 在这里调用接口或其他逻辑来提交表单数据
        } else {
            console.log('validate failed');
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
