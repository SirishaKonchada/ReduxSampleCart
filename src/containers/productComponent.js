import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap'

const ProductComponent = ()=>{
    const products = useSelector(state => state.allProducts.products)
    const renderList = products.map(product =>{
        const {id,title,image,price,category} = product;
        return( 
             <Col >
                <Link to={`/product/${id}`} >
                  <Card style={{ width: '18rem',margin:'5px' }}>
                      <Card.Img  src={image} width="200px" height="200px" />
                      <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>${price}</Card.Text>
                          <Card.Text>{category}</Card.Text>
                      </Card.Body>
                  </Card>
                </Link>
              </Col>
          )
        })  

    return(
        <Container><Row >{renderList}</Row ></Container>
    ) 
}

export default ProductComponent;

// var movies = ()=>{
//     axios.get(`https://jsonmock.hackerrank.com/api/movies?year=${year}`)
//     .then(res=>{
//       setList(res.data.data)
//     })
//   }