<template>
  <div :class="$style.container">
    <SelectBase v-model="selectedSort" :class="$style.selector" label="Выберите номер дома" :options="houses"/>
    <AccordionBase label=" Выбрать статус объектов">
      <label><input type="checkbox" value="Нежилые помещения"/>Свободна</label>
      <label><input type="checkbox" value="Квартиры"/>Выданы ключи</label>
      <label><input type="checkbox" value="Нежилые помещения"/>Бронь</label>
    </AccordionBase>
    <AccordionBase label="Выбрать тип объектов">
      <label><input type="checkbox" value="Нежилые помещения"/>Нежилые помещения</label>
      <label><input type="checkbox" value="Квартиры"/>Квартиры</label>
      <label><input type="checkbox" value="Нежилые помещения"/>Нежилые помещения</label>
    </AccordionBase>
    <AccordionBase label="Ценовой диапозон">
      <div :class="$style['input-box']">
        <label>
          <input v-model="minPrice" type="number" placeholder="От рублей"/> руб.
        </label>
        <label>
          <input v-model="maxPrice" type="number" placeholder="До рублей"/> руб.
        </label>
      </div>
    </AccordionBase>
    <AccordionBase label="Площадь недвижимости">
      <div :class="$style['input-box']">
        <label>
          <input v-model="minSquare" type="number" placeholder="От кв.м"/> кв.м
        </label>
        <label>
          <input v-model="maxSquare" type="number" placeholder="До кв.м"/> кв.м
        </label>
      </div>
    </AccordionBase>
    <AccordionBase label="Прочее фильтры">
      <label><input type="checkbox" value="Нежилые помещения"/>Субсидированная</label>
      <label><input type="checkbox" value="Квартиры"/>Маржинальная</label>
      <label><input type="checkbox" value="Нежилые помещения"/>С ремонтом</label>
      <label><input type="checkbox" value="Нежилые помещения"/>С рассрочкой</label>
    </AccordionBase>
    <button :class="$style.btn">Применить фильтры</button>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import SelectBase from "./atom/SelectBase.vue";
import AccordionBase from './atom/AccordionBase.vue';

interface Props {
  houses: [];
  status: object;
}

defineProps<Props>()
const minSquare = ref(0)
const maxSquare = ref(0)
const maxPrice = ref(0)
const minPrice = ref(0)

const selectedSort = ref('')


</script>

<style module>
.container {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
}

.selector {
  width: 300px
}

.btn {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  color: black;
  background: #7CFC00;
}

.input-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 5px;
}
</style>
