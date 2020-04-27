<template>
  <div>
    <!--
      height轮播图高
      autoplay自动播放
      delay滚动时间
      initialIndex从第一张开始播
      loop是否无缝滚动
      change拿到当前切换到第几张轮播图
     -->
    <Carousel
       height="200px"
       :autoplay="true"
       :delay="2000"
       :initialIndex="0"
       :loop="true"
       @change="change"
    >
      <Carouselitem>
        <div class="content" style="background:pink">内容1</div>
      </Carouselitem>
      <Carouselitem>
        <div class="content" style="background:yellow">内容2</div>
      </Carouselitem>
      <Carouselitem>
        <div class="content" style="background:blue">内容3</div>
      </Carouselitem>
       <Carouselitem>
        <div class="content" style="background:orange">内容4</div>
      </Carouselitem>
    </Carousel>
  </div>
</template>

<script>

export default {

  methods: {
    change () {

    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.content{
  height: 200px;
}
</style>
