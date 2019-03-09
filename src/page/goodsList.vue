<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs/>
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                   <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <recommend />
            </el-col>
        </el-row>
    </div>

</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
import Recommend from '@/components/products/recommend.vue'
export default {
    components: {
        crumbs,
        Categroy,
        List,
        Recommend
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/products/index.scss"
</style>