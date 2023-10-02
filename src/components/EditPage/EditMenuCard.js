import styled from "styled-components";
import arrow_green3 from "../../assets/icons/arrow-green3.svg";

import { Link } from "react-router-dom";
import { MenuDetailData } from "../../_mock/MenuDetailData";
import { useState } from "react";

const EditMenuCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
  };

  return (
    <>
      <Wrapper>
        <Content>
          {/* {MenuDetailData.map((id) => (
            <Link key={id} to={`/booth/edit/1/${id}`}>
              <div className="name">{MenuDetailData[id].name}</div>
              <div className="price">{MenuDetailData[id].price}원</div>
            </Link>
          ))} */}
          <div className="name">덕고지</div>
          <div className="price">2,000원</div>
        </Content>
        <img src={arrow_green3} onClick={handleClick} />
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  border: 0.4px solid var(--green1);
  background-color: var(--white);

  margin-bottom: 12px;

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
