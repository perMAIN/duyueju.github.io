<template>
  <div class="shell">
    <!-- 标题-start -->
    <div class="title">
      <h4>渡月橘.编程世界.com</h4>
    </div>
    <!-- 标题-end -->
    <!-- 滚动标志-start -->
    <div class="slide">
      <div class="top">
        <i class="iconfont icon-arrow-up">
          <div class="box"></div>
        </i>
      </div>
      <div class="bottons">
        <div class="botton one">
          <div class="line"></div>
          <span>1</span>
        </div>
        <div class="botton two">
          <div class="line"></div>
          <span>2</span>
        </div>
      </div>
      <div class="bottom">
        <i class="iconfont icon-arrow-down">
          <div class="box"></div>
        </i>
      </div>
    </div>
    <!-- 滚动标志-end -->
    <!-- 主要内容-start -->
    <div class="main">
      <!-- <div class="back"></div> -->
      <h2 class="hello">HELLO.</h2>
      <h2>Hi, It's <span>DYJ</span></h2>
      <h3 class="typing-text">I'm a <span class="multiple-text"></span></h3>
      <div class="circle"></div>
      <!-- <div class="banana"></div> -->
    </div>
    <!-- 主要内容-end -->
    <!-- 导航栏-start -->
    <nav>
      <a href=""> @</a>
      <a href=""> article</a>
      <a href=""> work</a>
      <a href="" class="ss"> me</a>
    </nav>
    <!-- 导航栏-end -->
    <!-- 介绍-start -->
    <div class="content">
      <h3>张 丹云</h3>
      <span>
        In addition to being eaten directly after ripening, bananas also have
        natural sugars that make them great desserts, such as cakes, ice cream,
        or fried or dried fruit.
      </span>
      <button class="btn">荣誉墙GO</button>
    </div>
    <!-- 介绍-end -->
  </div>
</template>

<script>
import $ from "jquery";
import Typed from "typed.js";
export default {
  name: "ZDYCard",
  mounted() {
    document.onmousewheel = function () {
      // 滚轮上滚的时候触发
      if (event.wheelDelta > 0) {
        $(".title h4").css({
          left: "50%",
          width: "560px",
          fontSize: "50px",
        });
        $(".shell").css({
          "background-color": "var(--card-color)",
          color: "var(--supple-font-color)",
        });
        $(".box").css({
          background: "var(--supple-font-color)",
        });
        $(".one").css({
          width: "18px",
          height: "18px",
          "background-color": "var(--card-color)",
          "box-shadow": "0 0 0 12px var(--supple-font-color)",
        });
        $(".two").css({
          width: "26px",
          height: "26px",
          "background-color": "var(--supple-font-color)",
          "box-shadow": "0 0 0 12px var(--card-color)",
        });
        // $(".one .line").css({
        //   opacity: "1",
        // });
        // $(".two .line").css({
        //   opacity: "0",
        // });
        // $(".two span").css({
        //   opacity: "0",
        // });
        // $(".one span").css({
        //   opacity: "1",
        // });
        $("nav a").css({
          color: "var(--supple-font-color)",
        });
        $("nav .ss").css({
          borderBottomColor: "var(--supple-font-color)",
        });
        $(".circle").css({
          border: "19px solid var(--supple-font-color)",
          boxShadow:
            "0px 0px 30px 16px var(--shard-color) inset,0px 0px 30px 20px rgba(0, 0, 0, 0.25)",
        });
        $(".banana").css({
          left: "-120px",
          width: "780px",
          height: "390px",
          top: "110px",
        });
        $(".main h2,.main h3").css({
          display: "block",
        });
        $(".main .hello").css({
          display: "none",
        });
        $(".content").css({
          display: "none",
        });
      }
      // 滚轮下滚的时候触发
      if (event.wheelDelta < 0) {
        $(".title h4").css({
          left: "5%",
          width: "150px",
          fontSize: "35px",
        });
        $(".shell").css({
          "background-color": "var(--supple-font-color)",
          color: "var(--card-color)",
        });
        $(".box").css({
          background: "var(--card-color)",
        });
        $(".two").css({
          width: "18px",
          height: "18px",
          "background-color": "var(--supple-font-color)",
          "box-shadow": "0 0 0 12px var(--card-color)",
        });
        $(".one").css({
          width: "26px",
          height: "26px",
          "background-color": "var(--card-color)",
        });
        // $(".two .line").css({
        //   opacity: "1",
        // });
        // $(".two span").css({
        //   opacity: "1",
        // });
        // $(".one span").css({
        //   opacity: "0",
        // });
        $("nav a").css({
          color: "var(--card-color)",
        });
        $("nav .ss").css({
          borderBottomColor: "var(--card-color)",
        });
        $(".circle").css({
          border: "19px solid var(--card-color)",
          boxShadow:
            "0px 0px 30px 16px var(--shard-black-color) inset,0px 0px 30px 20px rgba(255, 255, 255, 0.25)",
        });
        $(".banana").css({
          left: "610px",
          width: "200px",
          height: "100px",
          top: "420px",
        });
        $(".main h2,.main h3").css({
          display: "none",
        });
        $(".main .hello").css({
          display: "block",
        });
        $(".content").css({
          display: "block",
        });
      }
    };

    var typed = new Typed(".multiple-text", {
      strings: [
        "Web Design",
        "Developer",
        "DevOps Engineer",
        "AI Hobbyist",
        "Data Analyst",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  },
};
</script>

<style scoped>
@import url("../assets/css/zdy.css");
</style>