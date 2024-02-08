import React, { useRef, useState } from 'react'
import { TiCogOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { Box,  Button,  Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  DrawerFooter,  DrawerOverlay, Flex, Image,  Link,  Text, useDisclosure } from '@chakra-ui/react';
import { LuSunMoon } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";




const  Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
 
    const btnRef = useRef();

    const [isDark, setIsDark] = useState(false);
    {isDark ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "#FFF9DE"}
    {!isDark ? document.body.style.color = "#000" : document.body.style.color = "#fff"}
    const items = ["الرئيسية ", "موسوعة سورة ", "التفسير الموضوعي ", "رأيك يهمنا "];
    
  return (
    <>
    <Flex className="header"  >
        <Flex  m={{base:5,md:20}} color={10} display={{base:"flex", md:"flex"}} justifyContent={"center"} gap={5}>
            <Box display={{base:"none" ,md:"block"}}>
            <TiCogOutline size={25} />
         </Box>
         <Box display={{base:"block" ,md:"none"}}>
         <CiMenuFries size={25} onClick={onOpen} />

         </Box>
<Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}
  finalFocusRef={btnRef}
>
  <DrawerOverlay />
  <DrawerContent direction='rtl' textAlign='right'>
    <DrawerCloseButton />
    <DrawerBody margin={10} gap={20} flexDirection='column' display='flex'>
    {items.map((item, index) =>  (<Box display={"flex"} flexDirection={"column"}  _hover={{bg:"white", color:"black" ,}} width={"full"} justifyContent={"flex-end"} alignItems={"center"} key={index}> <Text>{item}</Text></Box>))} 
    </DrawerBody>
    <DrawerFooter>
    
      <Button colorScheme='teal' onClick={onClose}>
        خروج
      </Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    
       <CiSearch size={25 } />

     
     
        
        <CiBookmarkCheck size={25} />
        
       {!isDark ?<LuSunMoon  size={25} onClick={()=>{
            setIsDark(!isDark)
           
        }}/> : <FaMoon   size={25} onClick={()=>{
            setIsDark(!isDark)
           
        }}/>

    }
        </Flex>

        
        
        <Flex display={{base:"none", md:"flex"}} justifyContent={"center"} dir={"rtl"} gap={10}>
       <ul className='menu' >
        <a href="#" className='active' ><li >الرئيسية</li> </a>
        <a href="#"><li>التفسير الموضوعي </li> </a>
        <a href="#"><li>موسوعة سورة </li> </a>
        <a href="#"><li>رأيك يهمنا </li> </a>
        <a href="#"><li>تسجيل الدخول </li> </a>


       </ul>
       
           

        </Flex>
        <Flex className="right-logo">
            <Image src='/sourah.png' alt='Sourah-logo' width={150} m={{base:"20px",md:"20px"}}/>
        </Flex>
    </Flex>
    
    
    </>
  )
}

export default Header
