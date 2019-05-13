<template>
  <div>
    <button
      :class="buttonClass"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      @click="$emit('edit-attempt')"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    >
      {{value}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: [String, Number]
    },
    buttonClass: {
      type: String,
      default: 'btn btn-primary'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
  }
}
</script>

<style scoped>

</style>
