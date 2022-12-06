// 상품 클릭 시 클릭한 상품에 해당하는 ProductDetail페이지로 넘어가게
import React from 'react'
import { useNavigate } from "react-router-dom";
import './ProductCard.scss'

const ProductCard = ({item}) => {
  const aa = useNavigate(); 
  const showDetail = () => {
    aa(`/product/${item.id}`)
  }

  return (
    <div className='ProductCard'>
      <div className='img_container' onClick={showDetail}>
        <img src={item?.img} alt="item01" />
        <div className='item_box'>
          { item?.choice === true ? (<div className='event'>MD추천</div>) : ''}
          {/* <div className='event'>MD추천</div> */}
          { item?.new === true ? (<div className='new'>BEST</div>) : ''}
          {/* <div className='new'>BEST</div> */}
        </div>
      </div>

      <div className='title'>{item?.title}</div>
      <div className='price'>{item?.price}원</div>
    </div>
  )
}

export default ProductCard