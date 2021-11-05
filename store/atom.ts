import { atom } from 'recoil'
import { setTheme, Theme } from './types'

export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'light',
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((val) => {
        setTheme(val)
      })
    },
  ],
})

export const currentIpState = atom<string>({
  key: 'currentIpState',
  default: '127.0.0.1',
})
