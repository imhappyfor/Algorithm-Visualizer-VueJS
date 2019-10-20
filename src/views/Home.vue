<template>
  <div>
    <div style="display: grid;   grid-template-columns: auto auto; ">
    <select v-model="currentTab" style="font-size: 1em;width: 250px; margin-left: 0px; border-radius:5px ">
    <option disabled value="">Please select an algorithm</option>
    <option v-for="tab in tabs" :key='tab'>   {{tab}}   </option>
    </select>
    <button @click="onClickChild(arr)" style="font-size: 1.4em; border-radius: 5px; width: 100px;;">Shuffle</button>

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
    }
  },
created(){
    // Create array to pass to components
    for(let i = 1; i < 100; i += 1){
        this.arr.push(i);
    }
    // Shuffle array
    this.arr.sort(() => Math.random() - 0.5)
    this.low = 0
    this.high = (this.arr.length) - 1
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

#myCanvas{
  /* width: 100%; */
  margin: 0;
  padding: 0;
  width: 100%;
}
</style> 