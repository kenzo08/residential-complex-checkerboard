<template>
  <div class="inline-wrapper" v-dragscroll.x>
    <div v-for="entrance in entrances" class="table-div">
      <table>
        <tr v-for="(floor, j) in entrance.floors">
          <span class="floor">{{ floor.floor }}</span>
          <td v-for="k in floor.flats">
            <Flats :flat="getFlat(k.id)"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flats from "./Flats.vue";

interface Props {
  entrances: [];
  flats: object
}

const props = defineProps<Props>()
const [entrances, flats] = [props.entrances, props.flats]

const getFlat = (id:string) => {
  return flats[id]
}
</script>


<style scoped>
.table-div {
  position: relative;
  display: flex;
  align-items: flex-end;
}
table {
  border-collapse: separate;
  border-spacing: 2px;
  height: fit-content;
  position: relative;
  left: 0;
  bottom: 0;
  font-size: 12px;
  text-align: center;
  vertical-align: center;
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
  padding-bottom: 200px;
}
.inline-wrapper::-webkit-scrollbar {
  display: none;
}

</style>
