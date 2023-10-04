import React, { useState } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeSelect = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return (
    <>
      <Container>
        <InputContainer>
          <div>
            <DatePicker
              selected={startTime}
              onChange={(time) => setStartTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
              className="timeBox"
            />
          </div>
        </InputContainer>
        <FromTo>부터</FromTo>
        <InputContainer>
          <div>
            <DatePicker
              selected={endTime}
              onChange={(time) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
              className="timeBox"
            />
          </div>
        </InputContainer>
        <FromTo>까지</FromTo>
      </Container>
    </>
  );
};

export default TimeSelect;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const InputContainer = styled.div`
  margin: 0 8px;
  .timeBox {
    width: 78.5px;
    height: 45px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }
`;

const FromTo = styled.div`
  color: var(--gray1);
  font-size: 15px;
  font-weight: 300;
  line-height: 160%;
`;
