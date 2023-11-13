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
- selectuju jeden nebo více prvků, pokud se prvek nenašel vrací `null`
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
- `element.style` vrací pouze styly, které byly nastaveny pomocí JavaScriptu nebo přímo na elementu
- používáme tedy `window.getComputedStyle(element)`
- vrací objekt, který obsahuje všechny styly daného elementu

```js
const heading = document.querySelector("h3");
const headingStyles = window.getComputedStyle(element);
console.log(headingStyles.color); // vypíše barvu textu
```

---

# Úkol 🧪
**Vytvořte stránku s textem `<p>` a tlačítkem.**
- Při kliknutí na tlačítko se barva textu bude přepínat mezi červenou a černou.
- Pokud uživatel klikne na tlačítko 3x, tak se pozadí stránky změní na modrou.

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
**Vytvořte stránku s tlačítkem a textem `<p>`, prokladaným tučným textem `<strong>`**
- Vytvořte CSS třídu `.highlight` se zajímavým stylem (např. oranžové pozadí)
- Při kliknutí na tlačítko zvýrazněte všechen tučný text
- Při opětovném kliknutí na tlačítko zvýraznění odstraňte

---

PŘIDAT SLIDY NA VYTVÁŘENÍ ELEMENTŮ A PŘIDÁVÁNÍ JEJICH DO DOMU


---

# Úprava Textu v Elementech 📝
- změna textového obsahu: využití textContent nebo innerText
- rozdíl mezi textContent a innerText:
  - `textContent` zahrnuje veškerý text včetně skrytého a skriptového
  - `innerText` bere v úvahu stylování a viditelnost textu


---

# Základní práce s atributy

```js
let zdrojObrazku = document.getElementById('mojObrazek').getAttribute('src');
console.log(zdrojObrazku);
```

---

```js
document.getElementById('mojeId').textContent = 'Změněný text! 🌟';
```

# Úprava HTML
- použití innerHTML pro vložení HTML: umožňuje vložit HTML kód.
- bezpečnostní Upozornění: opatrnost při používání innerHTML kvůli riziku XSS útoků.


---

# Odebrání Elementu z DOM 🗑️
- odstranění specifikovaného `Elementu`: element.remove()
- `Element` je odstraněn spolu s jeho obsahem a událostmi


```js
document.getElementById('zastaralyElement').remove();
```
---