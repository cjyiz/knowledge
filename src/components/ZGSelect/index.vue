<template>
  <div class="jc-select">
    <div class="jc-select-box"
         @click="showOptions"
         :class="{active:isOptionsShow,deActive:!isOptionsShow}">
      <span>{{selectText}}</span>
      <img src="~@/assets/img/下拉箭头.png"
           alt />
    </div>
    <ul class="jc-select-options"
        v-show="isOptionsShow">
      <li v-for="(item,index) in optionDatas"
          @click="selectOption(index)"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'jc-select',
  props: {
    text: {
      type: String,
      default: ''
    },
    optionDatas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectText: this.text,
      isOptionsShow: false,
      selectValue: null
    }
  },
  mounted () {

  },
  methods: {
    showOptions () {
      this.isOptionsShow = !this.isOptionsShow
    },
    selectOption (index) {
      let a = this.selectText
      if (this.optionDatas[index]) {
        this.selectText = this.optionDatas[index]
        this.isOptionsShow = false
        this.optionDatas[index] = a
      }
    }
  }
}
</script>  
<style lang="scss">
.jc-select {
  box-sizing: border-box;
  position: relative;
  margin-right: 10px;
  font-size: 24px;
  // width: 100%;
  width: 50px;
  .active {
    box-sizing: border-box;
    width: 100%;
    // background-color: #030915;
    border-radius: 5px 5px 0 0;
    border-top: 1px solid #07506e;
    border-left: 1px solid #07506e;
    border-right: 1px solid #07506e;
  }
  .deActive {
    box-sizing: border-box;
    width: 100%;
    // background-image: url("~@/assets/img/下拉背景.png");
    background-size: 100% 100%;
  }
  .jc-select-box {
    position: relative;
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    > span {
      height: 52px;
      line-height: 52px;
      text-align: left;
      position: absolute;
      left: 10px;
      top: 0;
      font-size: 24px;
      // font-family: "思源";
    }
    img {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 12px;
      top: 12px;
    }
  }
  .jc-select-options {
    position: absolute;
    top: 52px;
    width: 100%;
    font-size: 24px;
    box-sizing: border-box;
    text-align: left;
    background-color: #030915;
    border-radius: 0px 0px 5px 5px;
    border-left: 1px solid #07506e;
    border-right: 1px solid #07506e;
    border-bottom: 1px solid #07506e;
    > li {
      padding-left: 10px;
      height: 2em;
      line-height: 2em;
    }
    li:hover {
      background-color: #052e38;
    }
  }
}
</style>  