import React from 'react'
import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

const Detail = ({ onOpen }) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const startDate = new Date('2023-03-01'); // Starting date
  const currentDate = new Date(); // Current date
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  // Adjust years if monthsDiff is negative
  const totalYears = monthsDiff < 0 ? yearsDiff - 1 : yearsDiff;
  const totalMonths = monthsDiff < 0 ? monthsDiff + 12 : monthsDiff;
  
  // Format the output based on months
  const professionalYears = totalMonths === 0
    ? `${totalYears} year${totalYears !== 1 ? 's' : ''}`
    : `${totalYears} year${totalYears !== 1 ? 's' : ''} and ${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
  

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for {professionalYears}  now and
        currently working as a <b>MERN Stack Developer</b>. My focus lies in{' '}
        <b>architecture</b>, <b>API development</b> and the{' '}
        <Tooltip
          label="Ha!. Or more accurately TECH DEBT"
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>intricate business logic</b>
          </Text>
        </Tooltip>{' '}
        that drives applications.Additionally, I&apos;ve expanded my expertise to include <b>Front-end Development</b> adapting to the evolving demands of modern web development.
        <br /> <br />
        Here are a few technologies that I specialize in:{' '}
       
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>

          <ListItem fontSize="small" display="flex" alignItems="center"> <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
            Graphql
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>

        </List>
        <Box> <Text
          as="button"
          variant="emphasis"
          fontSize="smaller"
          textAlign="left"
          onClick={onOpen}
        >
        See my full arsenal <Icon as={IoMdOpen} />
        </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
