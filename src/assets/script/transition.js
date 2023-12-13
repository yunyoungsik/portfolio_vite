import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function transition() {
  // 글자 쪼개기
  document.querySelectorAll(".split").forEach((text) => {
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

  // transition
  const subLinks = document.querySelectorAll(".subLink");

  subLinks.forEach((subLink) => {
    subLink.addEventListener("click", function (event) {
      event.preventDefault();

      const pageTransition = gsap.timeline();
      pageTransition.to(
        ".center__img",
        {
          opacity: 0,
          duration: 1,
          ease: "Power1.easeInOut",
          delay: 0,
        },
        ">"
      );

      document.querySelectorAll(".split").forEach((text) => {
        const spanTimeline = gsap.timeline({ paused: true });

        gsap.utils
          .toArray(text.querySelectorAll("span"))
          .forEach((span, index) => {
            spanTimeline.fromTo(
              span,
              {
                y: 0,
                opacity: 1,
                display: "inline-block",
              },
              {
                y: -72,
                opacity: 0,
                ease: "Power1.easeInOut",
              },
              index * 0.03
            );
          }, "<");

        pageTransition.add(() => spanTimeline.play(), "-=0.5"); // gsap 타임라인에 추가
      });
      pageTransition.to(
        ".descSlider",
        {
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0,
        },
        "<"
      );
      pageTransition.to(
        ".logo > a",
        {
          opacity: 0,
          yPercent: -110,
          duration: 1,
          ease: "expo.out",
          delay: 0,
        },
        "<"
      );
      pageTransition.to(
        [".page > span", ".scroll__text > p"],
        {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          ease: "expo.out",
          delay: 0,
        },
        "<"
      );
      
      pageTransition.to(
        "#mainSlider",
        {
          xPercent: -100,
          duration: 2,
          backgroundColor: "black",
          ease: "Power1.easeInOut",
          display: "none",
          delay: 0,
        },
        "<"
      );
      pageTransition.to(
        ".bgSliderWrap > .slider",
        {
          backgroundPositionX: "50%",
          duration: 0.8,
          ease: "Power1.easeInOut",
          delay: 0,
        },
        "<"
      );
    });
  });

  // const targets = gsap.utils.toArray(".split");

  //     targets.forEach(target => {
  //         let SplitClient = new SplitType(target, { type: "lines, words, chars" });
  //         let lines = SplitClient.lines;
  //         let words = SplitClient.words;
  //         let chars = SplitClient.chars;
  //     })
  //     gsap.set("#intro .text .char", { opacity: 0, y: 50 });

  //     setTimeout(() => {
  //         gsap.to("#intro .text .char", {
  //             opacity: 1,
  //             y: 0,
  //             stagger: 0.0051,
  //             duration: 1,
  //             ease: "expo.out"
  //         })
  //     }, 2000)
}
