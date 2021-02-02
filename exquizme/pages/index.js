import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head'

import db from '../db.json'
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer';
import GitHunCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button'
//import QuizContainer from '../src/components/QuizContainer'

const QuizContainer = styled.div`
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
  const router = useRouter();
  let [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  function handleChangeInput(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (    
    <QuizBackground backgroundImage={db.bg}>    
     <Head>
        <title>{db.title}</title>
      </Head>      
      <QuizContainer>      
        <QuizLogo/>

        <Widget>          
          <Widget.Header >
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleSubmit}>
              <Input 
                type="text" 
                placeholder="Digite seu nome para jogar XD"
                onChange={handleChangeInput}
                name="Nome do usuario "
                value={name}
                />
              <Button type="submit" disabled={!name}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        
        <Footer />
      </QuizContainer>
      <GitHunCorner projectUrl="https://github.com/Lucas-Lameira/quiz-imersao-next-react-styled-component"/>
    </QuizBackground>    
  )
}
