import React, {useState, useEffect, useContext} from 'react'
import User from '../../assets/pictures/user_pic_1.png' 
import './Post.css'
import { format, formatISO9075 } from 'date-fns'
import { UserContext } from '../../context/userContext';

function Post({post}) {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 60000); // Update the time every second//
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []);

    const month = String(currentDateTime.getMonth());
    const day = String(currentDateTime.getDate());
    const year = String(currentDateTime.getFullYear());

    const [postLayout, setPostLayout] = useState(true);


    function handleResize () {
      const newWindowWidth = window.innerWidth;
      setPostLayout(newWindowWidth);
  
    
    if (newWindowWidth < 1024) {
      setPostLayout(false);
    } else {
      setPostLayout(true);
    }
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    // {formatISO9075(new Date(createdAt))}
   var newCreatedAt = parseInt(post.createdAt)

  const removeParagraphTags = (input) => {
    return input.replace(/<\/?p>/gi, "");
  };

  const processedData = post.content ? removeParagraphTags(post.content) : '';

  //comment post function
  const {setUserInfo, http} = useContext(UserContext);
  const [commentText, setCommentText] = useState('')
  const commentJson = {
    postId: post._id,
    comentText: commentText
  }
 
  async function makeComment(ev) {
      ev.preventDefault();
    try {

      const fetchComment = await fetch(`${http}/comments`, {
        method: 'POST',
        body: JSON.stringify(commentJson),
        headers: { 'Content-Type': 'application/json' },
      })
      
    } catch (error) {
      console.log(error);
    }
    
  }



  return (
    <>
    <div id='post_block' className=' bg-[white] rounded-lg mt-[30px] mb-[30px]'>

      <div id='profile_div1' className='w-full h-full'>
        <div id='profile_pic' className=' w-[80px] h-[80px] rounded-[100px] bg-center bg-cover' style={{backgroundImage: `url(${User})`}}></div>
      </div>

      <div id='profile_div2' className='w-full h-full '>

        <h2 id='user_name' className='' >User Name</h2>

        <h3 id='posted_time' className='' >posted|<span></span></h3>
        <div id='post_type_div' >
        <div id='post_type' className='flex justify-center items-center' ><h5>Safety</h5></div>
        </div>

        <h1 id='post_heading' className='' >{post.title}</h1>
        <div id='post_text_div'>
        <p id='post_text' className='' >
           {processedData}
        </p>
        </div>

        <div id='post_tag' className='flex' >
          <div id='' className='' >#freeus</div>
          <div id='' className='' >#saveus</div>
        </div>

        <div id='comments_div' className=''>
          

            <form id='comment_form' className='mt-[10px] mb-[40px] pr-[130px] gap-6' >

              <input 
              id='comment_input' 
              className='' 
              type='text'
              value={commentText}
              onChange={ev => setCommentText(ev.target.value) }
              ></input>

              <button id='post_button' className='' onClick={makeComment} >
                Send
              </button>

            </form>





         
        </div>

      </div>

    </div>
    </>
  )
}

export default Post