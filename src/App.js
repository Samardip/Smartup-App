import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Discover from './Components/Discover/Discover';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [newsData, setNewsData] = useState([{}]);
    const [showSummaryArray, setShowSummaryArray] = useState([]);
    const getNewsData = async () => {
        const res = await axios
            .get("https://api.facthunt.in/fostergem/v1/post/list/public")
            .catch((error) => {
                alert(error);
            });
        setNewsData(res.data.content);
        console.log(res.data.content);
        var showSummaryArrayCopy = [];
        res.data.content.map((data) => {
            showSummaryArrayCopy.push(false);
        });
        setShowSummaryArray(showSummaryArrayCopy);
    };
    useEffect(() => {
        getNewsData();
    }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Navbar newsData={newsData}/>
        </div>
        <div style={{ width: "100%", backgroundColor: "#80808024" }}>
          <Discover newsData={newsData} showSummaryArray={showSummaryArray} setShowSummaryArray={setShowSummaryArray} setNewsData={setNewsData}/>
        </div>
      </div>
    </>
  );
}

export default App;