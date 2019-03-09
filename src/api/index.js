import axios from '@/axios.js'

var api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getClassList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getRecommend () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getHotList () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentsList () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', { params })
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
