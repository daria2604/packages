<template>
  <section class="packages">
    <div class="container">
      <h1 class="packages__heading">Packages</h1>
    </div>
    <ul class="packages__list">
      <li class="packages__item" v-for="item in items" :key="item.id">
        <Package
          :type="item.type"
          :isOpen="item.isOpen"
          :text="item.text"
          :price="item.price"
          :color="item.color"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import Package from './Package.vue';

const items = [
  {
    id: 0,
    type: 'startx',
    text: 'The most complete package of functions with maximum opportunities for the complete management of your business from anywhere in the world at any time!',
    price: 37.5,
    color: 'green',
  },
  {
    id: 1,
    type: 'lite',
    text: 'The most complete package of functions with maximum opportunities for the complete management of your business from anywhere in the world at any time!',
    price: 75,
    color: 'yellow',
  },
  {
    id: 2,
    type: 'plus',
    text: 'The most complete package of functions with maximum opportunities for the complete management of your business from anywhere in the world at any time!',
    price: 150,
    color: 'orange',
  },
  {
    id: 3,
    type: 'pro',
    text: 'The most complete package of functions with maximum opportunities for the complete management of your business from anywhere in the world at any time!',
    price: 225,
    color: 'red',
  },
  {
    id: 4,
    type: 'ultra',
    text: 'The most complete package of functions with maximum opportunities for the complete management of your business from anywhere in the world at any time!',
    price: 300,
    color: 'purple',
    isOpen: true,
  },
];
</script>

<style lang="scss" scoped>
.packages {
  background-color: $white;

  &__heading {
    @include bold-text;
    font-size: $fz-heading;

    padding-top: 78px;
    padding-bottom: 68px;

    color: $black;

    @media #{$screen-tablet-normal} {
      font-size: 42px;
    }
  }
}
</style>
