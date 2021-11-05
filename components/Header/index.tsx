import React, { memo } from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header: React.FC = () => {
  return (
    <header className="h-10 px-2 flex items-center justify-between border-b border-gray-500">
      HEADER
      <ThemeSwitch />
    </header>
  )
}

export default memo(Header)
