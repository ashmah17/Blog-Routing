import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import angleleft from '../assets/angle-left.svg';
import menu from '../assets/content.svg';
import Aa from '../assets/Aa.svg';
import voice from '../assets/voice.svg';
import bookmarks from '../assets/bookmark.svg';
import fillBookmark from '../assets/bookmark-fill.svg';
import pausy from '../assets/pause.svg';
import blog from './Blogs.json';

const Blog = () => { 
  const {id} = useParams();
  const blogDetails = blog.find(blog => blog.id === id);

  if (!blogDetails) {
    return <div>Blog not found</div>;
  }

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const [Bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!Bookmark);
  };

  const [Speaking, setSpeaking] = useState(false);
  const [Pause, setPause] = useState(false);
  const [instance, setinstance] = useState(null);
  const texttoSpeech  = window.speechSynthesis

  const text = 'aysha';

  const voiceRead = () => {
    if('speechSynthesis' in window){
     if(Pause){
      texttoSpeech.resume();
      setPause(false)
    
    }else{
    texttoSpeech.cancel();
    const speech = new SpeechSynthesisUtterance(blogDetails.summary);
    speech.lang ='en-Us'
    speech.rate = 1;
    speech.pitch = 5


    speech.onstart =(()=>setSpeaking(true));
    speech.onend = ()=>{
      setPause(false);
      setSpeaking(false)
    }
    texttoSpeech.speak(speech);
    setinstance(speech)
    
  }
}}
 
 const handlepause=()=>{
  if(texttoSpeech.speaking && !Pause ){
    texttoSpeech.pause()
    setPause(true)

  }else if (texttoSpeech.paused){
    setPause(false)
    texttoSpeech.resume()
  }
 
 }

  return (
    <div>
      <div className='flex justify-between shadow p-4'>
        <img src={angleleft} onClick={back} className="w-10 cursor-pointer" />
        <img src={menu} className="w-[2rem] cursor-pointer" />
        <img src={Aa} className="w-[2rem] cursor-pointer" />
        {<button onClick={Speaking ? handlepause : voiceRead}>       
          <img src={Pause ? pausy: voice  } className="w-10 cursor-pointer" />
        </button>}
       
       <button onClick={handleBookmark}>
          {Bookmark ? 
            <img src={fillBookmark} className="w-[2rem] cursor-pointer" /> : 
            <img src={bookmarks} className="w-[2rem] cursor-pointer" />
          }
        </button>
      </div>

      <div className="p-10 overflow-scroll mb-6">
        <h1 className='text-2xl font-primaryBold text-gray-600 mb-8'>{blogDetails.title}</h1>
        <h1 className='m-3 font-primaryRegular text-gray-600'>{blogDetails.summary}</h1>
        <h1 className='text-gray-600 m-3'>
          <span className="font-primaryBold">Lesson: </span>
          <span className="font-primaryRegular">{blogDetails.lesson}</span>
        </h1>
        <h1 className='text-gray-600 m-3'>
          <span className='font-primaryBold'>Reference: </span>
          <span className='font-primaryRegular'>{blogDetails.reference}</span>
        </h1>
      </div>

      <div className="bg-white fixed bottom-0 border shadow-2xl p-4 flex justify-between w-full">
        <h1>Page 1 out of 1</h1>
        <h1>Page 1 out of 1</h1>
      </div>
    </div>
  );
};

export default Blog;
