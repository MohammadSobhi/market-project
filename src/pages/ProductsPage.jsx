import React from "react";
import { getProducts } from "../api";
import { Link } from "react-router-dom"


export default function Products() {
    const [cards,setCard] = React.useState([])
    const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(page);
        setCard(data.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page]);


  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };


    return(
        <div className="first-container">
        <div className="container">
            <aside className="filters">
                <h2>Filter By</h2>
                <ul>
                    <li>
                        <details>
                            <summary>Size</summary>
                            <ul>
                                <li><a href="#">Small</a></li>
                                <li><a href="#">Medium</a></li>
                                <li><a href="#">Large</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Color + Print</summary>
                            <ul>
                                <li><a href="#">Red</a></li>
                                <li><a href="#">Blue</a></li>
                                <li><a href="#">Green</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Gender</summary>
                            <ul>
                                <li><a href="#">Boys</a></li>
                                <li><a href="#">Girls</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Product Type</summary>
                            <ul>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Bottoms</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Price</summary>
                            <ul>
                                <li><a href="#">$0 - $50</a></li>
                                <li><a href="#">$50 - $100</a></li>
                                <li><a href="#">$100+</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </aside>
            <section className="products">
                <div className="sort">
                    <span>Sort by</span>
                    <select>
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
                <div className="product-grid">
                
                {cards.map(card =>(
                    <div className="product-item">
                        <img src={card.photo} alt={card.title}/>
                        <h3>{card.title}</h3>
                        <p>${card.price}</p>
                        <p><Link to={`${card.id}`}>product details</Link></p>
                    </div>
                ))}

                </div>
            </section>
        </div>
        <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                <span>Page {page}</span>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
};
