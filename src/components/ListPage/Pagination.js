import React from "react";
import { styled } from "styled-components";

import beforeEmpty from "../../assets/images/List/previous-empty.svg";
import beforeFilled from "../../assets/images/List/previous-filled.svg";
import nextEmpty from "../../assets/images/List/next-empty.svg";
import nextFilled from "../../assets/images/List/next-filled.svg";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <Wrapper>
      <Button onClick={() => setPage(page - 1)}>
        <img src={page === 1 ? beforeEmpty : beforeFilled} />
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </PageButton>
        ))}
      <Button onClick={() => setPage(page + 1)}>
        <img src={page === numPages ? nextEmpty : nextFilled} />
      </Button>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: transparent;
  color: var(--black);
  font-size: 11px;
  cursor: pointer;

  &[disabled] {
    color: #bcb8b4;
  }
`;

const PageButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: transparent;
  color: #bcb8b4;
  font-size: 11px;
  cursor: pointer;

  &[current] {
    color: var(--black);
  }
`;
