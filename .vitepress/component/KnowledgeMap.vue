<template>

  <div class="common-layout">
    <el-container>
      <el-header>

        <h1 class="h1top">
          知识地图
        </h1>
      </el-header>
      <el-main>

        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div style="background:#8a8a8a;" class="grid-content ep-bg-purple-light" >



            </div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div style="background:#aeaeae;" class="grid-content ep-bg-purple" >


              [关于文档](./README.md)
            </div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
        </el-row>



      </el-main>
    </el-container>
  </div>

</template>

<style scoped>
.h1top{
  text-align: center;
  font-size: 26px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<script setup lang="ts">
</script>