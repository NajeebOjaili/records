import { Flex, Text } from "@chakra-ui/react";

const Footer2=()=>{
    return(
      
  <Flex width={"full"} h={20} dir="rtl" gap={3} display={"flex"} flexDir={{base:"column" , md:"row"}} bg={"black"} color={"white"} justifyContent={"center"} alignItems={"center"}>
  <Text fontSize={14}>
  جميع الحقوق محفوظة لمركز تفسير للدراسات القرآنية  
   
  </Text>
  2024م - 1446هـ ©
  </Flex>
    )
  }
  export default Footer2;