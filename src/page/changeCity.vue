<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>

</template>

<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
    data () {
        return {
            hotList: [],
            rencentList: []
        }
    },
    created () {
        api.getHotList().then(res => {
            // console.log(res.data.data.name)
            this.hotList = res.data.data.map((item) => item.name)
        }),
        api.getRecentsList().then(res => {
            // console.log(res)
            this.rencentList = res.data.data.map((item) => item.name)
        })
    },
    components: {
        Province,
        hot,
        Category
    }
}
</script>

<style lang="scss" scoped>
   
</style>