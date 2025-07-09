'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Lock, Eye, Camera, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { loadScreenshotData } from '@/utils/screenshotUtils';

interface ScreenshotImage {
  filename: string;
  caption: string;
  description: string;
}

interface ScreenshotData {
  password: string;
  images: ScreenshotImage[];
}

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  password: string;
  caseStudyId: string;
  marketingLink?: string;
}

export default function ScreenshotModal({
  isOpen,
  onClose,
  password,
  caseStudyId,
  marketingLink
}: ScreenshotModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [screenshots, setScreenshots] = useState<ScreenshotData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Reset authentication when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsAuthenticated(false);
      setPasswordInput('');
      setCurrentImageIndex(0);
      setPasswordError(false);
      setShowPassword(false);
      setScreenshots(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  // Load screenshots when authenticated
  useEffect(() => {
    if (isAuthenticated && !screenshots) {
      setIsLoading(true);
      loadScreenshotData(caseStudyId, password)
        .then(data => {
          setScreenshots(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [isAuthenticated, screenshots, caseStudyId, password]);

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === password) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  // Navigate images
  const nextImage = useCallback(() => {
    if (screenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.images.length);
    }
  }, [screenshots]);

  const prevImage = useCallback(() => {
    if (screenshots) {
      setCurrentImageIndex((prev) => (prev - 1 + screenshots.images.length) % screenshots.images.length);
    }
  }, [screenshots]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen || !isAuthenticated) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, isAuthenticated, prevImage, nextImage, onClose]);

  if (!isOpen) return null;

  const currentImage = screenshots?.images[currentImageIndex];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-bold text-gray-900">Case Study Screenshots</h3>
              <p className="text-sm text-gray-600">
                {isAuthenticated && screenshots ? `${currentImageIndex + 1} of ${screenshots.images.length}` : 'Password required'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {marketingLink && (
              <a
                href={marketingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Marketing Page
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {!isAuthenticated ? (
            /* Password Form */
            <div className="flex items-center justify-center h-full p-8">
              <div className="max-w-md w-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Protected Content</h3>
                  <p className="text-gray-600">
                    These screenshots contain confidential information. Please enter the password to view.
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${
                          passwordError ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter password"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">Incorrect password. Please try again.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Access Screenshots
                  </button>
                </form>
              </div>
            </div>
          ) : isLoading ? (
            /* Loading State */
            <div className="flex items-center justify-center h-full p-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading screenshots...</p>
              </div>
            </div>
          ) : !screenshots || screenshots.images.length === 0 ? (
            /* No Screenshots */
            <div className="flex items-center justify-center h-full p-8">
              <div className="text-center">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No screenshots available for this case study.</p>
              </div>
            </div>
          ) : (
            /* Screenshot Viewer */
            <div className="h-full flex flex-col">
              {/* Navigation */}
              {screenshots && screenshots.images.length > 1 && (
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <button
                    onClick={prevImage}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  
                  <div className="flex gap-2">
                    {screenshots && screenshots.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextImage}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Image Display */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 flex items-center justify-center bg-gray-100 p-6 min-h-0">
                  {currentImage && (
                    <div className="relative w-full h-full">
                      <Image
                        src={`/case-studies/${caseStudyId}/${currentImage.filename}`}
                        alt={currentImage.caption}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        quality={95}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                      />
                    </div>
                  )}
                </div>

                {/* Caption */}
                {currentImage && (
                  <div className="p-4 border-t bg-white">
                    <h4 className="font-semibold text-gray-900 mb-1">{currentImage.caption}</h4>
                    <p className="text-sm text-gray-600">{currentImage.description}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}