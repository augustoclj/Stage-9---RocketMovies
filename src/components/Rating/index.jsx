import { Container } from './styles';
import { IoIosStarOutline, IoIosStar} from 'react-icons/io'

export function Rating({data, ...rest}){

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
          data.rating > i ? <IoIosStar key={i}/> : <IoIosStarOutline key={i}/>
        );
    }

  return(
    <Container>
      {stars}
    </Container>
  );
}