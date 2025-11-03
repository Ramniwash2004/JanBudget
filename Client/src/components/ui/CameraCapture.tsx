import { useState, useRef, useEffect } from 'react';
import { Camera, X, RotateCcw } from 'lucide-react';
import { Button } from './button';

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
  onCancel: () => void;
}

export function CameraCapture({ onCapture, onCancel }: CameraCaptureProps) {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async (mode: 'user' | 'environment' = 'environment') => {
    setCameraError(null);
    
    // Stop existing stream if any
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: mode,
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      });
      
      setStream(mediaStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error('Camera error:', err);
      setCameraError('Unable to access camera. Please check permissions.');
    }
  };

  const switchCamera = () => {
    const newMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newMode);
    startCamera(newMode);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedImage(imageData);
        
        // Stop camera after capturing
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
          setStream(null);
        }
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera(facingMode);
  };

  const confirmCapture = () => {
    if (capturedImage) {
      onCapture(capturedImage);
    }
  };

  const handleCancel = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    onCancel();
  };

  useEffect(() => {
    startCamera(facingMode);
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (cameraError) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <Camera className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <p className="text-red-600 mb-4">{cameraError}</p>
        <Button variant="outline" onClick={handleCancel}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {capturedImage ? (
        // Preview captured image
        <div className="space-y-4">
          <div className="relative">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={retakePhoto}
              className="flex-1"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake
            </Button>
            <Button
              type="button"
              onClick={confirmCapture}
              className="flex-1"
            >
              <Camera className="w-4 h-4 mr-2" />
              Use This Photo
            </Button>
          </div>
        </div>
      ) : (
        // Live camera view
        <div className="space-y-4">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full rounded-lg"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                onClick={switchCamera}
                className="bg-white/90 hover:bg-white"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                size="sm"
                variant="destructive"
                onClick={handleCancel}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Button
            type="button"
            onClick={capturePhoto}
            className="w-full"
            size="lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            Take Photo
          </Button>
        </div>
      )}
    </div>
  );
}