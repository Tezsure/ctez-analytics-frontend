import { Button, ButtonGroup, Flex, Skeleton, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCtezGraphctez, usePriceStats } from "../../api/analytics";
import { TextWithCircleColor } from "../../components/analytics/textWithColorCircle";
import TwoLineChart from "../../components/graph/two-line-chart";
import GraphTwoLine from "../../components/graph/TwoLineGraph";
import { useThemeColors } from "../../hooks/utilHooks";

const GraphCtez: React.FC = () => {
    const [textcolor] = useThemeColors(['homeTxt']);
    const [textHighlight] = useThemeColors(['sideBarBg']);
    const [largerScreen] = useMediaQuery(['(min-width: 900px)']);
    const [background, imported, text4] = useThemeColors([
        'cardbg',
        'imported',
        'text4',
    ]);
  const { data:mainDatatarget=[] } = useCtezGraphctez();
  const [value, setValue] = useState<number | undefined>(3810);
    // graph options
    
    return (<Flex direction='column'
        borderRadius={16}
        backgroundColor={background}
        flex={1}
        paddingX='35px'
        paddingY='27px'
        gridGap={1}
    >

        <Flex justifyContent='space-between'>
            <Text
                color={textcolor}
                fontSize={largerScreen ? '20px' : '16px'}
                lineHeight="29px"
                fontWeight={600}
            >
                Ctez
            </Text>
            <ButtonGroup variant='ghost' textColor={textcolor} fontSize='12px' spacing='-1'>
                <Button fontSize='12px' textDecoration='underline' >1M</Button>
                <Button fontSize='12px' textDecoration='underline'>ALL</Button>
            </ButtonGroup>

        </Flex>
        <Flex justifyContent='space-between' fontWeight={400} fontSize='12px' >
            <Flex gridGap={4}>
                <Text>
                     Price
                </Text>
                
                <TextWithCircleColor color="#ffff" text="price2" />
            </Flex>
            {value && <Text>Premium  <b>{value}%</b></Text>}
        </Flex>
        
        {/* <GraphTwoLine labelArr={priceData.dateArr} data1={priceData.ctez_priceArr} data2={priceData.tez_priceArr}/>
        graph goes here */}
        {mainDatatarget.length?<TwoLineChart
         data={mainDatatarget}  setValue={setValue} 
        />:null}
    </Flex>)
}
export default GraphCtez;
