import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/ForumData";
import { Link } from "react-router-dom";
const Forum = () => {
  let ForumArray = [];
  const HandleApply = () => {
    let edit_forum = document.getElementById('edit-forum');
    let filterValue = edit_forum.value;

    if(filterValue!=='All'){
      for (let index = 0; index < Data.length; index++) {
        let titles = document.getElementById(index+1);
        if (Data[index].forum !== filterValue) {
          ForumArray.push(index+1);
          titles.style.display = 'none';
        }
      } 
    }  
  }

  const HandleStyleProperty = ()=>{
    for (let index = 0; index < ForumArray.length; index++) {
      let titles = document.getElementById(ForumArray[index]);
      titles.removeAttribute('style');

    }
    
  }


  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="ml-12 pt-4 flex justify-center">
          <h2 className="underline underline-offset-8 m-1 text-2xl mb-3 ">Forum Topics</h2>
          <select id="edit-forum" name="forum" className="form-select border-2 rounded outline hover:outline-0 m-1 px-5" onChange={HandleStyleProperty}>
            <option value="All" defaultValue="Any">- Any -</option>
            <option value="Student-Activities">Student-Activities</option>
            <option value="Courses">Courses</option>
            <option value="Information">Information</option>
          </select>
          <button type="submit" className="m-1 border-2 border-black px-4 bg-gray-200 font-bold" onClick={HandleApply}>Apply</button>
        </div>
        <div className="ml-7 p-7 flex justify-center">
          <table className="table-auto p-10 w-5/6 border-2">
            <thead>
              <tr className=" border-2">
                <th>Topic</th>
                <th>Replies</th>
                <th>Date</th>
                <th>Forum</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((post) => {
                return (
                  <>
                    <tr id={post.id} >
                      <td>
                        <Link className="text-sky-500" to={"/forum/" + post.id}>{post.title}</Link>
                        <br />
                        <span className="text-xs">Autonomus on Sunday 15:45 PM {post.date}</span>
                      </td>
                      <td>50+</td>
                      <td>{post.date}</td>
                      <td id="forum">{post.forum}</td>
                    </tr>

                  </>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
