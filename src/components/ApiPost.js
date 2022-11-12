// import "./apipost.css";
// import { useState } from "react";
// import axios from "axios";
// import { Field, Formik } from "formik";

// const ApiPost = () => {
//    const [posts, setPosts] = useState([]);
//    const [title, setTitle] = useState('');
//    const [body, setBody] = useState('');

//    const initialvalues = {
//     title: "",
//     body: "",
//   };

// const handleSubmit = (value) => {
//   axios
//      .post('https://jsonplaceholder.typicode.com/users', {
//         title: title,
//         body: body,
//      })
//      .then((res) => {
//         setPosts((posts) => [res.data, ...posts]);
//         setTitle(value.title);
//         setBody('');
//      })
//      .catch((err) => {
//         console.log(err.message);
//      });
// };


//   return (
//     <div className="App">
//     <Formik
//     initialValues={initialvalues}
//     onSubmit={handleSubmit}
//     >
//       <form onSubmit={handleSubmit} className='api-form text-start p-5 mt-5'>
//       <h4 className="text-center">Post Data</h4>
//       <div className="form-group mt-3">
//         <Field
//           type="text"
//           value={title}
//           placeholder="Title"
//           className={"form-control"}
//         //   onChange={(e) => setTitle(e.target.value)}
//         />
//         </div>
//         <div className="form-group">
//         <Field
//           type="text"
//           value={body}
//           placeholder="Body"
//           className={"form-control mt-4"}
//         //   onChange={(e) => setBody(e.target.value)}
//         />
//         </div>
//         <button className="btn btn-primary mt-3" type="submit">Create User</button>
//       </form>
//       </Formik>
//     </div>
//   );
// }

// export default ApiPost;



import React from "react";
import './apipost.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ApiPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:4000/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    return (
      <div className="App bg-black" >
        <h1 className="h1-color"> All Data </h1> {
          items.map((item) => (
            <ul>
              <div className="card mt-2" key={item.userId} >
              <li>User_Id : {item.id}</li>
                <li>Id: {item.userName}</li>
                <li>Title: {item.password}</li>
                <li>Completed_s: {item.checkbox ? 'true' : 'false'}</li>
              </div>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default ApiPost;
