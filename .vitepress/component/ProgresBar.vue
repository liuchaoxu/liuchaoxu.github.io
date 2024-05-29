<script setup>
function calculateDayProgressAsFraction() {
  // 获取当前时间
  const now = new Date();

  // 获取当天开始的时间（午夜）
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // 计算已过去的时间（以毫秒为单位）
  const timePassed = now - midnight;

  // 一天的总毫秒数
  const millisecondsInADay = 24 * 60 * 60 * 1000;

  // 计算时间过去的百分比
  const percentageOfDayPassed = (timePassed / millisecondsInADay) * 100;

  // 将百分比转换为分数
  const fraction = Math.floor(percentageOfDayPassed);

  // 返回分子
  return fraction;
}

let dayTime = calculateDayProgressAsFraction();
function calculateMonthProgressAsDecimal() {
  // 获取当前日期
  const now = new Date();

  // 获取当月的第一天
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // 计算当月已过去的天数
  const daysPassed = Math.floor((now - firstDayOfMonth) / (1000 * 60 * 60 * 24)) + 1;

  // 获取当月总天数
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  // 计算当月过去的时间与当月天数的比例
  const percentage = (daysPassed / daysInMonth) * 100;

  // 返回百分比
  return percentage.toFixed(2);
}


let monthTime = calculateMonthProgressAsDecimal();
function calculateYearProgressAsDecimal() {
  // 获取当前日期
  const now = new Date();

  // 获取今年的第一天
  const firstDayOfYear = new Date(now.getFullYear(), 0, 1);

  // 计算今年已过去的毫秒数
  const millisecondsPassed = now - firstDayOfYear;

  // 计算整年的毫秒数
  const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

  // 如果是闰年，增加一天的毫秒数
  if (new Date(now.getFullYear(), 0).getDay() === 0) {
    millisecondsInYear += 24 * 60 * 60 * 1000;
  }

  // 计算今年过去的时间与整年时间的比例
  const percentage = (millisecondsPassed / millisecondsInYear) * 100;

  // 返回百分比，保留两位小数
  return percentage.toFixed(2);
}

let yearTime = calculateDayProgressAsFraction();
const customColorMethod = (percentage) => {
  if (percentage < 20) {
    return '#48b848'
  }
  if (percentage < 44) {
    return '#00ac1d'
  }
  if (percentage < 60) {
    return '#ffb300'
  }
  if (percentage < 80) {
    return '#ff6b3e'
  }
  if (percentage < 99) {
    return '#ff5a2c'
  }
  return '#ff0400';
}

</script>
<template>
  <div class="demo-progress">

    <h6 class="textColor">当天已经过去</h6>
    <el-progress
        :text-inside="true"
        :stroke-width="16"
        :percentage="dayTime"
        :color="customColorMethod"
    />
    <h5 class="textColor">本月已经过去</h5>
    <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="monthTime"
        :color="customColorMethod"
    />
    <h4 class="textColor">今年已经过去</h4>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="yearTime" :color="customColorMethod" />
  </div>
</template>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 1124px;
}


/* .vitepress\theme\style\var.css */
.textColor {
   background: -webkit-linear-gradient(-45deg, #e43498 5%, #5ad7dd 15%);
   background-clip: text;
   -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}
</style>
