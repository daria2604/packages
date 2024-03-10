<template>
  <div class="buttons">
    <ul class="buttons__list">
      <li class="buttons__item" v-for="button in buttons">
        <Button
          :design="button.design"
          :position="button.position"
          :text="button.text"
          :hasBadge="button.hasBadge"
          :number="button.number"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Button from './Button.vue';

const buttons = [
  {
    design: 'iconed',
    position: 'header',
    icon: 'cart',
    hasBadge: true,
    number: 1,
  },
  {
    design: 'simple',
    text: 'EN',
    position: 'header',
  },
];
</script>

<style lang="scss" scoped>
.buttons {
  &__list {
    display: flex;
    column-gap: 35px;
  }
}
</style>
