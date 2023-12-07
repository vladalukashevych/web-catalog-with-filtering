import {useState} from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// Database
import products from "./db/data";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    //---------------Input Filter---------------
    const[query, setQuery] = useState("");

    const handleInputChange = event => {
        setQuery(event.target.value)
    };

    const filteredItems = products.filter(
        product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
    );

    //---------------Radio Filter---------------
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    };

  return (
    <>
        <Sidebar />
        <Navigation />
        <Recommended />
        <Products />
    </>
  );
}

export default App;
