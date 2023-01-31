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

    if (filterValue !== 'All') {
      for (let index = 0; index < Data.length; index++) {
        let titles = document.getElementById(index + 1);
        if (Data[index].forum !== filterValue) {
          ForumArray.push(index + 1);
          titles.style.display = 'none';
        }
      }
    }
  }

  const HandleStyleProperty = () => {
    for (let index = 0; index < ForumArray.length; index++) {
      let titles = document.getElementById(ForumArray[index]);
      titles.removeAttribute('style');

    }

  }
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="pt-1 text-right w-4/5 ml-9">
    
          <span><select id="edit-forum" name="forum" className="form-select mt-1 rounded outline hover:outline-0 m-0.5 px-0.5" onChange={HandleStyleProperty}>
            <option value="All" defaultValue="Any">- Any -</option>
            <option value="Student-Activities">Student-Activities</option>
            <option value="Courses">Courses</option>
            <option value="Information">Information</option>
          </select>
          </span>
          <span><button type="submit" className="transition ease-in delay-150 border-2 border-blue-800 hover:-translate-y-1 hover:bg-indigo-400 duration-100 ml-3 px-4 rounded font-bold" onClick={HandleApply}>Apply</button></span>
        </div>

      
        <div className=" p-5 pt-2 flex justify-center">
          <table className=" w-full table-auto shadow-2xl md:w-2/3">
            <thead>
              <tr className=" border-2 bg-gradient-to-r from-blue-400 to-stone-200  mt-2 border-zinc-400">
                <th>Topic</th>
                <th>Replies</th>
                <th>Date</th>
                <th>Forum</th>
              </tr>
            </thead>
            <tbody className="border-2 border-zinc-400 bg-stone-100">
              {Data.map((post) => {
                return (

                  <tr id={post.id} key={post.id} >
                    <td>
                      <Link className="text-blue-600  mt-3 hover:bg-blue-200 hover:text-black hover:border rounded-lg " key={post.id} to={"/forum/"+post.id}>{post.title}</Link>
                      <br />
                      <span className="text-xs mt-3">Autonomus on Sunday 15:45 PM {post.date}</span>
                    </td>
                    <td>50+</td>
                    <td>{post.date}</td>
                    <td id="forum">{post.forum}</td>
                  </tr>
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
