<template>
  <div>
    <div style="display: flex; justify-content: space-evenly">
      <div>
      <label for="number-input" >Select the size of the array with the slider below</label>
      <br style="clear:both;" />
      <p>{{this.arraySize - 1}}</p>
      <input type="range" min="2" max="1001" value="100" v-model.number="arraySize" @change="arrayCreation(arraySize)" step="1">
  
      </div>
      <div>
        <label for="tab-selection" > Choose the algorithm to visualize</label>
        <br style="clear:both;" />
        <select id="tab-selection" v-model="currentTab" style="font-size: 1em;width: 250px; margin-left: 0px; border-radius:5px ">
          <option disabled value="">Please select an algorithm</option>
          <option v-for="tab in tabs" :key='tab'>   {{tab}}  </option>
        </select>
      </div>
      <div>
      <label for="shuffle-button" > Press to shuffle the new array</label>
      <br style="clear:both;" />
      <button id="shuffle-button" :disabled="beingSorted === true" @click="onClickChild(arr)" style="font-size: 1.4em; border-radius: 5px; width: 100px;">Shuffle</button>
      </div>
    </div>
    <!-- <div id="template" > -->
    <!-- <canvas id="myCanvas" style="border:1.5px solid #f08ce3;"></canvas> -->
    <!-- </div> -->
    <component id="component" @clicked="onClickChild" :is="currentTabComponent" :arr="arr"  :low="low" :high="high"></component>
  </div>

</template>

<script>
// @ is an alias to /src
// import {draw} from '../js/canvas'
import Quicksort from '../components/QuickSort'
import Bubblesort from '../components/BubbleSort'
export default {
  name: 'home',
  components: {
    Quicksort,
    Bubblesort,
  },
  data(){
    return {
      redraw: false,
      myChartVar: null,
      arr : [],
      low : 0,
      high : 0,
      arraySize: 50,
      currentTab: 'Bubblesort',
      tabs: ['Quicksort', 'Bubblesort'],
    }
  },
  computed: {
    currentTabComponent: function(){
      return this.currentTab;
    }
  },
  methods:{
    onClickChild (values) {
        this.arr = values
        this.arr.sort(() => Math.random() - 0.5)
        // draw('myCanvas',this.arr)
    },
    arrayCreation(size){
          // Create array to pass to components
    this.arr = [];
    for(let i = 1; i < size; i += 1){
        this.arr.push(i);
    }
    // Shuffle array
    this.arr.sort(() => Math.random() - 0.5)
    this.low = 0
    this.high = (this.arr.length) - 1
},
   
  },
created(){
    this.arrayCreation(this.arraySize)
},
mounted(){
  // draw('myCanvas',this.arr)
},
watch:{
  arr: function(){
    this.redraw = true;
}}
}

</script> 

<style scoped>
 p {
   font-size: 1.2em;
   color: #f08ce3;
 }
#template {
  /* colors */
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  height : 400px;
  justify-content: flex-start;
}
#component {
  /* position: absolute;
  left: 0px;
  color: whitesmoke;
  background-color: grey;
  margin: 0; */
  color: #f08ce3;
}

    #shuffle-button {
        opacity: 1;
        background-color: rgb(67, 238, 133);
    }
    #shuffle-button:hover {
        background-color: rgb(47, 207, 68);
    }
#myCanvas{
  /* width: 100%; */
  margin: 0;
  padding: 0;
  width: 100%;
}
</style> 