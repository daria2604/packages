<template>
  <header class="header">
    <div class="container">
      <div class="header__col">
        <div class="header__row header__row--buttons">
          <div class="header__buttons">
            <Buttons />
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
      margin-left: 60px;

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
    position: absolute;
    bottom: -4px;
    left: 50%;
    z-index: 2;

    display: block;
    width: 207px;
    height: 105px;

    border-radius: 61px 61px 0 0;
    border-top: $border;
    border-left: $border;
    border-right: $border;

    background-color: $white;
    content: '';
  }
}
</style>
