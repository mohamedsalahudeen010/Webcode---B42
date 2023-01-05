let logoDiv=document.createElement("div");

logoDiv.innerHTML=`<img src="./MakeUp.jpg" class="logo1"alt="logo">
<img src="./mg.png" class="logo2" alt="logo">`
document.body.append(logoDiv)

let container=document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);

let shopHead=document.createElement("h2");
shopHead.setAttribute("class","shop-head");
shopHead.innerHTML=`Guvi Make-Up City<img src="./woman-face-logo.webp" class="logo-head"alt="">`

let powered=document.createElement("p");
powered.setAttribute("class","powered-para");
powered.innerHTML="Powered By MG Beauty"

let heading2=document.createElement("h6");
heading2.setAttribute("class","heading2");
heading2.innerHTML="GET INSPIRED BY THE BEST MAKEUP LOOKS "

let heading3=document.createElement("h6");
heading3.setAttribute("class","heading3");
heading3.innerHTML="Specially curated to help you find the best products at Guvi Make-Up City for all your shopping needs"

let header=document.createElement("div");
header.setAttribute("class","header");

header.append(shopHead,powered,heading2,heading3)

let row=document.createElement("div");
row.setAttribute("class","row");

let productList=document.createElement("div");
productList.setAttribute("class","product-list");

let ourProducts=document.createElement("h6");
ourProducts.setAttribute("class","our-products");
ourProducts.innerHTML=" Our Products Are"


let cardDeck1=document.createElement("div");
cardDeck1.setAttribute("class","card-deck");

    cardDeck1.innerHTML=`
    <div class="card " id=card1>
    <img src="./lipstick-new.avif" class="card-img-top"  alt="Lipstick">
      <div class="card-body">
        <h5 class="card-title">lipstick</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./nail-polish2.jpg"  class="card-img-top"  alt="Nailpolish">
      <div class="card-body">
        <h5 class="card-title">nail_polish</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./mascara.jpeg" class="card-img-top"  alt="Mascara">
      <div class="card-body">
        <h5 class="card-title">mascara</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./lipliner.jpeg" class="card-img-top"  alt="lipliner">
      <div class="card-body">
        <h5 class="card-title">lip_liner</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./blush.avif"  class="card-img-top"  alt="blush">
      <div class="card-body">
        <h5 class="card-title">blush</h5>
      </div>
    </div>`

let cardDeck2=document.createElement("div");
cardDeck2.setAttribute("class","card-deck");
    cardDeck2.innerHTML=`
    <div class="card " >
    <img src="./bronzer.avif" class="card-img-top"  alt="Bronzer">
      <div class="card-body">
        <h5 class="card-title">bronzer</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./eyebroePencil.avif" class="card-img-top"  alt="eyebrow-pencil">
      <div class="card-body">
        <h5 class="card-title">eyebrow</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./EyeLiner.avif" class="card-img-top"  alt="Eye-Liner">
      <div class="card-body">
        <h5 class="card-title">eyeliner</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./eyeShadow.avif" class="card-img-top"  alt="Eye-Shadow">
      <div class="card-body">
        <h5 class="card-title">eyeshadow</h5>
      </div>
    </div>
    <div class="card " >
    <img src="./foundation.avif" class="card-img-top"  alt="Foundation">
      <div class="card-body">
        <h5 class="card-title">foundation</h5>
      </div>
    </div>`

productList.append(ourProducts,cardDeck1,cardDeck2)


let form = document.createElement("div");
form.setAttribute("class", "form-group");

let inputId = document.createElement("input");
inputId.setAttribute("type", "text");
inputId.setAttribute("class", "form-input");
inputId.setAttribute("id", "input-product");
inputId.setAttribute("placeholder", "Search a Product from below");

let button=document.createElement("button");
button.setAttribute("id","btn")
button.setAttribute("class","btn");
button.innerHTML="Search"
button.addEventListener("click",displayProduct);

form.append(header,inputId,button,productList);

container.append(form);

let display=document.createElement("div");
display.setAttribute("class","display-div");

container.append(display,row);

document.body.append(container);
async function displayProduct(){
    
    let searchedId=document.getElementById("input-product").value

let searchedProduct=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchedId}`);
let data= await searchedProduct.json();
try {
    row.innerHTML="Please bear With Us for Few Seconds";

//     Display the brand and the name of the product.
// Display the price of the product.
// Also display the image and product link.
// Display the description of the product.

    console.log(data)
    row.innerHTML="";
    for (let i = 0; i <data.length; i++) {
        
          row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
          
          <div id="card" class="card">
          <div class="card-header" id="card-head"><h6>${data[i].name}</h6></div>
             <img class="img" src=${data[i].image_link}  alt="Cosmetics"  >
              <div class="card-body">
                <div><h6 class="card-title" id="card-title"><span><h5>Brand :  </h5></span> ${data[i].brand} </h6></div>
                <div><h6 class="card-title"><span><h5>Price : </h5></span> ${data[i].price} $</h6></div>
                <div><h6 class="card-title"><span><h5>Product Link : </h5></span> ${data[i].product_link}</h6></div>
                <div><h6 class="card-title"><span><h5>Product Description : </h5></span> Good Product</h6></div>
         
          </div>
          </div>
          </div>`;
          
        }

} catch (error) {
    console.log(error)
}


}


