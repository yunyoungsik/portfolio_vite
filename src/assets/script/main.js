import { slider } from "./slider.js";
import { mouse } from "./mouse.js";
import { smooth } from "./somooth.js";
import { introAni } from "./introAni.js";

window.addEventListener("load", function () {
    introAni();
    slider();
    mouse();
    smooth();
});