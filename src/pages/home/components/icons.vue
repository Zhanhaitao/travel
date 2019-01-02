<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="icons" v-for="(page, index) of pages" :key="index">
        <div v-for="item of page" :key="item.id" class="icon">
          <div class="img"><img :src="item.imgUrl" /></div>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons
  display: flex;
  flex-wrap: wrap;
  padding-top: .1rem;
  .icon
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding-top: .1rem;
    .img
      width: 1.1rem;
      height: 0;
      padding-bottom: 1.1rem;
      img {
        width: 100%;
      }
    .desc
      margin-top: .1rem;
      font-size: .28rem;
      color: $txtColor;
      width: 100%;
      text-align: center;
      ellipsis();
</style>
