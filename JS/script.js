// Function to display the sidebar when the hamburger menu is clicked
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Function to hide the sidebar when the close icon is clicked
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

const list = document.querySelector(".list");

//creating a function that based on the starting width of the arrow icon it will either scroll smoothly to the left or the right
function handleClick(direction) {
  // We want to know the width of one of the items.   We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;

  // Based on the direction we call `scrollBy` with the item width we got earlier
  direction === "previous" ? list.scrollBy({ left: -itemWidth, behavior: "smooth" }) : list.scrollBy({ left: itemWidth, behavior: "smooth" });
}

// Function to fetch JSON data

window.onload = function() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {

          let item = data[i];
  
          let product = `
            <div class="product"${i+1}>
            <img src="${item.image}" alt="productimg" class="product-image">
            <div class="brand-icon">
            <h3>${item.Brand}</h3>
            <img src="${item.icon}" alt="bag-icon" class="icon">
            </div>
            <p class="description">${item.description}</p>
            <p class="product-price">${item.price}</p>
            <button id="add-cart" onclick="addToCart()">Add to Cart</button>
            </div>
          `;
          productsHtml += product;
        }

        let productsContainer = document.getElementsByClassName("product-container")[0]

        productsContainer.innerHTML = productsHtml;
      })
      
      .catch((error) => {
        console.error("Error fetching data from json file:", error);
      });

  };



  // Other event listeners and functions can remain as they are

  //glider js
  new Glider(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 4,
      draggable: true,
      dots: '.dots',
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              // screens greater than >= 775px
              breakpoint: 1200,
              settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: '4',
                  slidesToScroll: '2',
              }
          }, {
              // screens greater than >= 1024px
              breakpoint: 900,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              // screens greater than >= 1024px
              breakpoint: 640,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              // screens greater than >= 1024px
              breakpoint: 304,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
  });

  