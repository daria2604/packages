<template>
  <div
    :class="`fold 
    fold--${design} 
    fold--${size} 
    ${design === 'colored' ? 'fold--color-' + color : ''}`"
  >
    <span :class="`fold__label fold__label--${labelPosition}`"></span>
    <ul class="fold__content">
      <li class="fold__content-item" v-for="content in contents">
        <span class="fold__text">{{ content.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  design: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'big',
  },
  color: {
    type: String,
  },
  labelPosition: {
    type: String,
    default: 'end',
  },
  contents: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.fold {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 360px;

  border-radius: 14px;

  &--colored & {
    &__text {
      font-weight: $font-weight-bold;

      color: $white;
    }
  }

  &--bordered {
    border: 2px solid $black;
    background-color: $white;
  }

  &--bordered & {
    &__label {
      $blackBorder: 2px solid $black;

      border-top: $blackBorder;
      border-right: $blackBorder;
      border-left: $blackBorder;
    }

    &__text {
      @include bold-text;

      color: $black;
    }
  }

  &--big {
    min-height: 115px;
    padding: 27px 42px 27px 59px;
  }

  &--big & {
    &__text {
      font-size: 26px;
      line-height: 22px;
    }

    &__content {
      row-gap: 31.5px;
    }
  }

  &--medium {
    height: 110px;
    padding: 21px 14px 21px 44px;
  }

  &--medium & {
    &__text {
      font-size: 26px;
      line-height: 32px;
    }
  }

  &--color {
    position: relative;

    &-green {
      background-color: $color-startx;
    }

    &-yellow {
      background-color: $color-lite;
    }

    &-orange {
      background-color: $color-plus;
    }

    &-red {
      background-color: $color-pro;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__label {
    position: absolute;
    top: -28px;
    z-index: 2;

    display: block;
    width: 78px;
    height: 28px;

    border-radius: 14px 14px 0 0;
    background-color: inherit;

    &--end {
      right: 32px;
    }

    &--start {
      left: 28px;
    }
  }

  &__text {
    text-transform: uppercase;
  }
}
</style>
