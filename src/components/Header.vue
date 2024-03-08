<template>
  <header class="header">
    <div class="container">
      <div class="header__col">
        <div class="header__row header__row--buttons">
          <div class="header__buttons">
            <Buttons>
              <CartIcon class="button__icon--cart" :fontControlled="false" />
            </Buttons>
          </div>
        </div>

        <div class="header__row header__row--menu">
          <div class="header__menu header__menu--left">
            <Menu :type="'left'" />
          </div>
          <div class="header__menu header__menu--right">
            <Menu :type="'right'" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Buttons from './Buttons.vue';
import Menu from './Menu.vue';
import CartIcon from '../assets/images/icons/cart.svg';
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;

  height: 440px;

  border-bottom: $border;

  &__row {
    display: flex;

    &--buttons {
      justify-content: flex-end;
    }

    &--menu {
      justify-content: space-between;
      margin-right: 270px;

      @media #{$screen-tablet-normal} {
        row-gap: 30px;
      }

      @media #{$screen-tablet-small} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;

        margin-right: 0;
        margin-top: 30px;
      }
    }
  }

  &::before {
    @include label-top;

    bottom: -4px;
    left: 50%;
    z-index: 2;

    background-color: $white;
    border-top: $border;
    border-left: $border;
    border-right: $border;

    content: '';
  }
}
</style>
