import { useState } from 'react'
import {Link} from "react-router-dom";
import { Post } from '../interface/Post';


const url = "https://jsonplaceholder.typicode.com";

export const Home = () => {
  const [postsData, setPostsData] = useState([] as Post[])
  fetch(`${url}/posts`)
    .then(resp => resp.json())
    .then ((data: Post[]) => setPostsData(data));
  return (
    <div className='row m-4'>
      <h1 className='titleData text-center mb-3'>Card data</h1>
        {
          postsData.map( postData =>
          {
              return <div className='container m-3 col-sm-3' key={postData.id}>
                <div className="card ">
                  <div className="card-body">
                    <h5>{postData.title} </h5>
                    <p className="card-text">{postData.body}</p>
					
                    <Link to={`Editdata/${postData.id}`} className="btn btn-primary">Editar</Link>
                  </div>
                </div>
              </div>;
            }
          )
        }
    </div>
  )
}
