import React from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  border-radius : 3px;
  ${(props) => 
    props.primary && css`
      background: #009cd5;
      color: white;
    `
  }
  
`

export default function App() {

  return (
    <>
      <Container>
        <Button>nomal</Button>
        <Button primary>primary</Button>
      </Container>
      <div>
        <h1 className="text-3xl ">안녕222</h1>
      </div>
    </>
  );
}

