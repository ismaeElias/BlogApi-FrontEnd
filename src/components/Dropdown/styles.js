import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & > h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > svg {
      margin-left: 5px;
    }
  }
`;

export const ContainerDD = styled.div`
  display: ${(props) => props.theme.display};
  position: absolute;
  background-color: #7971ea;
  border: 1px solid #2c188a;
  border-radius: 4px;
  float: left;
  min-width: 130px;

  & > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-weight: bold;
    padding: 7px;
    color: #fff;
  }

  & > a:nth-child(1) {
    border-bottom: 1px solid #2c188a;
  }

  & > a:hover {
    background-color: #2c188a;
  }
  svg {
    margin-right: 10px;
  }
`;
