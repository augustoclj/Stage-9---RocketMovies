import { Container } from './styles';

export function Button({icon: Icon, title , disabled = false, ...rest}){
  return(

    <Container 
      type="button"
      disabled={disabled}
    >
    { Icon && <Icon size={20} /> }
    {title}
  </Container>
    );
}