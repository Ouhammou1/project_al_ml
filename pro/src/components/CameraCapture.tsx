import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, X } from 'lucide-react';

interface CameraCaptureProps {
  onImageCaptured: (imageData: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onImageCaptured }) => {
  const webcamRef = useRef<Webcam>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
      }
    }
  }, [webcamRef]);

  const handleAccept = useCallback(() => {
    if (capturedImage) {
      onImageCaptured(capturedImage);
      setShowCamera(false);
    }
  }, [capturedImage, onImageCaptured]);

  const handleRetake = useCallback(() => {
    setCapturedImage(null);
  }, []);

  const handleClose = useCallback(() => {
    setShowCamera(false);
    setCapturedImage(null);
  }, []);

  if (!showCamera) {
    return (
      <button 
        className="btn btn-primary flex items-center justify-center space-x-2"
        onClick={() => setShowCamera(true)}
      >
        <Camera className="h-5 w-5" />
        <span>Take Photo</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-2xl">
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-xl font-semibold text-primary-700">Capture Plant Image</h3>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          {capturedImage ? (
            <div className="space-y-4">
              <div className="relative w-full h-[400px]">
                <img 
                  src={capturedImage} 
                  alt="Captured plant" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center space-x-3">
                <button 
                  className="btn btn-secondary"
                  onClick={handleRetake}
                >
                  Retake
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={handleAccept}
                >
                  Use This Image
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "environment"
                }}
                className="w-full h-[400px] object-contain bg-gray-100"
              />
              <div className="flex justify-center">
                <button 
                  className="btn btn-primary"
                  onClick={capture}
                >
                  Capture
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;