"use client"

import Image from 'next/image';
import { useState } from "react"


const Menu = () => {

    const [open,setOpen] = useState(false)

return (
    <div>
<Image 
    src="/menu.png" 
    alt="Menu Icon" 
    width={100} 
    height={100} 
    className="border-2 border-purple-500 bg-gray-200"
/>
    </div>
)

}

export default Menu


