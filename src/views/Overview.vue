<template>
  <div class='overview'>
    <div class='head'>
      <div class='selectAll'>
        <input type="checkbox"
               @click='checkbox'>
        <div @click='selectAll'
             class='button'
             :class='{selected:isSelect}'>
          全选
        </div>
      </div>
      <div class='delete button'
           @click='del'>删除</div>
      <div class='language'>
        <span>语言</span>
        <el-select v-model="text1"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class='optionType'>
        <span>分类</span>
        <el-select v-model="text2"
                   placeholder="请选择">
          <el-option v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class='create-time button'
           :class='{selected:isSelect1}'
           @click='createTime'>创建时间</div>
      <div class='edit-time button'
           :class='{selected:isSelect2}'
           @click='editTime'>修改时间</div>
      <div class='like button'
           :class='{selected:isSelect3}'
           @click='like'>点赞数</div>
      <div>
        <el-input placeholder="请输入内容"
                  v-model="searchKey">
          <i slot="prefix"
             class="el-input__icon el-icon-search"></i>
        </el-input>

      </div>
    </div>
    <div class='edit'>
      <div>+添加</div>
    </div>
    <ul class=''>
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
          <p>创建人:</p>
          <p>{{item.creater}}</p>
        </div>
        <div class='overview-createtime'>
          <span>{{item.createTime}}</span>
        </div>
        <div class='overview-edit'>
          <span class='button'>编辑</span>
          <span class='button'>更多</span>
        </div>
      </li>
    </ul>

    <el-pagination background
                   layout="prev, pager, next"
                   :total="1000">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "",
  components: {
  },
  data () {
    return {
      searchKey: '关键字/标题',
      isSelect: true,
      isSelect1: true,
      isSelect2: false,
      isSelect3: false,
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

  },
  methods: {
    checkbox () {
      console.log(event.target.checked)

      this.isSelect = event.target.checked

    },
    createTime () {
      this.isSelect1 = true
      this.isSelect2 = false
      this.isSelect3 = false
      console.log('按照创建时间排序')
    },
    editTime () {
      this.isSelect1 = false
      this.isSelect2 = true
      this.isSelect3 = false
      console.log('按照编辑时间排序')
    },
    like () {
      this.isSelect1 = false
      this.isSelect2 = false
      this.isSelect3 = true
      console.log('点赞数排序')
    },
    selectAll () {
      // this.axios.post('',data).then(()=>{

      // })
      console.log(this.$axios)
      console.log('选择全部')
    },
    del () {
      console.log('删除')
    },

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
    align-items: center;
    font-size: 18px;
    margin: 20px 0;
    .selectAll {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 6em;
    }
    .delete {
    }
    .language {
    }
    .optionType {
    }
    .create-time {
    }
    .edit-time {
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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