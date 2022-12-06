// useParams : 파라미터 정보를 가져와 활용 (현재 경로에서 사용되는 모든 파라미터들이 저장되어있음)
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Dropdown, Button} from 'react-bootstrap';
import { HiHeart, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import './ProductDetail.scss'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [heartFill, setHeartFill] = useState(false);
  let {id} = useParams();

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sini1004/LACOSTE/products/${id}`;
    // let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();

    setProduct(data);
  };

  const likeToggle = () => {
    setHeartFill(!heartFill);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={7}>
          <img src={product?.img} alt="" className='detail_img'/>
        </Col>
        <Col xs={12} sm={{ span: 4, offset: 1 }}>

        { product?.new === true ? (<div className='new'>BEST</div>) : ''}
        
          <div className="detail_titleWrap">
            <div className="detail_title">
              {product?.title}
            </div>

            <div className="like" onClick={likeToggle}>
              {heartFill ? <HiHeart className='heartFill'/> : <HiOutlineHeart />}
            </div>
          </div>

            <div className="detail_price">{product?.price}원</div>

            <div>
              <Dropdown className='detail_dropdown'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  사이즈 선택하기
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  { 
                    product?.size.length > 0 &&
                    product.size.map((item)=>(
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
                  {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>

          <Button variant="light" className='detail_shoppingcart'><HiOutlineShoppingCart />쇼핑백에 추가하기</Button>{' '}

        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail