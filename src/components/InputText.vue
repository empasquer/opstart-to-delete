<script setup lang="ts">
defineProps<{
  labelText: string
  required?: boolean
  placeholder: string
  labelFor: string
  inputId: string
  inputName: string
}>()
</script>

<template>
  <div class="input_wrapper">
    <label for="">{{ labelText }}</label>
    <input type="text" :required="required" :placeholder="placeholder" />
  </div>
</template>

<style>
.input_wrapper {
  display: flex;
  color: black;
  flex-direction: column;
}

.input_wrapper input {
  border: solid black 1px;
}
</style>
