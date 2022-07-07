import { Field } from "formik";
import styled from "styled-components";

const FieldStyled = styled(Field)`
    border: none;
    background-color: rgb(136, 84, 208, 0.1);
    padding: 5px 25px 5px 5px;
    border-radius: 10px;
    &:focus {
        outline: none;
    }
`;
export const TextFieldWrapper = (props: any) => {
    //const [innerValue, setInnerValue] = useState("");

    return (
        <FieldStyled
            {...props}
            type="text"
            // onChange={(e: any) => setInnerValue(e.target.value)}
            // value={innerValue}
        />
    );
};
