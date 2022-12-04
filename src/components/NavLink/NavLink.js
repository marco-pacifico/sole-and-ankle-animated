import React from 'react';
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants';

const NavLink = ({href, children}) => {
    return (
        <Wrapper href={href}>
            <MainText> {children} </MainText>
            <HoverText> {children} </HoverText>
        </Wrapper>
    );    
};


const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  
  &:first-of-type {
    color: var(--color-secondary);
  }

`;

const Text = styled.span`
    display:inline-block;
    transform: translateY(var(--translate-from));
    transition: transform 500ms;
    
    ${Wrapper}:hover & {
        transform: translateY(var(--translate-to));
    }
`

const MainText = styled(Text)`
    --translate-from: 0%;
    --translate-to: -100%;
`

const HoverText = styled(Text)`
    --translate-from: 100%;
    --translate-to: 0%;
    font-weight: ${WEIGHTS.bold};
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
`






export default NavLink;