function draw(canvasId,arr,swapleft,swapright,pivot){
// setTimeout(function(){        
        // console.log(speed)
        let arrlen = arr.length
        let date = new Date();
        let milSec = date.getMilliseconds();
        let c = document.getElementById(canvasId);
        let ctx = c.getContext("2d");
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = "#f08ce3";
        // setTimeout(function(){
        
        c.width = c.clientWidth;
        c.height = c.clientHeight;
        // ctx.clearRect(0, 0, c.width, height);
        ctx.moveTo(0,0);
        ctx.strokeStyle = '#f08ce3';
        ctx.fillStyle = '#252222';
        ctx.fillRect(0,0,c.width,c.height);
            for(let i = 0; i < arrlen; i+=1){
                 // setTimeout(function(){
                ctx.beginPath();
                if(i == swapleft-1 ){ 
                // swap(swapleft, swapright,c,i,arr)
                // setTimeout(function(){
                // ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[i]/arrlen)*(c.height));
                
                // console.log(swapleft,i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[i]/arrlen)*(c.height));
                // ctx.stroke();
                // },speed)
        
                }
                else if (i == swapright-1){
                // setTimeout(function(){
                // ctx.beginPath();
                ctx.fillStyle = 'whitesmoke';
                ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[i]/arrlen)*(c.height));
                // ctx.stroke();
                // },speed)
                }
                else if (i == pivot){
                // setTimeout(function(){
                // ctx.beginPath();
                ctx.fillStyle = 'yellow';``
                ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[i]/arrlen)*(c.height));
                // ctx.stroke();
                // },speed)
                } 
                else {
                // setTimeout(function(){
                // ctx.beginPath();
                // ctx.fillStyle = 'grey';
                ctx.rect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[i]/arrlen)*(c.height));
                // ctx.stroke();
                // },speed)
                }
                ctx.stroke();
            }
            ctx.fillStyle = '#df8a9a';
            ctx.font = "20px Georgia";
            ctx.fillText(`Time: ${milSec}!!!!!`,40,50)
            // },speed)    
    }

// function swap(index1, index2,canvasId,i,arr){
function swap(index1, index2,canvasId,i,arr){
    let c = document.getElementById(canvasId);
    let ctx = c.getContext('2d');
    let arrlen = arr.length;
    // ctx.beginPath();
    ctx.fillStyle = 'blue';
    // ctx.moveTo(0,0);
    ctx.strokeStyle = '#f08ce3';
    ctx.fillStyle = '#252222';
    ctx.beginPath();
    //clear the first section where the swap is, this is the full height
    ctx.clearRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-100)*(c.height));
    ctx.clearRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-100)*(c.height));
    // replace with the normal fill style color
    ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-100)*(c.height));
    ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-100)*(c.height));

    ctx.rect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[index1]/arrlen)*(c.height));
    ctx.rect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[index2]/arrlen)*(c.height));
    
    // ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[index1]/arrlen)*(c.height));
    // ctx.fillRect(i*(c.width/arrlen),c.height,(c.width/arrlen),(-arr[index2]/arrlen)*(c.height));
    
    // ctx.globalCompositeOperation='source-over';
    // ctx.globalCompositeOperation='destination-over';
    ctx.stroke();
    // ctx.fillRect(0,0,c.width,c.height);

console.log(c.width)
}



export {draw, swap};