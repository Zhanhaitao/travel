<template>
  <div class="recommend">
    <div class="title-wrap">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" />
      <h3 class="title">本周热门榜单</h3>
    </div>
    <ul class="list">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="img-wrap"><img :src="item.imgUrl" alt="" /></div>
        <div class="title">{{ item.title }}</div>
        <div class="price">
          <span>￥{{ item.price }}</span
          >起
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.recommend
  margin-top: .2rem;
  border-top: .2rem solid #f5f5f5;
  border-bottom: .2rem solid #f5f5f5;
  padding: 0 .24rem;
  .title-wrap
    display: flex;
    padding: .24rem 0 .26rem;
    height: .44rem;
    line-height: .44rem;
    img
      display: block;
      width: .3rem;
      height: .3rem;
      vertical-align: top;
    .title
      margin-left: .08rem;
      font-size: .32rem;
      color: $txtColor;
  .list
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    .item
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: .12rem;
      padding: .06rem 0 .2rem;
      width: 2rem;
      font-size: .24rem;
      &:first-child
        margin-left: 0;
      .img-wrap
        overflow: hidden;
        width: 2rem;
        height: 0;
        padding-bottom: 100%;
        img
          width: 100%;
      .title
        margin-top: .12rem;
        width: 100%;
        text-align: center;
        line-height: .32rem;
        color: $txtColor;
        ellipsis()
      .price
        line-height: .36rem;
        font-size: .24rem;
        color: #616161;
        span
          color: #ff8300;
</style>
