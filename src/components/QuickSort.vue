<template>
  <div>
      <h3>QuickSort</h3>
      <!-- <chart :arr="arr"/> -->

      <div id="buttons">
      <button @click="quickSortMethod(arr,low,high,speed)" id="sort"> Sort!</button>
      <button @click="onClickButton()" id="shuffle">Shuffle</button>
      
      
      <input v-model="speed" type="number" id="changeSpeed" style="border-radius: 5px;text-align: center; width: 50px;" > 
      <label for="changeSpeed" style="margin: auto;">Speed</label>
      </div>
      <hr>
      <!-- <p v-if="!sorted">The array unsorted: {{ arr }}</p> -->
      <!-- <p v-else>The array sorted: {{ arr }}</p> -->

  </div>
</template>

<script>
import {draw, swap} from '../js/canvas'
import Vue from 'vue'

export default {
data(){
    return {     
        sorted : false,
        emition: null,
        speed: 0
        // chartArray: []
       }
},
components:{
    // chart
},
props:{
    arr : Array,
    low: Number,
    high: Number
},
created(){
},
methods: {
    quickSortMethod(arr,low,high,speed){

        (function(){
            function partition(arr, low , high){
            let i = (low-1)
            let pivot = arr[high]
            let temp = 0
            for(let x = low; x < high; x++){
                // setTimeout(function(){ 
                if (arr[x] < pivot){
                    i = i+1
                    temp = arr[i]
                    Vue.set(arr,i,arr[x])
                    // swap('myCanvas',arr,arr[i],arr[x],pivot)
                    swap(arr[i], arr[x],'myCanvas',i,arr)
                    Vue.set(arr,x,temp)
                    // swap('myCanvas',arr,arr[x ],arr[i],pivot)
                    swap(arr[x], arr[i],'myCanvas',i,arr)
                }
                    // draw('myCanvas',arr,arr[i],arr[x],pivot,speed)
                // },speed);
                }           
                temp = arr[i+1]
                Vue.set(arr,i+1,arr[high])
                swap(arr[i+1], arr[high],'myCanvas',i,arr)
                // swap('myCanvas',arr,arr[i+1],arr[high],pivot)
                Vue.set(arr,high,temp)
                swap(arr[high], arr[i+1],'myCanvas',i,arr)
                // swap('myCanvas',arr,arr[high],arr[i+1],pivot)

                // draw('myCanvas',arr,arr[i+1],arr[high],pivot,speed)
                // draw('myCanvas',arr,arr[high],arr[i+1 ],pivot,speed)

                return ( i+1 ) 
                } 
                     
        
        function quickSort(arr,low,high){
            if( low < high){
                setTimeout(function(){
                let pi = partition(arr,low,high)
                    quickSort(arr, low, pi-1)
                    quickSort(arr, pi+1, high)
                },speed)
                }
            }
              
        //run quicksort
         setTimeout(quickSort(arr,low,high),speed)
        })();
        //pass array back to home.vue so that the chart can update from this event
        this.sorted = true
        this.$emit('sorted', this.arr)
             
},
    onClickButton() {
            this.$emit('clicked', this.arr)
            this.sorted = false
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

</style>
