import React, { LabelHTMLAttributes } from 'react';
import Toggle from 'react-toggle';

import MoonIcon from '../../../../assets/moon.png';
import SunIcon from '../../../../assets/sun.png';
import { Container } from './styles';

export type SwitchProps = LabelHTMLAttributes<HTMLLabelElement> & {
  onClick: () => void;
  checked?: boolean;
};

function Switch({ onClick, checked = false }: SwitchProps) {
  return (
    <Container>
      <Toggle
        data-testid="toggleInput"
        defaultChecked={checked}
        onClick={onClick}
        icons={{
          checked: (
            <img
              src={MoonIcon}
              alt="Moon in dark mode"
              width="16px"
              height="16px"
            />
          ),
          unchecked: (
            <img
              src={SunIcon}
              alt="Sun in light mode"
              width="16px"
              height="16px"
            />
          ),
        }}
      />
    </Container>
  );
}

export default Switch;
