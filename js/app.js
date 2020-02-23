'use strict';

console.log ('welcome to lab 11 The BusMall');

var picIndex1=0;
var picIndex2=1;
var picIndex3=2;
var allProductPicture=[];
var imageElements=document.getElementsByTagName('img');
var allClicks=0;



// CREATING A CONSTRUCTOR FUNCTION 
function product (name,imgUrl){
    this.name=name;
    this.imgUrl=imgUrl;
    this.totalClick=0;
    allProductPicture.push (this);

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

        allProductPicture[picIndex1].totalClick++
    }
    else if(event.srcElement.id=== '2')
    {
        allProductPicture[picIndex2].totalClick++

    }
    else {

        allProductPicture[picIndex3].totalClick++
    }

    var Nextproduct1=Math.floor(Math.random()* allProductPicture.length);

    while((Nextproduct1===picIndex1)||(Nextproduct1===picIndex2)||(Nextproduct1===picIndex3)){

        Nextproduct1=Math.floor(Math.random()* allProductPicture.length);
    }

    var Nextproduct2=Math.floor(Math.random()* allProductPicture.length);

    while((Nextproduct2===picIndex1)||(Nextproduct2===picIndex2)||(Nextproduct2===picIndex3)||(Nextproduct2===Nextproduct1)){

        Nextproduct2=Math.floor(Math.random()* allProductPicture.length);
    }
    var Nextproduct3=Math.floor(Math.random()* allProductPicture.length)

    while((Nextproduct3===picIndex1)||(Nextproduct3===picIndex2)||(Nextproduct3===picIndex3)||(Nextproduct3===Nextproduct1)|| (Nextproduct3===Nextproduct2)){

        var Nextproduct3=Math.floor(Math.random()* allProductPicture.length);
    }
    
    picIndex1= Nextproduct1;
    picIndex2=Nextproduct2;
    picIndex3=Nextproduct3;

    imageElements[0].src =allProductPicture[picIndex1].imgUrl;
    imageElements[1].src =allProductPicture[picIndex2].imgUrl;
    imageElements[2].src =allProductPicture[picIndex3].imgUrl;
  
   
    var clickAllowed = 25;

    if (allClicks >= clickAllowed ) {

        for (var i = 0; i < imageElements.length; i++) 
        {
          imageElements[i].removeEventListener('click', numberOfClick );
      
        }

        var footerul = document.getElementById('footer-ul');

     


    if(footerul.firstElementChild){
            footerul.firstElementChild.remove();
          }

  
    var ul=document.createElement('ul');
    footerul.appendChild(ul);
    
    for(i=0;i<allProductPicture.length;i++){

        var li=document.createElement('li');
        li.textContent=' The '+ allProductPicture[i].name + ' was cliqued : '+allProductPicture[i].totalClick;
        ul.appendChild(li)

      
    }
 

}


}


for (var i = 0; i < imageElements.length; i++) 
  {
    imageElements[i].addEventListener('click', numberOfClick );

  }

 