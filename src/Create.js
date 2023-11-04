// // // import { useState } from "react";
// // import React, { useState, useRef, useMemo } from 'react';
// // import { useHistory } from  'react-router-dom';
// // import JoditEditor from 'jodit-react';

// // const Create = () => {

// //     const editor = useRef(null);

// //     const [title,setTitle] = useState('');//--> initializing with empty string.
// //     const [body,setBody] = useState('');
// //     const [author,setAuthor] = useState('mario');

// //     const [isPending,setIsPending] = useState(false);
// //     const history = useHistory();
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         //We have to create an object to be added on json file.
// //         // need not to add 'id', it will be automatically created.
// //         const blog = {title, body, author};    
// //         // console.log(blog); 
        
// //         setIsPending(true); //--> made it true while submitting
// //         fetch('http://localhost:8000/blogs',{
// //             method: 'POST',
// //             headers: {"Content-Type" : "application/json"},
// //             body: JSON.stringify(blog)
// //         }).then(() => {
// //             console.log('new blog adder');//--> Just to check, Nothing else.
// //             setIsPending(false);//--> made it false when completed.
// //             history.push('/');
// //         }) 
// //     } 

    

// //     return (
// //         <div className="create">
// //             <h2>Add a New Blog!</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label>Blog Title:</label>
// //                 <input 
// //                     type="text"
// //                     required 
// //                     value={title}
// //                     onChange={(e) => setTitle(e.target.value)}//--> Here e.target is 'active-input-box'.
// //                 />
// //                 <label>Blog Body:</label>
// //                 {/* <textarea 
// //                     required
// //                     value={body}
// //                     onChange={(e) => setBody(e.target.value)}
// //                 ></textarea> */}
// //                 <JoditEditor
// //                     ref={editor}
// //                     value={body}
// //                     //config={config}
// //                     //tabIndex={1} // tabIndex of textarea
// //                     //onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
// //                     onChange={newContent => setBody(body)}
// // 		        />
                
// //                 <label>Blog Author:</label>
// //                 <select
// //                     value={author}
// //                     onChange={(e) => setAuthor(e.target.value)}
// //                 >
// //                     <option value="mario">Mario</option>
// //                     <option value="yoshi">Yoshi</option>
// //                 </select>
// //                 {!isPending && <button>Add Blog</button>}
// //                 {isPending && <button disabled>Adding Blog...</button>}
        
// //         {/* You can check if it is working or not using below statements. */}
// //                 {/* <p>{title}</p>
// //                 <p>{body}</p> 
// //                 <p>{author}</p> */}
// //             </form>
// //         </div>
// //     );
// // }

// // export default Create;



// import React, { useState, useRef } from 'react';
// import { useHistory } from 'react-router-dom';
// import JoditEditor from 'jodit-react';

// const Create = () => {
//     const editor = useRef(null);
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('mario');
//     const [isPending, setIsPending] = useState(false);
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author };
//         setIsPending(true);
//         fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(blog)
//         }).then(() => {
//             setIsPending(false);
//             history.push('/');
//         });
//     };

//     return (
//         <div className="create">
//             <h2>Add a New Blog!</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog Title:</label>
//                 <input
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog Body:</label>
//                 <JoditEditor
//                     ref={editor}
//                     value={body}
//                     onChange={newContent => setBody(newContent)}
//                 />
//                 <label>Blog Author:</label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="mario">Mario</option>
//                     <option value="yoshi">Yoshi</option>
//                 </select>
//                 {!isPending && <button>Add Blog</button>}
//                 {isPending && <button disabled>Adding Blog...</button>}
//             </form>
//         </div>
//     );
// }

// export default Create;

import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import 'jodit/build/jodit.min.css'; // Import the styles for the Jodit editor

const Create = () => {
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        });
    };

    return (
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <JoditEditor
                    ref={editor}
                    value={body}
                    onChange={(newContent) => setBody(newContent)}
                    style={{width: "538px"}}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;

