import * as React from 'react'
import { motion } from 'framer-motion'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props?.isdarkmode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({
  toggle,
  isdarkmode = false,
}) => (
  <button
    onClick={toggle}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 18">
      <Path
        isdarkmode={isdarkmode}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isdarkmode={isdarkmode}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isdarkmode={isdarkmode}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

const MobileMenu = ({
  isOpen,
  toggle,
  isdarkmode = false,
}) => (
  <motion.nav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {/* <motion.div className="background" variants={sidebar} /> */}
    <MenuToggle toggle={() => toggle()} isdarkmode={isdarkmode} />
  </motion.nav>
)

export default MobileMenu
