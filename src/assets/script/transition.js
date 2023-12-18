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

      const pageTransition = gsap.timeline({
        onComplete: () => {
          if (subLink.classList.contains("td")) {
            window.location.href = "./pages/td.html";
          } else if (subLink.classList.contains("yt")) {
            window.location.href = "./pages/youtube.html";
          } else if (subLink.classList.contains("mv")) {
            window.location.href = "./pages/movie.html";
          } else if (subLink.classList.contains("ki")) {
            window.location.href = "./pages/kicoff.html";
          } else if (subLink.classList.contains("bl")) {
            window.location.href = "./pages/blog.html";
          }
        }
      });

      setTimeout(() => {
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
                  stagger: 0.051,
                  ease: "Power1.easeInOut",
                },
                index * 0.03
              );
            });

          pageTransition.add(() => spanTimeline.play(), "-=0.5");
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
            duration: 1.3,
            backgroundColor: "black",
            ease: "power4.inOut",
            display: "none",
            delay: 0,
          },
          "<"
        );
        pageTransition.to(
          ".bgSliderWrap > a > .slider",
          {
            scale: 1,
            duration: 0.8,
            ease: "Power1.easeInOut",
            delay: 0,
          },
          "<"
        );
        pageTransition.to(".transitionOverlay", { display: "inline-block", duration: 1.5, ease: "Power1.easeInOut", opacity: 1 }, "<")
      });
    }, 1500);
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
