<template>
  <div id="index">
    <section class="blog-posts" v-for="(item,index) in blogs" :key="index">
      <div class="item">
        <figure class="avatar">
          <img :src="item.user.avatar" :alt="item.user.username">
          <figcaption>{{item.user.username}}</figcaption> 
        </figure>
        <h3>{{item.title}}<span>{{item.createdAt}}</span></h3> 
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
        <router-link :to="`/detail?${item.id}`" class="link">详情</router-link>
      </div>
      <hr/>
    </section>
    <section>
      <div class="block">
        <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </section>
    
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
