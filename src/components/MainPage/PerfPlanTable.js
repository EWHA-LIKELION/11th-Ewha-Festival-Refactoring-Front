import React from "react";
import styled from "styled-components";
import {
  tableData1,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  tableData6,
  tableData7,
  tableData8,
} from "../../_mock/tableData";
import tableCircle from "../../assets/images/Main/table-circle.svg";

const PerfPlanTable = ({ selectPlace, selectDay }) => {
  let tableData = [];

  if (selectPlace === "잔디광장") {
    if (selectDay === 11) {
      tableData = tableData1;
    } else if (selectDay === 12) {
      tableData = tableData2;
    }
  } else if (selectPlace === "학문관광장") {
    if (selectDay === 10) {
      tableData = tableData3;
    } else if (selectDay === 11) {
      tableData = tableData4;
    } else if (selectDay === 12) {
      tableData = tableData5;
    }
  } else if (selectPlace === "스포츠트랙") {
    if (selectDay === 10) {
      tableData = tableData6;
    } else if (selectDay === 11) {
      tableData = tableData7;
    } else if (selectDay === 12) {
      tableData = tableData8;
    }
  }

  return (
    <Wrapper>
      {tableData.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <img src={tableCircle} />
            <TimeText>{item.time}</TimeText>
          </TableCell>
          <TableCell>
            <NameText>{item.name}</NameText>
          </TableCell>
        </TableRow>
      ))}
    </Wrapper>
  );
};

export default PerfPlanTable;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableRow = styled.div`
  width: 390px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  padding: 12px 21px 13px 25.5px;
  flex: 1;
  text-align: start;
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  &:last-child {
    border-right: none;
  }

  img {
    width: 13px;
    margin-right: 10px;
  }
`;

const TimeText = styled.span`
  color: var(--black);
  opacity: 1;
`;

const NameText = styled.span`
  color: var(--black);
  opacity: 1;
`;
