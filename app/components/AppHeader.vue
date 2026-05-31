<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useScrollStore } from "../stores/scroll-store";

const scrollStore = useScrollStore();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const isResizing = ref(false);

let timeout: any;

let lastIsMobile = null as any;

onMounted(() => {
  const mq = window.matchMedia("(max-width: 767.98px)");

  const handler = (e: any) => {
    const isMobile = e.matches;

    // only trigger when crossing breakpoint
    if (lastIsMobile !== null && lastIsMobile !== isMobile) {
      isResizing.value = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isResizing.value = false;
      }, 200);
    }

    lastIsMobile = isMobile;
  };

  // initial state
  lastIsMobile = mq.matches;

  // listen ONLY to breakpoint changes
  mq.addEventListener("change", handler);

  onUnmounted(() => {
    mq.removeEventListener("change", handler);
  });
});

watch(isOpen, (open) => {
  document.body.classList.toggle("no-scroll", open);
});
</script>

<template>
  <header class="header" :class="{ 'header--active': scrollStore.someState }">
    <div class="header__container">
      <button
        class="burger"
        :class="{ 'burger--active': isOpen }"
        @click="toggleMenu"
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        class="header__menu menu"
        :class="{
          'header__menu--active': isOpen,
          'header__menu--no-transition': isResizing,
        }"
      >
        <!-- <div class="header__logo">Logo</div> -->

        <ul class="header__list">
          <li class="header__item">Menu</li>
          <li class="header__item">About & Careers</li>
          <li class="header__item">Contact</li>
        </ul>
      </nav>
      <a
        href="#"
        class="header__logo"
        :class="{ 'header__logo--active': isOpen }"
        ><span>debonaire</span></a
      >

      <a class="header__book book"><span>Book an appointment</span></a>
    </div>
  </header>
</template>

<style scoped></style>
