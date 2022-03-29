import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import './index.scss'

const Result: React.FC = (props) => {
  const location: any = useLocation()
  const navigate = useNavigate()

  const isSuccess = !!location.state.success

  const back = () => {
    navigate('/')
  }

  return (
    <div className="page-result">
      <div>{ isSuccess ? 'submit successfully' : 'submit failed' }</div>
      <Button type="primary" onClick={back}>Back</Button>
    </div>
  )
}

export default Result