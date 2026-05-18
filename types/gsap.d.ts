// types/gsap.d.ts
import type { gsap } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

declare module "#app" {
  interface NuxtApp {
    $gsap: {
      gsap: typeof gsap;
      ScrollTrigger: typeof ScrollTrigger;
    };
  }
}

// для Nuxt 4 также может потребоваться расширение глобального объекта
export {};
