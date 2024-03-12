<template>
  <section class="upgrade">
    <div class="container">
      <div class="upgrade__description">
        <p class="upgrade__heading">{{ upgrades.version.heading }}</p>
        <p class="upgrade__text">{{ upgrades.version.text }}</p>
      </div>
    </div>

    <!-- <div class="upgrade__subscription">
      <Subscriptions :items="subscriptions"/>
    </div>

    <div class="container">
      <div class="upgrade__description">
        <p class="upgrade__heading">{{ upgrades.package.heading }}</p>
        <p class="upgrade__text">{{ upgrades.package.text }}</p>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import Subscriptions from './Subscriptions';

const upgrades = {
  version: {
    heading: 'Upgrading to the next version',
    text: `You can start with any of the packages and upgrade over time once you need the added functionality`,
  },
  package: {
    heading: 'Choose your package!',
    text: `Available on demand: the integration of AI and GPS functionality. Prices are available after consultation via example@example.com`,
  },
};

const subscriptions = [
  {
    type: 'lite',
    nameFrom: 'startx',
    color: 'yellow',
    price: 52.5,
  },
  {
    type: 'plus',
    nameFrom: 'lite',
    color: 'orange',
    price: 105,
  },
  {
    type: 'pro',
    nameFrom: 'plus',
    color: 'red',
    price: 105,
  },
  {
    type: 'ultra',
    nameFrom: 'pro',
    color: 'purple',
    price: 105,
  },
];
</script>

<style lang="scss" scoped>
.upgrade {
  padding-top: 191px;

  background-color: $white;

  &__heading {
    @include bold-text;
    font-size: $font-size-medium;

    margin-bottom: 16px;

    color: $black;
  }

  &__text {
    font-size: $fz-text;

    color: $black;
  }

  &__description {
    max-width: 660px;
  }

  &__subscription {
    margin-top: 37px;
    margin-bottom: 91px;
  }
}
</style>
