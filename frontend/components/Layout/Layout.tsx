import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar/Sidebar'
import MeetingPage from './Meetings/MeetingPage.'
import WebcamComponent from './Webcam/Webcam'
import VideoComponent from './VC/VC'

const Layout = () => {
  const meetingCount = Array(4).fill(null);
  return (
    <div><Navbar />
      <Sidebar />
      <VideoComponent />
      <div className="grid">
        {meetingCount.map((_, index) => (
          <div key={index} className="col-4">
            <MeetingPage meetingTitle={index.toString()} time="1:00 pm - 2:00 pm" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Layout