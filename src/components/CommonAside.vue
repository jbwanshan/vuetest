<template>
    <el-aside :width="$store.state.isCollapse ? '200px' : '64px'">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :collapse="!$store.state.isCollapse" :collapse-transition="false">
            <h3 v-show="$store.state.isCollapse">后台管理</h3>
            <h3 v-show="!$store.state.isCollapse">后台</h3>
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
               <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>

                    <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
                </template>
                
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex"  @click="clickMenu(subItem)">
                        <component class="icons" :is="subItem.icon"></component>
                        <span>{{ subItem.label }}</span>
                    </el-menu-item>
                    
                </el-menu-item-group>
             
                
            </el-sub-menu>
            
            
        </el-menu>
    </el-aside>
</template>

<script>
import { list } from 'postcss';
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
    export default {
    setup() {
        
        const list = [
            {
                path: "/user",
                name: "user",
                label: "用户管理",
                icon: "user",
                url: "UserManage/UserManage",
            },
            {
                label: "表单相关",
                icon: "location",
                path: "/other",
                children: [
                    {
                        path: "/page1",
                        name: "page1",
                        label: "基本表单",
                        icon: "setting",
                        url: "Other/PageOne",
                    },
                    {
                        path: "/page2",
                        name: "page2",
                        label: "文件上传",
                        icon: "setting",
                        url: "Other/PageTwo",
                    },
                    {
                        path: "/page3",
                        label: "三级菜单",
                        icon: "setting",
                        children: [
                            {
                                path: "/page4",
                                name: "page4",
                                label: "富文本编辑器",
                                icon: "setting",
                                url: "Other/QT/PageFour",
                            },

                        ]
                    },
                    {
                        path: "/page5",
                        name: "page5",
                        label: "富文本编辑",
                        icon: "setting",
                        url: "Other/PageFive",
                    },
                ]


            },
            {
                path: "/tabel",
                name: "tabel",
                label: "基础表格",
                icon: "Calendar",
                url: "Other/basetab",
            },
            {
                path: "/tabxx",
                name: "tabxx",
                label: "Tab选项卡",
                icon: "DocumentCopy",
                url: "Other/tabxx",
            },
            {
                path: "/iconuser",
                name: "iconuser",
                label: "自定义图标",
                icon: "Setting",
                url: "Other/iconuser",
            },
            {
                path: "/permiss",
                name: "permiss",
                label: "权限管理",
                icon: "Setting",
                url: "Other/permiss",
            },
        ];



        const router = useRouter();
        const store = useStore();
        const noChildren = () => {
            return list.filter((item) => !item.children);

        };

        const hasChildren = () => {
            return list.filter((item) => item.children);
        };

        const clickMenu = (item) => {
            router.push({
                name: item.name,

            });
            store.commit('selectMenu', item);

        };

        return {
            noChildren,
            hasChildren,
            clickMenu,
        };
    },

};

    
</script>

<style lang="less" scoped>
    .icons{
        width: 18px;
        height: 18px;
    }
    .el-menu {
        height: 100%;
        border-right: none;
        h3 {
            line-height: 48px;
            color: #fff;
            text-align: center;

        }
    }
    .aside{
        height: 100%;
    }

</style>
