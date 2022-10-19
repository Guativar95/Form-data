import { useState } from 'react'
import {Link} from "react-router-dom";
import { Post } from '../interface/Post';


const url = "https://jsonplaceholder.typicode.com";

export const Home = () => {
  let dataPagination: Post[] = [];
  const itemsByPage = 10;
  const [countPage, setCountPage] = useState(1)
  const [postsData, setPostsData] = useState([] as Post[])
  fetch(`${url}/posts`)
    .then(resp => resp.json())
    .then ((data: Post[]) =>{
      dataPagination = data;
      setCountPage(dataPagination.length / itemsByPage );
      Paginating();
    } );

  
    let Paginating = ( page: number = 1 ) => {
      const start=  (page -1) * itemsByPage;
      const end = (page * itemsByPage) -1;
      setPostsData(dataPagination.slice(start, end))
    }
 

  console.log()
  // Paginación de posts; tomar el total y dividir en la cantidad de dese representar


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
    
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {Array.from({ length: countPage }, (_:number, i:number) => <li className="page-item" onClick={Paginating()}><a className="page-link" key={i} >{i + 1}</a></li>)}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    
    </div>
  )
}
