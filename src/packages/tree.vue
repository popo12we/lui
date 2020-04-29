<template>
  <div>
    <ul class="tree">
      <li class="tree-node" v-for="(item,index) in data" :key="index" @click.stop="handleClick(index)">
        <zh-icon icon="sousuo" v-if="item.children"></zh-icon>
        <span class="node-label">{{item.label}}</span>
        <zh-tree :data="item.children" v-if="item.children&&showChildren[index]"></zh-tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "zh-tree",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
   data () {
    return {
      showChildren: []
    }
  },
  methods: {
    handleClick(index) {
    const flag = !this.showChildren[index]
      // console.log(flag)
      this.$set(this.showChildren, index, flag)
    //   const flag=this.
    }
  }
};
</script>

<style lang="scss">
li {
  list-style: none;
}

.tree-node {
  cursor: pointer;
}

.tree-node .iconfont {
  color: #c0c4cc;
  font-size: 12px;
  margin-right: 5px;
  vertical-align: middle;
}

.tree-node .node-label {
  font-size: 14px;
  color: #606266;
  vertical-align: middle;
}
</style>
