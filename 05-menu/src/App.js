import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allCategories = [
    "all",
    ...new Set(items?.map((item) => item?.category)),
  ];
  const [menuIteams, setMenuIteams] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuIteams(items);
      return;
    }
    const updateCategory = items.filter((item) => item.category === category);
    setMenuIteams(updateCategory);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menuIteams={menuIteams} />
      </section>
    </main>
  );
}

export default App;
