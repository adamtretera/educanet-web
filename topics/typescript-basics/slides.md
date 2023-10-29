---
theme: geist
drawings:
  persist:  false
title: Typescript
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

---


# Užitečné odkazy

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TS lingo](https://github.com/ruizb/glossary-typescript)



---


# Interface

- Interface je způsob, jak definovat strukturu objektu.

```ts
export interface User {
  id: number;
  name: string;
  email: string;
}


function useUser(user: User) {
  return user.name;
}


const username = useUser({
    id: 1,
    name: 'John',
    email: 'john@me.cz'
});
```


---


# Type

```ts
type User = {
  id: number;
  name: string;
  email: string;
}

function useUser(user: User) {
  return user.name;
}

const username = useUser({
    id: 1,
    name: 'John',
    email: 'john@me.cz'
});
```


---

# Rozšíření interface

```ts
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const bob: Employee = {
    name: "Bob",
    age: 32,
    employeeId: 12345
};
```


---

# Rozšíření type

```ts
type Person = {
    name: string;
    age: number;
}

type Employee = Person & {
    employeeId: number;
}

const alice: Employee = {
    name: "Alice",
    age: 28,
    employeeId: 67890
};
```


---

## Optional properties

```ts
interface Person {
    name: string;
    age?: number; // stejné jako age: number | undefined;
}

const bob: Person = {
    name: "Bob"
};
```


---

## Union

```ts
type ID = string | number;

const id: ID = 10;
```

## Tuple

```ts
type Point = [number, number];

const point: Point = [10, 20];
```

---

## Literal types

```ts

type Direction = 'left' | 'right' | 'up' | 'down';
const direction: Direction = 'left';
```

## Partial

```ts
interface Todo {
    title: string;
    description: string;
}
const myTodo: Partial<Todo> = { title: "Read book" }; // Nevyžaduje description (vše je volitelné)
```

---

## Readonly

```ts
type ImmutableTodo = Readonly<Todo>;
const todo: ImmutableTodo = { title: "Study", description: "TypeScript" };
// todo.title = "Play"; // Tohle by hodilo error
```

## Pick & Omit

```ts
type TodoPreview = Pick<Todo, "title">;
const preview: TodoPreview = { title: "Read book" };

type TodoInfo = Omit<Todo, "title">;
const info: TodoInfo = { description: "TypeScript basics" };
```

---

## Record

```ts
type ThreeStrings = Record<"prop1" | "prop2" | "prop3", string>;
const myRecord: ThreeStrings = {
  prop1: "hello",
  prop2: "world",
  prop3: "TypeScript"
};
```

## typeof


```ts
const exampleArray = [0, 1, 2];
type ArrayType = typeof exampleArray;  // would be 'number[]'
```


## keyof

```ts
type TodoKeys = keyof Todo; // "title" | "description"
```

---


## Type guards

```ts
function isString(test: any): test is string {
    return typeof test === "string";
}

if (isString(foo)) {
    // foo is string
} else {
    // foo is not string
}
```