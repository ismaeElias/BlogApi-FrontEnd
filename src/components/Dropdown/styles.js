import styled from "styled-components";

export const Container = styled.div`
  position: relative;
 
  & > h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 5px;

    & > svg {
      margin-left: 5px;
    }
  }
`;
export const ArrowStyled = styled.div`
  position: absolute;
  left: 120px;
  top: -8px;
  width : 15px;
  height: 15px;
  background-color: #7971ea;
  transform: rotate(45deg);
  border-top: 1px solid #2c188a;
  border-left: 1px solid #2c188a;
`;
export const ContainerDD = styled.div`
  display: ${(props) => props.theme.display};
  position: absolute;
  top: 40px;
  background-color: #7971ea;
  border: 1px solid #2c188a;
  border-radius: 4px;
  float: left;
  min-width: 150px;

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
    color: #2c188a;
    svg { fill : #2c188a}
  }
  svg {
    margin-right: 10px;
  }
  
`;
