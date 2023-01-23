import {Container } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie/";
import { Section } from '../../components/Section'

export function Home(){
  return(
    <Container>
      <Header/>
       
          <Movie data={{
            title: 'O Plano Perfeito',
            genres:[
              {id: '1', name: 'Ação'},
              {id:'2', name: 'Ficção Cientifica'}
            ]
            
            }}
          />
    
    </Container>
  );
}