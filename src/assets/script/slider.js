import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

export function slider() {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".parallax__item");
    let center = gsap.utils.toArray(".centerSlider");
    let page = gsap.utils.toArray(".pageIndex");
    let title = gsap.utils.toArray(".title");
    let desc = gsap.utils.toArray(".desc");

    let animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#parallax__cont",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: "+=500",
        }
    });

    animation.to(sections, { xPercent: -100 * (sections.length - 1), ease: "none" }, 0)
        .to(center, { y: -1080 * (center.length - 1), ease: "none" }, 0)
        .to(desc, { y: -24 * (desc.length - 1), ease: "none" }, 0)
        .to(page, { y: -24 * (page.length - 1), ease: "none" }, 0)
        .to(title, { y: -72 * (title.length - 1), ease: "none" }, 0);
}