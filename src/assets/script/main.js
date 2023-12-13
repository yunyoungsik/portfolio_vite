import { introAni } from "./introAni.js";
import { slider } from "./slider.js";
import { transition } from "./transition.js";
import { mouse } from "./mouse.js";
import { smooth } from "./somooth.js";

window.addEventListener("load", function () {
    // introAni();
    slider();
    transition();
    mouse();
    smooth();
});