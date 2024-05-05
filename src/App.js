import React, { Fragment, useEffect } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { routes } from './routes/index.js';
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

export function App() {
  
  // useEffect(() => {
  //   fetchApi()
  // },[])

  // const fetchApi = async () =>{
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/getAll`)
  //   return res.data
  // }


  // const query = useQuery({queryKey:['todos'] , queryFn:fetchApi})

  // console.log("Query : " , query)

  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map( route => {
              let Page = route.page
              let Layout = route.isShowHead ? DefaultComponent : Fragment
              return(
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
                } />
              )
            })
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App;
