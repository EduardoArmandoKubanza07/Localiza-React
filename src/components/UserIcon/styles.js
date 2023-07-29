import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: ${(props) => props?.color ?? "transparent"};
  }

  > svg,
  img {
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    color: #dddddd;
  }
`;
