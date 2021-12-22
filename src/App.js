import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import { LayoutProvider } from "./component/context/LayoutContext";
import Layout from "./component/Layout/Layout";
import Main from "./component/Main/Main";
import Navbar from "./component/navbar/Navbar";
import About from "./component/Pages/About/About";
import News from "./component/Pages/News/News";
import Productss from "./component/Pages/Product/Productss";
import Output from "./component/Pages/singlePages/output/Output";
import LastNews from "./component/Pages/singlePages/output/LastNews";

const App =() => {
  return (
    <div >
       <BrowserRouter>
      <LayoutProvider>
        <Route path='/' render={() =>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/Productss'} component={Productss}/>
             <Route path={'/news'} component={News}/>
            <Route path={'/detail/:id'} component={Output}/>
              <Route path={'/lastNews/:id'} component={LastNews}/>
            
          </Switch>
        </Layout>
        }/>
      
      </LayoutProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
