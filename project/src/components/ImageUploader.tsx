import React, { useState, useCallback } from 'react';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageCaptured: (imageData: string) => void;
  isProcessing: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageCaptured, isProcessing }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, []);

  const handleFile = useCallback((file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      onImageCaptured(result);
    };
    reader.readAsDataURL(file);
  }, [onImageCaptured]);

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
          dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
        } ${isProcessing ? 'opacity-70 pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="space-y-4">
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="w-full h-full object-contain"
              />
            </div>
            {!isProcessing && (
              <button 
                className="btn btn-secondary"
                onClick={() => setPreviewUrl(null)}
              >
                Upload a different image
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="flex justify-center">
              <Upload className="h-16 w-16 text-primary-400" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Drag and drop your image here</p>
              <p className="text-gray-500 mt-1">or click to browse files</p>
            </div>
            <label className="btn btn-primary inline-block cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              Select Image
            </label>
            <div className="flex justify-center space-x-4 pt-4">
              <div className="flex items-center text-primary-600">
                <ImageIcon className="h-5 w-5 mr-2" />
                <span>Upload Image</span>
              </div>
              <div className="flex items-center text-primary-600">
                <Camera className="h-5 w-5 mr-2" />
                <span>Take Photo</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;