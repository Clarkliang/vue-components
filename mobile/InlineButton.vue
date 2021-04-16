<template>
  <div class="inline-button" @click.stop="buttonClick">{{ text }}</div>
</template>

<script>
export default {
  name: 'InlineButton',
  props: {
    text: String,
  },
  methods: {
    buttonClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="less" scoped>
.inline-button {
  display: inline-block;

  flex-shrink: 0;

  box-sizing: border-box;
  border-radius: 0.08rem;
  padding: 0.16rem 0.44rem;
  height: 0.72rem;

  font-size: 0.28rem;
  font-weight: 600;
  line-height: 0.4rem;

  color: #fff;
  background-color: #21c17a;
}
</style>
