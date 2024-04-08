console.log("Server running...")
const products=[
    { 
      id:"p1",
      name:"Burger Chicken",
      price:350,
      inCart:0,
      Description:"Double the indulgence with a sinfully oozing cheesy patty & flame-grilled chicken patty, along with chipotle sauce, shredded onion and jalapenos.",
      image:"images/products/1.png"
    },
    { id:"p2",
      name:"Chees Burger",
      price:270,
      inCart:0,
      Description:"Edulge in a burger made with a spicy and crispy Paneer Patty, Chipotle Sauce, Tomatos,Chipotle Sauce, Tomatos, Lettuce & Cheese.",
      image:"images/products/2.png"
    },
    { id:"p3",
      name:"Veg Burger",
      price:222,
      inCart:0,
      Description:"A grilled chicken patty, topped with sliced cheese, spicy Habanero sauce, with some heat from jalapenos & crunch from onions",
      image:"images/products/3.png"
    },
    { id:"p4",
      name:"Spicy Veg Burger",
      price:232,
      inCart:0,
      Description:"A wholesome Spicy Paneer patty, Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce",
      image:"images/products/4.png"
    },
    { id:"p5",
      name:"Paneer Burger",
      price:252,
      inCart:0,
      Description:"Paneer Burger is a flavourful, luscious and crunchy fusion recipe made with stuffed paneer, vegetables and mayonnaise",
      image:"images/products/5.png"
    }
]

const prod=document.getElementById("products");
products.forEach((data)=>{
    //console.log(data)
    prod.innerHTML+=`
    <div class="product">
            <img src="${data.image}" alt="" srcset="">
            <h2 class="item"> ${data.name}</h2>
            <p class="price">  <span>₹</span> ${data.price}</p>
            <p class="description">${data.Description}</p>
            <button class="add-cart" type="button">ADD TO CART</button>
        </div>   
    `
})