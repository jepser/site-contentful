import styled from 'styled-components'

const Wrap = styled.div`
  text-align: center;
  padding: 30px 0 30px;
`

const Paragraph = styled.p`
  text-decoration: ${props => (props.strike ? 'line-through' : 'none')};
`

const Notice = () => {
  return (
    <Wrap>
      ·
      <br />
      <br />
      <Paragraph>📚</Paragraph>
      <Paragraph>
        <a href="https://dev.to/jepser/2-functions-that-made-my-components-responsive-10fb">2 functions that made my components responsive</a> at The practical dev.
      </Paragraph>
      <Paragraph>
        <a href="https://www.contentful.com/blog/2019/02/27/wordpress-move-contentful-static-site/">From WordPress to static site—the Contentful way</a> at Contentful's blog.
      </Paragraph>
      <Paragraph>
        <a href="https://www.typeform.com/blog/inside-story/coders-cut/">Coders Cut: The conversational article</a> at Typeform's blog.
      </Paragraph>
      <Paragraph>📹</Paragraph>
      <Paragraph>
        <a href="https://www.youtube.com/watch?v=3IU2UPNn60M">The journey of a new interface</a> at Frontend Connect.
      </Paragraph>
      <Paragraph>
        <a href="https://wordpress.tv/2018/05/16/jepser-bernardino-sitios-web-estaticos-con-wordpress-y-react/">Jepser Bernardino: Sitios web estáticos con WordPress y React</a> at WordPress.tv.
      </Paragraph>
      <Paragraph>
        <a href="https://wordpress.tv/2018/04/22/jepser-bernardino-styled-components-por-que-css-en-javascript/">Jepser Bernardino: Styled components ¿Por qué css en javascript?</a> at WordPress.tv.
      </Paragraph>
      
    </Wrap>
  )
}

export default Notice
