<template>
  <el-container>
    <el-header style="width: 100% height: 50px;background-color: skyblue;">
      <div class="title">系统名称</div>
      <div class="user">
        <el-avatar> user </el-avatar>
      </div>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;height: calc(100vh - 50px);background-color: #545c64;">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script> 

<style scoped>
.title{
  float: left;
  line-height: 60px;
  font-size: 26px;
}

.user{
  float: right;
  line-height: 60px;
  font-size: 26px;
}
</style>
