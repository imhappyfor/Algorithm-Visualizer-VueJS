<template>
<div>
<div class="chart-container" style="position: relative; height:50vh; width:80vw">
      <canvas id="myChart" width="400px" height="400px"></canvas>
</div>
</div>
</template>

<script>
import Chart from 'chart.js'
export default {
data(){
        return{
            chartDefined: false,
            myChartVar: null
        }
    },
    props:{
        arr: {
            type: Array,
            required: true
        }
    },
methods:{
chartMethod (arr) {
    if(this.chartDefined != false) {
    // this.myChartVar.destroy()
    this.myChartVar.update();
    }
    let ctx = document.getElementById('myChart');
    this.myChartVar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arr,
        // labels: [],
        datasets: [{
            // label: '# of Votes',
            data: arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    events: [],
    animation: {
        easing: 'linear',
        duration: 0
    },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }
},
mounted(){
this.chartMethod(this.arr);
},
watch:{
    // value, mutation
  arr(){
    this.redraw = true;
    // console.log(value, mutation)
    this.chartDefined = true;
    this.chartMethod(this.arr);
    }
    }


}
</script>

<style>

</style>