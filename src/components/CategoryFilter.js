import React from "react";

function CategoryFilter({categories, setSelected, selected}) {
  const handleButtonClick = (element) => {
    setSelected(element)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(element => {
        return (
          <button onClick={() => handleButtonClick(element)}
                  key={element}
                  className={selected === element ? "selected" : null}>
                    {element}
          </button>
        )
        })
      }
    </div>
  );
}

export default CategoryFilter;
