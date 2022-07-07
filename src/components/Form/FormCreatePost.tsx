import { Form, Formik } from "formik";
import Description from "../PostSettings/Description";
import DateOfPosting from "../PostSettings/DateOfPosting";
import Tags from "../PostSettings/Tags";
import { TitleStyled } from "../Title/TitleStyled";
import Button from "../Button";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FormikStyled = styled(Form)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const FormCreatePost = ({
    initialValues,
    validationSchema,
    onSubmitForm,
}: any) => {
    return (
        <div className="container">
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitForm}
            >
                {(formik) => (
                    <FormikStyled>
                        <TitleStyled
                            fontSize="20px"
                            fontWeight="bold"
                            textAlign="center"
                            margin="10px 0"
                        >
                            Create Post
                        </TitleStyled>
                        {/* <ListImage listImage={null} /> */}
                        <input
                            name="uploader"
                            type="file"
                            onChange={(event) => {
                                const files = event.target.files;
                                formik.setFieldValue("profile", files);
                            }}
                            multiple
                        />
                        <Description description={null} name="desc" />
                        <DateOfPosting
                            dateOfPosting={null}
                            title={"Date of Posting"}
                        />

                        <Tags tags={null} valuesTags={formik.values.tags} />
                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                padding={"10px 20px"}
                                color={"#fff"}
                                alignItems={"center"}
                                backgroundColor={" #634bff"}
                                type="submit"
                            >
                                <span>Create</span>
                                <CheckCircleOutlined className="icon" />
                            </Button>
                            <Button
                                padding={"10px 20px"}
                                color={"#fff"}
                                alignItems={"center"}
                                backgroundColor={"#634bff"}
                                type="reset"
                            >
                                <span>Reset</span>
                                <CloseCircleOutlined className="icon" />
                            </Button>
                        </div>
                    </FormikStyled>
                )}
            </Formik>
        </div>
    );
};

export default FormCreatePost;
