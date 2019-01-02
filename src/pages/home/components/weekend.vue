<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="img-wrap"><img :src="item.imgUrl" /></div>
        <div class="txt-wrap">
          <div class="topic">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.weekend
  color: $txtColor
  .title
    padding-left: .26rem;
    height: .8rem;
    line-height: .8rem;
  .list
    .item
      .img-wrap
        overflow: hidden;
        height: 0;
        padding-bottom: 37.943%;
        img
          width: 100%;
      .txt-wrap
        padding: .14rem 1.6rem .2rem .2rem;
        .topic
          font-size: .28rem;
          line-height: .48rem;
          ellipsis();
        .desc
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
          ellipsis();
</style>
