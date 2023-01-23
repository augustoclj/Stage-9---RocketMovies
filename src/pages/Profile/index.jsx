import { Container, Form, Avatar} from './styles';
import { Input } from '../../components/Input'
import {FiCamera, FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi';
import { Button } from '../../components/Button';

export function Profile(){
  return(
    <Container>
      <header>
        <a href="#"> <FiArrowLeft/> Voltar</a>
      </header>

      <Form>

        <Avatar>
          <img 
            src="https://github.com/augustoclj.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">

            <FiCamera/>

            <input
              id="avatar"
              type="file"
            />

          </label>


        </Avatar>

        <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />

          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />

          <Input 
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}
          />

          <Input 
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
          />

          <Button disabled title="Salvar"/>
      </Form>
    </Container>
  );
}