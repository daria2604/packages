<template>
  <span :class="`icon icon--${position}`">
    <CartIcon
      v-if="iconType === 'cart'"
      :class="`icon-cart icon-${color}`"
      :fontControlled="false"
    />

    <PlusIcon
      v-if="iconType === 'plus'"
      :class="`icon-plus icon-${color}`"
      :fontControlled="false"
    />

    <ArrowIcon
      v-if="iconType === 'arrow'"
      :class="`icon-arrow icon-${color} ${isReversed && 'icon-reversed'}`"
      :fontControlled="false"
    />

    <ArrowRightIcon
      v-if="iconType === 'arrow-right'"
      :class="`icon-arrow-right`"
    />
  </span>
</template>

<script setup>
import CartIcon from '../assets/images/icons/cart.svg';
import PlusIcon from '../assets/images/icons/plus.svg';
import ArrowIcon from '../assets/images/icons/arrow.svg';
import ArrowRightIcon from '../assets/images/icons/arrow-right.svg';

defineProps({
  iconType: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  color: {
    type: String,
  },
  isReversed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.icon {
  display: block;

  width: 100%;
  height: fit-content;

  &--price {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--price & {
    &-cart {
      width: 35px;
      height: 35px;
    }

    &-plus {
      width: 27px;
      height: 27px;
    }
  }

  &--package & {
    &-arrow {
      width: 60px;
      height: 26px;

      @media #{$screen-tablet-normal} {
        width: 30px;
      }
    }
  }

  &--subscription & {
    &-cart {
      width: 35px;
      height: 35px;
    }

    &-plus {
      width: 27px;
      height: 27px;
    }
  }

  &-reversed {
    transform: rotate(180deg);
  }

  &-green {
    color: $sushi;
  }

  &-yellow {
    color: $supernova;
  }

  &-orange {
    color: $sunshade;
  }

  &-red {
    color: $wild-watermelon;
  }

  &-purple {
    color: $purple-heart;
  }

  &-black {
    color: $black;
  }

  &-white {
    color: $white;
  }
}
</style>
