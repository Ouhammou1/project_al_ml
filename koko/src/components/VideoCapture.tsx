import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Video, Camera, X } from 'lucide-react';

interface VideoCaptureProps {
  onFrameCaptured: (imageData: string) => void;
}

const VideoCapture: React.FC<VideoCaptureProps> = ({ onFrameCaptured }) => {
  const webcamRef = useRef<Webcam>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const captureFrame = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        onFrameCaptured(imageSrc);
      }
    }
  }, [onFrameCaptured]);

  const handleClose = useCallback(() => {
    setShowVideo(false);
    setIsStreaming(false);
  }, []);

  const toggleStream = useCallback(() => {
    setIsStreaming(!isStreaming);
  }, [isStreaming]);

  if (!showVideo) {
    return (
      <button 
        className="btn btn-primary flex items-center justify-center space-x-2"
        onClick={() => setShowVideo(true)}
      >
        <Video className="h-5 w-5" />
        <span>Start Video Stream</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-2xl">
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-xl font-semibold text-primary-700">Plant Video Recognition</h3>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "environment"
              }}
              className="w-full h-[400px] object-contain bg-gray-100 rounded-lg"
            />
            <div className="flex justify-center space-x-3">
              <button 
                className={`btn ${isStreaming ? 'btn-secondary' : 'btn-primary'}`}
                onClick={toggleStream}
              >
                {isStreaming ? 'Stop Stream' : 'Start Stream'}
              </button>
              <button 
                className="btn btn-accent"
                onClick={captureFrame}
                disabled={!isStreaming}
              >
                <Camera className="h-5 w-5 mr-2" />
                Capture Frame
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCapture;