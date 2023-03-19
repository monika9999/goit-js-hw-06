const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let item of ingredients) {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  list.append(element);
};
  
