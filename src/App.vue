<script setup lang="ts">
import {onMounted, ref} from "vue";
import Table from "./components/Table.vue";
import FilterBase from "./components/FilterBase.vue";

const entrances = ref([])
const flats = ref({})
interface Ihouses{
  id: string;
  houseName: string
}
const houses = ref<Ihouses[]>([]);

onMounted(async () => {
  await fetch('/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        entrances.value = data.entrances;
        flats.value = data.flats;
        data.houses.forEach((el: string, index: number)=>{
          houses.value.push({id: el, houseName: `Дом ${index+1}`})
        }
      )
        })
  console.log(houses.value)
      });

</script>

<template>
  <div>
    <FilterBase :class="$style.container" :houses="houses" />
    <Table v-if="entrances.length" :entrances="entrances" :flats="flats" :houses="houses" />
  </div>
</template>
<style module>
.container{
  background-color: white;
}
</style>
