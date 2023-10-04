import { Tooltip } from "@chakra-ui/react";

export default function CustomToolTip(props){
    return(
        <Tooltip 
          label={props?.label} 
          hasArrow 
          bgColor={'#AAA1C8'}
        >
          {props?.children}
        </Tooltip>
    )
}