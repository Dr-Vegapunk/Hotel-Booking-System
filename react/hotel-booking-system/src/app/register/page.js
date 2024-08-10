import { Button, Card, CardBody, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    
        <div className='flex justify-center  p-11 '>
            
            <Card>
            
                <CardBody className='flex-col gap-2 shadow-2xl p-10 bg-gray-400 border-3 border-gray-900 rounded border-opacity-25 hover:bg-gray-500 '>
                    <Image
                    isBlurred
                    width={270}
                    src="/logo.png"
                    alt="Everest-Escape"
                    className="m-5"/>
                    <Input placeholder='Enter your UserName' type='text' label="User Name" required labelPlacement='outside' variant='bordered'  >UserName</Input>
                    <Input placeholder='Enter your email' type='text' required label="Email " labelPlacement='outside' variant='bordered'>Email</Input>
                    <Input placeholder='Enter your password' type='password' required label="Password " labelPlacement='outside' variant='bordered'>Password</Input>
                    <Input placeholder='Confirm your password' type='password' required label="Confirm Password " labelPlacement='outside' variant='bordered'>Confirm Password</Input>
                    <Input placeholder='Enter your phone number' type='number' required label="Phone Number " labelPlacement='outside' variant='bordered'>Phone number</Input>
                    <Button color="primary" variant="shadow" className='bg-sky-500 hover:bg-sky-700 '>Sign Up</Button>  
                    <p className='p-2'>Already have an account? <Link href="/login" className='text-blue-500 hover:text-blue-900'>Login Now</Link></p>
                </CardBody>
            </Card>
        </div>
    
  )
}

export default Register