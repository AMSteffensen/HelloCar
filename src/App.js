import React from "react";
import { FaCar } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.section`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background: #eee;
  text-align: center;
  width: 80%;
  margin: 1em auto;
  padding: 1em 5%;
  background: #fff;
  position: relative;

  h1 {
    font-size: 40px;
    color: red;
  }

  p {
    margin-bottom: 1em;
  }
`;

const Inner = styled.section`
  position: relative;
  z-index: 2;
`;

const Icon = styled.section`
  content: "\f087";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  position: absolute;
  font-size: 400px;
  color: lightblue;
  top: 50%;
  left: 50%;
  margin: -200px 0 0 -200px;
  z-index: -1;
`;

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>Hello Car</h1>
        <Inner>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante.{" "}
          </p>
          <p>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo. Quisque sit amet est et
            sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
            commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
            enim ac dui.{" "}
          </p>
          <p>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo. Quisque sit amet est et
            sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
            commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
            enim ac dui.{" "}
          </p>
          <Icon>
            <FaCar />
          </Icon>
        </Inner>
      </Wrapper>
    </div>
  );
}
