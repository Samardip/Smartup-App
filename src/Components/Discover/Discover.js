import React from "react";
import AddIcon from '@mui/icons-material/Add';

export default function Discover({newsData,showSummaryArray,setNewsData,setShowSummaryArray}) {
    
    const showSummary = async (e, index) => {
        let showSummaryArrayCopy = [];
        showSummaryArrayCopy = showSummaryArray.map((data, idx) => {
            if (idx === index) {
                return data === true ? false : true;
            } else {
                return data;
            }
        });
        //console.log(showSummaryArrayCopy);
        //showSummaryArrayCopy[index]=showSummaryArrayCopy[index]===true?false:true;

        setShowSummaryArray(showSummaryArrayCopy);
        //console.log(showSummaryArray);
        //console.log(showSummaryArray[index]);
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "94%",
                    marginLeft: "10px",
                }}
            >
                <div
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#808080b5",
                    }}
                >
                    Discover
                </div>
                <div style={{
                    width: "57px",
                    margin: "4px",
                    backgroundColor: "#00c4ff",
                    borderRadius: "17px", textAlign: "center",
                }}><AddIcon style={{
                    color: "white",
                    fontSize: "29px",

                }} /></div>
            </div>
            <div
                className="row"
                style={{ width: "100%", overflowY: "scroll", height: "90vh" }}
            >
                {newsData.map((data, index) => {
                    //console.log(showSummaryArray[index]);
                    return (
                        <>
                            <div
                                className="card col-4"
                                style={{ width: "25rem", margin: "20px" }}
                            >
                                <div
                                    style={{
                                        height: "auto",
                                        width: "auto",
                                        cursor: "pointer",
                                    }}
                                    onClick={(e) => {
                                        showSummary(e, index);
                                    }}
                                >
                                    <img
                                        src={data.coverImageUrl}
                                        className="card-img-top"
                                        alt="..."
                                        style={{ height: "201px" }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: "initial" }}>
                                        {data.title}
                                    </h5>
                                    {showSummaryArray[index] === true ? (
                                        <p className="card-text" style={{ fontSize: "smaller",fontFamily: "emoji" }}>
                                            {data.summary}
                                        </p>
                                    ) : (
                                        <div style={{ fontSize: "smaller",fontFamily: "emoji" }}>
                                            Click on Image to view its Summary
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
