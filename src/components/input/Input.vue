<template>
  <div :class="['form-input', { 'was-validated': isValid }]">
    <input
        id="input"
        :class="['form-control', { 'is-invalid': isInvalid }]"
        class="was-validated"
        :type="type"
        :placeholder="placeholder"
        :value="innerValue"
        :readonly="readonly"
        @change="handleChange"
        @input="handleInput"
        @click="$emit('edit-attempt')"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    >
    <div class="invalid-feedback" v-if="isInvalid">
      <div>
        <span v-for="(error, index) in errors" :key="index">{{ error }} </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Input",
    props: {
      value: {
        type: [String, Number]
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
      },
      isInvalid: {
        type: Boolean,
        default: false
      },
      isValid: {
        type: Boolean,
        default: false
      },
      errors: {
        type: Array,
      },
      readonly: Boolean,
    },

    watch: {
      value(value) {
        this.innerValue = value
      },
    },

    model: {
      prop: 'value',
      event: 'edit',
    },

    data() {
      return {
        innerValue: this.value,
      }
    },

    methods: {
      handleChange(payload) {
        const newValue = this.innerValue = payload.target.value
        this.$emit('change', {
          target: {
            name: this.name,
            value: newValue,
          },
        })
        this.$emit('edit', newValue)
      },
      handleInput(payload) {
        this.$emit('input', {
          target: {
            name: this.name,
            value: payload.target.value,
          },
        })
      },
    }

  }
</script>

<style scoped>

</style>
