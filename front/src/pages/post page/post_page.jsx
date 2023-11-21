import React, {useEffect, useState, useContext} from 'react'
import Post from '../../components/post/Post'
import {Link, Navigate} from 'react-router-dom'
import { UserContext } from '../../context/userContext';



function post_page( ) {
  const [posts, setPosts] = useState([]);
  const { http } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${http}/postData`, {
          method: 'GET',
        });

        if (response.ok) {
          const postArray = await response.json();
          setPosts(postArray);
        } else {
          
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [http]);

 

  return (
    <>
      <Link to='/user_Dashboard/communities'>communities</Link>
        <div id='' className='flex flex-col items-center'>
          <Link to={'/user_Dashboard/create_post'}>
            <button className='xs:w-[90%] sm:w-[80%] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] h-[50px] bg-boring-blue rounded-md fixed z-[100] xs:left-[7vw] sm:left-[12.5vw]  md:left-[80vw] lg:left-[85vw] xl:left-[85vw] 2xl:left-[85vw] xs:top-[90vh] sm:top-[90vh] md:top-[85vh] lg:top-[85vh] xl:top-[85vh] 2xl:top-[85vh]' id='create_post_button'>  
              <h1 className='color-[black] font-size-[17px] font-family-[Poppins] font-weight-[500]'>Create Post</h1>
            </button>
          </Link>

          {posts.length > 0 && posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
          
        </div>

      
        
    </>
  )
}

export default post_page
