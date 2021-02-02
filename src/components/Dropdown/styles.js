import styled from 'styled-components';

export const Container = styled.div`
  position : relative;
`;

export const ContainerDD = styled.div`
  display : ${props => props.open ? "none" : "block"};
  position : absolute;
  background-color : #7971ea;
  border: 1px solid #2C188A;
  border-radius: 4px;
  float: left;
  min-width : 115px;

  & > a {
    text-decoration : none;
    padding: 5px;
    color : #FFF;
    display: block;
  }

  & > a:nth-child(1){
    border-bottom: 1px solid #2C188A;
  }

  & > a:hover {
    background-color: #2C188A;
  }
`;