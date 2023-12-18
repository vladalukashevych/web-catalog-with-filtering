import "./style.css"
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/SmallComponents/Card";

import products from "../db/data";
import Footer from "../components/Footer/Footer";
import {setQuery, setSelectedCategory} from "../toolkitRedux/productsSlice";
import { useDispatch, useSelector } from "react-redux";


function ProductsPage() {

    const dispatch = useDispatch();
    const { selectedCategory, query } = useSelector((state) => state.products);

    //---------------Input Filter---------------

    const handleInputChange = (event) => {
        dispatch(setQuery(event.target.value));
    };

    const filteredItems = products.filter(
        product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    //---------------Radio Filter---------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(setSelectedCategory({ ...selectedCategory, [name]: value }));
    };


    //---------------Buttons Filter---------------

    const handleClick = (event) => {
        const clickedButton = event.target;
        const name = event.target.name;
        const value = event.target.value;

        dispatch(setSelectedCategory({ ...selectedCategory, [name]: value }));

        // Changing color
        const btns = clickedButton.parentNode.childNodes;
        btns.forEach((element) => element.classList.remove('recommended-selected'));
        clickedButton.classList.toggle('recommended-selected');
    };

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

      return filteredProducts.map(({img, title, stars, reviews, newPrice, prevPrice}) => (
        <Card 
        key={Math.random()}
        img={img}
        title={title}
        stars={stars}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ));
    }

    const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="wrapper-products">
          <Sidebar handleChange={handleChange}/>
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended  handleClick={handleClick}/>
          <Products result={result}/>
          <Footer />
      </div>
    </>
  );
}

export default ProductsPage;
