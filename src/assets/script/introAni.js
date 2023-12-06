import { gsap } from "gsap";

export function introAni() {

    // center Text
    const ani = gsap.timeline();

    ani.set(".intro__popup .center__img", { width: "100%", height: "100vh" });
    ani.set(".intro__popup .bgSliderWrap", { width: "100%" });
    ani.set(".intro__popup .center__text", { textAlign: "center", position: "absolute", top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", zIndex: 1 });
    ani.set(".intro__popup .mainSlider__center", { height: "100%" });

    ani.fromTo(".intro__popup .titleWrap", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(".intro__popup .center__img", { scale: 1 }, { scale: 0.5, duration: 2, ease: "power1.inOut" })
        .to(".intro__popup .center__img", { scale: 0.6, duration: 3, ease: "power1.inOut" })
        .to(".intro__popup .center__img", { width: 250, height: 410, scale: 1, duration: 3, ease: "power1.inOut" })
        .fromTo(".intro__popup .mainSlider", { width: "100%" }, { width: "80%" })
        .to(".intro__popup .titleWrap h2", { y: -72 })
        .to(".intro__popup .center__text", { xPercent: -200, opacity: 0, duration: 1, ease: "power1.inOut" })
        .to(".intro__popup .center__text", { textAlign: "left", position: "relative", top: "auto", left: "auto", y: 0, x: 0, xPercent: 0, yPercent: 0, })
        .to(".intro__popup .center__text", { opacity: 1 })
        .fromTo(".intro__popup .descWrap", { y: 24, opacity: 0, visibility: "hidden" }, { y: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power1.inOut" })
        .fromTo([".intro__popup .mainSlider__top", ".intro__popup .mainSlider__bottom"], { display: "none" }, { display: "flex" })
        .to(".intro__popup .mainSlider__center", { height: "60%" })
        .fromTo([".intro__popup .pause", ".scroll__arrow"], { xPercent: 100, opacity: 0 }, { xPercent: -100, opacity: 1, ease: "power1.inOut" })
        .fromTo(".intro__popup .logo", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" })
        .fromTo([".intro__popup .page", ".scroll__text"], { yPercent: 100, opacity: 0 }, { yPercent: -100, opacity: 1, ease: "power1.inOut" })

    // center Img
    const innerAnimation = gsap.timeline();

    gsap.set(".intro__popup .centerSliderWrap", { display: "flex", width: "600%", height: "100vh" });
    gsap.set(".intro__popup .centerSliderWrap .centerSlider", { xPercent: 100, opacity: 0 });

    gsap.utils.toArray(".intro__popup .centerSliderWrap .centerSlider").forEach((img, index) => {
        if (index !== 0) {
            innerAnimation.to(img, {
                xPercent: -100 * index,
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
                delay: index * 0.5
            });
        }
    });

    innerAnimation.eventCallback("onComplete", function () {
        document.querySelector(".intro__popup").style.display = "none";
    });

    // innerAnimation.eventCallback("onComplete", function () {
    //     gsap.to(".intro__popup", { display: "none" });
    // });

    // function redirectToNewPage() {
    //     window.location.href = "/";
    // }
}

// export function introAni() {

//     // center Text
//     const ani = gsap.timeline();

//     ani.set(".center__img", { width: "100%", height: "100vh" });
//     ani.set(".bgSliderWrap", { width: "100%" });
//     ani.set(".center__text", { textAlign: "center", position: "absolute", top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", zIndex: 1 });
//     ani.set(["mainSlider__top", "mainSlider__bottom"], { display: "none" });
//     ani.set(".mainSlider__center", { height: "100%" });

//     ani.fromTo(".titleWrap", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
//         .fromTo(".center__img", { scale: 1 }, { scale: 0.5, duration: 2, ease: "power1.inOut" })
//         .to(".center__img", { scale: 0.6, duration: 3, ease: "power1.inOut" })
//         .to(".center__img", { width: 250, height: 410, scale: 1, duration: 3, ease: "power1.inOut" })
//         .fromTo(".mainSlider", { width: "100%" }, { width: "80%" })
//         .to(".titleWrap h2", { y: -72 })
//         .to(".center__text", { xPercent: -200, opacity: 0, duration: 1, ease: "power1.inOut" })
//         .to(".center__text", { textAlign: "left", position: "relative", top: "auto", left: "auto", y: 0, x: 0, xPercent: 0, yPercent: 0, })
//         .to(".center__text", { opacity: 1 })
//         .fromTo(".descWrap", { y: 24, opacity: 0, visibility: "hidden" }, { y: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power1.inOut" })
//         .fromTo([".mainSlider__top", ".mainSlider__bottom"], { display: "none" }, { display: "flex" })
//         .to(".mainSlider__center", { height: "60%" })
//         .fromTo([".pause", ".scroll__arrow"], { xPercent: 100, opacity: 0 }, { xPercent: -100, opacity: 1, ease: "power1.inOut" })
//         .fromTo(".logo", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" })
//         .fromTo([".page", ".scroll__text"], { yPercent: 100, opacity: 0 }, { yPercent: -100, opacity: 1, ease: "power1.inOut" })

//     // center Img
//     const innerAnimation = gsap.timeline();

//     gsap.set(".centerSliderWrap", { display: "flex", width: "600%", height: "100vh" });
//     gsap.set(".centerSliderWrap .centerSlider", { xPercent: 100, opacity: 0 });

//     gsap.utils.toArray(".centerSliderWrap .centerSlider").forEach((img, index) => {
//         if (index !== 0) {
//             innerAnimation.to(img, {
//                 xPercent: -100 * index,
//                 opacity: 1,
//                 duration: 1,
//                 ease: "power1.inOut",
//                 delay: index * 0.5
//             });
//         }
//     });

//     innerAnimation.eventCallback("onComplete", redirectToNewPage);

//     function redirectToNewPage() {
//         window.location.href = "/";
//     }
// }


