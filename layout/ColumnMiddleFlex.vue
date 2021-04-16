<template>
  <div class="layout-container">
    <div class="fixed-top">
      <slot name="fixed-top"></slot>
    </div>
    <div class="flex-content">
      <slot name="flex-content"></slot>
    </div>
    <div class="fixed-bottom">
      <slot name="fixed-bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnMiddleFlex',
};
</script>

<style lang="less" scoped>
.layout-container {
  display: flex;

  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  > .fixed-top {
    flex-shrink: 0;
  }

  > .flex-content {
    overflow: hidden;
    overflow-y: scroll;

    flex-grow: 1;
  }

  > .fixed-bottom {
    flex-shrink: 0;
  }
}
</style>
