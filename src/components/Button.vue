<template>
  <button :class="`button button--${design} button--${position}`" type="button">
    <span v-if="design === 'simple'" class="button__text">{{ text }}</span>

    <span v-if="design === 'iconed'" class="button__icon">
      <slot></slot>
    </span>

    <span v-if="hasBadge" class="button__badge">{{ number }}</span>
  </button>
</template>

<script setup>
defineProps({
  design: {
    type: String,
    default: 'simple',
  },
  position: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  hasBadge: {
    type: Boolean,
    default: false,
  },
  number: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss">
.button {
  padding: 0;
  margin: 0;

  border: none;

  &:hover & {
    &__icon {
      @include hover;
    }

    &__text {
      @include hover;
    }
  }

  &--header {
    padding-top: 25px;
    padding-bottom: 25px;

    border-radius: 0 0 25px 25px;
  }

  &--header & {
    &__icon {
      height: 36px;
      margin-top: 2px;
    }
  }

  &--simple {
    width: 84px;

    border-left: 2px solid $white;
    border-right: 2px solid $white;
    border-bottom: 2px solid $white;

    background: transparent;
  }

  &--iconed {
    position: relative;
    width: 87px;

    background-color: $white;
  }

  &__icon {
    display: block;
    width: 100%;

    &--cart {
      width: 36px;
      height: 36px;
      margin: 0;
    }
  }

  &__badge {
    position: absolute;
    bottom: -10px;
    right: -10px;

    font-size: 21px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;

    border-radius: 50%;

    background-color: $color-badge;
    color: $black;
  }

  &__text {
    font-size: $font-size-medium;
  }
}
</style>
