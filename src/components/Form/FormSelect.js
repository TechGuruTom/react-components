import styled from "styled-components";
import { WithLable } from "../Form";

const SelectWrapper = styled.div`
  width: ${(props) => props.width || "clamp(250px, 50%, 400px)"};
  padding: 10px;
  border: 1px solid red;
  display: flex;

  input {
    width: 100%;
    font-size: 25px;
    padding: 5px;
  }
`;

const FormSelect = ({ lable, ...props }) => {
  console.log("lable", lable);
  const Wrapper = () => (
    <SelectWrapper {...props} className={"select-wrapper"}>
      <input />
    </SelectWrapper>
  );

  if (lable) {
    return (
      <WithLable lable={lable}>
        <Wrapper />
      </WithLable>
    );
  }

  return <Wrapper {...props} />;
};

export { FormSelect };
