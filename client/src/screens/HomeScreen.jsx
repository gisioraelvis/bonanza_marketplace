import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = ({ match }) => {
    
  
  return (
    <>

          <Row>
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
          </Row>
    </>

        
      )
  
}

export default HomeScreen;