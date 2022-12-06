//$npm install react-icons --save : react-icon 설치
//$yarn add sass : sass 설치
// 참고 사이트 : https://www.npmjs.com/package/json-server#getting-started
//db.json 파일을 프로젝트 폴더에 넣어준다.
//npm install -g json-server : json server 설치
//$ json-server --watch db.json --port 5000 : 작동 (로컬서버를 할 경우)

/**
 * 로그인버튼 클릭 시 로그인 페이지로 이동
 * 
 * nav는 authenticate, setAuthenticate 전달받아서 로그인, 로그아웃 표시되게 설정
 */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { CgClose, CgMenu } from 'react-icons/cg';
import './Navbar.scss';
import { useState } from 'react';

const Navbar = ({authenticate, setAuthenticate}) => {
  const [sideState, setSideState] = useState('-100%');

  const menuList = ['New','Men','Women','Kids','Sale','Polo','Collections','나의 라코스테','We are Lacoste'];

  const navigate = useNavigate();

  const search = (event) => {
    if(event.key === 'Enter') { //Enter 키 눌렀을 때 반응
      let keyword = event.target.value; //event 안에 value가 있음
      console.log('키워드', keyword);
      navigate(`/?q=${keyword}`);
    }
  }

  const gotoLogin = () => { //authenticate 가 false 인 상태
    navigate('/login');
  }

  return (
    <div>
      <div className="side_menu" style={{left:sideState}}>
        <div className="closeBtnWrap">
          <CgClose className="closeBtn" 
            onClick={() => {
              setSideState('-100%');
            }}
          />
        </div>
        <ul className='side_menu_list'>
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="burger_menu hide">
        <CgMenu 
          onClick={() => {
            setSideState('0')
          }}
        />
      </div>


      <div className='login_btnWrap'>
        { authenticate ? (
          <div className='login_btn' onClick={() => {setAuthenticate(false)}}>
            <BiLogOut /> <span>로그아웃</span>
          </div>
        ) : (
          <div className='login_btn' onClick={gotoLogin}>
            <BiLogIn /> <span>로그인</span>
          </div>
        ) }
        {/* <div className='login_btn' onClick={gotoLogin}>
          <BiLogIn /> <span>로그인</span>
          <BiLogOut /> <span>로그아웃</span>
        </div> */}
      </div>

      <h1>
        <Link to='/'> 
          <div className='img_wrap'>
            <img src="../img/logo.png" alt="LACOSTE" />
          </div>
        </Link>
      </h1>

      <nav>
        <ul className='menu_list'>
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className='search'>
          <BiSearch />
          <input 
            type="text" 
            placeholder='제품검색' 
            onKeyPress={(event) => search(event)}
          />
        </div>
      </nav>


    </div>
  )
}

export default Navbar