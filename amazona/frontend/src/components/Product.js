import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card>
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
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
