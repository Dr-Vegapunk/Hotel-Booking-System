import { Button } from '@nextui-org/react'
import React from 'react'

import {Link} from "@nextui-org/react";

function LandingPage() {
  return (
    <>
      <Link href="/login">Login</Link><br></br>
      <Link href="/register">Register</Link>
    </>
  );
}
export default LandingPage