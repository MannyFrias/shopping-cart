let products = [];

addButton.addEventListener("click", function () {
  const name = productName.value;
  const price = productPrice.value;
  const image = productImage.value;
  const count = 1;
  products.push({
    name,
    price,
    image,
    count,
  });

  renderListItems();
});

function renderListItems() {
  //
  listContainer.innerHTML = "";

  // init total cost var
  let totalCost = 0;
  for (let i = 0; i < products.length; i++) {
    // setting current to whatever the product index is
    const current = products[i];
    // init listItem to equal ListItem variable and its params
    const listItem = ListItem(
      i,
      current.name,
      current.price,
      current.image,
      current.count
    );
    // appending listItem  to listContainer inner html
    listContainer.innerHTML += listItem;

    totalCost += current.count * current.price;
  }
  console.log("totalCost =", totalCost);
}

const ListItem = (index, name, price, image, count) => {
  return `
  <div class="list-item">
            <div>
              <p>${name}</p>
              <p>${price}</p>
            </div>
            <div>
              <button onclick="decreaseCount(${index}, ${count})">-</button>
              <p>${count}</p>
              <button onclick="increaseCount(${index}, ${count})">+</button>
            </div>
            <div>
              <img
                src="${image}"
                height="70"
              />
              <p>${price * count}</p>
            </div>
          </div>
        `;
};

window.onload = renderListItems();
