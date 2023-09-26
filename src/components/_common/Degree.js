import styled, {css} from 'styled-components';

const degrees = {
  light: {
    backGround: '#4C68FA',
    label: '여유',
  },
  heavy: {
    backGround: '#FF3838',
    label: '혼잡',
  },
};

const degreesStyles = css`
  ${({degree}) => css`
    background: ${degrees[degree].backGround};
  `}
`;

const sizes = {
  large: {
    width: '39px',
    height: '18px',
    fontSize: '11px',
    borderRadius: '30px',
  },
  small: {
    width: '28px',
    height: '13px',
    fontSize: '8px',
    borderRadius: '25.814px',
  },
};

const sizeStyles = css`
  ${({size}) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    border-radius: ${sizes[size].borderRadius};
  `}
`;

const StyledButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  border: none;

  ${sizeStyles}
  ${degreesStyles}
`;

Degree.defaultProps = {
  degree: 'light',
  size: 'small',
};

export default function Degree({size, degree}) {
  return (
    <StyledButton size={size} degree={degree}>
      {degrees[degree].label}
    </StyledButton>
  );
}
