<template>
  <div :class="$style['inline-wrapper']" v-dragscroll.x>
    <div v-for="entrance in entrances" :key="entrance.id" :class="$style['table-div']">
      <table :class="$style.table">
        <tr v-for="floor in entrance.floors" :key="floor">
          <span :class="$style.floor">{{ floor.floor }}</span>
          <td v-for="flat in floor.flats" :key="flat.id">
            <Flats :flat="getFlat(flat.id)"/>
          </td>
        </tr>
      </table>
      <p :class="$style.title">{{ entrance.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flats from "./Flats.vue";

interface Props {
  houses: [];
  entrances: [];
  flats: object;
}

const props = defineProps<Props>();
const [entrances, flats] = [props.entrances, props.flats];
const getFlat = (id: string) => {
  return flats[id];
}
</script>


<style module>
.table-div {
  position: relative;
  display: flex;
  align-items: flex-end;
}


.table {
  border-collapse: separate;
  border-spacing: 2px;
  height: fit-content;
  position: relative;
  left: 0;
  bottom: 0;
  font-size: 12px;
  text-align: center;
  vertical-align: center;
  overflow: hidden;
}

.floor {
  color: #676767;
  font-size: 14px;
  text-align: left;
  padding-right: 5px;
}

.table-div:not(:first-child) {
  margin-left: 20px;
}

.inline-wrapper {
  display: flex;
  align-self: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 50px;
}

.inline-wrapper::-webkit-scrollbar {
  display: none;
}

.table tr:hover {
  background-color: #FFFF00;
  cursor: pointer;
}

td, th {
  position: relative;
}

td:hover::after {
  background-color: #FFFF00;
  overflow: hidden;
  content: '';
  height: 10000px;
  left: 0;
  position: absolute;
  top: -5000px;
  width: 100%;
  z-index: -1;
}

.title {
  display: flex;
  flex-direction: row;
  width: max-content;
  position: absolute;
  bottom: -30px;
  left: 30px;
  font-size: 13px;
  font-weight: 600;
}
</style>
