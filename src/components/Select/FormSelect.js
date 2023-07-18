import styled from "styled-components";
import { WithLable } from "../Form";

const SelectWrapper = styled.div`
  width: ${(props) => props.width || "100%"};

  display: flex;

  input {
    width: 100%;
    font-size: 25px;
    padding: 5px;
  }
`;

const FormSelect = ({ lable, ...props }) => {
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
