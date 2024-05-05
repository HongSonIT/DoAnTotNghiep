import React from "react";
import RoomDetailComponent from "../../components/RoomDetailComponent/RoomDetailComponent";



const RoomDetailPage = () => {
    return (
        <div style={{padding:'0 120px',backgroundColor:'#f5fafe' , height:'calc(100vh - 50px)'}}>
            <h2 style={{padding:'20px 0'}}>Thông Tin Phòng</h2>
            <RoomDetailComponent/>
        </div>
    )
}

export default RoomDetailPage