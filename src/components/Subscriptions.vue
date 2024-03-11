<template>
  <div class="subscriptions">
    <ul class="subscriptions__list">
      <li class="subscriptions__item" v-for="item in items">
        <Subscription
          :type="item.type"
          :nameFrom="item.nameFrom"
          :color="item.color"
          :price="item.price"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Subscription from './Subscription.vue';

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.subscriptions {
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
}
</style>
