import styled from 'styled-components'

const Content = styled.div`
  margin-left: 0;
  padding: 40px;
  max-width: 800px;
  line-height: 1.625;

  li, ul, p {
    a { 
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    margin-left: 140px;
  }

  @media (min-width: 1000px) {
    
    img {
      max-width: 110%;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 200px;
  }

`

export default Content
