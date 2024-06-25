import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
      const navigate = useNavigate();
  return (
    <div>
      Wrong Link
      <Button onClick={()=>navigate('/')} variant='contained' color="error">Go back home</Button>
    </div>
  )
}

export default NotFound
