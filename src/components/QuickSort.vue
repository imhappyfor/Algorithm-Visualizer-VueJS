<template>
  <div>
    <div id="buttons">
        <button @click="quickSortMethod(arr,low,high,speed)" id="sort"> Sort!</button>
    </div>

        <input type="range" min="0" max="500" value="100" v-model="speed" step="1">

    <div style="display: flex; justify-content:space-evenly;">
        <p>current speed : {{speed}} ms </p>
        <p> Use the slider above to set your speed</p>
        <p>Number of Iterations {{interations}} </p>
    </div>
         
    <div id="chart" >
        <span v-for="(item, index) in arr" 
            :key="index"  
            :style="styleTheItem(item,arr.length)" 
            :id="item"></span>
    </div>
  </div>
</template>

<script>
import {swap} from '../js/canvas'
import Vue from 'vue'
export default {
data(){
    return {     
        sorted : false,
        emition: null,
        speed: 500,
        interations: 0
       }
},
components:{},
props:{
    arr : Array,
    low: Number,
    high: Number
},
created(){
},
methods: {
    styleTheItem(item,arrLen){
        return {
          // 'margin': '0 1px',  
        //   'width': (100/arrLen) + 'px', 
          'width': (100/arrLen) + '%', 
          'height': (item/arrLen)*500 + 'px',
        //   'background-color': 'rgba(234,234,234,50)', 
          'border' : (100/arrLen)+ 'px solid #f08ce3'          
          
          }
      },
    quickSortMethod(arr,low,high,speed){

        
        function partition(arr, low , high){
            let i = (low-1)
            let pivot = arr[high]
            let temp = 0
            for(let x = low; x < high; x++){
                // setTimeout(function(){ 
                document.getElementById(arr[x]).style.backgroundColor = 'white'
                if (arr[x] < pivot){
                    document.getElementById(arr[x]).style.backgroundColor = ''
                        if (i >=0){
                        // document.getElementById(arr[i]).style.backgroundColor = 'red'
                        document.getElementById(arr[i+1]).style.backgroundColor = 'cyan'
                                }

                            
                    i = i+1
                    temp = arr[i]
                    Vue.set(arr,i,arr[x])
                    Vue.set(arr,x,temp)
                     
                }
                    if (i >=2){
                        document.getElementById(arr[i]).style.backgroundColor = ''
                        document.getElementById(arr[i-1]).style.backgroundColor = ''
                                }

            }    
                if (i >=0){
                    document.getElementById(arr[i]).style.backgroundColor = ''
                    document.getElementById(arr[i+1]).style.backgroundColor = ''
                    }
                temp = arr[i+1]
                Vue.set(arr,i+1,arr[high])
                Vue.set(arr,high,temp)
                return ( i+1 ) 
                              

            }    
        
        function quickSort(arr,low,high){
            if( low < high){
                
                let pi = partition(arr,low,high)
                    window.setTimeout(function(){
                    quickSort(arr, low, pi-1)
                    quickSort(arr, pi+1, high)},speed );
                
                }else{
                    return 0
                }
            }
              
        //run quicksort
          quickSort(arr,low,high)
        
        //pass array back to home.vue so that the chart can update from this event
        // this.sorted = true
        // this.$emit('sorted', this.arr)           
},
},
watch: {

},
mouted(){
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
  }
</style>
