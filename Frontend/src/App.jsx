import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {

  const [search, setSearch] = useState('')
  // const [products, errors, loading] = customReactQuery('/api/products?search=', search)


 const [products, setProducts] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)

  


  useEffect(() => {

    // Debouncing is used to cancel the previou api call on every key stroke in search input box.
    const controller = new AbortController(); // To abort the previous api call if new api call is made before previous is completed(search on basis of onChange()). Provided by axios internally. To boost performance.
    
    // Can create api calling using axios on button click and data will set in states but for now when calling API whenever app is going to mount.
    ;(async () => {

      try {
        setLoading(true); // to show loading or text till data is fetched.
        setErrors(false); // Reset errors before new api requests.

        // const res = await axios.get('/api/jokes');  // this works for proxy in local project not for deployment

        // const res = await axios.get('/api/products'); template for a not generic url
        // Making url dynamic for generic use.
        const res = await axios.get('/api/products?search=' + search.toLowerCase(), {

          // during post request we can send data, headers in this config object
          signal: controller.signal
        }); // Better option to use env variable for this get request url to hide the server origin api.

        console.log("api data calls on", '/api/products?search=' + search.toLowerCase())
        setProducts(res.data);
        setLoading(false);

      } catch (errors) { // Error should be put in state.
        // Handling signal abort error in catch block.
        console.log('before cancel', errors.message)
        if (axios.isCancel(errors)) {
          console.log('Request canceled', errors.message)
          return; // if request is cancelled then don't set error state.
        }
        setLoading(false);
        setErrors(true);
        console.error("service calls err", errors);
        return null;
      }
    })();


    // Cleanup function for unmounting event(onClick, EventListener,setTimeout(), etc) of component or before next useEffect call. 
    return () => {
      controller.abort(); // Abort the request when the component unmounts or when a dependency changes
      // For now we just implemented controller to avoid Race conditions. To get data in sequence of input letters in input box. 
      console.log("cleanup")
    }
  }, [search])



  // Will handle the multiple returns in a single return statement as conditional rendering.
  if (errors) return <h1>Something Went Wrong !!!</h1>
  if (loading) return <h1 className="text-3xl font-bold animate-bounce text-center">Loading...</h1>

  return (
    <>
      <h1>Handling API's in React (Professionally)</h1>
      <input type="text" placeholder='Search' className='border-2 border-white m-12 rounded-md'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Conditional Rendering when you don't want to use if conditions */}
      {/* {loading && <h1 className="text-3xl font-bold animate-bounce text-center">Loading...</h1>}
      {errors && <h1>Something Went Wrong !!!</h1>} */}

      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App

// Creating a custom react query hook for api calling and caching the data.(Very Generic way to handle api calls in react)
// const customReactQuery = (urlPath, querySearch) => {
//   const [products, setProducts] = useState([])
//   const [errors, setErrors] = useState(false)
//   const [loading, setLoading] = useState(false)

  
//   useEffect(() => {
//     const controller = new AbortController(); // To abort the previous api call if new api call is made before previous is completed(search on basis of onChange()). Provided by axios internally. To boost performance.
    
//     // Can create api calling using axios on button click and data will set in states but for now when calling API whenever app is going to mount.
//     ;(async () => {

//       try {
//         setLoading(true); // to show loading or text till data is fetched.
//         setErrors(false); // Reset errors before new api requests.

//         // const res = await axios.get('/api/jokes');  // this works for proxy in local project not for deployment

//         // const res = await axios.get('/api/products'); template for a not generic url
//         // Making url dynamic for generic use.
//         const res = await axios.get(urlPath + querySearch.toLowerCase(), {

//           // during post request we can send data, headers in this config object
//           signal: controller.signal
//         }); // Better option to use env variable for this get request url to hide the server origin api.

//         console.log("api data calls on", urlPath + querySearch.toLowerCase())
//         setProducts(res.data);
//         setLoading(false);

//       } catch (errors) { // Error should be put in state.
//         // Handling signal abort error in catch block.
//         if (axios.isCancel(errors)) {
//           console.log('Request canceled', errors.message)
//           return; // if request is cancelled then don't set error state.
//         }
//         setLoading(false);
//         setErrors(true);
//         console.error("service calls err", errors);
//         return null;
//       }
//     })();


//     // Cleanup function for unmounting event(onClick, EventListener,setTimeout(), etc) of component or before next useEffect call. 
//     return () => {
//       console.log("cleanup")
//       controller.abort(); // Abort the request when the component unmounts or when a dependency changes
//     }
//   }, [querySearch])

//   return [products, errors, loading]; // They can be returned in object also.
// }