import React from "react";
import styled from "styled-components";
import { tableData1 } from "../../_mock/tableData";
import { tableData2 } from "../../_mock/tableData";
import tableCircle from "../../assets/images/Main/table-circle.svg";

const PerfPlanTable = () => {
  return (
    <Wrapper>
      {tableData1.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <img src={tableCircle} />
            {item.time}
          </TableCell>
          <TableCell>{item.name}</TableCell>
        </TableRow>
      ))}
    </Wrapper>
  );
};

export default PerfPlanTable;

const Wrapper = styled.div``;
const TableRow = styled.div`
  border-bottom: 1px solid var(--black);
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  padding: 10px;
  text-align: center;
  border-right: 1px solid var(--black);
  opacity: 0.5;

  &:last-child {
    border-right: none;
  }

  img {
    width: 13px;
    margin-right: 5px;
  }
`;
