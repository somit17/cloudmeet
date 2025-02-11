import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const WebcamComponent = () => {
  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
  const [showPermissionPopup, setShowPermissionPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [snapshot, setSnapshot] = useState<string | null>(null); // Store the captured image
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Function to request webcam access
  const requestWebcamAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setWebcamStream(stream);
      setError(null);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setError('Webcam access denied or unavailable.');
      setShowPermissionPopup(true);
    }
  };

  // Function to capture a snapshot
  const captureSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      // Set canvas dimensions to match the video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current frame from the video onto the canvas
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the canvas content to a data URL (image)
        const imageDataUrl = canvas.toDataURL('image/png');
        setSnapshot(imageDataUrl); // Save the snapshot
      }
    }
  };

  // Function to close the popup
  const closePermissionPopup = () => {
    setShowPermissionPopup(false);
  };

  return (
    <div className="flex flex-column align-items-center">
      {/* Button to open webcam */}
      <Button
        label="Open Webcam"
        onClick={requestWebcamAccess}
        rounded
        className="w-10rem mt-3"
      />

      {/* Display webcam feed */}
      {webcamStream && (
        <div className="mt-4">
          <h3>Webcam Feed</h3>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: '100%', maxWidth: '400px', border: '1px solid #ccc' }}
          />
          <Button
            label="Capture Snapshot"
            onClick={captureSnapshot}
            rounded
            className="w-10rem mt-3"
          />
        </div>
      )}

      {/* Display the captured snapshot */}
      {snapshot && (
        <div className="mt-4">
          <h3>Captured Snapshot</h3>
          <img src={snapshot} alt="Snapshot" style={{ width: '100%', maxWidth: '400px', border: '1px solid #ccc' }} />
        </div>
      )}

      {/* Permission Denied Popup */}
      <Dialog
        header="Webcam Access Required"
        visible={showPermissionPopup}
        onHide={closePermissionPopup}
        style={{ width: '30vw' }}
        footer={
          <div>
            <Button
              label="Close"
              onClick={closePermissionPopup}
              className="p-button-text"
            />
          </div>
        }
      >
        <p>
          {error ||
            "It seems like we don't have permission to access your webcam. Please allow access in your browser settings."}
        </p>
      </Dialog>

      {/* Hidden canvas for capturing snapshots */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default WebcamComponent;