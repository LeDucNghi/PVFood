import styled from "styled-components";

export const CustomDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size : ${(props) => props.fontSize}px

  position: relative;
  /* top: 50%;
  transform: translateY(-50%); */
  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: red; */
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;

  object-fit: cover;
  margin: 2em 0;
`;

export const Title = styled.h3`
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;

  color: #000;
`;

export const Button = styled.button`
  width: 10em;
  height: 3em;

  border-radius: 12px;
  outline: none;

  background-color: #fdf2f6;
  color: #fff;
  font-weight: 600;
`;
