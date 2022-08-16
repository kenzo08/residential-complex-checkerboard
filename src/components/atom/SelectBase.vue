<template>
  <select v-model="modelValue" name="selector" @change="changeOption">
    <option disabled selected value="">{{ label }}</option>
    <option
        v-for="option in options"
        :value="option.id"
        :key="option.id"
    >
      {{ option.houseName }}
    </option>
  </select>
</template>

<script setup lang="ts">
import {IHouse} from "../../types";

interface Props {
  modelValue: string;
  options: IHouse[];
  label: string
}

defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const changeOption = (event: Event) => {
  emit('update:modelValue', event)
};
</script>

<style module>
select {
  padding: 10px 15px;
  border-radius: 5px;
  border: solid 1px #ccc;
  font-size: 15px;
  color: black;
}
</style>
