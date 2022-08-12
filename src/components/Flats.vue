<template>
  <div :class="$style.container">
    <div :class="$style.box" :style="{backgroundColor: getColorByStatus(flat)}" @mouseover="isHover = true" @mouseleave="isHover = false">
      {{ getPlanType(flat) }}
      <div :class="$style.description" v-if="isHover">
        <span>Цена: {{flat?.cost}}</span>
        <span>Тип: {{flat?.type}}</span>
        <span>Этаж: {{flat?.floor}}</span>
        <span>Площадь: {{flat?.square}} кв.м</span>
        <span>Номер: {{flat?.number}}</span>
        <span>Статус: {{flat?.status}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

interface Props {
  flat: object;
}

defineProps<Props>()

const getColorByStatus = (flat) => {
  switch (flat.status) {
    case 'Свободна': {
      return '#008000';
    }
    case 'Выданы ключи': {
      return '#ff1616';
    }
    case 'Бронь': {
      return '#277ecc';
    }
    default: {
      return '#808080';
    }
  }
}

const isHover= ref(false)

const getPlanType = (flat) => {
  if (flat) {
    return flat.plan_type ? flat.plan_type : '';
  }
  return '';
}
</script>

<style module>
.box {
  width: 25px;
  height: 25px;
  color: #fff;
  border-radius: 4px;
  position: relative;
}

.description{
  display: flex;
  width: max-content;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  background-color: white;
  color: black;
  left: 30px;
  z-index: 1;
  padding: 5px 10px;
  border: solid 1px #ccc;
  border-radius: 5px;
}
</style>
