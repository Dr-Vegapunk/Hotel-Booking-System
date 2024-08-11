import { Button, Card, CardBody, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    
        <div className='flex justify-center  p-11 '>
            
            <Card>
            
                <CardBody className='flex-col gap-4 shadow-2xl p-7 bg-gray-200 border-3 border-gray-900 rounded border-opacity-25 hover:bg-purple-300 '>
                    <Image
                    isBlurred
                    width={240}
                    src="/logo.png"
                    alt="Everest-Escape"
                    className="m-5"/>
                    <Input placeholder='Enter your Username' type='text' label="Username" required labelPlacement='outside' variant='bordered' autoFocus >UserName</Input>
                    <Input placeholder='Enter your password' type='password' required label="Password " labelPlacement='outside' variant='bordered' className='placeholder-blue-400'>Password</Input>
                   
                    <Button color="primary" variant="shadow" className='bg-sky-500 hover:bg-sky-700 '>Login</Button>  
                    <p>Don`t have an account? <Link href="/register" className='text-blue-500 hover:text-blue-900'>Register Now</Link></p>
                </CardBody>
            </Card>
        </div>
    
  )
}

export default Login