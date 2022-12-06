import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

//Routes는 Route를 감싸주고, 스위치 해주는 역할
//nav는 authenticate, setAuthenticate 전달해줘서 로그인, 로그아웃 표시되게 설정

/**
 * 1. 전체상품페이지(대문페이지), 로그인, 상품 상세페이지
 *  1-1. 네비게이션바
 * 2. 전체상품페이지(대문페이지) : 전체상품을 쭉 나열
 *  2-2. 대문 상품이미지를 클릭하면 디테일 페이지가 나오게
 * 3. 상품 검색 기능
 * 4. 로그인버튼 - 클릭하면 로그인 페이지 나옴
 * 5. 로그인, 로그아웃 토글버튼
 * 6. 상품디테일을 클릭 - 로그인이 안되어있을떄는 로그인페이지가 나옴
 * 7. 로그인이 되어 있을때는 상품디테일페이지를 볼 수 있음
 * 8. 로그아웃기능 - 로그아웃 상태에선 다시 디테일 페이지 볼 수 없음, 로그인페이지 나옴
 * 9. 반응형, 사이드바
 */
function App() {
  //로그인 상태 구분 (처음:로그인 안되있음)
  const [authenticate, setAuthenticate] = useState(false);
  
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='product/:id' element={<PrivateRoute authenticate={authenticate}/>} />
        <Route />
      </Routes> 
    </>
  );
}

export default App;
