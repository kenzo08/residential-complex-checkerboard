<script setup lang="ts">
import {onMounted, ref} from "vue";
import Table from "./components/Table.vue";
import FilterBase from "./components/FilterBase.vue";

const entrances = ref([])
const flats = ref({})
const houses = ref([])

onMounted(async () => {
  await fetch('/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        entrances.value = data.entrances;
        flats.value = data.flats;
        houses.value = data.houses;
      });
})

</script>

<template>
  <div>
    <FilterBase :class="$style.container"/>
    <Table v-if="entrances.length" :entrances="entrances" :flats="flats" :houses="houses" />
  </div>
</template>
<style module>
.container{
}
</style>

<style module>
.container{
  background-color: white;
}
</style>
