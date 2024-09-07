import { ref } from 'vue'
let flag = ref(true);
const mySwitch = () => {
    const pre_box = document.querySelector('.pre-box')
    const img = document.querySelector("#avatar")
    if (flag.value) {
        pre_box.style.background = "#c9e0ed";
        pre_box.style.transform = "translateX(100%)";
        img.src = require("@/assets/img/wuwu.jpeg")
    } else {
        pre_box.style.background = "#edd4dc";
        pre_box.style.transform = "translateX(0%)";
        img.src = require("@/assets/img/waoku.jpg")
    }
    flag.value = !flag.value;
};

export default mySwitch