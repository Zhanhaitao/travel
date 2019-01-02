<template>
  <div class="recommend">
    <div class="title-wrap">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" />
      <h3 class="title">本周热门榜单</h3>
    </div>
    <ul class="list">
      <li class="item" v-for="item of itemList" :key="item.id">
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
  data() {
    return {
      itemList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
          title: '上海迪士尼乐园',
          price: '40'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg',
          title: '上海野生动物园',
          price: '65'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
          title: '东方明珠',
          price: '146'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1812/ff/ffaed78773f50caca3.img.jpg_250x250_1f02c3fd.jpg',
          title: '上海海昌海洋公园',
          price: '49'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
          title: '上海杜莎夫人蜡像馆',
          price: '129.9'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/b5/b5be74400df235aa90.water.jpg_250x250_14fa9a62.jpg',
          title: '环球金融中心观光厅',
          price: '60'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/2e/2e23d202457702c1.img.jpg_250x250_5e5a8320.jpg',
          title: '上海自然博物馆',
          price: '30'
        }
      ]
    };
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
