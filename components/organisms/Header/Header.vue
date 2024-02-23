<template>
  <header class="header">
    <MobileHeader class="header__mobile" />
    <TabletOrDesktopHeader class="header__tablet" />
  </header>
</template>

<style>
.header {
  &__mobile {
    @apply flex;

    @screen lg {
      @apply hidden;
    }
  }

  &__tablet {
    @apply hidden;

    @screen lg {
      @apply flex;
    }
  }
}
</style>
