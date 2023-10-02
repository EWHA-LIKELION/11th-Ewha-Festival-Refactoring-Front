import styled from "styled-components";
import arrow_green3 from "../../assets/icons/arrow-green3.svg";

const EditMenuCard = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <div className="name">이것은 메뉴 이름입니다</div>
          <div className="price">2,000원</div>
        </Content>
        <img src={arrow_green3} />
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
