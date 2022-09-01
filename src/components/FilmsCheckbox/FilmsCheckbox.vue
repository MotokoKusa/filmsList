<template>
  <div class="checkbox">
    <label class="custom-checkbox">
      <input
        :disabled="isDisabled"
        type="checkbox"
        :name="title"
        :value="isChecked"
        v-model="updatedCheckBox"
      />
      <span>{{ title }}</span>
    </label>
  </div>
</template>

<script>
import "./FilmsCheckbox.scss";
export default {
  name: "FilmsCheckbox",
  props: {
    title: {
      type: String,
    },
    isChecked: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
  },
  model: {
    prop: "isChecked",
    event: "change",
  },

  computed: {
    updatedCheckBox: {
      set(val) {
        this.$emit("change", val);
      },
      get() {
        return this.isChecked;
      },
    },
  },
};
</script>
