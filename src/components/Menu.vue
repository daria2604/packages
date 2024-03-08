<template>
  <div class="menu" :type="type">
    <ul class="menu__list" v-if="type === 'left'">
      <li class="menu__item" v-for="link in linksLeft">
        <NuxtLink :to="link.path" class="menu__link">
          <span class="menu__text">{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>

    <ul class="menu__list" v-if="type === 'right'">
      <li class="menu__item" v-for="link in linksRight">
        <NuxtLink :to="link.path" class="menu__link">
          <span class="menu__text">{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
});

const linksLeft = [
  {
    path: '#',
    name: 'About Us',
  },
  {
    path: '#',
    name: 'Team',
  },
  {
    path: '#',
    name: 'Projects',
  },
];

const linksRight = [
  {
    path: '#',
    name: 'Contact Us',
  },
];
</script>

<style lang="scss" scoped>
.menu {
  &--left & {
    &__list {
      margin-right: 270px;

      @media #{$screen-tablet-normal} {
        margin-right: 0;
      }
    }
  }

  &__list {
    display: flex;
    column-gap: 154px;

    @media #{$screen-tablet-normal} {
      column-gap: 50px;
    }
  }

  &__link {
    text-decoration: none;

    &:hover {
      @include hover;
    }
  }

  &__text {
    font-size: $fz-header-menu;
    text-transform: uppercase;

    @media #{$screen-tablet-small} {
      font-size: $font-size-base;
    }
  }
}
</style>
