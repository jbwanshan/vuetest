<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" >
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user.png" alt="">
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>

          </div>

        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2022-09-14</span></p>
          <p>上次登录地点:<span>湖北十堰</span></p>
        </div>

      </el-card>
      <el-card shadow="hover" style="margin-top:20px" height="450px">
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>

    </el-col>
    <el-col :span="16" >
      <!-- <div class="num" style="margin-top:50px">
       
          <el-card shadow="hover" style="width:33%">
            <div class="tjdata">
              <img src="../../assets/images/emp.png" alt="">
              <div class="fwl">
                <p class="fwnum" style="color:#1589FF;text-align:center;font-size: 32px;font-weight: bold;">1234</p>
                <p class="fwlabel" style="text-align:center;font-size: 14px;">用户访问量</p>
      
              </div>
            </div>
          </el-card>
          
      
          <el-card shadow="hover" style="width:33%">
            <div class="tjxx">
              <img src="../../assets/images/notice.png" alt="">
              <div class="xxl">
                <p class="xxnum" style="color:#64E986;text-align:center;font-size: 32px;font-weight: bold;">321</p>
                <p class="xxlabel" style="text-align:center;font-size: 14px;">系统消息</p>
      
              </div>
            </div>
          </el-card>
      
      
          <el-card shadow="hover" style="width:33%">
            <div class="tjsp">
              <img src="../../assets/images/store.png" alt="">
              <div class="spl">
                <p class="spnum" style="color:#FF0000;text-align:center;font-size: 32px;font-weight: bold;">5000</p>
                <p class="splabel" style="text-align:center;font-size: 14px;">商品数量</p>
      
              </div>
            </div>
          </el-card>
        
      </div> -->
      <el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<el-icon class="grid-con-icon"><User /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">1234</div>
									<div>用户访问量</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<el-icon class="grid-con-icon"><ChatDotRound /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">321</div>
									<div>系统消息</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<el-icon class="grid-con-icon"><Goods /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">5000</div>
									<div>商品数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
      <!-- <div class="list" style="margin-top:70px">
        <el-card shadow="hover" class="xxtable">
          <div class="tablebt" style="margin-bottom: 10px; border-bottom: 1px solid #ccc;">
            <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" text>添加</el-button>
            
            
          </div>
          <div class="xxlist">
            <el-table ref="multipleTableRef" :data="tableNotice" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />

              <el-table-column property="name" label="Name" width="620" />
              
            </el-table>
          </div>
        </el-card>
      </div> -->
      <el-card shadow="hover" style="height: 403px">
					<template #header>
						<div class="clearfix">
							<span>待办事项</span>
							<el-button style="float: right; padding: 3px 0" text>添加</el-button>
						</div>
					</template>

					<el-table :show-header="false" :data="todoList" style="width: 100%">
						<el-table-column width="40">
							<template #default="scope">
								<el-checkbox v-model="scope.row.status"></el-checkbox>
							</template>
						</el-table-column>
						<el-table-column>
							<template #default="scope">
								<div
									class="todo-item"
									:class="{
										'todo-item-del': scope.row.status
									}"
								>
									{{ scope.row.title }}
								</div>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
    </el-col>





  </el-row>





</template>

<script>
import { defineComponent } from 'vue';
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const tableData = [
      {
        name: 'oppo',
        todayBuy: 500,
        monthBuy: 3500,
        totalBuy: 22000
      },
      {
        name: 'vivo',
        todayBuy: 300,
        monthBuy: 2200,
        totalBuy: 24000
      },
      {
        name: '苹果',
        todayBuy: 800,
        monthBuy: 4500,
        totalBuy: 65000
      },
      {
        name: '小米',
        todayBuy: 1200,
        monthBuy: 6500,
        totalBuy: 45000
      },
      {
        name: '三星',
        todayBuy: 300,
        monthBuy: 2000,
        totalBuy: 34000
      },
      {
        name: '魅族',
        todayBuy: 350,
        monthBuy: 3000,
        totalBuy: 22000
      }
    ];

    const tableLabel = {
      name: '课程',
      todayBuy: '今日购买',
      monthBuy: '本月购买',
      totalBuy: '总购买',

    };

    const tableNotice = [
      {
        name: '今天学习10个知识点'
        
      },
      {
        name: '今天学习10个知识点'
        
      },
      {
        name: '今天必须写100行代码'
        
      },
      {
        name: '学习视频教程4节'
        
      },
      {
        name: '三星'
        
      },
      {
        name: '魅族'
        
      }
    ];

    const tableNoticeLabel = {
      name: '内容',
      
    };

    

    return {
      tableData,
      tableLabel,
      tableNotice,
      tableNoticeLabel,
      todoList,
    };

  },
});
const todoList = reactive([
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: true
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: true
  }
]);
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }

  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }

  .num {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    height: 120px;

    img {
      width: 120px;
      height: 120px;

    }
    
  }


  .xxtable {
    display: flex;
    align-items: left;
    padding-bottom: 0px;
    margin-bottom: 0px;
    height: 390px;
    width: 100%;

  }

}
.mgb20 {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.el-row {
	margin-bottom: 20px;
}
</style>