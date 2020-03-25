<template>
  <section class="container">
    <h1>vue-chartkick</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart :data="chartData"></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart :data="[['Spending ($)', 1322], ['Income ($)', 1492]]"></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Scatter Chart</h3>
        <scatter-chart :data="[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6]]"></scatter-chart>
      </div>
      <div class="column">
        <h3>Downloadable Line Chart</h3>
        <line-chart :data="chartData" :download="true"></line-chart>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'VueChartKick',
    data () {
      return {
        chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
      }
    }
  }
</script>