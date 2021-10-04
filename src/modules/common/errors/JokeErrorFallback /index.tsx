import { ErrorBoundary } from 'react-error-boundary';
import Lottie from 'react-lottie';

import animationData from '../../../../assets/connectionAnimation.json';
import { WithChildren } from '../../utils/WithChildren';
import { Button, Container } from './styles';

type HomeErrorFallbackProps = WithChildren;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export function JokeErrorFallback({ children }: HomeErrorFallbackProps) {
  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => (
        <Container>
          <h1>Ops, Chuck roundhouse kicked you!</h1>
          <Lottie options={defaultOptions} height={320} width={320} />
          <Button type="button" onClick={resetErrorBoundary}>
            Reload
          </Button>
        </Container>
      )}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
