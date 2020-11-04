import styled from 'styled-components';
import { shade } from 'polished';

interface TitleProps {
    color: string;
}

export const Title = styled.h1<TitleProps>`
    font-size: 48px;
    max-width: 450px;
    margin-top: 80px;
    line-height: 56px;
    color: ${props => props.color};

    &:hover {
        color: ${props => shade(0.5, props.color)};};
    }
`;
