import styled from "styled-components"
import {mobile} from "../reponsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #ccc;
    ${mobile({width:"75%"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    padding: 20px 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
               By Creating an account.i consent to the processing of my personal data accordance with the  <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
