<script setup lang="ts">
import {onMounted, ref} from "vue";
import Table from "./components/Table.vue";
import FilterBase from "./components/FilterBase.vue";
import {IEntrance, IFlatList, IHouse} from "./types";

const entrances = ref<IEntrance[]>([]);
const flats = ref<IFlatList>({});

const houses = ref<IHouse[]>([]);

onMounted(async () => {
  await fetch('/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        entrances.value = data.entrances;
        flats.value = data.flats;
        data.houses.forEach((el: string, index: number) => {
              houses.value.push({id: el, houseName: `Дом ${index + 1}`})
            }
        )
      })
});

</script>

<template>
  <div>
    <FilterBase :class="$style.container" :houses="houses"/>
    <Table v-if="entrances.length" :entrances="entrances" :flats="flats" :houses="houses"/>
  </div>
</template>
<style module>
.container {
  background-color: white;
}
</style>
