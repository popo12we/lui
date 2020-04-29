<template>
  <div class="zh-table" ref="wrapper">
    <div class="table-wrapper" ref="tableWrapper">
      <table ref="table">
        <thead>
          <tr>
            <th v-for="(col,index) in cloneColumns" :key="index">
              <div>{{col.title}}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,index) in cloneData" :key="index">
            <td v-for="(col,index) in cloneColumns" :key="index">
              <div>{{row[col.key]}}</div>
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
      selectedItems: []
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