import { gsap } from "gsap";

export function hoverText() {
    // 글자 쪼개기
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

    const email = document.querySelector(".emailLink");

    email.addEventListener("mouseover", function () {
        const splitTexts = document.querySelectorAll(".split");
        const windowWidth = window.innerWidth;
    
        splitTexts.forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });
    
            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                let yPos = 0;
                let animOpacity = 1;
    
                // Check window width to apply different animation properties
                if (windowWidth <= 768) { // Example threshold, change as needed
                    yPos = -50;
                    animOpacity = 0.5;
                } else {
                    yPos = -75;
                    animOpacity = 1;
                }
    
                spanTimeline.fromTo(
                    span,
                    {
                        y: 0,
                        opacity: 1,
                        display: "inline-block"
                    },
                    {
                        y: yPos,
                        opacity: animOpacity,
                        ease: "Power1.easeInOut"
                    },
                    index * 0.02
                );
            });
            spanTimeline.play();
        });
    
        gsap.fromTo(".svg > .svg1", { opacity: 1, scale: 1 }, { opacity: 1, scale: 0, transformOrigin: "100% 0%", ease: "Power1.easeInOut" });
        gsap.fromTo(".svg > .svg2", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "0% 100%", ease: "Power1.easeInOut" });
    });


    email.addEventListener("mouseout", function () {
        document.querySelectorAll(".split").forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });

            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                spanTimeline.fromTo(
                    span,
                    {
                        y: -75,
                        opacity: 1,
                        display: "inline-block"
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "Power1.easeInOut",
                    },
                    index * 0.01
                );
                spanTimeline.play();
            });
        });
        gsap.fromTo(".svg > .svg2", { opacity: 1, scale: 1 }, { opacity: 0, scale: 0, transformOrigin: "0% 100%", ease: "Power1.easeInOut" })
        gsap.fromTo(".svg > .svg1", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "100% 0%", ease: "Power1.easeInOut" })
    })
}