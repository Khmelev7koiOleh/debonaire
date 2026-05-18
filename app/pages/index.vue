<script setup lang="ts">
import { ref, onMounted } from "vue";

const loaded = ref(false);
const scrollY = ref(0);
let ticking = false;

import { useParallax } from "~/composables/useParallax";

const hero = ref<HTMLElement | null>(null);
const main = ref<HTMLElement | null>(null);
const focused = ref<HTMLElement | null>(null);
const focused__img1 = ref<HTMLElement | null>(null);
const focused__text = ref<HTMLElement | null>(null);
const focused__img2 = ref<HTMLElement | null>(null);
const section2 = ref<HTMLElement | null>(null);
const bg2 = ref<HTMLElement | null>(null);
const section3 = ref<HTMLElement | null>(null);
const bg3 = ref<HTMLElement | null>(null);
const section4 = ref<HTMLElement | null>(null);
const bg4 = ref<HTMLElement | null>(null);
const section5 = ref<HTMLElement | null>(null);
const bg5 = ref<HTMLElement | null>(null);
useParallax(hero, main, -0.1);
useParallax(focused, focused__img1, -1);
useParallax(focused, focused__text, -0.1);
useParallax(focused, focused__img2, -1);
useParallax(section2, bg2, -0.5);
useParallax(section3, bg3, -0.5);
useParallax(section4, bg4, -0.5);
useParallax(section5, bg5, -0.5);

// const paralaxStyle = computed(() => {
//   return {
//     transform: `translateY(${scrollY.value * 0.06}px)`,
//     willChange: "transform",
//     // scale: `${scrollY.value * 0.0001 + 1}`,
//   };
// });
// const handleScroll = () => {
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       scrollY.value = window.scrollY;
//       ticking = false;
//     });

//     ticking = true;
//   }
// };
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });

  // window.addEventListener("scroll", handleScroll, { passive: true });
});

// onUnmounted(() => {
//   window.removeEventListener("scroll", handleScroll);
// });
</script>

<template>
  <div class="wrapper">
    <!-- <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /> -->

    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <div
            class="hero__title title"
            :class="{ 'hero__title--loaded': loaded }"
          >
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
              ref="hero"
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
            >
              <img ref="main" src="/hero/main-img.jpg" alt="#" />
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
            <p
              class="hero__text text"
              :class="{ 'hero__text--loaded': loaded }"
            >
              Debonaire is natural product-based, hair design & boutique.
            </p>
          </div>

          <div class="hero__deco"></div>
        </div>
      </div>
    </section>

    <section ref="focused" class="focused">
      <div class="focused__container">
        <div class="focused__content">
          <div class="focused__picture focused__picture--first">
            <img
              ref="focused__img1"
              class="focused__img"
              src="/focused/image-1.jpg"
              alt=""
            />
            <div class="focused__deco focused__deco--first">
              <img src="/focused/deco-1.svg" alt="" />
            </div>
          </div>

          <div ref="focused__text" class="focused__body">
            <h2 class="focused__title title">We’re focused.</h2>
            <p class="focused__text text">
              We provide an exceptional service by only focusing on hair
              designing. Our goal is to provide a different type of experience
              by using responsible products.
            </p>
          </div>
          <div class="focused__picture focused__picture--second">
            <img
              ref="focused__img2"
              class="focused__img focused__img--second"
              src="/focused/image-2.jpg"
              alt=""
            />
            <div class="focused__deco focused__deco--second">
              <img src="/focused/deco-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <div
            class="hero__title title"
            :class="{ 'hero__title--loaded': loaded }"
          >
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
              ref="section2"
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
            >
              <img ref="bg2" src="/hero/main-img.jpg" alt="#" />
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
    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <div
            class="hero__title title"
            :class="{ 'hero__title--loaded': loaded }"
          >
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
              ref="section3"
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
            >
              <img ref="bg3" src="/hero/main-img.jpg" alt="#" />
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
    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <div
            class="hero__title title"
            :class="{ 'hero__title--loaded': loaded }"
          >
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
              ref="section4"
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
            >
              <img ref="bg4" src="/hero/main-img.jpg" alt="#" />
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
    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <div
            class="hero__title title"
            :class="{ 'hero__title--loaded': loaded }"
          >
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
              ref="section5"
              class="hero__image"
              :class="{ 'hero__image--loaded': loaded }"
            >
              <img ref="bg5" src="/hero/main-img.jpg" alt="#" />
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
