<template>
  <div :class="`subscription subscription--${type}`">
    <div class="subscription__block">
      <div class="subscription__details">
        <p class="subscription__name">{{ nameFrom }}</p>
        <span class="subscription__arrow">
          <Icon
            :iconType="'arrow-right'"
            :position="'subscription'"
            class="subscription__arrow-icon"
          />
        </span>
        <p class="subscription__name">{{ type }}</p>
      </div>

      <button class="button subscription__button">
        <Icon :iconType="'cart'" :position="'subscription'" :color="color" />
        <Icon :iconType="'plus'" :position="'subscription'" :color="color" />
      </button>
    </div>

    <p class="subscription__price">${{ price }}K</p>
  </div>
</template>

<script setup>
import Icon from './Icon.vue';

defineProps({
  type: {
    type: String,
    required: true,
  },
  nameFrom: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.subscription {
  display: flex;
  align-items: center;
  column-gap: 40px;

  color: $black;

  &--lite & {
    &__details {
      background: $green-to-yellow;
    }

    &__price {
      color: $color-lite;
    }

    &__button {
      border-color: $color-lite;
    }
  }

  &--plus & {
    &__details {
      background: $yellow-to-orange;
    }

    &__price {
      color: $color-plus;
    }

    &__button {
      border-color: $color-plus;
    }
  }

  &--pro & {
    &__details {
      background: $orange-to-red;
    }

    &__price {
      color: $color-pro;
    }

    &__button {
      border-color: $color-pro;
    }
  }

  &--ultra & {
    &__details {
      background: $red-to-purple;
    }

    &__price {
      color: $color-ultra;
    }

    &__button {
      border-color: $color-ultra;
    }
  }

  &__arrow {
    min-width: 168px;
    max-width: 497px;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__name {
    @include bold-text;
    font-size: $fz-subscription-name;

    color: $white;

    &:first-of-type {
      text-align: left;

      width: 200px;
    }

    &:not(:last-of-type) {
      width: 208px;
    }

    &:last-of-type {
      text-align: center;

      width: 234px;
    }
  }

  &__details {
    display: flex;
    align-items: center;

    height: 106px;
    padding-left: 50px;
  }

  &__price {
    @include bold-text;
    font-size: $fz-subscription-price;
  }

  &__button {
    @include price-button;
    height: 106px;

    border-top-width: 2px;
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-right-style: solid;

    background-color: transparent;
  }
}
</style>
