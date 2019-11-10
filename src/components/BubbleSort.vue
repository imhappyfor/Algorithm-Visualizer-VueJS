<template>
<div>
  <!-- <chart :arr="arr"/>   -->
  
  <div id="buttons">
    <button @click.prevent="bubbleSortMethod(arr)" id="sort"> Sort!</button>
    <!-- <button @click="onClickButton()" id="shuffle">Shuffle</button> -->
  </div>
  <input type="range" min="0" max="500" value="100" v-model="speed" step="1" style="">
  <div style="display: flex; justify-content:space-evenly;">
  <p>current speed : {{speed}}  </p>
  <p> Use the slider above to set your speed</p>
  <p>Number of Iterations {{interations}} </p>

  </div>
  
  
  
  <div id="chart" >
    <span v-for="(item, index) in arr" 
    :key="index"  
    :style="styleTheItem(item,arr.length)" 
    :id="item"
    ></span>
  </div>
</div>  
</template>

<script>
// import chart from './Chart'
import Vue from 'vue'
// import {draw, swap} from '../js/canvas'

export default {
data(){
  return{
    interations: new Number,
    speed: 100,
    timeOutFunction: null,
    completed: false
  }

},
props:{
  arr: Array
},
components:{
  // chart
},
computed:{

},
methods:{
    clearTimer(){
      while (this.timeOutFunction--) {
    window.clearTimeout(this.timeOutFunction) // will do nothing if no timeout with id is present
}
    },
      styleTheItem(item,arrLen){
        return {
          // 'margin': '0 1px',  
          'width': (100/arrLen) + '%', 
          'height': (item/arrLen)*500 + 'px',
          // 'background-color': 'red', 
          'border' : (100/arrLen) + 'px solid #f08ce3'          
          
          }
      },
      bubbleSortMethod(arr){
          // let index = index
          let i = 0
          let j = 0
          let length = arr.length + 1
          let speed = this.speed
        function nextIteration() {
            if (j >= length - i - 1) {
              j = 0;
              i++;
            }
            if (i < length ) {
              // console.log(arr[j],arr[j+1],arr)
              if( arr[j+1]) {
              document.getElementById(arr[j+1]).style.backgroundColor = 'white'
              document.getElementById(arr[j]).style.backgroundColor = ''
              }
              else {
                document.getElementById(arr[j]).style.backgroundColor = ''
              }
              if (arr[j] > arr[j+1]) {
                
                // swap arr
                let temp = arr[j];
              Vue.set(arr,j,arr[j+1])
              Vue.set(arr,j+1,temp)
              }
              
              j++;
              
              window.setTimeout(nextIteration,  speed )
            } 
            else {
              document.getElementById("1").style.backgroundColor = 'white'
              }
          }
          nextIteration()
          
},
      onClickButton() {
            this.$emit('clicked', this.arr)
            this.sorted = false
    }
}
}
</script>

<style scoped>
    #buttons {
        display: flex;
        justify-content: space-evenly;
    }
    button {
        color: white;
        font-size: 20px;
        border-radius: 10%;
    }
    #sort {
        background-color: rgb(253, 19, 175);
        opacity: 1;
    }
    #sort:disabled {
        background-color: rgb(88, 47, 75);
        opacity: 1;
    }
    #sort:disabled:hover {
        background-color: rgb(88, 47, 75);
        opacity: 1;
    }
    #sort:hover {
        background-color: rgb(238, 88, 188);
    }

  #chart  {
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-end;
  }
</style>