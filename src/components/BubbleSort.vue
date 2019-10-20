<template>
<div>
  <!-- <chart :arr="arr"/>   -->
  <div id="buttons">
    <button @click="bubbleSortMethod(arr)" id="sort"> Sort!</button>
    <!-- <button @click="onClickButton()" id="shuffle">Shuffle</button> -->
  </div>
  <input type="range" min="0" max="500" value="100" v-model="speed" step="1">
  <p>{{speed}}</p>
  <p>Number of Iterations {{interations}}</p>
  <div id="chart" >
    <div v-for="(item, index) in arr" 
    :key="index" 
    :style="styleTheItem(item,arr.length)" 
    :id="item"
    ></div>
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
        let index = index
         let i = 1;
          let j = 1;
          let length = arr.length + 1;
          let speed = this.speed;
          let x = (function nextIteration() {
            window.clearTimeout(x);
            if (j >= length - i - 1) {
              j = 0;
              i++;
            }
            if (i < length) {
              // if (j != 0) {
              // document.getElementById(arr[j]).style.backgroundColor = 'yellow';
              // }
              if (arr[j] > arr[j+1]) {
                // swap arr
                let temp = arr[j];
                let swap = arr[j+1]
                Vue.set(arr,j,arr[j+1]);
                //get the index(position of the current element)
                // let currPos = arr.indexOf(temp) -1
                // document.getElementById(currPos).style.backgroundColor = 'red';
                Vue.set(arr,j+1,temp);
                
              }
              

              j++;
              
              window.setTimeout(nextIteration,  speed );
            } else // finished

              console.log('done')
          })(); 
},

       
//        this.interations = 0
//         const arrlen = arr.length
//           for(let i = 0; i < arrlen; i++){
//               for(let j = 0; j < arrlen - i  - 1; j++){
//                 this.interations += 1
//                 // var self = this;
//                 // setTimeout(function(){
//                   if(arr[j] > arr [j+1]){
//                     // self.swap(j,arr)
//                     let temp = arr[j]
//                     Vue.set(arr,j,arr[j+1])
//                     // draw('myCanvas',arr,arr[j],arr[j+1],this.speed)
//                     Vue.set(arr,j+1,temp)
//                     setTimeout(()=>{this.bubbleSortMethod(arr)},this.speed);
//                     // draw('myCanvas',arr,arr[j+1],arr[j],this.speed)
//                     // Vue.set(this.interations,this.interations+=1);
                  
//                   }
                  
//                   // }, this.speed);
//                   }
//               }
          
//           this.interations += 1
//           // }
//       },
//       swap(index,arr){
//       let temp = arr[index]
      
//       Vue.set(arr,index,arr[index+1])
//       Vue.set(arr,index+1,temp)
//       window.setTimeout(this.bubbleSortMethod(arr),this.speed);
//       },

      onClickButton() {
            this.$emit('clicked', this.arr)
            this.sorted = false
            // let c = document.getElementById('myCanvas');
            // let ctx = c.getContext("2d");
            // ctx.clearRect(0, 0, 3000, 400);
            // draw('myCanvas',3000,400,this.arr)

    }
},

mounted(){
// draw('myCanvas',this.arr)
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
        background-color: green;
        opacity: 1;
    }
    #sort:hover {
        background-color: darkgreen;
    }
    #shuffle {
        opacity: 1;
        background-color: red;
    }
    #shuffle:hover {
        background-color: darkred;
    }
  #chart  {
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-end;
    flex-grow: 1;
    /* margin: 0px 200px 0px 200px; */
    
  }
</style>