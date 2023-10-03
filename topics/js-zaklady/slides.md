---
theme: geist
drawings:
  persist:  false
title: Educanet weby
---

<style>
.slidev-page {
    position: relative !important;
}

ul {
	list-style-type: disc !important;
	list-style-position: inside !important;
}

ol {
  list-style-type: decimal !important;
  list-style-position: inside !important;
}

</style>

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

<br>

- Číslo - `number` může být jakékoliv číslo
  - Do `number` ukládáme čísla, se kterými chceme počítat a provádět operace -
  - V JavaScriptu nemusíme řešit typ čísla (`integer`, `float`)
```js
console.log(8);
```

---

## Co jsou proměnné ?
- Pojmenované místo v paměti, kde můžeme ukládat hodnoty (text, číslo, ...) a později je znovu použít
- Každá proměná má `name` - aby se odlišila od ostatních a my se na ni mohli odkazovat

<div className="flex justify-center ">
  <img className="w-1/2 rounded-sm" src="/images/variables.png"/>
</div>

---

## Jak vytvořit proměnnou ?

- prvně musíme proměnnou `nadeklarovat` (vytvořit)
- v JS používáme dvě klíčová slova
- `let` deklaruje proměnnou, jejíž hodnotu lze měnit tolikrát, kolikrát je potřeba
- `const` deklaruje konstantu (neměnnou hodnotu)
- ~~`var` dnes již nepoužíváme (globalní)~~

<br>

```js
let name = "Adam";

const birthNumber = 020129;

var old = "Nepoužívat";
```

---

## Mutabilní proměnné (let)

```js
let name = "Adam"; // deklaruje proměnnou name a přiřadí jí hodnotu "Adam"
```

<br>

- do proměnné lze ukládat jakýkoliv typ dat

```js
let name = "Adam";
name = "Martin";
name = 8

console.log(name); // 8
```

---

## Konstanty (const)
- deklarujme proměnnou `jazyk` a do ní uložíme hodnotu "Čeština"
```js
const jazyk = "Čeština";
```

<br>

- pokusíme se změnit hodnotu proměnné `jazyk`
```js
const jazyk = "Čeština";
jazyk = "Angličtina"; // error
```

---

## Operátory

- umožňují nám provádět operace - např:
- sčítání a odčítání:
```js
console.log(5 + 4.5); // 9.5`
console.log(5 - 3); // 2
```

- násobení a dělení
```js
console.log(10 * 2.5); // 25
console.log(8 / 2); // 4
```

- modulo:
```js
console.log(10 % 3); // 1
```

---

## Komplexní výrazy

- Fungují stejně jako v matematice - násobení > sčítání
```js
console.log(1 + 3 * 4 - 2) // 11
```

<br>

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

<br>

- výsledek můžete uložit do samostatné proměnné
```js
const accountValue = 100;
const people = 20;

const allPeopleValue = accountValue * people;
console.log("Dohromady mají lidé: " + allPeopleValue + " Kč"); // Dohromady mají lidé 2000 Kč
```

---

## Úkol 🧪

**Nadeklarujte si dvě proměnné čísla (number) a vypište do konzole jejich:**
- rozdíl a součet
- podíl a násobek
- zbytek po dělení

---

## Opakování kódu 💀
- težko se čte
- je nepřehledné
- težko se udržuje (speciálně pokud pracujete v týmu)
- řešení?

---

## Funkce 🎉
- řešení: **Funkce**
- funkce nám umožňují opakovat kód, který chceme použít vícekrát
- je tu několik cest jak vytvořit funkci, každá má speciální použití

---

## Deklarace funkce
nejčastější způsob
1. `function` - klíčové slovo
2. identifikátor funkce - (mělo by být jasné co funkce dělá - často slovesa)
3. pár kulatých závorek - kde můžeme přidat parametry oddělené čárkou `(parametr1, parametr2)`-
  - *parametry jsou vstupy do funkce které se chovají jako lokalní promněná*
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
writeMessage("Dark knight", "🦇");  // Dark knight je nejlepší film! 🦇
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

<br>

*Zatím možná pochybujete, že se vám return vyplatí, ale až se dostaneme k psaní větších a složitějších funkcí, bude se vám hodit*

---

# Úkol

- Napište funkci `vypocetBMI`, která přijme dvě čísla – váhu v kilogramech a výšku v metrech – a vrátí hodnotu BMI (Body Mass Index).
  - Vzorec BMI: `váha (kg) / výška (m) na druhou`

<br>

- Vytvořte proměnnou `teplotaC`, která reprezentuje teplotu v Celsiusových stupních.
  Napište funkci, který převede tuto teplotu na `Fahrenheita`.
  Výsledek uložte do proměnné `teplotaF` a vypište jej.
- Vzorec: `teplotaF = teplotaC * 1.8 + 32`




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

---

# Boolean
- Existují výroky, o kterých můžeme říci, zda jsou pravdivé, nebo ne
- Představte si, že dnes prší, takže výrok "prší" je pravdivý.
- Výrok "5 < 3" je vždy nepravdivý a "Měsíc obíhá kolem Země" je pravdivý.
- Může mít pouze dvě hodnoty: `true` nebo `false`

```js
let bool = true;
console.log(bool); // true
```

---

# Logické operátor (AND)
- `&&` - logický operátor AND
- a zároveň


```js
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```


---

## Logický operátor (AND) - příklad

```js
let age = 25; // věk osoby
let hasLicense = true; // zda osoba má řidičský průkaz

let canDrive = age >= 18 && hasLicense; // proměnná bude true pouze pokud je osoba starší než 18 let a má řidičský průkaz.

console.log(canDrive); // Vypíše true pokud osoba může řídit, jinak false.
```

---

# Logický operátor (OR)
- `||` - logický operátor OR
- nebo
```js
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```

---

## Logický operátory (OR) - příklad

```js
let isStudent = true; // zda osoba je student
let hasISIC = false; // zda osoba má ISIC kartu

let getsDiscount = isStudent || hasISIC; // proměnná bude true pokud je osoba student nebo má ISIC kartu.

console.log(getsDiscount); // Vypíše true pokud osoba získá s
```

---

# Logický operátor (NOT)
- `!` - logický operátor NOT
- negace (změna na opačnou hodnotu)
```js
console.log(!false);  // true
console.log(!true);   // false
console.log(!!true);  // true

```

---

## Logický operátor (NOT) - příklad

```typescript
let isRaining = true; // zda prší
let isDry = !isRaining; // proměnná bude true, pokud neprší (je sucho).

console.log(isDry); // Vypíše false, pokud prší, true pokud je sucho.
```

---

# Cvičení 🧪

- Máte tři proměnné: `isSunny`, `hasUmbrella`, a `isIndoor`. Napište logický výraz, který bude `true` v následujících situacích:
- Je slunečno.
- Není slunečno, ale máte deštník.
- Není slunečno a jste uvnitř.


```js
let canGoOut = "Napište logický výraz zde";
```

---

# Podmíněné operátory
- do této chvíle naše programy fungovaly pouze lineárně - od začátku konce

<div className="flex justify-center ">
  <img className="w-1/2 rounded-sm" src="/images/ifelse.png"/>
</div>

---

# If statement
- `if` - klíčové slovo
- **Koncept**: Rozhodování na základě podmínek
- **Příklad**: Představte si například, že máte kočku, která mňouká, když má po šesté hodině ráno hlad.

```js
function meow() {
  return "Meow!";
}

let time = 10;
let sound;

if (time >= 6) {
  sound = meow();
  console.log(sound);
}
```


---

# Jak to funguje ? (if)

- podmínka uvnitř závorek se převede na logickou hodnotu
- Kód uvnitř příkazu `if` se provede, pokud je `boolean` `true`
- Každý `boolean` tedy může být podmínkou:

```js
let condition = true;

if (condition) {
  console.log("True!");
}
```
---

# Else statement
- `else` - klíčové slovo
- Pokud je podmínka `false`, lze místo bloku `if` použít blok `else`. Například:

```js
function meow() {
  return "Meow!";
}

function sleep() {
  return "Zzzzz...";
}

let time = 5;
let sound;

if (time >= 6) {
  sound = meow();
} else {
  sound = sleep();
}
console.log(sound);
```

---

# Více podmínek (else if)
```js
// ... Funkce z minulého slidu (sleep, meow)


function play() {
  return "Bang bang!";
}

let time = 9;
let sound;

if (time < 6) {
  sound = sleep();
} else if (time < 8) {
  sound = meow();
} else {
  sound = play();
}
console.log(sound);

```

---


# Další příklad (s logickým operátorem)

- Představte si, že máte aplikaci, která zjišťuje, zda je teplota příjemná nebo ne. Příjemná teplota je mezi 20 a 25 stupňi Celsius.

```js
function checkTemperature(temperature) {
  let result;
  if (temperature >= 20 && temperature <= 25) {
    result = "Teplota je příjemná.";
  } else {
    result = "Teplota není příjemná.";
  }
  return result;
}

let currentTemperature = 22; // Může být jakákoli hodnota reprezentující aktuální teplotu
let message = checkTemperature(currentTemperature);
console.log(message); // Vypíše "Teplota je příjemná." pokud je teplota mezi 20 a 25 stupni, jinak "Teplota není příjemná."

```
---

# Ternární operátor
- Pokud je cílem programu přiřadit **proměnnou** v závislosti na **podmínce**, můžeme použít zkrácenou verzi bloku if...else: ternární operátor `?` :
```js
let time = 11;
let isHungry = (time >= 6) ? true : false;
```

- lepší příklad
```js
let prodejniCena = 10000; // Prodejní cena v Kč
let typZakaznika = 'regularni'; // může být 'regularni' nebo 'vip'

// Pokud je typ zákazníka 'vip', bude komise 5%, jinak 10%
let komise = (typZakaznika === 'vip') ? prodejniCena * 0.05 : prodejniCena * 0.10;

console.log(`Komise je ${komise} Kč.`);

```


---

# Cvičení 🧪

**Vytvořte funkci `canLaunchRocket()`, která určí, zda může raketa odstartovat na základě několika podmínek. Funkce bude přijímat pět parametrů:**

- `fuelLevel` (číslo): Úroveň paliva v rakete. (Úroveň paliva musí být alespoň 100)
- `technicalCheck` (boolean): Jestli prošla raketa technickou kontrolou. (Technická kontrola musí být v pořádku.)
- `astronautsReady` (boolean): Jestli jsou astronauti připraveni. (Astronauti musí být připraveni.)
- `groundControlPermission` (boolean): Jestli je povolení od pozemní kontroly. (Musí být získáno povolení od pozemní kontroly.)
- `weatherIsStormy` (boolean): Jestli je bouře (Nesmí být bouře.)

**Funkce vrátí zprávu "🚀 Launch successful!" pokud jsou všechny podmínky splněny. Pokud nějaká podmínka není splněna, funkce vrátí konkrétní důvod, proč nelze startovat. Funkce by měla vrátit jen první chybu, kterou najde (není třeba použít pole).**

---

# Cvičení (bonus) 🧪
Vytvořte funkci `rateMovie()`, která vrátí `string` podle hodnocení filmu. Funkce bude přijímat dva parametry:

- `rating` (číslo): Hodnocení filmu od 0 do 10.
- `movie` (string): Název filmu.
- ⭐ funkce vrátí "[movie] je skvělý film!" pokud je hodnocení větší jak 7
- 👍 funkce vrátí "[movie] je dobrý film." pokud je hodnocení větší nebo rovno 4
- 👎 funkce vrátí "[movie] je špatný film." pokud je hodnocení menší jak 4

V programu musí být také proměnná `credibilityScore = 1`, která reprezentuje důvěryhodnost kritika - pokud je nižší jak 1, funkce `rateMovie()` vrátí "🤡 Kritik je troll!"

**Mega bonus 👀**
- pokud se zadá hodnocení filmu větší jak 5, zvýší se `credibilityScore` o 0.2
- pokud se zadá hodnocení filmu menší jak 3, sníží se `credibilityScore` o 0.2

---

# Array (pole)
- další datový typ
- využití -> chcete uchovat spoustu hodnot v jedné proměnné

_Například: možnosti pro výběr v dropdownu, seznam produktů v košíku, seznam uživatelů_

<img className="w-1/2 rounded-sm" src="/images/array.png"/>

---

# Vytvoření pole
- pole vytvoříme pomocí hranatých závorek
- hodnoty se ukládají oddělené čárkou
- pole může obsahovat různé typy hodnot

```js
let names = []; // Vytvoříme prázdné pole

names = ["Petr", "Martin", "Honza"]; // Vložíme do poled hodnoty
names = ["Petr", 0, "Martin", 2]; // Pole může obsahovat různé typy hodnot (moc často nechceme)
```

---

# Přistoupení k hodnotám v poli
**K poli můžeme přistoupit jako k celku**

```js
let names = ["Petr", "Martin", "Honza"];

console.log(names); // ["Petr", "Martin", "Honza"]
```


**Můžeme také přistoupit k jednotlivým hodnotám pomocí indexu**
- index je číslo, které určuje pozici v poli
- indexy začínají od 0

```js
let names = ["Petr", "Martin", "Honza"];

console.log(names[0]); // Petr
console.log(names[2]); // Honza

name[2] = "Adam";
console.log(names[2]); // Adam
```

---

## Přistoupení k neexistující hodnotě 🫥️
Pokud se pokusíme přistoupit k hodnotě, která neexistuje, vrátí se `undefined`
```js
let names = ["Petr", "Martin", "Honza"];

console.log(names[10]); // undefined
```

---

## Délka pole
- často budete chtít zjistit délku pole
- můžete použít vlastnost `length`

```js
const languages = ["C", "C++", "Python", "Java", "JavaScript"];

console.log(languages.length); // 5
```

<br>

**Pozor! Vrátí přesný počet hodnot v poli, ale indexy začínají od 0**
- tzn. pokud je délka pole `5`, maximální index je jen `4`

---


##  Práce s polem (1)

```ts
const nakup = ['chleba', 'mléko', 'sýr', 'nudle', 'káva'];
```

**Délka pole** `length`
```ts
console.log(nakup.length);  // 5
```

**Přístup pomocí indexu (pozice)**
```ts
nakup[0] = 'rohlik'; // console.log(nakup)  ['rohlik', 'mleko', ...]
```

**Najít hodnotu** vrací pozici (index) `indexOf()`

```ts
nakup.indexOf("sýr") // 2
```

**Převrácení pořadí**  `reverse()`

```ts
nakup.reverse() // ["káva", "nudle", "sýr", "mléko", "chleba"]
```

---

## Práce s polem (2)

**Přidávání hodnot** `push()` a `unshift()`

```ts
nakup.push("šunka")  // přidá na konec
nakup.unshift("čaj")  // přidá na začátek
```

**Odebírání hodnot** `pop()` a `shift()`

```ts
nakup.pop()  // odebere od konce
nakup.shift()  // odebere od začátku
```

**Další...**
```ts
[1,2].concat([3,4])  // [1,2,3,4]
['Adam', 'Tretera'].join()  //  Adam,  Tretera
["b", "c", "a"].sort()  // ["a", "b", "c"]
```
---


# Úkol 🧪
**Vytvořte pole `tasks`, do kterého uložíte 5 názvů úkolů**
- Vypište do konzole první a poslední úkol
- Vypište do konzole počet úkolů
- Změňte poslední úkol na "Party time🪩"
- Vypište do konzole znovu poslední úkol

**Bonus🎉:**
- Přidejte na konec pole další úkol navíc
- Vypište do konzole všechny úkoly v poli, ale každý na nový řádek a přidejte číslo úkolu

---


# Úkol 🧪
**Vytvořte pole `movies`, do kterého uložíte 3 filmy**
- Vytvořte funkci `addMovie(movie)` pro přidání filmu na konec pole
- Vytvořte funkci `listMovies()`, která vrátí všechny filmy v poli
- Vytvořte funkci `getMovie(index)`, která vrátí film na daném indexu
- Všechny funkce vyzkoušejte

**Bonus🎉:**
- Vytvořte funkci `updateMovie(index, movie)`, která upraví film na daném indexu
- Vytvořte funkci `removeMovie(index)`, která odstraní film na daném indexu
- Vytvořte funkci `listMoviesReverse()`, která vrátí všechny filmy v poli v opačném pořadí

---


# Inkerementace a dekrementace

- prefix (`++n` nebo `--n`) zvyšuje/snižuje hodnotu proměnné před jejím použitím;
- postfix (`n++` nebo `n--`) zvyšuje/snižuje hodnotu proměnné po jejím použití.
- **Prefix**: zvíší hodnotu proměnné a vrátí ji

```js
let a = 4;
let b = ++a;
console.log(a); // 5
console.log(b); // 5
```

- **Postfix**: vrátí hodnotu proměnné a poté ji zvýší

```js
let a = 4;
let b = a++;

console.log(a); // 5
console.log(b); // 4
```



---


# Cykly (loops) 🚴

- často chceme provést stejnou operaci vícekrát (např. každý den v týdnu spustit budík)
- cyklus nám umožní opakovat kód, dokud je splněna podmínka


```js
console.log("1, 🔔 Alarm!"); // Pondělí
console.log("2, 🔔 Alarm!"); // Uterý
console.log("3, 🔔 Alarm!"); // Středa
console.log("4, 🔔 Alarm!"); // Čtvrtek
console.log("5, 🔔 Alarm!"); // Pátek
```

- Místo toho můžeme použít cyklus `for`

```js
let i;
for (i = 1; i <= 5; i++) {
    console.log(i + ", 🔔 Alarm!");
}
```


---

# Cyklus `for` 🚴‍

- cyklus `for` se skládá ze tří částí
- prvně si nastavíme proměnnou, která bude sloužit jako počítadlo (např. `i = 1`)
- poté nastavíme podmínku, za které bude cyklus probíhat (např. `i <= 5`)
- jak se má počítadlo změnit od jedné iterace k druhé (např. `i++`)

```js
let i;
for (i = 1; i <= 5; i++) {
    console.log(i + ", 🔔 Alarm!");
}
```

---

# Nekonečný cyklus
- cyklus může být nekonečný, pokud podmínka nikdy není splněna


```js
for (i=0; ; i++) {
    console.log(i);
}
```

- ℹ️ Nekonečný cyklus vám může způsobit pád prohlížeče nebo počítače



