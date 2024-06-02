//Login.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  text-align: center;
  @media all and (min-width:1024px) and (max-width:1279px) { 
    background-color: pink;
  } 

  @media all and (min-width:769px) and (max-width:1023px) { 
    background-color: green;
  } 

  @media all and (min-width:481px) and (max-width:768px) {
    background-color: blue;
  } 

  @media all and (max-width:480px) {
    background-color: yellow;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  width: 220px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.primary ? '#5cb85c' : '#0275d8'};
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? '#4cae4c' : '#025aa5'};
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;




function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button onClick={handleLogin}>로그인</Button>
      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
}

export default Login;
