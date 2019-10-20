function bubbleSortMethod(arr){
    this.interations = 0
    const arrlen = arr.length
      for(let i = 0; i < arrlen; i++){
        
          for(let j = 0; j < arrlen - i  - 1; j++){
            this.interations += 1
            setInterval(function(){
              if(arr[j] > arr [j+1]){
                let temp = arr[j]
                Vue.set(arr,j,arr[j+1])
                Vue.set(arr,j+1,temp)
                // draw('myCanvas',3000,400,arr)
                // Vue.set(this.interations,this.interations+=1);
              }}, 500);
              }
          }
      
      this.interations += 1
      // }
  }



  function quickSortMethod(arr,low,high){

    function partition(arr, low , high){
        let i = (low-1)
        let pivot = arr[high]
        let temp = 0
        for(let x = low; x < high; x++){
            if (arr[x] < pivot){
                i = i+1
                temp = arr[i]
                // arr[i] = arr[x]
                Vue.set(arr,i,arr[x])
                // arr[x] = temp 
                Vue.set(arr,x,temp)
            }
            draw('myCanvas',arr)
        }           
            
            temp = arr[i+1]
            Vue.set(arr,i+1,arr[high])
            // arr[i+1] = arr[high]
            Vue.set(arr,high,temp)
            arr[high] = temp
            // setInterval(
            // function(arr){
            
            console.log(arr)
            // },1000/30)
            return ( i+1 )  }    
                 
    function quickSort(arr,low,high){
                setTimeout(function(){
        
        if( low < high){
            let  pi = partition(arr,low,high) 
            quickSort(arr, low, pi-1)
            quickSort(arr, pi+1, high)
        }
        },1000/30); 
        }
        //run quicksort
        quickSort(arr,low,high);
        //pass array back to home.vue so that the chart can update from this event
        this.sorted = true
}