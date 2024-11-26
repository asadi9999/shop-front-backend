import React from 'react'
import Link from 'next/link'
import '../style/index.css'

const Header = () => {
  return (
    <>
        <ul className=" w-full h-20 bg-[#212223] flex flex-col py-2 px-3 md:flex-row justify-center items-center gap-4">
            <li>
                <Link href='/'>Home</Link>
                
            </li>
            <li>
              <Link href='/upload'>Upload product</Link>
            </li>
        </ul>
    </>
  )
}

export default Header
