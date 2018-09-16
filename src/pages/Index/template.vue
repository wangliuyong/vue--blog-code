<template>
  <div id="index">
    <section class="blog-posts" v-for="(item,index) in blogs" :key="index">
      <div class="item">
        <figure class="avatar">
          <img :src="item.user.avatar" :alt="item.user.username">
          <figcaption>{{item.user.username}}</figcaption> 
        </figure>
        <h3>{{item.title}}<span> {{friendlyDate(item.createdAt)}}</span></h3> 
        <p>{{item.description}}</p>
        <router-link :to="`/detail/${item.id}`" class="link">详情</router-link>
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
