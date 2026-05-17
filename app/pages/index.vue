<script setup lang="ts">
import { ref, onMounted } from "vue";

const loaded = ref(false);
const scrollY = ref(0);

const paralaxStyle = computed(() => {
  return {
    transform: `translateY(${scrollY.value * 0.06}px)`,

    // scale: `${scrollY.value * 0.0001 + 1}`,
  };
});
const handleScroll = () => {
  scrollY.value = window.scrollY;
};
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="wrapper">
    <section class="hero__hero hero">
      <div class="hero__container">
        <div class="hero__body">
          <div class="hero__title" :class="{ 'hero__title--loaded': loaded }">
            <p>
              Hi, we are Debonaire. Ready to create an art form on your body.
            </p>
          </div>

          <div class="hero__media">
            <img
              class="hero__deco--abstract-1"
              :class="{ 'hero__deco--abstract-1--loaded': loaded }"
              src="/hero/abstract-1.svg"
              alt="#"
            />
            <div
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
              :style="paralaxStyle"
            >
              <img src="/hero/main-img.jpg" alt="#" />
            </div>
            <img
              class="hero__deco--abstract-2"
              :class="{ 'hero__deco--abstract-2--loaded': loaded }"
              src="/hero/abstract-2.svg"
              alt="#"
            />
            <img
              class="hero__deco--abstract-3"
              :class="{ 'hero__deco--abstract-3--loaded': loaded }"
              src="/hero/abstract-3.svg"
              alt="#"
            />
          </div>

          <div class="hero__content">
            <img
              class="hero__side-img"
              :class="{ 'hero__side-img--loaded': loaded }"
              src="/hero/side-img.jpg"
              alt="#"
            />
            <p class="hero__text" :class="{ 'hero__text--loaded': loaded }">
              Debonaire is natural product-based, hair design & boutique.
            </p>
          </div>

          <div class="hero__deco"></div>
        </div>
      </div>
    </section>

    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>

    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
    <div class="text">index page</div>
  </div>
</template>

<style scoped></style>
