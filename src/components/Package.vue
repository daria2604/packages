<template>
  <div
    :class="`package package--${type} package--${isOpen ? 'opened' : 'closed'}`"
  >
    <div class="container">
      <header v-if="!isOpen" class="package__header">
        <h2 class="package__heading package__heading--title">
          {{ type }}
        </h2>
        <span class="package__heading package__heading--price">
          ${{ price }}K
        </span>
        <button
          class="button package__label"
          type="button"
          @click="isOpen = !isOpen"
        >
          <Icon :iconType="'arrow'" :position="'package'" :color="'white'" />
        </button>
      </header>

      <div v-if="isOpen" class="package__content">
        <div class="package__about">
          <div class="package__info">
            <h2 class="package__heading">{{ type }}</h2>
            <p class="package__text">{{ text }}</p>
          </div>
          <div class="package__price">
            <span class="package__price-number">${{ price }}K</span>
            <button class="button package__button">
              <Icon :iconType="'cart'" :position="'price'" :color="color" />
              <Icon :iconType="'plus'" :position="'price'" :color="color" />
            </button>
          </div>
        </div>

        <div class="package__features">
          <div class="package__col">
            <Folds :folds="coloredFolds" />
          </div>
          <div class="package__col">
            <Folds :folds="simpleFolds" />
          </div>
        </div>

        <button
          class="button package__label"
          type="button"
          @click="isOpen = !isOpen"
        >
          <Icon
            :iconType="'arrow'"
            :position="'package'"
            :color="'white'"
            :isReversed="isOpen"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from './Icon';
import Folds from './Folds';

defineProps({
  type: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
});

const coloredFolds = [
  {
    id: 0,
    design: 'colored',
    color: 'green',
    labelPosition: 'start',
    contents: [
      {
        text: 'Online Store App',
      },
      {
        text: 'CRM system',
      },
    ],
  },
  {
    id: 1,
    design: 'colored',
    color: 'yellow',
    labelPosition: 'end',
    contents: [
      {
        text: 'Loyalty system',
      },
    ],
  },
  {
    id: 2,
    design: 'colored',
    color: 'orange',
    labelPosition: 'start',
    contents: [
      {
        text: 'Social Media',
      },
      {
        text: 'News feed',
      },
      {
        text: 'Multilingual',
      },
    ],
  },
  {
    id: 3,
    design: 'colored',
    color: 'red',
    labelPosition: 'end',
    contents: [
      {
        text: 'Bonuses for friends',
      },
    ],
  },
];

const simpleFolds = [
  {
    id: 0,
    design: 'bordered',
    size: 'medium',
    contents: [
      {
        text: 'Customizable Calendar',
      },
    ],
  },
  {
    id: 1,
    design: 'bordered',
    size: 'medium',
    contents: [
      {
        text: 'Business version',
      },
    ],
  },
  {
    id: 2,
    design: 'bordered',
    size: 'medium',
    contents: [
      {
        text: 'Your payment system',
      },
    ],
  },
  {
    id: 3,
    design: 'bordered',
    size: 'medium',
    contents: [
      {
        text: 'Gifts for customers',
      },
    ],
  },
  {
    id: 4,
    design: 'bordered',
    size: 'medium',
    contents: [
      {
        text: 'Your Stickers’ Pack',
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.package {
  &--startx {
    background-color: $color-startx;
  }

  &--startx & {
    &__label {
      left: 50%;

      background-color: $color-startx;

      @media #{$screen-tablet-small} {
        left: 55%;
      }
    }
  }

  &--lite {
    background-color: $color-lite;
  }

  &--lite & {
    &__label {
      left: 40%;

      background-color: $color-lite;

      @media #{$screen-tablet-small} {
        left: 45%;
      }
    }
  }

  &--plus {
    background-color: $color-plus;
  }

  &--plus & {
    &__label {
      left: 30%;

      background-color: $color-plus;

      @media #{$screen-tablet-small} {
        left: 35%;
      }
    }
  }

  &--pro {
    background-color: $color-pro;
  }

  &--pro & {
    &__label {
      left: 20%;

      background-color: $color-pro;

      @media #{$screen-tablet-small} {
        left: 25%;
      }
    }
  }

  &--ultra {
    background-color: $color-ultra;
  }

  &--ultra & {
    &__label {
      left: 10%;

      background-color: $color-ultra;

      @media #{$screen-tablet-small} {
        left: 15%;
      }
    }
  }

  &__header {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 17px;
    padding-bottom: 14px;
  }

  &__header & {
    &__heading {
      font-size: $fz-heading;

      @media #{$screen-tablet-normal} {
        font-size: 42px;
      }

      &--title {
        letter-spacing: 4px;
      }

      &--price {
        letter-spacing: -3px;
      }
    }
  }

  &__label {
    position: absolute;
    z-index: 3;
    bottom: -100px;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 207px;
    height: 100px;
    padding-top: 5px;

    border-radius: 0 0 61px 61px;

    @media #{$screen-tablet-normal} {
      bottom: -50px;

      width: 100px;
      height: 50px;

      border-radius: 0 0 34px 34px;
    }
  }

  &__about {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &__info {
    max-width: 454px;

    @media #{$screen-tablet-normal} {
      text-align: center;
    }
  }

  &__heading {
    @include bold-text;
    font-size: $fz-heading-package;
    letter-spacing: -1px;

    @media #{$screen-tablet-small} {
      font-size: 72px;
    }
  }

  &__text {
    font-size: $fz-text;
    letter-spacing: -1px;

    @media #{$screen-tablet-small} {
      font-size: $font-size-base;
    }
  }

  &__price {
    display: flex;
    margin-top: 103px;

    @media #{$screen-tablet-small} {
      justify-content: center;
      margin-top: 56px;
    }

    &-number {
      font-size: $font-size-huge;
      font-weight: $font-weight-bold;

      padding: 5px 83px 5px 41px;
      margin-right: 2px;

      border-radius: 12px 0 0 12px;

      background-color: $white;
      color: $black;

      @media #{$screen-tablet-small} {
        font-size: $font-size-big;
      }

      @media #{$screen-mobile} {
        font-size: 42px;

        padding-left: 25px;
        padding-right: 45px;
      }
    }
  }

  &__button {
    @include price-button;

    background-color: $white;
  }

  &__content {
    position: relative;

    display: flex;
    justify-content: space-between;
    column-gap: 150px;

    @media #{$screen-tablet-normal} {
      flex-direction: column;
      align-items: center;
    }
  }

  &__features {
    display: flex;
    justify-content: space-between;
    column-gap: 87px;
    padding-top: 180px;
    padding-bottom: 100px;

    @media #{$screen-tablet-normal} {
      padding-top: 0;
    }

    @media #{$screen-tablet-small} {
      column-gap: 30px;
    }

    @media #{$screen-mobile} {
      flex-direction: column;
      row-gap: 50px;
    }
  }
}
</style>
