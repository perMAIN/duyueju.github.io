<template>
  <!-- 最外层的大盒子 -->
  <div class="bigBox">
    <el-row class="box">
      <el-col :span="8">
        <!-- 时钟 -->
        <div class="clock">
          <div
            v-if="formInline.name == 'zq'"
            class="layer layer--img img1"
          ></div>
          <div
            v-else-if="formInline.name == 'zy'"
            class="layer layer--img img2"
          ></div>
          <div
            v-else-if="formInline.name == 'zdy'"
            class="layer layer--img img3"
          ></div>
          <div v-else class="layer layer--img img4"></div>
          <div class="layer layer--shade"></div>
          <div class="layer layer--face">
            <div class="digits">
              <span class="digit-group">登陆时刻</span>
            </div>
            <div class="hand hand--hr"></div>
            <div class="hand hand--min"></div>
            <div class="hand hand--sec"></div>
            <div class="ring"></div>
          </div>
          <div class="layer layer--profile">
            <img
              v-if="formInline.name == 'zq'"
              src="../assets/img/photo_zq.jpg"
              alt=""
              class="profile"
            />
            <img
              v-else-if="formInline.name == 'zy'"
              src="../assets/img/photo_zy.jpg"
              alt=""
              class="profile"
            />
            <img
              v-else-if="formInline.name == 'zdy'"
              src="../assets/img/photo_zdy.jpg"
              alt=""
              class="profile"
            />
            <img
              v-else
              src="../assets/img/default.jpg"
              alt=""
              class="profile"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <!-- 验证 -->
        <el-form
          style="max-width: 800px"
          :model="formInline"
          label-width="auto"
        >
          <el-form-item label="受访者">
            <el-select v-model="formInline.name" placeholder="name" clearable>
              <el-option label="YOYO" value="zq" />
              <el-option label="喜￥￥" value="zy" />
              <el-option label="渡月橘" value="zdy" />
            </el-select>
          </el-form-item>
          <el-row>
            <el-col :span="14">
              <el-form-item style="width: 95%" label="访问码" prop="pass">
                <el-input
                  v-model="formInline.pass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <el-button type="primary" @click="onSubmit">确认</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const formInline = reactive({
  name: "",
  pass: "",
});

const router = useRouter();

const onSubmit = () => {
  if (formInline.name == "zq" && formInline.pass == "202") {
    console.log("成功访问 YOYO 的个人博客");
    router.push("/zq");
  } else if (formInline.name == "zy" && formInline.pass == "614") {
    console.log("成功访问 喜￥￥ 的个人博客");
    router.push("/zy");
  } else if (formInline.name == "zdy" && formInline.pass == "904") {
    console.log("成功访问 渡月橘 的个人博客");
    router.push("/zdy");
  } else {
    console.log("您无权访问");
  }
  return;
};

window.onload = function () {
  //更新时钟
  function update() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.documentElement.style.setProperty("--hrAngle", `${hr * 30}deg`);
    document.documentElement.style.setProperty("--minAngle", `${min * 6}deg`);
    document.documentElement.style.setProperty("--secAngle", `${sec * 6}deg`);
  }
  update();
  setInterval(function () {
    update();
  }, 1000);
};
</script>

<style scoped>
:root {
  --hrAngle: 0;
  --minAngle: 0;
  --secAngle: 0;
  --img: "";
}

.bigBox {
  /* 溢出隐藏 */
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  /* 渐变方向从左到右 */
  background: linear-gradient(to right, rgb(247, 209, 215), rgb(191, 227, 241));
}

/* 最外层的大盒子 */
.box {
  width: 1080px;
  height: 600px;
  display: flex;
  /* 相对定位 */
  position: relative;
  z-index: 2;
  margin: auto;
  /* 居中 */
  justify-content: center;
  align-items: center;
  /* 设置圆角 */
  border-radius: 8px;
  /* 设置边框 */
  border: 1px solid rgba(255, 255, 255, 0.6);
  /* 设置盒子阴影 */
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
}

.el-form-item {
  width: 80%;
}

/* 时钟容器样式 */
.clock {
  border-radius: 50%;
  margin: auto;
  outline: transparent;
  position: relative;
  width: 12em;
  height: 12em;
  transform: rotateX(30deg) rotateY(-30deg) rotateZ(30deg);
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

/* 时钟头像样式 */
.profile {
  background-color: hsl(223, 10%, 50%);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em hsla(223, 90%, 10%, 0.6);
  display: block;
  margin: 7.75em auto 0 auto;
  width: 2em;
  height: 2em;
}

/* 时钟数字容器样式 */
.digits {
  display: flex;
  justify-content: center;
  align-items: end;
  line-height: 1;
  margin-top: 2.25em;
  user-select: none;
}

/* 时钟数字组样式 */
.digit-group {
  margin: 0 0.1em;
  width: 2ch;
  color: aliceblue;
}

/* 鼠标悬停时钟样式 */
.clock:focus-visible,
.clock:hover {
  transform: rotateX(0) rotateY(0) rotateZ(0);
}

/* 时钟指针样式 */
.hand {
  bottom: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  mix-blend-mode: difference;
  perspective: 4.25em;
  transform-origin: 0.5em calc(100% - 0.5em);
  transition: 0.5s;
}

.hand--hr {
  height: 2.75em;
  transform: rotate(var(--hrAngle)) translateY(-2em);
}

.hand--min {
  height: 3.75em;
  transform: rotate(var(--minAngle)) translateY(-2em);
}

.hand--sec {
  width: 0.5em;
  height: 3.75em;
  transform: rotate(var(--secAngle)) translateY(-2em);
}

.hand:before {
  background-color: hsl(0, 0%, 100%);
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  transform: rotateX(-30deg);
  transform-origin: 50% 100%;
}

.hand--hr:before {
  border-radius: 0.5em 0.5em 0.5em 0.5em / 0.5em 0.5em 0.75em 0.75em;
}

.hand--min:before {
  border-radius: 0 0 0.5em 0.5em / 0 0 0.75em 0.75em;
}

.hand--sec:before {
  border-radius: 0 0 0.25em 0.25em / 0 0 0.5em 0.5em;
}

/* 时钟指针、层和环样式 */
.hand,
.layer,
.ring {
  position: absolute;
}

.layer,
.ring {
  border-radius: 50%;
  inset: 0;
}

/* 时钟表盘层样式 */
.layer--face {
  transform: translateZ(3.75em);
}

.layer--img {
  transform: translateZ(-3.75em);
}

.img4 {
  background: url("../assets/img/default.jpg") 0 0 / 100% 100%;
}
.img1 {
  background: url("../assets/img/photo_zq.jpg") 0 0 / 100% 100%;
}
.img2 {
  background: url("../assets/img/photo_zy.jpg") 0 0 / 100% 100%;
}
.img3 {
  background: url("../assets/img/photo_zdy.jpg") 0 0 / 100% 100%;
}

.layer--profile {
  transform: translateZ(11em);
}

/* 时钟遮罩层样式 */
.layer--shade {
  background-color: hsla(223, 90%, 10%, 0.6);
}

.ring {
  box-shadow: 0 0 0 0.625em hsl(0, 0%, 100%) inset;
}
</style>