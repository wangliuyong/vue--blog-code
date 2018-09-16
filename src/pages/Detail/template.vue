<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p><router-link to="/user">{{user.username}}</router-link> 创建于{{friendlyDate(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
