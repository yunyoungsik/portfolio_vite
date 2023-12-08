import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function subSlider() {
    const mainSlider = document.querySelector("#mainSlider");

    gsap.to(mainSlider, {
        xPercent: -100,
        duration: 1,
        backgroundColor: "black",
        ease: "slow",
        display: "none",
    });


    const subAni = gsap.timeline();

    subAni.fromTo(".sub__center .subTitle", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power1.inOut" })
    subAni.fromTo(".sub__center .subDesc", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 2, ease: "power1.inOut" })
    subAni.fromTo([".current.sub", ".scrollBar"], { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" })

    // navBar
    gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 }
    });


    // .close
    const close = gsap.to(mainSlider, {
        xPercent: -100,
        duration: 1,
        backgroundColor: "black",
        ease: "slow",
        display: "none",
    });

    document.querySelector(".close").addEventListener("click", function () {
        close.reverse();

        setTimeout(() => {
            window.location.href = "../index.html";
        }, (close.duration() + 2) * 1000);
    });
}