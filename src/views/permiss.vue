<template>
    <el-select v-model="value" class="m-2" placeholder="选择角色" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

   <el-tree
    ref="treeRef"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps" style="margin-top:10px"
  />

  <div class="buttons">
    <el-button @click="getCheckedNodes">get by node</el-button>
    <el-button @click="getCheckedKeys">get by key</el-button>
    <el-button @click="setCheckedNodes">set by node</el-button>
    <el-button @click="setCheckedKeys">set by key</el-button>
    <el-button @click="resetChecked">reset</el-button>
  </div>
 </template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { ElTree } from 'element-plus'
    import type Node from 'element-plus/es/components/tree/src/model/node'
    
    interface Tree {
      id: number
      label: string
      children?: Tree[]
    }
    
    const treeRef = ref<InstanceType<typeof ElTree>>()
    
    const getCheckedNodes = () => {
      console.log(treeRef.value!.getCheckedNodes(false, false))
    }
    const getCheckedKeys = () => {
      console.log(treeRef.value!.getCheckedKeys(false))
    }
    const setCheckedNodes = () => {
      treeRef.value!.setCheckedNodes(
        [
          {
            id: 5,
            label: 'Level two 2-1',
          },
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
        ] as Node[],
        false
      )
    }
    const setCheckedKeys = () => {
      treeRef.value!.setCheckedKeys([3], false)
    }
    const resetChecked = () => {
      treeRef.value!.setCheckedKeys([], false)
    }
    
    const defaultProps = {
      children: 'children',
      label: 'label',
    }
    
    const data: Tree[] = [
        {
            id: 1,
        label: '系统首页',
        },
      {
        id: 2,
        label: '基础表格',
        children: [
          {
            id: 4,
            label: 'Level two 1-1',
            children: [
              {
                id: 9,
                label: 'Level three 1-1-1',
              },
              {
                id: 10,
                label: 'Level three 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: '表单相关',
        children: [
          {
            id: 5,
            label: 'Level two 2-1',
          },
          {
            id: 6,
            label: 'Level two 2-2',
          },
        ],
      },
      {
        id: 13,
        label: '权限管理',
        children: [
          {
            id: 7,
            label: 'Level two 3-1',
          },
          {
            id: 8,
            label: 'Level two 3-2',
          },
        ],
      },
    ]

    const value = ref('')

const options = [
  {
    value: 'poweruser',
    label: '超级管理员',
  },
  {
    value: 'user',
    label: '普通用户',
  },
]
    </script>
 