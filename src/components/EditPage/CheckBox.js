import styled from "styled-components";
import checkbox_empty from "../../assets/images/edit/checkbox_empty.svg";
import checkbox_full from "../../assets/images/edit/checkbox_full.svg";

const CheckBox = () => {
  return (
    <>
      <Wrapper>
        <input type="checkbox" id="checker1" />
        <label for="checker1" style={{ margin: "0 5px" }}>
          10일 수요일
        </label>
      </Wrapper>
    </>
  );
};
export default CheckBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    cursor: pointer;
    display: block;

    height: 24px;
    padding-left: 23px;
    background: url("../../assets/images/edit/checkbox_empty.svg") no-repeat 0
      0px / contain;
  }
  input[type="checkbox"]:checked + label {
    background: url("../../assets/images/edit/checkbox_full.svg") no-repeat 0
      0px / contain;
  }
`;
