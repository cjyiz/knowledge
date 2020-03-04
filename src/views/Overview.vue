<template>
  <div class='overview'>
    <div class='head'>
      <div>全选</div>
      <div>删除</div>
      <div>
        语言
        <el-select v-model="text1"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>分类

        <el-select v-model="text2"
                   placeholder="请选择">
          <el-option v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>创建时间</div>
      <div>修改时间</div>
      <div>点赞数</div>
      <div>
        <input type="text"
               placeholder="关键字/标题">
      </div>
    </div>
    <div class='edit'>
      <div>+添加</div>
    </div>
    <ul>
      <li v-for='(item,index) in articleData'
          class='container'
          :key="index">
        <div class='overview-title'>
          <div class='title-top'>
            <div class='checkbox'>
              <input type='checkbox'>
            </div>
            <img src=""
                 alt="">
            <div class='title-content'>
              <p>{{item.title}}</p>
              <p>{{item.abstract}}</p>
            </div>
            <div>

            </div>
          </div>
          <div class='title-bottom'>
            <div>
              <span>修改于:</span>
              <span>{{item.latestTime}}</span>
            </div>
            <div>
              <span>{{item.level1}}</span>
              <span>{{item.level2}}</span>
            </div>

          </div>
        </div>
        <div class='overview-like'>
          <img src=""
               alt="">
          <span>{{item.like}}</span>
        </div>
        <div class='overview-creater'>
          <span>{{item.creater}}</span>
        </div>
        <div class='overview-createtime'>
          <span>{{item.createTime}}</span>
        </div>
        <div class='overview-edit'>
          <span>编辑</span>
          <span>更多</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  components: {
  },
  data () {
    return {
      checked: true,
      text1: "全部",
      text2: '部署',
      options: [{
        value: '选项1',
        label: 'JAVA'
      }, {
        value: '选项2',
        label: 'JavaScript'
      }, {
        value: '选项3',
        label: 'Python'
      }, {
        value: '选项4',
        label: '数据库'
      }, {
        value: '选项5',
        label: '服务器'
      }],
      options1: [{
        value: '选项1',
        label: 'Vue'
      }, {
        value: '选项2',
        label: 'acgis'
      }, {
        value: '选项3',
        label: 'echarts'
      }, {
        value: '选项4',
        label: 'threeJs'
      }, {
        value: '选项5',
        label: 'cesium'
      }],
      articleData: [
        {
          img: '',
          title: '标题名称',
          abstract: '这是一段假象，一段比较长的简介',
          like: 155,
          creater: '陈骥',
          createTime: '2019-10-3 12:33',
          latestTime: '2019-10-4 10:00',
          state: 1,
          level1: 'Vue',
          level2: '部署'
        },
        {
          img: '',
          title: '标题名称',
          abstract: '这是一段假象，一段比较长的简介',
          like: 155,
          creater: '陈骥',
          createTime: '2019-10-3 12:33',
          latestTime: '2019-10-4 10:00',
          state: 1,
          level1: 'Vue',
          level2: '部署'
        },
        {
          img: '',
          title: '标题名称',
          abstract: '这是一段假象，一段比较长的简介',
          like: 155,
          creater: '陈骥',
          createTime: '2019-10-3 12:33',
          latestTime: '2019-10-4 10:00',
          state: 1,
          level1: 'Vue',
          level2: '部署'
        }
      ]
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
.overview {
  width: 80%;
  height: calc(100%-80px);
  border: 1px solid blue;
  margin: 10px auto;
  .head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .jc-select {
      width: 50px;
    }
  }
  .edit {
    text-align: center;
    line-height: 30px;
    width: 100%;
    height: 30px;
    border: 1px dotted #888;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 96px;
    border: 1px solid red;
    width: 100%;
    .overview-title {
      width: 30%;
      height: 96px;
      border: 1px solid blue;
      .title-top {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100%;
        .checkbox {
          width: 10%;
          text-align: center;
          align-items: center;
        }
        .title-content {
          width: 90%;
        }
      }
      .title-bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 26px;
      }
    }
    .overview-like {
      width: 20%;
      height: 96px;
      border: 1px solid blue;
      text-align: center;
      line-height: 96px;
    }
    .overview-creater {
      width: 20%;
      height: 96px;
      border: 1px solid blue;
      text-align: center;
      line-height: 96px;
    }
    .overview-createtime {
      width: 20%;
      height: 96px;
      border: 1px solid blue;
      text-align: center;
      line-height: 96px;
    }
    .overview-edit {
      width: 10%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>