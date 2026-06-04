<script setup lang="ts">
import { ref, onMounted } from "vue";

const loaded = ref(false);
const scrollY = ref(0);
let ticking = false;
const scroll = ref(0);
import { useParallax } from "~/composables/useParallax";
import { useScrollStore } from "../stores/scroll-store";
const scrollStore = useScrollStore();
const hero = ref<HTMLElement | null>(null);
const main = ref<HTMLElement | null>(null);
const focused = ref<HTMLElement | null>(null);
const focused__img1 = ref<HTMLElement | null>(null);
const focused__text = ref<HTMLElement | null>(null);
const focused__img2 = ref<HTMLElement | null>(null);
const showcase = ref<HTMLElement | null>(null);
const showcase__img1 = ref<HTMLElement | null>(null);
const showcase__img2 = ref<HTMLElement | null>(null);
const showcase__img3 = ref<HTMLElement | null>(null);
const services = ref<HTMLElement | null>(null);
const services__title = ref<HTMLElement | null>(null);
const services__img1 = ref<HTMLElement | null>(null);
const services__img2 = ref<HTMLElement | null>(null);
const services__img3 = ref<HTMLElement | null>(null);
const passion = ref<HTMLElement | null>(null);
const passion__img = ref<HTMLElement | null>(null);
const passion__text = ref<HTMLElement | null>(null);
const passion__vertical_text = ref<HTMLElement | null>(null);
const best = ref<HTMLElement | null>(null);
const best__img1 = ref<HTMLElement | null>(null);
const best__img2 = ref<HTMLElement | null>(null);
const best__img3 = ref<HTMLElement | null>(null);
const best__text = ref<HTMLElement | null>(null);
const section3 = ref<HTMLElement | null>(null);
const bg3 = ref<HTMLElement | null>(null);
const section4 = ref<HTMLElement | null>(null);
const bg4 = ref<HTMLElement | null>(null);
const section5 = ref<HTMLElement | null>(null);
const bg5 = ref<HTMLElement | null>(null);
useParallax(hero, main, -0.8);
useParallax(focused, focused__img1, -0.8);
useParallax(focused, focused__text, -0.8);
useParallax(focused, focused__img2, -0.8);
useParallax(showcase, showcase__img1, -0.8);
useParallax(showcase, showcase__img2, -0.8);
useParallax(showcase, showcase__img3, -0.8);
useParallax(services, services__title, 0.1);
useParallax(services, services__img1, -0.8);
useParallax(services, services__img2, -0.8);
useParallax(services, services__img3, -0.8);

useParallax(passion, passion__vertical_text, -0.8);
useParallax(passion, passion__img, 0.4);
useParallax(passion, passion__text, -0.4);

useParallax(best, best__img1, -0.8);
useParallax(best, best__img2, -0.8);
useParallax(best, best__img3, -0.8);
useParallax(best, best__text, -0.8);

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

const handleScroll = () => {
  scrollStore.someState = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
// onUnmounted(() => {
//   window.removeEventListener("scroll", handleScroll);
// });
</script>

<template>
  <div class="wrapper">
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
            <div ref="focused__img1" class="focused__image-1">
              <img class="focused__img" src="/focused/image-1.jpg" alt="" />
            </div>
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
            <div ref="focused__img2" class="focused__image-2">
              <img
                class="focused__img focused__img--second"
                src="/focused/image-2.jpg"
                alt=""
              />
            </div>
            <div class="focused__deco focused__deco--second">
              <img src="/focused/deco-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div ref="showcase" class="showcase__content">
        <div class="showcase__picture">
          <div ref="showcase__img1" class="showcase__image">
            <img class="showcase__img" src="/showcase/image-1.jpg" alt="" />
          </div>
          <div class="showcase__deco showcase__decore-img">
            <img src="/showcase/deco-1.svg" alt="" />
          </div>
        </div>

        <div class="showcase__body">
          <h2 class="showcase__title title--big">
            We love what we do. We are up to the task.
          </h2>
          <p class="showcase__text text">
            Cuts tailor made for your hair, making it easy for you to recreate
            your look every day. Debonaire team, makes you feel happy at ease
            and work with you to make you your most lovely.
          </p>
        </div>
        <div class="showcase__decore decore-showcase">
          <div class="decore-showcase__body">
            <div class="decore-showcase__line-item">
              <img
                src="/showcase/deco-2.svg"
                alt=""
                class="decore-showcase__line"
              />
            </div>
            <div class="decore-showcase__item-hair">
              <div ref="showcase__img2" class="decore-showcase__hair-image">
                <img
                  src="/showcase/image-2.jpg"
                  alt=""
                  class="decore-showcase__hair"
                />
              </div>
            </div>
            <div class="decore-showcase__item-dryer">
              <div ref="showcase__img3" class="decore-showcase__dryer-image">
                <img
                  src="/showcase/image-3.jpg"
                  alt=""
                  class="decore-showcase__dryer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services">
      <div ref="services" class="services__container">
        <h1 ref="services__title" class="services__title title title--med">
          Our Services
        </h1>

        <div class="services__body">
          <div class="services__items">
            <a ref="services__img1" class="services__item item-service">
              <div class="item-service__link">
                <div class="item-service__img">
                  <img src="/services/image-1.jpg" alt="" />
                </div>

                <div class="item-service__text title title--sm">Cut</div>
              </div>
            </a>

            <a class="services__item item-service">
              <div ref="services__img2" class="item-service__link">
                <div class="item-service__text title title--sm">Color</div>
                <div class="item-service__img">
                  <img src="/services/image-2.jpg" alt="" />
                </div>
              </div>
              <div class="services__deco-1">
                <img
                  class="services__deco-img"
                  src="/services/deco-2.svg"
                  alt=""
                />
              </div>
            </a>
            <a class="services__item item-service">
              <div ref="services__img3" class="item-service__link">
                <div class="item-service__img">
                  <img src="/services/image-3.jpg" alt="" />
                </div>

                <div class="item-service__text title title--sm">Design</div>
              </div>
              <div class="services__deco-2">
                <img
                  class="services__deco-img"
                  src="/services/deco-1.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="services__content content-services">
            <h2 class="content-services__subtitle title title--med">
              We create a customized new look for you.
            </h2>
            <a class="content-services__book book">
              <span>See our menu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section ref="passion" class="passion">
      <div class="passion__vertical-text">
        <div ref="passion__vertical_text">
          <p>AND THE MOST IMPORTANT PART</p>
        </div>
      </div>
      <div class="passion__body">
        <div ref="passion__text" class="passion__content content-passion">
          <div class="content-passion__body">
            <h2 class="content-passion__title title title--big">
              We work with passion.
            </h2>
            <p class="content-passion__text text">
              Our specialists are waiting to give you the treatments and
              services that you deserve.
            </p>
          </div>
        </div>
        <div ref="passion__img" class="passion__bg">
          <img src="/passion/image-3.png" alt="" />
        </div>
      </div>
    </section>

    <section ref="best" class="best">
      <div class="best__container">
        <div class="best__body">
          <div class="best__media media-best">
            <div class="media-best__deco-1">
              <img src="/best/deco-1.svg" alt="" />
            </div>
            <div class="media-best__image-1">
              <div ref="best__img1">
                <img src="/best/image-1.jpg" alt="" />
              </div>
            </div>
            <div ref="best__img2" class="media-best__image-2">
              <img src="/best/image-2.jpg" alt="" />
            </div>
            <div class="media-best__image-3">
              <div ref="best__img3">
                <img src="/best/image-3.jpg" alt="" />
              </div>
            </div>
            <div class="media-best__deco-2">
              <img src="/best/deco-2.svg" alt="" />
            </div>
          </div>

          <!-- :class="{ 'best__title--loaded': loaded }" -->
          <div ref="best__text" class="content__body">
            <div class="content__title title title--med">
              <p>Let’s make you your best self.</p>
            </div>

            <a class="content__book book"><span>Book an appointment</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
