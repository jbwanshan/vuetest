<template>
    <el-header class="app-header">
        <div class="l-content">
            <!-- 图标的展示 -->
            <el-button size="small" plain @click="handleCollapse">
                <el-icon>
                    <Menu />
                </el-icon>
            </el-button>
            <!-- <h3>首页</h3> -->
            <el-breadcrumb separator="/" class="bread"> 
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="r-content">
            <img class="massage" src='../assets/images/message.png' alt="" />
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="getImgSrc('user')" alt="" />
                    <!-- <img class="user" :src="getImgSrc(URLDecoder.decode('user',"UTF-8"))" alt="" /> -->
                    <!-- <img src='../assets/images/user.png' alt="" /> -->
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<style lang="less" scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #ccc;
    background-color: #333;
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        margin-top: 10px;
        border-radius: 50%;
    }
    .massage {
        width: 40px;
        height: 40px;
        margin-top: 10px;
        margin-right: 20px;
        border-radius: 50%;
    }
    

}
.l-content {
        display: flex;
        align-items: center;
        .el-button {
            margin-right: 20px;
        }
        
    }
    .bread /deep/ span {
        color: #fff !important;
        cursor: pointer !important;
    }
</style>

<script>
    import { useStore } from 'vuex';
    import { computed } from '@vue/reactivity';
export default {
    setup() {
        let store = useStore();
        const getImgSrc = (user) => {
            // return new URL('../assets/images/${user}.jpg', import.meta.url).href;
            return new URL("../assets/images/user.jpg", import.meta.url).href;
        };
        let handleCollapse = ()=>{
            //调用vuex中的mutations
            store.commit("updateIsCollapse");
        };
        // 计算属性
        const current = computed(()=>{
            return store.state.currentMenu;
        });

        return {
            getImgSrc,
            handleCollapse,
            current,
        }

    },

};
</script>