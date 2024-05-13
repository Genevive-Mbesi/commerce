'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <div className='sm:flex hidden'>
      {isUserLoggedIn ?(
        <div></div>
      ) : (
        <>
       
        </>
      )
      }
      
    </div>
  )
}

export default Nav
