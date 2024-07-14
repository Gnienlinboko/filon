
import { useMemo } from "react"; 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Article, Categorie, Commande, CreateArticle, CreateCategorie, CreateCommande, CreateProduit, Home, Login, MainLayout, Produits } from "./pages";



function App() {

  const routers = useMemo(()=> createBrowserRouter([
    {
       path:'/',
       element: <Login />
    },

    {
      path:'/dashboard',
      element: <MainLayout />,
      errorElement: <div>not found</div>,
      children:[
        {
          path:"",
          element: <Home />,
        },
        {
          path:"categorie",
          element: <Categorie />,
        },
        {
          path:"createCategorie",
          element: <CreateCategorie />,
        },
        {
          path:"createProduit",
          element: <CreateProduit />,
        },
        {
          path:"produits",
          element: <Produits />,
        },
        {
          path:"article",
          element: <Article />,
        },
        {
          path:"createArticle",
          element: <CreateArticle />,
        },
        {
          path:"createCommande",
          element: <CreateCommande />,
        },
        {
          path:"Commande",
          element: <Commande />,
        },
      ]
    },

   
    
  ]),[]);

  return (
    <div className="App">
     <RouterProvider router={routers} />
    </div>
  );
}

export default App;
