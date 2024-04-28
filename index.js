/*
  Всі завдання виконувати в наведеному порядку, після кожного завдання логувати отриманий результат
  Використовувати лише перелічені методи: pop, push, shift, unshift, slice, splice, indexOf, lastIndexOf

  Початковий список покупок 
*/
const shoppingList = ["milk", "eggs", "bread"];
console.log(shoppingList, '\n');

// Додайте новий елемент в кінець списку
const newShoppingItem1 = "sugar";
shoppingList.push(newShoppingItem1);
console.log("1. Додайте новий елемент в кінець списку:", shoppingList);

// Видаліть останній елемент зі списку
shoppingList.pop();
console.log("2. Видаліть останній елемент зі списку:", shoppingList);

// Додайте новий елемент на початок списку
shoppingList.unshift(newShoppingItem1);
console.log("3. Додайте новий елемент на початок списку:", shoppingList);

// Видаліть перший елемент зі списку
shoppingList.shift();
console.log("4. Видаліть перший елемент зі списку:", shoppingList);

// Створіть повну копію списку покупок
const copyShoppingList = shoppingList.slice();
console.log("5. Створіть повну копію списку покупок:");
console.log("shoppingList =", shoppingList);
console.log("copyShoppingList =", copyShoppingList);

// Знайдіть індекс  "bread"
console.log(
  '6. Знайдіть індекс "bread" (indexOf):',
  shoppingList.indexOf("bread")
);

// Заменіть "bread" на "muffin"
const newShoppingItem2 = "muffin";
shoppingList.splice(2, 1, newShoppingItem2);
console.log('7. Заменіть "bread" на "muffin":', shoppingList);

// Знайдіть індекс "bread" останнє входження
console.log(
  '8. Знайдіть індекс "bread" останнє входження:',
  shoppingList.lastIndexOf("bread")
);

// Після молока додайте "meat", "fish"
const newShoppingItem3 = "meat";
const newShoppingItem4 = "fish";
shoppingList.splice(1, 0, newShoppingItem3, newShoppingItem4);
console.log('9. Після молока додайте "meat", "fish":', shoppingList);

// Видаліть "eggs"
shoppingList.splice(3, 1);
console.log('10. Видаліть "eggs":', shoppingList);