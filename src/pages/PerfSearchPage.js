import styled from "styled-components";
import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";

import search_btn from "../assets/images/search/search_btn.svg";
import { useState } from "react";

const PerfSearchPage = () => {
  const [userInput, setUserInput] = useState("");
  const getValue = (e) => {
    setUserInput(e.target.value);
  };

  const [lists, setLists] = useState([]);
  const searched = lists.filter((item) => item.title.includes(userInput));

  return (
    <>
      <TopBar titleText={`공연 검색`} />
      <Wrapper>
        <div className="searchBar">
          <input
            type="text"
            placeholder="공연을 검색해보세요."
            id="search_input"
            onChange={getValue}
          />
          <img src={search_btn} />
        </div>
        <Container>
          <div className="result">
            <div className="searchName">'{userInput}'에 대한 검색 결과</div>
            <div className="count">총 0개의 공연</div>
          </div>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};
export default PerfSearchPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .searchBar {
    width: 330px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    filter: drop-shadow(0px 2px 6px rgba(165, 165, 165, 0.2));
    padding: 0 10px;
    margin: 20px 0;
  }
  input {
    border: none;
    width: 300px;
  }
  input::placeholder {
    font-size: 13px;
    color: var(--green2);
  }
  input:focus {
    outline: none;
  }
`;

const Container = styled.div`
  width: 350px;
  .result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .searchName,
    .count {
      color: var(--gray2);
      font-size: 12.48px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
