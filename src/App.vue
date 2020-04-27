<template>
  <div>
    <zh-tree :data="data"></zh-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1',
                  children: [
                    {
                      label: '四级 1-1-1-1'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '一级 2'
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
