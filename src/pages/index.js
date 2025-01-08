import React, { useState } from 'react';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const products = [
    {
      id: 1,
      category: ['.oranges', '.fresh-meat'],
      imgSrc: 'img/featured/feature-1.jpg',
      title: 'Crab Pool Security',
      price: '$30.00',
    },
    {
      id: 2,
      category: ['.oranges'],
      imgSrc: 'img/featured/feature-2.jpg',
      title: 'Fresh Orange',
      price: '$40.00',
    },
    {
      id: 3,
      category: ['.fresh-meat'],
      imgSrc: 'img/featured/feature-3.jpg',
      title: 'Fresh Chicken',
      price: '$35.00',
    },
    {
      id: 4,
      category: ['.fastfood'],
      imgSrc: 'img/featured/feature-4.jpg',
      title: 'French Fries',
      price: '$15.00',
    },
    {
      id: 5,
      category: ['.vegetables'],
      imgSrc: 'img/featured/feature-5.jpg',
      title: 'Pineapple',
      price: '$25.00',
    },
  ];

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <img
              src="/img/banner/banner-2.jpg"
              alt="Banner"
              className="img-fluid"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <section className="featured spad">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="section-title">
                <br />
                <br />
                <center>
                  <h2>Featured Products</h2>
                </center>
              </div>
              <div className="featured__controls">
                <ul
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: 0,
                    margin: 0,
                    listStyleType: 'none',
                  }}
                >
                  <li
                    className={activeFilter === '*' ? 'active' : ''}
                    onClick={() => handleFilterClick('*')}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    All
                  </li>
                  <li
                    className={activeFilter === '.oranges' ? 'active' : ''}
                    onClick={() => handleFilterClick('.oranges')}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Oranges
                  </li>
                  <li
                    className={activeFilter === '.fresh-meat' ? 'active' : ''}
                    onClick={() => handleFilterClick('.fresh-meat')}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Fresh Meat
                  </li>
                  <li
                    className={activeFilter === '.vegetables' ? 'active' : ''}
                    onClick={() => handleFilterClick('.vegetables')}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Vegetables
                  </li>
                  <li
                    className={activeFilter === '.fastfood' ? 'active' : ''}
                    onClick={() => handleFilterClick('.fastfood')}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Fastfood
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row featured__filter">
            {products.map((product) => (
              <div
                key={product.id}
                className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category.join(
                  ' '
                )} ${
                  activeFilter === '*' || product.category.includes(activeFilter)
                    ? ''
                    : 'd-none'
                }`}
              >
                <div className="featured__item">
                  <div
                    className="featured_item_pic"
                    style={{ position: 'relative' }}
                  >
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                  <div className="featured_item_text">
                    <h6>
                      <a href="#">{product.title}</a>
                    </h6>
                    <h5>{product.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
