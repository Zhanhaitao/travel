<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li class="item" v-for="item of itemList" :key="item.id">
        <div class="img-wrap"><img :src="item.imgUrl" /></div>
        <div class="txt-wrap">
          <div class="topic">{{ item.topic }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data() {
    return {
      itemList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
          topic: '上海泡汤圣地',
          desc: '上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          topic: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          topic: '上海城市观光',
          desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
        }
      ]
    };
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
