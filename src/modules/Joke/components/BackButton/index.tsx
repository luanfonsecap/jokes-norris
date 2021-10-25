import { useHistory } from 'react-router-dom';

import ArrowBackImg from '../../../../assets/arrow_back.svg';
import { Container } from './styles';

function BackButton() {
  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={history.goBack}>
        <img src={ArrowBackImg} alt="Arrow back" />
      </button>
    </Container>
  );
}

export default BackButton;
