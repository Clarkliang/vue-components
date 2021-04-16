<template>
  <button class="box" @click.stop="buttonClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
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
.box {
  display: inline-block;

  box-sizing: border-box;
  border: none;
  border-radius: 0.08rem;
  padding: 0 0.64rem;
  width: 4.32rem;
  min-height: 0.88rem;

  font-size: 0.34rem;
  font-weight: 600;
  line-height: 0.88rem;
  text-align: center;

  color: #21c17a;
  background-color: rgba(0, 0, 0, 0.04);

  outline: none;

  &:active {
    opacity: 0.5;
  }
}
</style>
