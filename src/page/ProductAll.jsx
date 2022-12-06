//부트스트랩
//npm install react-bootstrap bootstrap

/**
 * 검색기능 추가
 * useParams : react router 사용시
 * useSearchParams : 
 * 주소 뒤에 /?q=파라미터
 */

import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {useSearchParams} from 'react-router-dom'

const ProductAll = () => {
  const [productsList, setProductsList] = useState([]);

  let [query, setQuery] = useSearchParams(); //주소 뒤 파라미터

  const getProducts = async() => {
    let keyword = query.get(`q`) || ''; //쿼리값을 읽어옴. q의 value(아이템을 가져옴) \ 없을 땐 빈 스트링
    let url = `https://my-json-server.typicode.com/sini1004/LACOSTE/products?q=${keyword}`;
    // let url = `http://localhost:5000/products?q=${keyword}`;
    
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();

    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); //키워드를 입력할 때 마다 getProducts함수 실행

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((menu)=>(
            <Col lg={3} sm={6} >
              <ProductCard item = {menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll