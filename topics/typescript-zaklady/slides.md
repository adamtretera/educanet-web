# Typescript

- **Nadstavba JavaScriptu 🚀**
- **Kompiluje se do čistého JavaScriptu 🔄**
- **Statické typování 📊**
  - Umožňuje definovat typy pro proměnné, funkce a třídy, což může pomoci odhalit chyby ještě před runtime.
- **Přidá vám napovídaní do IDE 🌈**



---

# Setup Node with Typescript


```bash
npm init -y
npm install -D typescript @types/node
```

- `package.json`

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc"
  },
}
```


---

# TS config

- vytvoření `tsconfig.json`

```bash
touch tsconfig.json
```

- `tsconfig.json`
```json
{
    "compilerOptions": {
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "target": "ES2020",
      "sourceMap": true,
      "outDir": "dist",
    },
    "include": ["src/**/*"],
  }
```
---


# Práce s typescriptem

- vytvořte složku: `src` 🎊

- soubor `src/ahoj.ts`
```ts
export const ahoj = 'Ahoj kamaráde!';
```

- soubor `src/index.ts`

```ts
import { hello } from './hello.js';
```
