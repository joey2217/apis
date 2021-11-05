import React, { memo, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { currentIpState } from '../store/atom'
import ClipboardJS from 'clipboard'

const Ip: React.FC = () => {
  const [currentIp, setCurrentIp] = useRecoilState(currentIpState)
  useEffect(() => {
    axios.get('/api/ip').then((res) => {
      setCurrentIp(res.data)
      console.log(res.data)
    })
    new ClipboardJS('.btn')
  }, [setCurrentIp])
  return (
    <div className="text-center">
      <div>当前IP</div>
      <div>{currentIp}</div>
      <button
        className="btn"
        data-clipboard-text="Just because you can doesn't mean you should — clipboard.js"
      >
        Copy to clipboard
      </button>
    </div>
  )
}

export default memo(Ip)
