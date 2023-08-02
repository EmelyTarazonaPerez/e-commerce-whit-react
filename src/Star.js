import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import styled from "styled-components";

const Star = ({stars,review }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index 

        return (
            <span key={index}>
                {stars > index + 1
                    ? <FaStar className="icon" />
                    : stars > number
                        ? <FaStar className="icon"  />
                        : <AiOutlineStar className="icon"/>}
            </span>
        )
    })

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>({review} custumer reviews)</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default Star