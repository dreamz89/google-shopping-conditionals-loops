document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')
    var cartList = document.querySelector('#cart-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE

      // Function to add one product title to the shopping list
    function listGenerator (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    }

      // Add product title for every item
    items.forEach(listGenerator)

      // Extract specified brand into an array
    function getItemsByBrand (items, brand) {
      var brandItems = []
      for (var i = 0; i < items.length; i++) {
        if (items[i].product.brand === brand) {
          brandItems.push(items[i])
        }
      }
      return brandItems
    }

      // Show brand only when search button is clicked
    document.querySelector('#searchBrand').addEventListener('click', function () {
    shoppingList.innerHTML = ''
    var searchBrand = document.getElementById('Bd').value
    var filterBrand = getItemsByBrand(items,searchBrand)
    filterBrand.forEach(listGenerator)
    })

      //Extract specified authors into an array
    function getItemsByAuthor (items, author) {
      var authorItems = []
      for (var i = 0; i < items.length; i++) {
        if (items[i].product.author.name === author) {
          authorItems.push(items[i])
        }
      }
      return authorItems
    }

      // Show author only when search button is clicked
    document.querySelector('#searchAuthor').addEventListener('click', function () {
    shoppingList.innerHTML = ''
    var searchAuthor = document.getElementById('Ar').value
    var filterAuthor = getItemsByAuthor(items, searchAuthor)
    filterAuthor.forEach(listGenerator)
    })

      //Add last shopping item to cart
    var cartButton = document.querySelector('#cartButton')
    cartButton.addEventListener('click', addToCart)

    function addToCart () {
      var shoppingList = document.querySelectorAll('#shopping-list li')
      var lastItem = shoppingList[shoppingList.length - 1]
      cartList.appendChild(lastItem)
    }
    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
