<script setup lang="ts">
import { api } from '@/api';
import type { FormInstance, UploadUserFile, UploadProps, UploadInstance } from 'element-plus';
import {
  ElMessage, ElMessageBox
} from 'element-plus';

let fileList: UploadUserFile[];
const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value!.submit()
}
const count = ref(0)
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

const handleChange: UploadProps['onChange'] = (files, uploadFiles) => {

}

const handleRequest: UploadProps['httpRequest'] = async (param) => {
  const formData = new FormData()
  formData.append('file', param.file)
  const [e, r] = await api.uploadFileImg(formData)
  if (!e && r) {
    console.log(r)
  }
}
</script>

<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>123</h1>
    <el-input placeholder="Test ElInput" size="small" clearable @change=""></el-input>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <el-button @click="submitUpload">点击</el-button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
      starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>

    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    <el-upload class="upload-demo" :http-request="handleRequest" ref="uploadRef" v-model:file-list="fileList" multiple
      :limit="1" :on-preview="handlePreview" :on-remove="handleRemove" :on-exceed="handleExceed"
      :before-remove="beforeRemove" :on-change="handleChange" list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>

      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button size="small" @click="submitUpload">确定</el-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
