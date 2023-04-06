import React, { useState } from 'react';

import {
  TiBatteryCharge,
  TiWiFi,
} from 'react-icons/ti';
import Moment from 'react-moment';
import styled from 'styled-components';
import { useInterval } from 'use-interval';

export const Time = styled.div`
    font-size:28px;
    font-weight:bold;
    color:rgba(255,255,255,0.7);
    position:absolute;
    top:5px;
    left:10px;
    display:flex;
    align-items:center;
   word-spacing:25px;
   width:95%;
   .hidden{
    visibility:hidden;
   }
   .moment-box{
    font-size:19px;
   }
`;


const NowTime: React.FC = () => {
    const [nowTime,setNowTime]=useState(Date.now());

    useInterval(()=>{
        setNowTime(Date.now())
    },1000)

    return (
        <div>
        <Time>
            <TiWiFi/> <span className='hidden'>" " " "</span>
            <Moment format={"HH:mm:ss"} className={'moment-box'}>{nowTime}</Moment>
            <span className='hidden'>" " " "</span>
             <TiBatteryCharge/>
        </Time>
        </div>
    );
}
export default NowTime;