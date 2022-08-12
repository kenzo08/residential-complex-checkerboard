<script setup lang="ts">
import {onMounted, ref} from "vue";
import Table from "./components/Table.vue";
import FilterBase from "./components/FilterBase.vue";

const entrances = ref([])
const flats = ref({})

onMounted(async () => {
  await fetch('/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        entrances.value = data.entrances;
        flats.value = data.flats;
      });
})

</script>

<template>
  <div :class="$style.container">
    <FilterBase/>
    <Table v-if="entrances.length" :entrances="entrances" :flats="flats" />
  </div>
</template>
<style module>
.container{
}
</style>
