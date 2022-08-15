<template>
  <div :class="$style.container"  @mouseover="isShow=true"
       @mouseleave="isShow=false">
    <span>{{ label }}</span>
    <div v-if="isShow" :class="$style.content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface Props {
  label: string;
}

defineProps<Props>()

const isShow = ref(false)

</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 10%;
  height: auto;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: black;
  position: relative;
  cursor: pointer;
  background: #fff;
  user-select: none;
}


.content{
  display: flex;
  flex-direction: column;
  width:100%;
  white-space: nowrap;
  position: absolute;
  border-radius: 5px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  top: 40px;
  left:-1px;
  background: #fff;
  padding: 5px 0;
  z-index: 1;
}
</style>
