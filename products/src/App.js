import './App.css';
import Header from './componets/header/header.jsx';
import Search from './componets/searchbar/search.jsx';
import Newproductbtn from './componets/newproductbtn/newproductbtn.jsx'
import Table from './componets/table/table';
import { useEffect, useState } from "react";
function App() {

  return (
    <>
    <Header/>
    <br></br>
    <br></br>
    <div className='t1'>

    <Search/>
    <Newproductbtn/>
    </div>
    <br></br>
    <br></br>
    <Table/>
    </>

  );
}

export default App;
