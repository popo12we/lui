<template>
  <div class="zh-table" ref="wrapper">
    <div class="table-wrapper" ref="tableWrapper">
      <table ref="table">
        <thead>
          <tr>
            <th v-for="(col,index) in cloneColumns" :key="index" :style="{width:col.width+'px'}">
              <div v-if="col.type==='selection'">
                <input type="checkbox" :checked="checkAllStatus" ref="checkAll" @change="changeAll"/>
              </div>
              <div>{{col.title}}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,index) in cloneData" :key="index">
            <td v-for="(col,index) in cloneColumns" :key="index">
              <div v-if="col.type==='selection'">
                <input type="checkbox" @change="selectOne($event,row)" :checked="isChecked(row)"/>
              </div>
              <template v-if="col.slot">
                <slot :name="col.slot" :row="row" :col="col"></slot>
              </template>
                <!-- <template slot="name" slot-scope="{row,col}">
                  <h1> {{row[col.key]}} </h1>
                </template> -->
              <template v-else>
                 <div>{{row[col.key]}}</div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "zh-table",
  data() {
    return {
      cloneColumns: cloneDeep(this.columns),
      cloneData: cloneDeep(this.data),
      //选中项组成的数组
      selectedItems: []
    };
  },
  created() {
    this.cloneData = this.cloneData.map(row => {
      row._id = Math.random();
      return row;
    });
  },
  methods: {
    /**
     * e:当前选中项信息
     * row:当前选中行
     */
    selectOne(e, row) {
      if (e.target.checked) {
        this.selectedItems.push(row);
      } else {
        this.selectedItems = this.selectedItems.filter(
          item => item._id != row._id
        );
      }

      this.$emit("on-select", this.selectedItems, row);
    },

    //全选
    changeAll(e){
      e.target.checked?this.selectedItems=this.cloneData:this.selectedItems=[]
      this.$emit("on-select-all",this.selectedItems);
    },
    isChecked(row){
       return this.selectedItems.some(item=>item._id===row._id)
    }
  },
  computed: {
    checkAllStatus() {
      return this.selectedItems.length === this.cloneData.length;
    }
  },
  watch: {
    selectedItems() {
       if((this.selectedItems.length === this.cloneData.length)||this.selectedItems.length===0){
         this.$refs.checkAll[0].indeterminate=false
       }else{
         this.$refs.checkAll[0].indeterminate=true
       }
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.fix-header {
  position: absolute;
  top: 0;
  left: 0;
}
.zh-table {
  position: relative;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    th {
      background: #ccc;
    }
    th,
    td {
      border-bottom: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  }
  .zh-table-cell {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .sortable {
      display: flex;
      flex-direction: column;
      .zh-icon {
        width: 10px;
        height: 10px;
      }
      .active {
        fill: red;
      }
    }
  }
}

.table-wrapper {
  overflow-y: scroll;
}
</style>