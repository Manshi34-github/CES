import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Data from '../Data/ForumData'

const ForumDescription = () => {
  const User = [];
  let url = window.location.href
  let id = url.split('/')[4];
  const data = Data.find((obj) => {
    return obj.id == id;
  })
  User.push(data);

  const ShowComment = ()=>{
    let loginToPostComment = document.getElementById('loginToPostComment');
    let commentSection = document.getElementById('commentSection');
    let Notice = document.getElementById('Notice');
    loginToPostComment.style.display = 'none';
    commentSection.style.display = 'inline';
    Notice.style.display = 'none'
  }

  const HandleClick = () => {
    let inputElm = document.getElementById('inputElm');
    let inputValue = inputElm.value;
    let CommentVal = document.getElementById('commentVal');
    CommentVal.innerHTML = inputValue;
    inputElm.value = "";
  }

  const HandleReply = () => {
    let replyInput = document.getElementById('replyInput');
    let replyPostButton = document.getElementById('replyPostButton');
    if (replyPostButton.style.display === 'none') {
      replyPostButton.style.display = 'inline';
    } else {
      replyPostButton.style.display = 'none';
    }
    replyInput.type = "text";
  }

  const HandleReplyClick = () => {
    let replyText = document.getElementById('replyText');
    let replyInput = document.getElementById('replyInput');
    let inputValue = replyInput.value;
    replyText.innerHTML = inputValue;
    replyInput.value = "";

  }



  return (
    <>
      <Navbar />
      <div>
        <div className=" ml-10 pt-20 pb-20 flex justify-center">
          {User.map((item) => {
            return (
              <>
                <div className="container w-9/12 text-blue-700">
                  <div>
                    <h1 className='text-3xl underline underline-offset-8 text-black'>{item.title}</h1>
                  </div>
                  <br />
                  <div className='border-2'>
                    <div className='mt-0.5 mb-0.5 px-3 text-sm  bg-gradient-to-r from-blue-200 to-cyan-50'>{item.date} Time 09:55 PM</div>
                    <div className='p-3 font-semibold bg-blue-50'>{item.title}</div>
                    <div className='p-5'>{item.description}</div>
                    {/* optional */}
                    <div className='font-semibold italic mt-4 p-5'>Presence of All Civilians Students are important</div>
                    <div className='grid grid-cols-3'>
                      <div className='px-5 mb-2'><span className='font-semibold'>Time</span>: 09:55 PM</div>
                      <div className='px-5 mb-2'><span className='font-semibold'>Date</span>: {item.date}</div>
                      <div className='px-5 mb-2'><span className='font-semibold'>Venue</span>: Civil Department Hall G1</div>

                    </div>
                    {/* optional */}
                  </div>
                  <div id='loginToPostComment' style={{ transform: 'translate(66% ,0)',marginTop:'18px',display:'flex' }} onClick={ShowComment} ><a href="/login" className='font-semibold border-2 px-10 py-1  bg-sky-200'>Login</a>To Post Comment</div>
                  <div id='Notice' style={{display:'inline'}}>
                    <div>Click "To Post Comment" to Show Comment Section For now</div>
                    <div>Click on "Login" to Show login page</div>
                  </div>


                  <div id='commentSection' style={{display:'none'}}>
                    <div className='pt-5'>
                      <span>
                        <input id='inputElm' type="text" placeholder='Write here' className='w-5/6 border-2 inline' />
                      </span>

                      <button className='bg-indigo-300 text-black px-2 font-semibold border-2 mx-4 hover:bg-sky-600' id='post' onClick={HandleClick}>Post Comment</button>

                    </div>
                    <div className='pb-3 px-3 text-black border-2 mt-5'>
                      <div>
                        <h1 className='font-bold'>Guest User</h1>
                        <span className='text-sm'>on {item.date} at 09:55PM </span>
                      </div>
                      <hr />
                      <div className='pt-5' id='commentVal'>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus deleniti quis hic ullam nam tenetur deserunt, ex numquam illum odio libero ipsa architecto. Veniam, ex at voluptatum accusamus eum repudiandae, quos doloribus delectus modi temporibus ipsum, iure sapiente atque quia dolorum necessitatibus itaque molestias odio! Unde, qui! Alias.
                      </div>
                      <div id='replyText'></div>
                      <div className=''>
                        <span id='replySpan'>
                          <input id='replyInput' type='hidden' placeholder='Write here' className='mt-5 w-8/12 border-2 inline' />
                        </span>
                        <span id='postReply'>
                          <button className='bg-indigo-300 px-10 font-semibold border-2 mx-10 hover:bg-sky-600' id='replyPostButton' onClick={HandleReplyClick} style={{ display: 'none' }}>Post</button>
                        </span>
                        <button className='bg-indigo-300 border-2 px-6 mt-5 font-semibold hover:bg-sky-600' style={{ position: 'absolute', right: '15%' }} onClick={HandleReply} id='reply'>Reply</button>
                      </div>

                    </div>
                  </div>
                </div>
              </>
            )
          })}
          <hr />
        </div>

      </div>
      <Footer />

    </>
  )
}

export default ForumDescription
