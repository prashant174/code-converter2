import styled from 'styled-components'
import {animated} from '@react-spring/web'
import { motion } from 'framer-motion';

const Container=styled(animated.div)`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://source.unsplash.com/1600x900/?technology,ai') no-repeat center center/cover;
  color: #58a6ff;
  
`
const Form = styled(motion.form)`
background: rgba(0, 0, 0, 0.8);
padding: 2rem;
border-radius: 10px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
width: auto;
text-align: center;
// border:1px solid red;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #333;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  margin: 10px 0;
`;
const TogglePasswordButton = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
`;

export {
    Container,
    Form,
    Input,
    Button,
    InputWrapper,
    TogglePasswordButton
}