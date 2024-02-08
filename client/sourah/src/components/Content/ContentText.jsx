import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import RecordButton from './RecordButton'

const ContentText = () => {
  return (
  <>
  <Flex display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDir={"column"} width={"full"} mt={5} maxH={600}>
   <Box flex={10}>
   <Image  src='/sourah1.png' alt='sourah' h={400} float={"right"} padding={10} border={"1px solid #332652"} borderRadius={20} width={400}/>
   </Box>
   <Box float={"left"} padding={10} border={"1px solid #332652"} borderRadius={20} width={400}>
   <RecordButton/>
   </Box>

  </Flex>
  </>
  )
}

export default ContentText