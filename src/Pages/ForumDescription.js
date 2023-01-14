import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Data from '../Data/ForumData'

const ForumDescription = () => {
  const User = [];
  let url = window.location.href
  let userId = url.split('/')[4];
  for (let index = 0; index < Data.length; index++) {
    if (userId === String(Data[index].id)) {
      User.push(Data[index]);
      break;
    }
  }
  const ShowComment = () => {
    let loginToPostComment = document.getElementById('loginToPostComment');
    let commentSection = document.getElementById('commentSection');
    let Notice = document.getElementById('Notice');
    loginToPostComment.style.display = 'none';
    commentSection.style.display = 'inline';
    Notice.style.display = 'none'
  }

  const HandleClick = () => {

    let inputElm = document.getElementById('inputElm');
    let para = document.getElementById('paragraph');
    let inputValue = inputElm.value;
    para.innerHTML = inputValue;
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
    let paraGraph = document.createElement('p');
    let inputValue = replyInput.value;
    paraGraph.innerHTML = inputValue;
    replyText.append(paraGraph);
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
                <div className="w-9/12" key={item.id}>
                  <div className='pb-10'>
                    <div>
                      <h1 className='text-3xl underline underline-offset-8 decoration-0 decoration-stone-600 text-violet-900 decoration-double text-center ' key={item.id}>{item.title}</h1>
                    </div>
                    <br />
                    <div className=' border-2 border-emerald-200 p-1 text-blue-800 shadow-xl rounded-lg'>
                      <div className='mt-0.5 mb-0.5 px-3 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-stone-300'>{item.date} Time 09:55 PM</div>
                      <div className='p-3 font-semibold bg-blue-200'>{item.title}</div>
                      <div className='bg-stone-100'>
                        <div className='p-2 '>{item.description}</div>
                        {/* optional */}
                        <div className='font-semibold italic mt-2 pb-2 text-right mr-5'>** Presence of All Civilians Students are important **</div>
                        <div className='grid grid-cols-3 py-2 '>
                          <div className='font-semibold'>Time 09:55 PM</div>
                          <div className='font-semibold '>Date: {item.date}</div>
                          <div className='font-semibold '>Venue: Civil Department Hall G1</div>

                        </div>
                      </div>

                    </div>
                  </div>


                  <div id='loginToPostComment' className='text-right' style={{ marginTop: '18px' }} onClick={ShowComment} ><a href="/login" className=' font-semibold text-black border-2 px-5 py-1 bg-indigo-400'>Login</a></div>

                  <div className=' mt-10' id='Notice'>
                    <button className='pointer border-2 bg-stone-500' onClick={ShowComment}>View Comment</button>
                    <div className='font-bold '>View Commment works when user register yourself</div>
                    <div className='font-bold italic'>For Now it will open when onclick triggered, for testing purposes</div>

                    <div>Click on "Login" to Show login page</div>
                  </div>

                  <hr className='bg-gray-800 h-0.5 w-113% mt-10' />
                  <div id='commentSection' className='hidden'>
                    <div className='pt-7'>
                      <span>
                        <input id='inputElm' type="text" placeholder='Write here' className='border-gray-500 text-black w-full border-2 inline' />
                        <div className='text-right'>
                          <button className='bg-indigo-400 text-black text-right font-semibold border-2 mt-2 hover:bg-sky-600 p-0.5' id='post' onClick={HandleClick}>Post Comment</button>
                        </div>
                      </span>
                    </div>
                    <div id='commentVal' className='pb-3 border-dotted shadow-2xl border-2 border-sky-500 p-1 rounded mt-5'>
                      <div id={item.id}>

                        <div className='bg-gradient-to-r from-teal-800 to-gray-50 text-gray-200 pl-3'>
                          <h1 className='font-bold'>Guest User</h1>
                          <span className='text-sm'>on {item.date} at 09:55PM </span>
                        </div>
                        <hr />

                        <div className='pt-5'></div>
                        <div className='bg-gray-100'>

                          <div className='text-black'>
                            <div id='paragraph'>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati fuga quod dolorem nemo quae at sapiente unde quas vel incidunt illo impedit iste vitae cumque sed delectus doloribus rem quidem nihil maxime ipsam? Provident minus ad possimus libero quasi voluptas iure sapiente! Autem, nemo libero animi laborum reprehenderit mollitia!
                            </div>
                            <div id='replyText'>

                            </div>

                          </div>

                          <div className=''>
                            <span id='replySpan'>
                              <input id='replyInput' type='hidden' placeholder='Write here' className=' border-gray-500 mt-5 w-full border-2 inline' />
                            </span>
                            <div className='text-right space-x-4'>
                              <span id='postReply'>
                                <button className='bg-indigo-400 px-8 font-semibold border-2  mt-1 hover:bg-sky-600' id='replyPostButton' onClick={HandleReplyClick} style={{ display: 'none' }}>Post</button>
                              </span>
                              <span className=''>
                                <button className='bg-indigo-400 border-2 px-6  font-semibold hover:bg-sky-600' onClick={HandleReply} id='reply'>Reply
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
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
