<template>
  <div class="folds">
    <ul class="folds__list">
      <li class="folds__item" v-for="fold in folds" :key="fold.id">
        <Fold
          :design="fold.design"
          :color="fold.color"
          :size="fold.size"
          :labelPosition="fold.labelPosition"
          :contents="fold.contents"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Fold from './Fold.vue';

defineProps({
  folds: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>
