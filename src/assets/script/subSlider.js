import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function subSlider() {


    // desc 글자 쪼개기
    document.querySelectorAll(".split").forEach(text => {
        let theText = text.innerText;
        let newText = "";

        for (let i = 0; i < text.innerText.length; i++) {
            newText += "<span aria-hidden='true'>";

            if (text.innerText[i] == " ") {
                newText += "&nbsp";
            } else {
                newText += text.innerText[i];
            }

            newText += "</span>";
        }
        text.innerHTML = newText;
        text.setAttribute("aria-label", text.innerText);
    });

    // sub intro
    const subAni = gsap.timeline();

    subAni.to(".darkOverlay", { opacity: 1, duration: 1 })
    subAni.fromTo(".sub__center .subTitle", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, "<")
    document.querySelectorAll(".split").forEach((text) => {
        const spanTimeline = gsap.timeline({ paused: true });

        gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
            spanTimeline.fromTo(
                span,
                {
                    y: 30,
                    opacity: 0,
                    display: "inline-block"
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "Power1.easeInOut",
                },
                index * 0.01
            );
        });

        subAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
    });
    subAni.fromTo([".current.sub", ".scrollBar"], { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" })

    // navBar
    gsap.to("progress", {
        value: 100,
        ease: "Power1.easeInOut",
        scrollTrigger: { scrub: 0.3 }
    });

    // close
    gsap.set("#subMainSlider", { xPercent: -100 });

    document.querySelector(".close").addEventListener("click", function () {
        const close = gsap.to("#subMainSlider",
            {
                xPercent: 0,
                duration: 1,
                backgroundColor: "white",
                ease: "Power1.easeInOut",
                display: "block",
            },
        );
        gsap.fromTo(".darkOverlay", { opacity: 1 }, { opacity: 0, duration: 1 }, "<")

        gsap.fromTo(".bgSliderWrap.sub .slider", { backgroundSize: "100%" }, { backgroundSize: "150%", duration: 1, ease: "Power1.easeInOut" }, "<")

        close.play();

        setTimeout(() => {
            window.location.href = "../index.html";
        }, (close.duration() + 1) * 1000);
    });
}