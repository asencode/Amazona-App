import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            {/**
             * Link es un elemento de react-router-dom que evita los refrescos de la pagina en enlaces.
             * En lugar del tag "a" para acceder a un enlace, se indica "Link". De este modo tendremos
             * un sitio web que no refresca, tendremos una SPA (Single Page Application).
             * Por lo que, en lugar de:
             *
             * <a href={`/product/${product.slug}`}>
             *  <img src={product.image} alt={product.name} />
             * </a>
             *
             * Indicamos lo que se muestra debajo:
             */}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
