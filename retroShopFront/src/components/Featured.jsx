
import { Link } from 'react-router-dom';
import Cards from './Cards';

import useProducts from '../Hook/useProducts'; // Update the path to your useProducts hook

const Featured = ({ type }) => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="featured">
      <div className="top_featured">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, reprehenderit asperiores
          provident vitae ea iure quisquam doloremque exercitationem itaque beatae numquam est quos
          magni temporibus sequi minus? Totam, eveniet soluta.
        </p>
      </div>
      <div className="bottom_featured">
        {products.map((item) => (
          <Link key={item.id} className="link_cards" to={`/product/${item.id}`}>
            <Cards item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
