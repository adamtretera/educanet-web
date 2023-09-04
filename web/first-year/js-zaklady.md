---
theme: geist
drawings:
  persist:  false
transition: slide-left
title: Educanet weby
---


# Co je JavaScript

- programovací jazyk
- liší se od Javy
- používaný především pro vývoj webových stránek
- lze ho využít pro front-end i back-end vývoj

```js
console.log("Hello, World!");
```

---

## Základy

- program může mít jeden nebo více řádků
- lze ho spustit přímo z editoru
- lze přidávat komentáře, které nebudou spuštěny

```js
console.log("Ahoj!"); // Toto je komentář
```


```js
/* 
Toto je komentář
na více řádcích 
*/
console.log("Hello, JS!");
```

---

## Text a číslo

- Text - `string` je psán v uvozovkách (dvojitých nebo jednoduchých)
  - Do `string` typicky ukládáme statický text - název státu, jméno člověka, číslo bytu
```js
console.log("Honza - č. 51 - Česká republika");
```
- Číslo - `number` může být jakékoliv číslo
  - Do `number` ukládáme čísla, se kterými chceme počítat a provádět operace - 
  - V JavaScriptu nemusíme řešit typ čísla (`integer`, `float`)
```js
console.log(8);
```

---

## Co jsou proměnné ?
- Pojmenované místo v paměti, kde můžeme ukládat hodnoty (text, číslo, ...) a později je znovu použít
- Každá proměná má `name` - aby se odlíšila od ostatních a my se na ni mohli odkazovat

--- 

## Jak vytvořit proměnnou ?

- prvně musíme proměnnou `nadeklarovat` (vytvořit)
- v JS používáme dvě klíčová slova
- `let` definuje proměnnou, jejíž hodnotu lze měnit tolikrát, kolikrát je potřeba
- `const` deklaruje konstantu (neměnnou hodnotu)
- ~~`var` dnes již nepoužíváme (globalní)~~

--- 

## Mutabilní proměnné (let)

```js
let name = "Adam"; // deklaruje proměnnou name a přiřadí jí hodnotu "Adam"
```

- do proměnné lze ukldat jakýkoliv typ dat

```js
let name = "Adam";
name = "Martin";

console.log(name); // Martin
```

---

## Konstanty (const)
- deklarujme proměnnou `jazyk` a do ní uložíme hodnotu "Čeština"
```js
const jazyk = "Čeština";
```

- pokusíme se změnit hodnotu proměnné `jazyk`
```js
const jazyk = "Čeština";
jazyk = "Angličtina"; // error
```

---

## Operátory

- umožňují nám provádět operace - např:
- Sčítání: 
```js
console.log(5 + 4.5); // 9.5`
```
- Odčítání: 
```js
console.log(5 - 3); // 2
```
- Násobení: 
```js
console.log(10 * 2.5); // 25
```
- Dělení: `
```js
console.log(8 / 2); // 4
```
- Modulo: 
```js
console.log(10 % 3); // 1
```

---

## Komplexní výrazy

- Fungují stejně jako v matematice - násobení > sčítání
```js  
console.log(1 + 3 * 4 - 2) // 11
```
- Lze použít i závorky
```js  
console.log((1 + 3) * (4 - 2)); // 8
```

---

## Sčítání textu

- lze sčítat i text, pokud ho chcete spojit
```js  
console.log("Hello, " + "World"); // Hello, World
console.log("Na účtu mám: " + 80 - 100 + " Kč"); // Na účtu mám -20 Kč
```

---

## Operátory s proměnnými

- operátory se používají spolu s proměnnými, abyste vytvořili různé logické operace
```js
const ticketPrice = 300;
const accountValue = 320;

console.log("Po nákupu zbyde: " + accountValue - ticketPrice + " Kč"); // Po nákupu zbyde 20 Kč
```

- výsledek můžete uložit do samostatné proměnné
```js
const accountValue = 100;
const people = 20;

const allPeopleValue = accountValue * people;
console.log("Dohromady mají lidé: " + allPeopleValue + " Kč"); // Dohromady mají lidé 2000 Kč
```

---

## Úkol 

### Nadeklarujte si dvě proměnné čísla (number) a vypište do konzole jejich: 
- rozdíl a součet 
- podíl a násobek
- zbytek po dělení

---

## Opakování kódu 💩
- težko se čte
- težko se udržuje (speciálně pokud pracujete v týmu)
- je nepřehledné

---

## Funkce
- řešení: **Funkce**
- funkce nám umožnujě opakovat kód, který chceme použít vícekrát
- je tu několik cest jak vytvořit funkci, každá má speciální použití

---

## Deklarace funkce
- nejčastější způsob
1. `function` - klíčové slovo
2. identifikátor funkce - (mělo by být jasné co funkce dělá - často slovesa)
3. pár kulatých závorek - kde můžeme přidat parametry oddělené čárkou `(parametr1, parametr2)`
   - parametry jsou vstupy do funkcé které se chovají jako lokalní promněná
4. tělo funkce - píšeme do složených závorek `{}`

```js
function makePizza(pizza) {
  alert("Here is your " + pizza);
}

makePizza("🍕"); // "Here is your 🍕"
```
- nadeklarované funkce nejsou hned zavolány - musíme je zavolat!



---

## Jednoduchá funkce

```js
function writeMessage() {
  console.log("Lotr je nejlepší film! 🧙");
}

writeMessage(); // Lotr je nejlepší film! 🧙
writeMessage(); // Lotr je nejlepší film! 🧙
writeMessage(); // Lotr je nejlepší film! 🧙

```

---

## Funkce s parametrem

```js
function writeMessage(movie, emoji) {
  console.log(movie + " je nejlepší film!" + emoji);
}

writeMessage("Lotr", "🧙"); // Lotr je nejlepší film! 🧙
writeMessage("Dark knight", "🦇");  // Dakr knight je nejlepší film! 🦇
```

---

## Funkce s vracením hodnoty
- v JS je možné vracet hodnotu z funkce pomocí klíčového slova `return`
- `return` může být kdekoliv ve funkci, ale po jeho zavolání se funkce ukončí
- pokud `return` není definován, funkce vrací `undefined`

```js
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result); // 20
```

- zatím možná pochybujete, že se vám return vyplatí, ale až se dostaneme k psaní větších a složitějších funkcí, bude se vám hodit.

---

# Úkol

- Napište funkci `vypocetBMI`, která přijme dvě čísla – váhu v kilogramech a výšku v metrech – a vrátí hodnotu BMI (Body Mass Index).
  - Vzorec BMI: váha (kg) / výška (m) na druhou
- Vytvořte proměnnou `teplotaC`, která reprezentuje teplotu v Celsiusových stupních.
  Napište výraz, který převede tuto teplotu na `Fahrenheita`.
  Výsledek uložte do proměnné `teplotaF` a vypište jej.




---

# Hoisting
- jedna z funkcionalit JavaScriptu
- posouvání deklarace na začátek


```js
sum(2, 3); // 5

function sum(a, b) {
  return a + b;
}
```

---

## Funkce pomocí výrazu - Function expression
- function expression (výraz)
- obvykle přiřazení do proměnné

```js
let makePizza = function(pizza){
  alert('Here is your' + ' ' + pizza);
}
```

- často definován jako přiřazení anonymní funkce k proměnné 
- `Anonymní funkce` - funkce bez jména (identifikátoru)
- Funkce pomocí vyrazu musí být definováné před použitím (stejně jako proměnné)

```js
let sum = function(a, b) {
  return a + b;
}

sum(2, 3)
```

---

## Arrow funkce 
- **ECMAScript** je standardizace JavaScriptu (revize) - důležitá změna v **ES6**, přidány arrow funkce
- výhody kratší zápis (další výhody si řekneme později)
```js
let sum = (a, b) => {
  return a + b;
}

sum(2, 3);
```