import { Container} from './styles';


export function Movie({ data, ...rest}){
  return(
    <Container>
      <h2>{ data.title }</h2>
      {
        data.tags &&
        <footer>
          {data.genres.map(genre =>{
            <span key={genre.id}>
              {genre.name}
            </span>
          })}
        </footer>
      }
    </Container>
  );
}