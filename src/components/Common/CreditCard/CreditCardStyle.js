import bankingUrl from "../../../assets/image/crystal-diamond.jpg";
import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  /* width: 500px; */
  /* width: 100%; */
  width: 500px;
  height: 250px;
  border: 0.5px solid #ccc;
  margin: 0.5em auto;
  border-radius: 20px;
  overflow: hidden;

  /* background: url(${(props) => props.img}) no-repeat center center/cover; */

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.img}) no-repeat center center/cover;
  }
`;

export const DebitCard = styled.h4`
  position: absolute;
  top: 20px;
  left: 25px;
  font-weight: 600;
  /* color: #fff; */
  color: #000;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const BankName = styled.h4`
  position: absolute;
  top: 20px;
  right: 20px;
  font-style: italic;
  color: #000;
  letter-spacing: 1px;
`;

export const BankNameSpan = styled.span`
  font-weight: 300;
`;

export const Chip = styled.div`
  position: absolute;
  width: 60px;
  height: 45px;
  background: #e9df4e;
  border-radius: 5px;
  top: 60px;
  left: 25px;
  border: 1px solid #000;
  overflow: hidden;
`;

export const ChipH6 = styled.h6`
  &:nth-child(1) {
    width: 25px;
    height: 15px;
    border: 1px solid #000;
    margin-top: -1px;
    border-top: 0px;
    border-left: 0px;
  }
  &:nth-child(2) {
    width: 25px;
    height: 10px;
    border: 1px solid #000;
    margin-top: -1px;
    border-top: 0px;
    border-left: 0px;
  }
  &:nth-child(3) {
    width: 25px;
    height: 10px;
    border: 1px solid #000;
    margin-top: -1px;
    border-top: 0px;
    border-left: 0px;
  }
  &:nth-child(4) {
    width: 25px;
    height: 18px;
    border: 1px solid #000;
    margin-top: -1px;
    border-top: 0px;
    border-left: 0px;
  }
  &:nth-child(5) {
    position: absolute;
    width: 20px;
    height: 10px;
    border-bottom: 1px solid #000;
    top: 0;
    left: 25px;
  }
  &:nth-child(6) {
    position: absolute;
    width: 20px;
    height: 30px;
    border-bottom: 1px solid #000;
    top: 10px;
    left: 25px;
  }
  &:nth-child(7) {
    position: absolute;
    width: 25px;
    height: 10px;
    border: 1px solid #000;
    top: 15px;
    left: 45px;
  }
  &:nth-child(8) {
    position: absolute;
    width: 25px;
    height: 10px;
    border: 1px solid #000;
    border-top: 0px;
    top: 25px;
    left: 45px;
  }
  &:nth-child(9) {
    position: absolute;
    width: 25px;
    height: 15px;
    border: 1px solid #000;
    border-top: 0px;
    top: 35px;
    left: 45px;
  }
`;
