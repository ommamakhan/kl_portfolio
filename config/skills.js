import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSocketdotio,
  SiMaterialdesign,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiTailwindcss,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'



export const Skills = {
  backend: [

    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
  ],
  frontend: [
    {
      name: 'React, RecoilJS',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'TailwindCss',
      icon: SiTailwindcss,
    },
  ],
  database: [
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialdesign,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: BsQuestionSquare,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },

  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],

}

export const splitSkills = (srcArray) => {
  const arrLength = srcArray?.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray?.length; i < j; i += chunk) {
    temporary.push(srcArray?.slice(i, i + chunk))
  }
  return temporary
}
