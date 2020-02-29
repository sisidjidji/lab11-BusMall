'use strict';

console.log ('welcome to lab 11 The BusMall');

var picIndex1=0;
var picIndex2=1;
var picIndex3=2;
var allProductPicture=[];
var imageElements=document.getElementsByTagName('img');
var allClicks=0;
var preimg1=0;
var preimg2=0;
var preimg3=0;




// CREATING A CONSTRUCTOR FUNCTION 
function product (name,imgUrl){
    this.name=name;
    this.imgUrl=imgUrl;
    this.totalClick=0;
    this.totalshow= 0;

    allProductPicture.push (this);

}

function getProducyArray(nameOfTheProperty){
    var answer = [];
    for(var i = 0; i < allProductPicture.length; i++){
      answer[i] = allProductPicture[i][nameOfTheProperty];

      
    }
    return answer;
  }

// creating our product

new product('bag', 'images/bag.jpg');
new product('banana', 'images/banana.jpg');
new product('bathroom', 'images/bathroom.jpg');
new product('boots', 'images/boots.jpg');
new product('breakfast', 'images/breakfast.jpg');
new product('bubblegum', 'images/bubblegum.jpg');
new product('chair', 'images/chair.jpg');
new product('cthulhu', 'images/cthulhu.jpg');
new product('dog-duck', 'images/dog-duck.jpg');
new product('dragon', 'images/dragon.jpg');
new product('pen', 'images/pen.jpg');
new product('pet-sweep', 'images/pet-sweep.jpg');
new product('scissors', 'images/scissors.jpg');
new product('shark', 'images/shark.jpg');
new product('sweep', 'images/sweep.png');
new product('tauntaun', 'images/tauntaun.jpg');
new product('bunicorn', 'images/unicorn.jpg');
new product('usb', 'images/usb.gif');
new product('water-can', 'images/water-can.jpg');
new product('wine-glass', 'images/wine-glass.jpg');



function numberOfClick (event){

   allClicks++

    if (event.srcElement.id=== '1'){

        allProductPicture[picIndex1].totalClick++ ;
    }
    else if(event.srcElement.id=== '2')
    {
        allProductPicture[picIndex2].totalClick++ ;

    }
    else {

        allProductPicture[picIndex3].totalClick++ ;
    }
    
    
    var Nextproduct1 = Math.floor(Math.random()* allProductPicture.length);

    while((Nextproduct1===picIndex1)||(Nextproduct1===picIndex2)||(Nextproduct1===picIndex3)|| (Nextproduct1===preimg1)|| (Nextproduct1===preimg2)|| (Nextproduct1===preimg3)){
  

    Nextproduct1=Math.floor(Math.random()* allProductPicture.length);

    }

    var Nextproduct2=Math.floor(Math.random()* allProductPicture.length);

    while((Nextproduct2===picIndex1)||(Nextproduct2===picIndex2)||(Nextproduct2===picIndex3)||(Nextproduct2===Nextproduct1)||(Nextproduct2===preimg1)|| (Nextproduct2===preimg2)|| (Nextproduct2===preimg3)){

    var Nextproduct2=Math.floor(Math.random()* allProductPicture.length);
    }
    var Nextproduct3=Math.floor(Math.random()* allProductPicture.length);

    while((Nextproduct3===picIndex1)||(Nextproduct3===picIndex2)||(Nextproduct3===picIndex3)||(Nextproduct3===Nextproduct1)|| (Nextproduct3===Nextproduct2)|| (Nextproduct3===preimg1)|| (Nextproduct3===preimg2)|| (Nextproduct3===preimg3)){

    var Nextproduct3=Math.floor(Math.random()* allProductPicture.length);
    }
    



    picIndex1= Nextproduct1;
    preimg1=Nextproduct1;
    allProductPicture[picIndex1].totalshow++
    picIndex2=Nextproduct2;
    preimg2=Nextproduct2;
    allProductPicture[picIndex2].totalshow++
    picIndex3=Nextproduct3;
    preimg3=Nextproduct3;
    allProductPicture[picIndex3].totalshow++

    
   
    imageElements[0].src =allProductPicture[picIndex1].imgUrl;
   
    imageElements[1].src =allProductPicture[picIndex2].imgUrl;

    imageElements[2].src =allProductPicture[picIndex3].imgUrl;
   


  
   
    var clickAllowed = 25;

    if (allClicks >= clickAllowed ) {

        for (var i = 0; i < imageElements.length; i++) 
        {
          imageElements[i].removeEventListener('click', numberOfClick );
      
        }

{
    var ctx = document.getElementById('resultsChart').getContext('2d');
 
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getProducyArray('name'),
      datasets: [{
        label:'number of time shown ',
        data:getProducyArray ('totalshow'),
        backgroundColor: 
        generateRandomColor(),
        
        borderColor: [
            
   
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });

  }

}
}
 








for (var i = 0; i < imageElements.length; i++) 
  {

  imageElements[i].addEventListener('click', numberOfClick );  

  }

function generateRandomColor(){
    var colAray=[];

    for(i=0;i<allProductPicture.length;i++)
    {

   
  
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    colAray[i]= bgColor;

    }

return colAray;
}







