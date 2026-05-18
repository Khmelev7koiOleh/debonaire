import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

export const useParallax = (
  sectionRef: Ref<HTMLElement | null>,
  bgRef: Ref<HTMLElement | null>,
  speed: number = 0.5,
) => {
  let scrollTrigger: any = null;
  let gsap: any = null;
  let ScrollTrigger: any = null;

  const init = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");

    gsap = gsapModule.default;
    ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.value || !bgRef.value) return;

    const section = sectionRef.value;
    const bg = bgRef.value;
    const distance = section.clientHeight * speed;

    const anim = gsap.fromTo(
      bg,
      { y: -distance / 2 },
      {
        y: distance / 2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      },
    );
    scrollTrigger = anim.scrollTrigger;
  };

  onMounted(() => {
    init();
  });

  onBeforeUnmount(() => {
    if (scrollTrigger) {
      scrollTrigger.kill();
    }
    if (gsap && ScrollTrigger) {
      ScrollTrigger.getAll().forEach((trigger: any) => {
        if (trigger.vars.trigger === sectionRef.value) trigger.kill();
      });
    }
  });

  return { refresh: () => ScrollTrigger?.refresh() };
};
