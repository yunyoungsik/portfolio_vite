import { gsap } from "gsap/gsap-core";

export function mouse() {
    const mouseCursor = document.querySelector(".mouse__cursor");

    window.addEventListener("mousemove", (e) => {
        gsap.to(mouseCursor, {duration: 1, left: e.screenX+0, top: e.screenY+0});
    });

    document.querySelectorAll(".mouse__text").forEach(span => {
        span.addEventListener("mouseenter", () => {
            mouseCursor.classList.add("active");
        });
        span.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("active");
        });
    })
}