<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button type="submit">{{ text }}</button>
</template>

<style>
/* 
lidt bio agtig farver haha

button {
  border-radius: 0;
  border: 2px solid rgb(107, 103, 28);
  padding: 0.5rem;
  background-color: rgb(202, 202, 180);
  cursor: pointer;
}

button:hover {
  background-color: rgb(135, 129, 94);
  color: white;
} */

/* ugly backend design (on purpose) */
button {
  border-radius: 0;
  border: 1px solid rgb(0, 0, 0);
  width: fit-content;
  margin-top: 1rem;
  display: flex;
  align-self: center;
  background-color: white;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-weight: bolder;
}

button:hover {
  background-color: rgb(36, 193, 39);
}
</style>
