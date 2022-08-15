<template>
  <div :class="$style.box" :style="{backgroundColor: getColorByStatus(flat)}" @mouseover="isHover=true"
       @mouseleave="isHover=false">
    {{ getPlanType(flat) }}
    <div v-if="isHover" :class="$style.description">
      <p :class="$style.label">Подробно о недвижимости:</p>
      <p><span :class="$style.label">Цена: </span> {{formatter.format(flat?.cost)}}</p>
      <p><span :class="$style.label">Тип: </span> {{flat?.type}}</p>
      <p><span :class="$style.label">Этаж:</span>{{flat?.floor}}</p>
      <p><span :class="$style.label">Площадь: </span> {{ flat?.square}} кв.м</p>
      <p><span :class="$style.label">Номер: </span> {{ flat?.number}}</p>
      <p><span :class="$style.label">Статус: </span> {{flat?.status}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {IFlat} from "../types";

interface Props {
  flat: IFlat;
}

defineProps<Props>()

const formatter = new Intl.NumberFormat('ru-ru', {
  style: 'currency',
  currency: 'RUB',
});

const getColorByStatus = (flat:IFlat) => {
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

const isHover = ref(false)

const getPlanType = (flat:IFlat) => {
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

.description {
  display: flex;
  width: max-content;
  flex-direction: column;
  height: max-content;
  position: fixed;
  background-color: #FFF;
  color: black;
  top: 115px;
  left: 500px;
  z-index: 1;
  padding: 0 10px;
  border: solid 1px #ccc;
  border-radius: 5px;
}

.label{
  font-weight: 600;
}

p {
  text-align: left;
  margin: 0;
  padding: 0;
}
</style>
