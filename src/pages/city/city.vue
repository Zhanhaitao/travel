<template>
  <div>
    <city-header></city-header><city-search></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios';
import cityHeader from './components/header';
import citySearch from './components/search';
import cityList from './components/list';
import cityAlphabet from './components/alphabet';
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  mounted() {
    this.getCityInfo();
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(res => {
        this.handleGetCityInfoSucc(res);
      });
    },
    handleGetCityInfoSucc(res) {
      console.log('res::', res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
