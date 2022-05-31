import { StatArrow, StatHelpText } from '@chakra-ui/react';
import React from 'react';


export interface TextColor  {
  color:string,
  text:string,
}

const TextWithCircleColor: React.FC<TextColor> = (props) => {
  return (
    <StatHelpText>
    <StatArrow type='increase' />
     {props.text}
  </StatHelpText>)
};

export { TextWithCircleColor };
