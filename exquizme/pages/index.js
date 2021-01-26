import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer'
import GitHunCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (    
      <QuizBackground backgroundImage={db.bg}>    
        <QuizContainer>
          <Widget>
            <Widget.Header >
              <h1>My page</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, pariatur dolores corporis necessitatibus placeat eius neque assumenda ut, enim cumque aliquid iste a iure. Eveniet corrupti ratione voluptates modi quas.</p>

            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>
        <GitHunCorner projectUrl="https://github.com/Lucas-Lameira/quiz-imersao-next-react-styled-component"/>
      </QuizBackground>    
  )
}
