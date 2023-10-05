import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import arrow_green3 from "../../assets/icons/arrow-green3.svg";

const EditMenuCard = ({ menuItem }) => {
  const { id, menu, price } = menuItem;

  return (
    <>
      <Wrapper>
        <Link to={`/editmenu/${id}`} style={{ textDecoration: "none" }}>
          <div key={id}>
            <Container>
              <Content>
                <div className="name">{menu}</div>
                <div className="price">{price}원</div>
              </Content>
              <img src={arrow_green3} />
            </Container>
          </div>
        </Link>
      </Wrapper>
    </>
  );
};

export default EditMenuCard;

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  height: 90px;
  box-sizing: border-box;
  padding: 20px;

  border-radius: 4px;
  border: 0.4px solid var(--green1);
  background-color: var(--white);

  margin-bottom: 12px;
`;
const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  img {
    transform: rotate(-90deg);
    width: 20px;
    height: 11.77px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .name {
    color: var(--black);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .price {
    color: var(--black);
    text-align: center;
    font-size: 13px;
    font-weight: 300;
  }
`;
