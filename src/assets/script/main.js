import { introAni } from "./introAni.js";
import { slider } from "./slider.js";
import { transition } from "./transition.js";
import { mouse } from "./mouse.js";
import { somooth } from "./somooth.js";

window.addEventListener("load", function () {
    introAni();
    slider();
    transition();
    mouse();
    somooth();
});