import React, {useState, useContext} from 'react';
import './post.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function Post_functionality() {
  const  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  

  const [postTitle, setPostTitle] = useState('')
  const [postSummary, setPostSummary] = useState('')
  const [postFiles, setPostFiles] = useState('')
  const [content, setContent] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {http} = useContext(UserContext);


  async function createNewPost (ev) {
    const data = new FormData();
    data.set('title', postTitle);
    data.set('summary', postSummary);
    data.set('content', content);
    data.set('file', postFiles[0] )
    ev.preventDefault();
    const response = await fetch(`${http}/postData`, {
      method: 'POST',
      body: data,
      
    })
    if(response.ok) {
      setRedirect(true)
    }

    
  }

  if(redirect) {
    return <Navigate to={'/user_Dashboard/post'}/>
  }
  
  return (
    <>
    <form onSubmit={createNewPost} className='flex flex-col w-full h-auto' >

        <input 
        type='title' 
        placeholder='title' 
        value={postTitle}
        onChange={ev => setPostTitle(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='summary' 
        placeholder='summary' 
        value={postSummary}
        onChange={ev => setPostSummary(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='file' 
        //value={postFiles.name}
        name='file'
        placeholder='' 
        onChange={ev => setPostFiles(ev.target.files)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <ReactQuill 
        value={content} 
        modules={modules} 
        onChange={newValue => setContent(newValue)}
        formats={formats}/>

        <button className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px] mt-[10px]'> Create Post</button>
    </form>
    </>
    
  )
}

export default Post_functionality