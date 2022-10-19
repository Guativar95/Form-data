import { useForm } from 'react-hook-form';
import { useParams} from "react-router-dom";
import { Post } from '../interface/Post';
 
type DataEdit = {
  title: string,
  body: string,
};
  
export const Editdata = () => {
  // Traer los datos segun ID
  const { id } = useParams();
  
  const url = "https://jsonplaceholder.typicode.com";
  fetch(`${url}/posts/${id}`)
    .then(resp => resp.json())
    .then((data: Post) => {
      setValue("title", data.title)
      setValue("body", data.body)
      userId = data.userId
    });
    let userId: number ;
  // Mostar los datos en el formulario
  const { register, setValue, handleSubmit } = useForm<DataEdit>();
  // Enviar datos editados
  const onSubmit = (data:DataEdit) => {
    let post: Post = {
      userId ,
      id: parseInt(id as string),
      title: data.title,
      body : data.body
    }

    fetch(`${url}/posts/${id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    body: JSON.stringify(data),
    }).then(resp =>{
      if (resp.status === 200 ){
        alert("Los datos se han actualizado correctamente");
      } else {
        alert("Se a presentado al cargar lso datos")
      }
    }) 
  }

  return (
    <form className='row' onSubmit={handleSubmit(onSubmit)}>
      <div className='m-3'>
        <h1 className='h1 text-center'>Edit Data</h1>
        <div className="container">
          <label className="form-label h4">Edit Title</label>
          <textarea className="form-control" id="Title" {...register("title")} > </textarea>
        </div>
        <div className="container">
          <label  className="form-label h4">Edit Data</label>
          <textarea className="form-control" id="Data" {...register("body")}></textarea>
        </div>
        <div className='text-center m-3'>
          <button className='btn btn-outline-success' type="submit">Save Changes</button>
        </div>
      </div>
    </form>
  )
}
export default Editdata;

