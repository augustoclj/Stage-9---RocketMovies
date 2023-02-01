import { Container} from './styles';
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

export function Movie({ data, ...rest}){
  return(
    <Container>
      <h2>{ data.title }</h2>
      <Rating data={data}/>
      <p> {data.description} </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.name} title={tag.name}/> )
          }
        </footer>
      }
    </Container>
  );
}