import { useState } from "react";
import styled from "styled-components";

import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";
import Booth from "../components/_common/Booth";

import search_btn from "../assets/images/search/search_btn.svg";

import { GetSearchResult } from "../api/booth";

const BoothSearchPage = () => {
  const [userInput, setUserInput] = useState("");
  const getValue = (e) => {
    setUserInput(e.target.value);
  };

  const [lists, setLists] = useState([]);

  const getResult = () => {
    if (userInput) {
      GetSearchResult(1, userInput)
        .then((response) => {
          setLists(response.data);
          console.log(response);
        })
        .catch();
    }
  };

  return (
    <>
      <TopBar titleText={`부스 검색`} />
      <Wrapper>
        <div className="searchBar">
          <input
            type="text"
            placeholder="부스을 검색해보세요."
            id="search_input"
            onChange={getValue}
          />
          <img src={search_btn} onClick={getResult} />
        </div>
        <Container>
          <div className="result">
            <div className="searchName">'{userInput}'에 대한 검색 결과</div>
            <div className="count">총 0개의 부스</div>
          </div>
        </Container>
        <ResultGrid>
          {lists?.map((boothData, index) => (
            <Booth key={index} boothData={boothData} />
          ))}
        </ResultGrid>
      </Wrapper>
      <Footer />
    </>
  );
};
export default BoothSearchPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  min-height: 600px;
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

const ResultGrid = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin-bottom: 40px;
`;
