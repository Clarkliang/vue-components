<template>
  <div class="mask" :style="{ backgroundColor }" @touchmove.prevent></div>
</template>

<script>
export default {
  name: 'Masker',
  props: {
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.64)',
    },
  },
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;

  background-color: rgba(0, 0, 0, 0.64);
}
</style>
