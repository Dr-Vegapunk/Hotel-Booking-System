'use client'
import { Button, Card, CardBody, Image, Input } from '@nextui-org/react'
import { Form, Formik } from 'formik';
import Link from 'next/link'
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    UserName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    Email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    confirm: Yup
    .string()
    .oneOf([Yup.ref('pass'), null], 'Must match "password" field value'),
    PhoneNumber: Yup.number().required('Required').min(10).max(10),
  });

const Register = () => {
  return (
    <div>
     
     <Formik
       initialValues={{
         UserName: '',
         Email: '',
         password:'',
         confirm:'',
         PhoneNumber:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, handleChange }) => (
        <div className='flex justify-center item-center bg-center bg-cover'style={{ backgroundImage: "url('/azy.jpg')"  }} >
            
            <Card className='flex w-96 p-4 m-12'>
                <CardBody className='flex  gap-2 shadow-2xl bg-gray-400 border-3 border-gray-900 rounded border-opacity-25 hover:bg-gray-500 '>

                <Form className=''>
                   <div className='bg-blue-400 '> <h1 className='flex items-center justify-center text-blue-900 hover:before:text-blue-500 hover:after:text-blue-900'>Signup</h1></div>
                    <Image
                            isBlurred
                            width={270}
                            src="/logo.png"
                            alt="Everest-Escape"
                            className="m-5"/>
                    <Input placeholder='Enter your UserName' type='text' label="User Name" required labelPlacement='outside' variant='bordered' name='UserName' onChange={handleChange} >UserName</Input>
                    {errors.UserName && touched.UserName ? (
                        <div>{errors.UserName}</div>
                    ) : null}
                    <Input placeholder='Enter your email' type='text' required label="Email " labelPlacement='outside' variant='bordered' name='Email' onChange={handleChange}>Email</Input>
                    {errors.Email && touched.Email ? (
                        <div>{errors.Email}</div>
                    ) : null}
                   
                   <Input placeholder='Enter your password' type='password' required label="Password " labelPlacement='outside' variant='bordered' name='password' onChange={handleChange}>Password</Input>
                    {errors.password && touched.password ? (<div>{errors.password}</div> ): null}
                    <Input placeholder='Confirm your password' type='password' required label="Confirm Password " labelPlacement='outside' variant='bordered' name='confirm' onChange={handleChange}>Confirm Password</Input>
                    {errors.confirm && touched.confirm ? (<div>{errors.confirm}</div>):null}
                    <Input placeholder='Enter your phone number' type='number' required label="Phone Number " labelPlacement='outside' variant='bordered' name='PhoneNumber' onChange={handleChange}>Phone number</Input>
                    {errors.PhoneNumber && touched.PhoneNumber ? (<div>{errors.PhoneNumber}</div>):null}
                   <div className='flex justify-center'><Button color="primary" variant="shadow" className='bg-sky-500 hover:bg-sky-700 m-2 align-center px-10 py-5  ' type='submit'>Sign Up</Button> </div>  
                    <p className='p-2'>Already have an account? <Link href="/login" className='text-blue-500 hover:text-blue-900'>Login Now</Link></p>
                </Form>
                </CardBody>

            </Card>
         </div>
       )}
     </Formik>
   </div>
       
    
  )
};

export default Register