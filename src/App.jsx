import "./App.css";

function App() {
  return <>
   {/* <div style={{display:'flex',padding:"10px",justifyContent:"center",alignItems:"center"}} >
    <div style={{margin:'5px',border:"1px solid black",padding:"10px"}}>div One</div>
    <div style={{margin:'5px',border:"1px solid black",padding:"10px"}}>div Two</div>
    <div style={{margin:'5px',border:"1px solid black",padding:"10px"}} >div Three</div>
   </div> */}
   {/* <div> 
   <h1 className="text-3xl text-blue-500 font-bold underline">
      Hello world!
    </h1>
   </div> */}

    <div className="flex p-1 m-2  justify-around" >
      <div className=" bg-red-400" >Hello Suraj</div>
      <div className="bg-blue-500" >Hello Suraj</div>
      <div className=" bg-yellow-600" >Hello Suraj</div>
    </div>

  </>;
}

export default App;
