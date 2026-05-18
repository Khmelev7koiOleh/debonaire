<script setup lang="ts">
import { ref } from "vue";
import { useParallax } from "~/composables/useParallax";

const section1 = ref<HTMLElement | null>(null);
const bg1 = ref<HTMLElement | null>(null);
const section2 = ref<HTMLElement | null>(null);
const bg2 = ref<HTMLElement | null>(null);

useParallax(section1, bg1, 0.4);
useParallax(section2, bg2, 0.7);
</script>
<template>
  <div>
    <section class="hero">
      <h1>О нас</h1>
      <p>Скролльте вниз</p>
    </section>

    <section ref="section1" class="parallax-section">
      <div ref="bg1" class="parallax-bg"></div>
      <div class="content">
        <h2>Наша история</h2>
      </div>
    </section>

    <section ref="section2" class="parallax-section">
      <div ref="bg2" class="parallax-bg bg2"></div>
      <div class="content">
        <h2>Наша миссия</h2>
      </div>
    </section>

    <section class="footer">Конец</section>
  </div>
</template>
<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.parallax-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f172a;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130%;
  background-image: url("https://picsum.photos/id/104/1920/1080");
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: 0;
}

.bg2 {
  background-image: url("https://picsum.photos/id/15/1920/1080");
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  max-width: 80%;
}

.footer {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e293b;
  color: white;
}
</style>
