import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { Home } from "./Home";
import { Fetchold } from "./Fetchold";
import { Fetrq } from "./Fetrq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FetchInd } from "./FetchInd";
import { InfiniteScroll } from "./InfiniteScroll";


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/trad",
        element:<Fetchold/>,
      },
      {
        path:"/rq",
        element:<Fetrq/>,
        
      },
      {
        path:"/rq/:id",
        element:<FetchInd/>,
        
      },
      {
        path:"/infinite",
        element:<InfiniteScroll/>,
        
      },
    ],
  },
]) ;
export const Tanstackmain=()=>{
    
const queryclient = new QueryClient();

return <>
<QueryClientProvider client={queryclient}>
 <RouterProvider router={router}/>
 <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
</>
}