<template>
<div :class="$style.container">
  <SelectBase label="" :options="[1,2,3]"/>
  <input type="checkbox"/>
  <input type="checkbox"/>
  <input type="checkbox"/>
  <div :class="$style.col">
    Ценовой диапозон
    <input type="number" placeholder="От рублей"/>
    <input type="number" placeholder="До рублей"/>
  </div>
  <div :class="$style.col">
    Площадь недвижимости
    <input type="number" placeholder="От кв.м"/>
    <input type="number" placeholder="До кв.м"/>
  </div>
</div>
</template>

<script setup lang="ts">
import SelectBase from "./atom/SelectBase.vue";
</script>

<style module>
.container{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
}

.col{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
