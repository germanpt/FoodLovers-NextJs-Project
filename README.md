# 🍔 FoodLovers – Fullstack Next.js App

A fullstack food-sharing application built with **Next.js App Router**, using **SQLite**, **Server Components**, and modern rendering strategies like **ISR**.

---


## 📌 Project Overview

FoodLovers is a production-style fullstack application where users can:

* Browse meals
* View detailed meal pages
* Share their own meals

The app demonstrates how to build a **complete backend + frontend inside Next.js** using file-based routing, server logic, and database integration.

---

## ⚙️ Tech Stack

### Core

* **Next.js 16 (App Router)**
* **React 19**
* **Node.js**

### Database

* **SQLite (better-sqlite3)**

### Utilities

* **slugify** → SEO-friendly URLs
* **xss** → input sanitization (security)

### Tooling

* ESLint
* Next.js built-in optimizations

---

## ✨ Features

### 🍽️ Meals System

* Dynamic meals listing
* Individual meal pages via dynamic routing
* SEO-friendly URLs using slugs

---

### ➕ Share Meals

* Dedicated `/meals/share` route
* Form submission handled on the server
* Stores data in SQLite database

---

### 🔗 Dynamic Routing

```bash
/meals/[mealSlug]
```

* Generates dynamic pages per meal
* Uses `slugify` for clean URLs

---

### 🖼️ Image Optimization

Uses Next.js `<Image />` with `fill`:

```jsx
<Image
  src={image}
  alt="Meal"
  fill
  className="object-cover"
/>
```

---

### 🔄 Data Revalidation (ISR)

```js
export const revalidate = 10;
```

* Keeps data fresh
* No full rebuild required

---

### 🖥️ Server & Client Components

#### Server Components

* Fetch data from SQLite
* Handle logic securely on server

#### Client Components

```js
"use client";
```

* Used for forms and UI interactivity

---

### ⚡ Loading & Error Handling

* `loading.js` → loading states
* `error.js` → error boundaries
* `not-found.js` → custom 404 pages

---

## 📂 Project Structure

```bash
/app
  /community
  /components
  /meals
    /[mealSlug]
    /share
    error.js
    loading-out.js
    loading.module.css
    not-found.js
    page.js
    page.module.css
  layout.js
  not-found.js
  page.js
  globals.css

/assets
/lib
/public

initdb.js
meals.db
next.config.js
package.json
```

---

## 🗄️ Database

* SQLite database stored locally:

```bash
meals.db
```

* Initialized via:

```bash
initdb.js
```

* Accessed using:

```bash
better-sqlite3
```

---

## 🔐 Security

* User input sanitized using **xss**
* Prevents script injection attacks

---

## 📦 Dependencies

### Main

* next
* react
* react-dom
* better-sqlite3
* slugify
* xss

### Dev

* eslint
* eslint-config-next

---

## 🛠️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/germanpt/FoodLovers-NextJs-Project.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Initialize database (if needed)

```bash
node initdb.js
```

### 4. Run development server

```bash
npm run dev
```

### 5. Open browser

```bash
http://localhost:3000
```

---

## 📈 Performance Optimizations

* Server-side data fetching
* Incremental Static Regeneration (ISR)
* Image optimization with Next.js
* Minimal client-side JS

---

## 🎯 Key Learnings

* Fullstack development with Next.js App Router
* Working with SQLite inside a React app
* Handling forms with server logic
* Implementing dynamic routing
* Using loading & error boundaries properly

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---


## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
