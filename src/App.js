import {useState} from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// Database
import products from "./db/data";
import Card from "./components/Card";

function App() {
    const [selectedCategory, setSelectedCategory] = useState({});

    //---------------Input Filter---------------
    const[query, setQuery] = useState("");

    const handleInputChange = event => {
        setQuery(event.target.value)
    };

    const filteredItems = products.filter(
        product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    //---------------Radio Filter---------------
    const handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        setSelectedCategory({
          ...selectedCategory, 
          [name]: value,
        });
    };

    //---------------Buttons Filter---------------
    const handleClick = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        
        setSelectedCategory({
          ...selectedCategory, 
          [name]: value,
        });
    }
    function filteredData(products, selected, query) {
      let filteredProducts = products;

      if(query) {
        filteredProducts = filteredItems;
      }

      // Selected Filter
      if(selected) {
        for (let key in selected) {
          if (selected.hasOwnProperty(key)) {
            filteredProducts = filteredProducts.filter(
              ({ category, color, company, newPrice, title }) => 
              category.includes(selected[key]) || 
              color.includes(selected[key]) ||
              company.includes(selected[key]) ||
              newPrice === selected[key] ||
              title.includes(selected[key])
            );
          }
        }
      }

      return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
        <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ));
    }

    const result = filteredData(products, selectedCategory, query);

  return (
    <>
        <Sidebar handleChange={handleChange}/>
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended  handleClick={handleClick}/>
        <Products result={result}/>
    </>
  );
}

export default App;
