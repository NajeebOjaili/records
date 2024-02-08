import {  Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react'
import { IoIosSend } from "react-icons/io";
import {  FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsSnapchat } from "react-icons/bs";
import React from 'react'

function Footer() {
 const items = ['من نحن ','تواصل معنا ', 'مدونة ', 'رأيك يهمنا'] ;
 const social = [<IoIosSend size={25} /> , <BsSnapchat  size={25}/> , <FaInstagram  size={25}/>,<FaXTwitter size={25} />,<FaFacebookF size={25}/>,]
  return (
    <Flex bg={"black"} width={"full"} h={"auto "} display={"flex"} flexDir={{base:"column" , md:"row"}} alignItems={"center"}>
   <Flex flexDir={"column"} alignItems={"center"} color={"white"} justifyContent={"center"}  order={{ base: 2, md: 1 }}   width={400}>
    <h1>عن مصحف  سورة</h1>
    <Box color={"white"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={5}>
      {items.map((item, index) =>{
        return (
          <Text  key={index}> {item}</Text>
        );
       
      })}
    </Box>
   </Flex>
   <Flex width={"full"} color={"white"} h={"40vh"} display={"flex"} flexDir={"column"} order={{ base: 1, md: 2 }} gap={5} justifyContent={"flex-start"} alignItems={"center"}>
    <Image src='./sourah.png' width={100} h={50} mt={10}  alt='logo'/>
    <Text fontSize={20}>
      متعة في التلاوة 
    </Text>
    <Text fontSize={14} overflowWrap={"break-word"} >
    وإبداع في المحتوى على مستوى (الكلمة . الآية . الصفحة . السورة)
    </Text>
<Flex display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"}   margin={{base:"5px" , md:"0px"}} gap={4} mt={5} mb={10}>

{social.map((item, index) =>{
  return (<Box key={index} bg={"white"} borderRadius={"100%"}  color={"black"} padding={{base:3,md:5}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Link href={item.link}>{item}</Link>
  </Box>
  );
})}


</Flex>
   </Flex>
    </Flex>
  )
}

export default Footer;


