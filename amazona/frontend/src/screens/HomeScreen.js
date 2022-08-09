import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
//import data from '../data';

// Declaramos la función reducer, la cual será accedida desde el hook useReducer.
// useReducer se implementa en lugar de useState porque permite manejar más posibilidades.
// Como vemos abajo, la función reducer recibe 'state' y 'action'.
// 'state' es el estado de la operacion, 'action' es la acción que se está llevando a cabo en ese momento.
// En este caso, se hace switch/case según la acción que se está llevando a cabo.
// Si el tipo de la acción es 'FETCH_REQUEST', significa que se está procesando una solicitud al backend,
// por lo que devolvemos el estado actual con ...state, el cual mantiene todos sus parámetros anteriores,
// pero modificamos su propiedad 'loading' a true, para que, por ejemplo, se muestre una caja en el medio de la pantalla de 'Cargando...'.
// Si la acción es de tipo 'FETCH_SUCCESS', significa que el backend nos ha respondido con éxito, por lo que procedemos a
// mantener las propiedades de state pero mostramos los productos que el backend nos ha devuelto ('action.payload' muestra todo el data de productos) y establecemos 'loading' a false para que la caja de cargando desaparezca.
// 'FETCH_FAIL' se mostraría en caso de error en la comunicación con el backend, estableciendo 'loading' a falso y mostrando alguna caja de error.
// Por defecto se devuelve el state actual.
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
