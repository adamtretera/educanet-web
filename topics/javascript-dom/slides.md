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

# DOM


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