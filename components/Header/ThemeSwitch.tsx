import React, { memo, useEffect } from 'react'
import Switch from 'rc-switch'
import { useRecoilState } from 'recoil'
import { themeState } from '../../store/atom'
import { getTheme } from '../../store/types'
import 'rc-switch/assets/index.css'

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  useEffect(() => {
    setTheme(getTheme())
  }, [setTheme])
  return (
    <Switch
      checked={theme === 'light'}
      onChange={(checked) => setTheme(checked ? 'light' : 'dark')}
      checkedChildren="☀️"
      unCheckedChildren="🌙"
    />
  )
}

export default memo(ThemeSwitch)
