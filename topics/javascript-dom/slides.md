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

# Co je DOM ?

- DOM znamená "Document Object Model"
- reprezentace webových stránek jako objektové struktury
- rozhraní pro manipulaci s dokumenty HTML (API)
- nezávislý na platformě a jazyku

---


# DOM struktura
- struktura DOM je podobná stromu
- každý element je uzel stromu (`node`)
- kořenový element odpovídá celému dokumentu
- větve reprezentují vnořené elementy
- `root`  -> `<html>` - `document` element
<div className="flex justify-center ">
  <img className="w-1/2 rounded-sm" src="/images/dom.png"/>
</div>

---

# Výběr prvků DOM
- umožňuje přístup k atributům, obsahu a stylům prvku, což je klíčové pro dynamické webové aplikace. 🛠️
- lze vybrat jeden nebo více prvků, pokud se prvek nenašel vrací `null`
- je několik způsobů jak prvek vybrat
---


# getElementById 🆔
- vybírá prvek podle jeho unikátního ID. 🔑
- ID musí být unikátní v rámci dokumentu

```js
let element = document.getElementById('mojeId');
```
---

# getElementsByClassName 🏷️
- vybírá všechny prvky se specifikovanou třídou
- užitečné pro skupinové manipulace, například změna stylů pro všechny prvky téže třídy.

```js
let prvky = document.getElementsByClassName('mojeTrida');
```
---

# querySelector 🎯
- vybírá první prvek odpovídající CSS selektoru 
- může zahrnovat složité selektory, jako například .class, #id, [attribute=value]
- vrací `Element` - Objekt jako HTML element
```js
let prvniPrvek = document.querySelector('.mojeTrida');
// první prvek s třídou mojeTřída
```

---

# querySelectorAll 🌟
- vrací všechny prvky odpovídající zadanému CSS selektoru
- výsledkem je `NodeList`, který může být procházen např. pomocí `forEach`

```js
let vsechnyPrvky = document.querySelectorAll('.mojeTrida');
```

---

# NodeList a převod na pole 🔄
- NodeList je objekt podobný poli, ale není to přesné pole. 🤔
- V moderních prohlížečích můžeme použít metody jako forEach() nebo cyklus for...of. 🔁
- Pro převod `NodeList` na skutečné pole použijeme `Array.from()`. 🔄

```js
let nodeList = document.querySelectorAll('selector');
let elements = Array.from(nodeList);
// 'elements' je nyní pole, můžeme na něm používat metody pole
```

---

# Přístup k atributům a obsahu elementů 💡
- po vybrání prvku lze jednoduše číst nebo měnit jeho atributy, textový obsah a styly.
- umožňuje dynamické úpravy stránky bez nutnosti jejího celkového přenačtení 

```js
let element = document.getElementById('mojeId');
element.textContent = 'Nový text';
element.style.color = 'červená';
```
---

# Základní Selectory

- Jednoduché selectory: tagy, třídy, ID.
- Tag: `querySelector('p')` vybere první odstavec.
- Třída: `querySelector('.trida')` vybere první prvek s danou třídou.
- ID: `querySelector('#id')` vybere prvek s daným ID.

---


# Složené Selectory

- Kombinace více selectorů pro specifičtější výběr.
- Descendant selector: `querySelector('div p')` vybere odstavce uvnitř div.
- Child selector: `querySelector('ul > li')` vybere přímé potomky li elementu ul.
- Adjacent sibling selector: `querySelector('h1 + p')` vybere odstavec hned po h1.


---

# Další

- `querySelector('input[type="text"]')` vybere všechny textové inputy
- `querySelector('p:first-child')` vybere první odstavec v každém kontejneru.


---

## Ukázka 


```html
    <h1 id="hlavniNadpis">Vítejte na mé stránce</h1>
    <p class="zvyrazneny">Tento odstavec bude zvýrazněn.</p>
    <p>Toto je obyčejný odstavec.</p>
    <p class="zvyrazneny">Další zvýrazněný odstavec.</p>
```

```js
    document.getElementById("hlavniNadpis").style.color = "blue";
    
    let zvyrazneneOdstavce = document.querySelectorAll(".zvyrazneny");
    zvyrazneneOdstavce.forEach(odstavec => {
        odstavec.style.backgroundColor = "yellow";
    });
```

---


# Úkol

- pomocí JS urči pro galerii, vsechnyObrázky (počet), vybraneObrázky (počet) (s třídou featured), maSpecialniObrázek (true / false)
```html
<div>
    <img id="special" src="obrazek1.jpg" alt="Speciální Obrázek">
    <img class="featured" src="obrazek2.jpg" alt="Vybraný Obrázek">
    <img src="obrazek3.jpg" alt="Obyčejný Obrázek">
    <img class="featured" src="obrazek4.jpg" alt="Další Vybraný Obrázek">
</div>

```

---

# Stylování elementů
- pomocí CSS elementům přiřazujeme styly
- tyto styly však můžeme přiřadit i pomocí JavaScriptu
- k tomu slouží vlastnost `style`
- vlastnost `style` je objekt, který obsahuje všechny styly daného elementu

---

# Co můžeme se styly dělat
- přidávat nové styly
- měnit existující styly
- odebírat styly
- zjišťovat hodnoty jednotlivých stylů

---

# Uprava stylů
- ke stylům přistupujeme stejně jako k jakémukoliv jinému objektu

```js
element.style.color = "red"; // nastavíme barvu textu na červenou
element.style.backgroundColor = "blue"; // nastavíme barvu pozadí na modrou
element.style.color = ""; // odstraníme barvu textu

element.style.cssText = 'color:red;background-color:yellow'; // nastavíme více stylů najednou
```

---

# Získání stylů
- `element.style` je objekt, se kterým můžeme normálně pracovat
- můžeme získat hodnotu jednotlivých stylů a podle nich konat akce
- vlastnosti objektu `style` odpovídají CSS vlastnostem, ale jsou psány v camelCase

```js
console.log(element.style.color); // vypíše barvu textu

if (element.style.color === "red") {
    element.style.color = "blue";
}
```

---

# Úkol 🧪
**Vytvořte stránku s textem `<p>` a tlačítkem.**
- Při kliknutí na tlačítko se barva textu bude přepínat mezi červenou a černou.
- Pokud uživatel klikne na tlačítko 3x, tak se pozadí stránky změní na modrou.

```js
// Pro účely tohoto cvičení použijte tuto funkci
document.querySelector('button').addEventListener('click', () => {
    // Zavolání funkce
});
```

---

# Různé přístupy k práci se styly
- `element.style` - styly přímo na elementu
- `element.classList` - CSS třídy

```js
const heading = document.querySelector("h1");
heading.style.color = "red"; // <h1 style="color: red">...</h1>
heading.classList.add("red"); // <h1 class="red">...</h1>
```

---

# Proč bychom chtěli používat CSS třídy?
- Můžeme mít předpřipravené styly, které můžeme přiřadit k elementům
- Můžeme psát naše styly v CSS a v JavaScriptu pouze přiřazovat třídy
- Rozdělení CSS a Javascriptu

---

# Manipulace s CSS třídami
- `element.classList` - obsahuje všechny CSS třídy daného elementu
- `element.classList.add("className")` - přidá třídu
- `element.classList.remove("className")` - odebere třídu
- `element.classList.toggle("className")` - přidá třídu, pokud ji element nemá, jinak ji odebere
- `element.classList.contains("className")` - zjistí, zda element obsahuje danou třídu
- `element.classList.replace("oldClassName", "newClassName")` - nahradí třídu

---

# Příklad
```html
<button>Click me!</button>
```

```css
.primaryButton {
    color: white;
    background-color: blue;
    border-radius: 5px;
}
```

```js
const button = document.querySelector("button");
button.classList.add("primaryButton");
```

---

# Úkol 🧪
**Vytvořte stránku s textem `<p>`, prokladaným tučným textem `<strong>`**
- Vytvořte CSS třídu `.highlight` se zajímavým stylem (např. oranžové pozadí)
- Při načtení stránky se třída `.highlight` přidá ke všem `<strong>` elementům

---

# Vytváření elementů

- kromě manipulace s existujícími elementy můžeme vytvářet nové
- vytvoření elementu pomocí `document.createElement(htmlTag)

```js
const heading = document.createElement("h1"); // <h1></h1>
const button = document.createElement("button"); // <button></button>
```

---

# Přidání textu
- vytvořenému elementu můžeme přidat text pomocí `element.textContent` nebo `element.innerText`
- rozdíl mezi textContent a innerText:
  - `textContent` zahrnuje veškerý text včetně skrytého a skriptového
  - `innerText` bere v úvahu stylování a viditelnost textu

```js
const heading = document.createElement("h1"); // <h1></h1>
heading.innerText = "Hello world!"; // <h1>Hello world!</h1>
```

---

# Přidání elementu do DOM
- vytvořený element lze přidat do DOM
- k tomu slouží několik metod:
  - `element.after(newElement)` - přidá element za zadaný element
  - `element.before(newElement)` - přidá element před zadaný element

```html
<h1>Nadpis</h1>
```


```js
const heading = document.querySelector("h1");
const subheading = document.createElement("h2").textContent = "Podnadpis"

heading.after(subheading);
```

```html
<h1>Nadpis</h1>
<h2>Podnadpis</h2>
```

---

# Přidání elementu jako potomka
- `element.append(newElement)` - přidá element na konec rodičovského elementu
- `element.prepend(newElement)` - přidá element na konec rodičovského elementu
  
```html
<ul>
    <li>První položka</li>
</ul>
```

```js
const list = document.querySelector("ul");
const listItem = document.createElement("li").textContent = "Druhá položka";

list.append(listItem);
```

```html
<ul>
    <li>První položka</li>
    <li>Druhá položka</li>
</ul>
```

---

# Nahrazení a odstranění elementů
- `element.replaceWith(newElement)` - nahradí element novým elementem
- `element.replaceChildren(newElement)` - nahradí všechny potomky novým elementem
- `element.remove()` - odstraní element z DOM

```html
<button>Koupit</button>
```

```js
const heading = document.querySelector("button");
const subheading = document.createElement("p").textContent = "Zakoupeno!"

heading.replaceWith(subheading);
```

```html
<p>Zakoupeno!</p>
```

---

# Úkol 🧪
**Vytvořte stránku s nadpisem `<h1>Nadpis<h1/>` a prázdným listem `<ul>`. Při načtení stránky se:**
- vytvoří nový element `<h2>` s textem "Ahoj světe!" a přidá se pod nadpis
- vytvoří nový element `<li>` s textem "První položka" a přidá se do listu
- nahradí nadpis tlačítkem `<button>` s textem "Klikni na mě!"

---

# Základní práce s atributy
- podobně jako ke stylům, můžeme přistupovat i k ostatním atributům elementů
- pomocí metody `getAttribute("attributeName")` získáme hodnotu atributu
- pomocí metody `setAttribute("attributeName", "value")` nastavíme hodnotu atributu

```html
<img id='mujObrazek' src='obrazek1.jpg' alt='cool obrázek'/>
```

```js
const myImage = document.querySelector("#mujObrazek");

const alt = myImage.getAttribute("alt"); // získáme hodnotu atributu alt
console.log(zdrojObrazku); // vypíše "cool obrázek"

myImage.setAttribute("src", "obrazek2.jpg"); // nastavíme novou hodnotu atributu src
```

---

# Úprava HTML
- innerHTML umožňuje vložit HTML kód do elementu
- při použití innerHTML se vymaže veškerý obsah elementu a nahradí se novým HTML
- při použití innerHTML hrozí bezpečnostní rizika pomocí XSS (Cross-site scripting)
- vkládejte pomocí innerHTML **pouze ve speciálních případech** a pouze **pokud máte kontrolu** nad vkládaným obsahem.

**Příklad**
```js
const htmlString = "<h1>Nový nadpis</h1>";
el.innerHTML = htmlString; // vloží html do elementu

```

**Bezpečnostní problém**

```js
const name = "<img  src='x' onerror='alert(1)'>";
el.innerHTML = name; // zobrazí upozornění
```

---

# Úkol 🧪
**Vytvořte stránku s obrázkem. Při načtení stránky:**
- se obrázek nahradí jiným obrázkem
- obrázek získá nový atribut `title` s hodnotou "Nový obrázek"
- pomocí innerHTML se pod obrázek vloží nové HTML zobrazené níže

```js
const html = `
    <h2>Nový nadpis</h2>
    <p>Nový odstavec</p>
`;
```

---

# Eventy - události
- události jsou akce, které se mohou stát v prohlížeči
- např. kliknutí na tlačítko, načtení stránky, odeslání formuláře, atd.
- události můžeme zachytit a na ně reagovat pomocí JavaScriptu 

_Zkuste vymyslet další události, které se mohou stát na stránce_

---

# Zachytávání událostí
- události můžeme zachytit pomocí metody `addEventListener("eventName", callback)`
- první parametr je název události, druhý parametr je funkce, která se zavolá při zachycení události

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

---

# Důležité události
- `click` - kliknutí na element
- `mouseover`, `mouseout` - najetí myší na element a odjetí myší z elementu
- `focus` - zaměření elementu (např. při kliknutí na input)
- `blur` - zrušení zaměření elementu
- `input` - změna hodnoty v inputu
- `submit` - odeslání formuláře

---

# Příklad

```html
<input type="text" />
```

```js
const names = ["Adam", "Petr", "Jana", "Eva", "Karel", "Lucie"];
const input = document.querySelector("input");

function search() {
    const filter = input.value.toLowerCase();
    const filteredNames = names.filter((name) => name.toLowerCase().includes(filter));
    console.log(filteredNames);
}

input.addEventListener("blur", search);
```

---

# Úkol 🧪
**Vytvořte:**
- `tlačítko`, které při kliknutí vypíše do konzole "Klik"
- `div`, který po najetí myši vypíše do konzole "Najetí myši"
- `input`, který při změně hodnoty vypíše do konzole novou hodnotu

---

# Další (špatné) možnosti jak zachytávat události
**NEPOUŽÍVAT: Event handler property - `button.onclick = search`**
- můžeme přiřadit pouze jednu funkci
- další přiřazená funkce přepíše předchozí

**NEPOUŽÍVAT: Inline event handler - `<button onclick="search()">Search</button>`**
- mixování JS a HTML je nepřehledné a špatně udržovatelné
- nelze přiřadit více funkcí
- inline Javascript může být zakázan konfigurací serveru - tzn. vám v produkci nemusí fungovat

Více o problematice v [oficiální dokumentaci](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#other_event_listener_mechanisms)

---

# Event objekt
- při zachycení události se vytvoří objekt, který obsahuje informace o události
- objekt je předán jako `parametr funkce`, která se zavolá při zachycení události
- objekt obsahuje informace o události a o elementu, na kterém se událost stala

Možná jste viděli něco podobného:
```js
function search(event) { // Také často nahrazováno "e"
    console.log(event.target.value);
}

input.addEventListener("blur", search);
```

---

# Využití event objektu
Pojďme přepsat náš předchozí příklad:

```js
const names = ["Adam", "Petr", "Jana", "Eva", "Karel", "Lucie"];
const input = document.querySelector("input");

function search(event) {
    // const filter = input.value.toLowerCase();
    const filter = event.target.value.toLowerCase();
    const filteredNames = names.filter((name) => name.toLowerCase().includes(filter));
    console.log(filteredNames);
}

input.addEventListener("blur", search);
```

---

# Příklad
**Zadání:** Máme několik tlačítek a chceme změnit barvu tomu, na které jsme kliknuli.

**Problém:** Jak víme, na které tlačítko jsme kliknuli?

```html
<button>Click me!</button>
<button>Click me!</button>
<button>Click me!</button>
<button>Click me!</button>
```

```js
const buttons = document.querySelectorAll("button");

function changeColor(event) {
    event.target.style.backgroundColor = "red";
}

buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
});
```

---

# Úkol 🧪
**Vytvořte `input` s `border 1px`.**

1. Při vykliknutí mimo input zapíšete do konzole text v inputu
2. Při najetí myší na input změníte tloušťku borderu na `2px`
3. Při odjetí myší z inputu změníte tloušťku borderu zpět na původní hodnotu

---

# Úkol 🧪
**Vytvořte `input`. Když uživatel napíše něco do inputu a následně klikne klávesu `shift`, vypište do konzole aktuální text v inputu.**

Nápovědu k řešení najdete například v [oficiální dokumentaci](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#extra_properties_of_event_objects) v sekci `Extra properties of event objects`.

---

#  Úvod do Web API
- Web API jsou rozhraní, které umožňují interakci mezi různými softwarovými aplikacemi
- Umožňují webům komunikovat s externími službami

---

# Asynchronní požadavky
- Problém: na komunikaci mezi webovým serverem a prohlížečem je potřeba čas
- Řešení: asynchronní požadavky
- Prohlížeč může poslat požadavek na server a mezitím dělat jiné věci
- Když server odpoví, prohlížeč zpracuje odpověď

---

# Fetch
- `fetch` je moderní API pro asynchronní požadavky
- umožňuje posílat a přijímat data z webového serveru
- `fetch` vrací `Promise`, který se vždy vyřeší, ať už je odpověď úspěšná nebo ne

---

# Promise
- `Promise` je objekt, který reprezentuje slíbenou hodnotu
- `Promise` vždy vrátí nějakou odpověď - vyřeší se
- `Promise` může být ve stavech: `pending`, `settled`, `fulfilled`, `rejected`
<div className="flex justify-center ">
  <img className="w-1/2 rounded-sm" src="/images/promise.webp"/>
</div>

---

<div className="flex justify-center ">
  <img className="w-1/2 rounded-sm" src="/images/promise-detail.webp"/>
</div>

---