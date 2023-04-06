import React, { useState } from 'react';

import {
  TiMediaPlay,
  TiMediaPlayReverse,
} from 'react-icons/ti';
import styled from 'styled-components';

import NowTime from './NowTime';

type btnClickProps = {
    btnClickHandler: () => void;
    btnClickRHandler: () => void;
  };


export const Main = styled.div`
    width:300px;
    height: 620px;
    background-color: rgb(224,106,140);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .avator{
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-size:40px;
        cursor:pointer;
        margin-bottom:20px;
    }
    .ProfileImage{
    width:170px;
    border-radius: 50%;
    transition:0.2s all ease-in-out;
    cursor:pointer;
    margin:0 25px;
    }
    .ProfileName{
        font-size: 25px;
        color:white;
        font-weight: bold;
    }
    .hidden{
        color:rgba(255,255,255,0.7);
        font-size:14px;
        font-weight:bold;
        margin-bottom:10px;
    }
`;

export const ModalBackdrop = styled.div`
  position : fixed;
  width:200%;
  height:100%;
  border-radius:10px;
  background-color :rgba(0,0,0,0.3);
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const ModalBtn = styled.button`
  cursor: grab;
  color:white;
    font-weight: bold;
    background-color: rgb(255,174,197);
    border-radius: 5px;
    width:40px;
    padding: 2px;
    text-align: center;
    font-size: 11px;
    margin-top: 10px;
    border:none;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
position:absolute;
z-index:100;
  border-radius : 10px;
  background-color : white;
  display : flex;
  flex-direction:column;
  align-items : center;
  width:200px;
  height:130px;
  padding:15px;

 input{
    border:2px solid black;
    border-radius:5px;
    margin-bottom:15px;
    padding:4px;
    width:180px;
    }
  .exitBtnyes{
    font-size : 11px;
    cursor: pointer;
    background-color:rgb(224,106,140);
    color:white;
    border-radius:5px;
    padding:3px;
    margin-right:5px;
  }
  .exitBtnno{
    font-size : 11px;
    cursor: pointer;
    background-color:rgb(255,214,225);
    color:white;
    border-radius:5px;
    padding:3px;
    margin-left:5px;
  }
  .helloModal{
    font-size : 12px;
    font-weight: bold;
    margin-top:10px;
    margin-bottom:20px;
  }
`;

export const MadeBy = styled.div`
    color :rgba(255,255,255,0.5);
    font-weight: bold;
    position: absolute;
    bottom: 20px;
`;


//카드 뒤집는 애니메이션
const Reverse = styled.div`
  perspective: 300px;
  backface-visibility: hidden;
  transition: 1s;
z-index:0; /*-1로 줘면 애니메이션은 안보이는 대신 모달창을 가리지 않음 */
.item {
      /*카드의 뒷면을 안보이게 처리-카드가 뒤집히면 뒷면이 안보임*/
      backface-visibility: hidden;
      transition: 1s;
    }
    .item.front {
      /* 앞면 카드가 부유하게 되어, 뒷면 카드가 아래에서 위로 올라감 -> 요소 두개가 겹치게 됨*/
      position: absolute;
      /* 명시적으로 기본값 설정, 없어도 됨*/
      transform: rotateY(0deg);
    }
    &:hover .item.front {
      transform: rotateY(180deg);
      z-index:2;
    }
   .item.back {
      /*y축을 중심으로 -180도 회전*/
      transform: rotateY(-180deg);
    }
    &:hover .item.back {
      transform: rotateY(0deg);
    }
`;

function Profile(props: btnClickProps) {
    const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };
  const [value, setValue] = useState('박희진');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const [hidden, setHidden] = useState({visibility: 'hidden'} as React.CSSProperties);
  const mouseoverHandler = () => {
    setHidden({visibility: 'inherit'});
  }
  const mouseleaveHandler= () => {
    setHidden({visibility: 'hidden'});
  }

  const [a,setA] = useState(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item front" alt="" src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"></img>);
  const [b,setB] = useState(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item back" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DJdzcB8-toRp4tSg-v14YkL0t1INu-kdcA-UYE3lz6D_cZaprYKm26E9FDTk2ADPRjo&usqp=CAU"></img>);
  const[mainColor, setMainColor] = useState({backgroundColor:"rgb(224,106,140)"});
  const[changeColor, setChangeColor] = useState({backgroundColor:"rgb(255,174,197)"});
  const[cancelColor, setCancelColor] = useState({backgroundColor:"#FFD6E1"});
  const clickHandler = () => {
    //이미지src, Main 색깔바꾸기, add버튼 색, todo박스 색, 변경닉네임확인버튼 색 바꾸기
    setMainColor({backgroundColor:"#913cff"});
    setChangeColor({backgroundColor: "#c192ff"})
    setCancelColor({backgroundColor: "#E9D9FF"})
    setA(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item front" alt="" src="https://item.kakaocdn.net/do/4f457e7df2f7242fc74ec4667b4bccb59f5287469802eca457586a25a096fd31"></img>)
    setB(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item back" alt="" src="https://i.pinimg.com/474x/dc/88/77/dc8877e29f1804d55d0c12242d2aec0b.jpg"></img>);
  }
  const clickReverseHandler = () => {
    setMainColor({backgroundColor:"rgb(224,106,140)"});
    setChangeColor({backgroundColor: "rgb(255,174,197)"})
    setCancelColor({backgroundColor: "#FFD6E1"})
    setA(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item front" alt="" src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"></img>);
    setB(<img onMouseOver={mouseoverHandler} onMouseLeave={mouseleaveHandler} className="ProfileImage item back" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DJdzcB8-toRp4tSg-v14YkL0t1INu-kdcA-UYE3lz6D_cZaprYKm26E9FDTk2ADPRjo&usqp=CAU"></img>);
  };
    return (
        <Main style={mainColor}>
            <NowTime/>
            
            <span style={hidden} className='hidden'>화살표를 클릭해보세요!</span>
            <div className='avator'>
            
            <TiMediaPlayReverse onClick={() => {clickReverseHandler(); props.btnClickRHandler();}} />
            <Reverse>{a}{b}</Reverse>
            <TiMediaPlay onClick={() => {clickHandler(); props.btnClickHandler();}} />
            </div>
            <span className="ProfileName">{value}</span>
            <ModalBtn style={changeColor} className="ProfileNameChange"  onClick={openModalHandler}>변경</ModalBtn>
            <MadeBy>Made By hihijin</MadeBy>

            {isOpen === true ? 
            <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <div className='helloModal'>변경할 닉네임을 입력해주세요</div>
            <input onChange={onChange} value={value}/>
            <div>
            <span style={mainColor} className='exitBtnyes' onClick={openModalHandler}>확인</span>
            <span style={cancelColor} className='exitBtnno' onClick={openModalHandler}>취소</span>
            </div>
            </ModalView>
            </ModalBackdrop>
            :null}
            
        </Main>
    )
}

export default Profile;