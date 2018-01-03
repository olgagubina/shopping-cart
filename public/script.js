// an array with all of our cart items
var cart = {
  items:[],
  total: 0
};

var updateCart = function () {
  $('.shopping-cart').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);
  $('.shopping-cart').append(newHTML);
  bindEvent();
  // Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}

var addItem = function (item) {
  cart.items.push(item);
  cart.total = function(){
    var total = 0
    for (i=0; i<cart.items.length; i++) {
       total += cart.items[i].price;
    }
    return(total);
  }
  console.log(cart);
  // Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  cart = {
    items:[],
    total: 0
  };
  updateCart();
  //  Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
  // hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
  var name = $(this).closest('div').parent().data().name;
  var price = $(this).closest('div').parent().data().price;
  var item = {
    name: name,
    price: price
  }
  // get the "item" object from the page
  addItem(item);
  updateCart();
});

var bindEvent = function() {
  $('.clear-cart').on('click', function () {
  clearCart();
});
}

// update the cart as soon as the page loads!
updateCart();
