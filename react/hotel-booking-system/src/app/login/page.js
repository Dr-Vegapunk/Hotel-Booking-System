import { Button, Card, CardBody, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    
        <div className='flex justify-center  p-11 '>
            
            <Card>
            
                <CardBody className='flex-col gap-4 shadow-2xl p-7 bg-gray-400 border-3 border-gray-900 rounded border-opacity-25 hover:bg-gray-500 '>
                    <Image
                    isBlurred
                    width={240}
                    src="/logo.png"
                    alt="Everest-Escape"
                    className="m-5"/>
                    <Input placeholder='Enter your UserName' type='text' label="User Name" required labelPlacement='outside' variant='bordered'  >UserName</Input>
                    <Input placeholder='Enter your password' type='password' required label="Password " labelPlacement='outside' variant='bordered'>Password</Input>
                    <Button color="primary" variant="shadow" className='bg-sky-500 hover:bg-sky-700 '>Login</Button>  
                    <p>Don`t have an account? <Link href="/register" className='text-blue-500 hover:text-blue-900'>Register Now</Link></p>
                </CardBody>
            </Card>
        </div>
    
  )
}

export default Login