<template>
<select :class="$style.selector">
  <option disabled>{{label}}}</option>
  <option v-for="name in options">
  {{name}}
  </option>
</select>
</template>

<script setup lang="ts">


defineProps<{options:[]; label:string}>()

</script>

<style module>

.selector{
  padding: 5px 8px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
