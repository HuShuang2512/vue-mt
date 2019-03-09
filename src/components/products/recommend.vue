<template>
    <div class="s-recom-list ">
        <p>猜你喜欢</p>
        <dl v-for="(item) in list" :key="item.item">
            <dd class="img">
                <img :src="item.imgUrl" alt="图片">
            </dd>
            <dd>
                <h3>
                    <router-link tag="span" to="/">{{item.title}}</router-link>
                </h3>
                <p>
                    <el-rate
                        v-model="item.score"
                        disabled
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                    <span class="s-item-comment-total">{{item.commentNum}}人评论</span>
                </p>
                <p>
                    <span class="s-item-addr">{{item.areaName}}</span>
                </p>
                <p>
                    <span class="s-item-price">
                    {{item.lowPrice}}起
                    </span>
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            list: []
        }
    },
    created () {
        api.getRecommend().then(res => {
            // 图片失效不用管
            this.list = res.data.data.slice(0, 5)
        })
    }
}
</script>

<style lang="scss" >
    @import "@/assets/css/products/recom.scss"
</style>