import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button
} from '@chakra-ui/react';

function App() {

  return (
    <Box h='100vh'>
      <Center as='header'
        h={150}
        bg='#529471'
        color='white'
        fontWeight='bold'
        fontSize='4xl'
        pb='8'
      >
        Formulário
      </Center>
      <Flex
        align='center'
        justify='center'
        bg='#A3CD9E'
        h='calc(100vh - 150px)'
      >
        <Center
          w='100%'
          maxW={840}
          bg='white'
          top={100}
          position='absolute'
          borderRadius={5}
          p={[6]}
          boxShadow='0 1px 2px #ccc'
        >
          <FormControl display='flex' flexDir='column' gap="4">
            <HStack spacing="4">
              <Box w='100%'>
                <FormLabel htmlFor='nome'>Nome Completo</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='nome' />
              </Box>
              <Box w='100%'>
                <FormLabel htmlFor='email'>E-mail</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='email' type='email' />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w='100%'>
                <FormLabel htmlFor='nasc'>Data de Nascimento</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='nasc' type='date' />
              </Box>
              <Box w='100%'>
                <FormLabel htmlFor='natural'>Naturalidade</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='natural' />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w='100%'>
                <FormLabel htmlFor='cel'>Celular</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='cel' type='number' />
              </Box>
              <Box w='100%'>
                <FormLabel htmlFor='tel'>Telefone</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='tel' type='number' />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w='100%'>
                <FormLabel htmlFor='endereco'>Endereço</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='endereco' />
              </Box>
              <Box w='100%'>
                <FormLabel htmlFor='cidade'>Cidade</FormLabel>
                <Input borderColor='black' focusBorderColor='#9DF0AC' id='cidade' />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w='100%'>
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue='Masculino'>
                  <HStack spacing='24px'>
                    <Radio value='Masculino' colorScheme='green'>Masculino</Radio>
                    <Radio value='Feminino' colorScheme='green'>Feminino</Radio>
                    <Radio value='Outro' colorScheme='green'>Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify='center'>
              <Button
                w={240}
                p={[6]}
                type='submit'
                bg='#35635B'
                color='white'
                fontWeight='bold'
                fontSize='xl'
                mt={[2]}
                _hover={{ bg: '#529471' }}
              >Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default App
