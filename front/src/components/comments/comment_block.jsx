import './comments.css'
import React from 'react'



function comment_block() {
  return (
    <>
    <div id='' className='w-full h-full grid gri-cols-comment' >
        <div id='' className='w-full h-full bg-[yellow]'>helo</div>
        <div id='' className='w-full h-full bg-[blue]'>
            <h1>User Name</h1>
            <p>
                comment text: Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>
        </div>
    </div>
    
    </>
  )
}

export default comment_block