import { useRef, TouchEvent } from 'react';
import { ModalProps } from "@/types/types";

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const startYRef = useRef(0);
  const modalContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!modalContentRef.current) return;
    
    const deltaY = e.touches[0].clientY - startYRef.current;
    
    if (deltaY > 0) {
      modalContentRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!modalContentRef.current) return;
    
    const deltaY = e.changedTouches[0].clientY - startYRef.current;
    modalContentRef.current.style.transform = '';
    
    if (deltaY > 100) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ bottom: '56px' }}
    >
      <div
        ref={modalContentRef}
        className="relative bg-[var(--bg-modal)] rounded-t-2xl md:rounded-2xl w-full max-w-lg md:max-w-2xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center py-3 md:hidden">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Закрыть"
        >
          &times;
        </button>
        
        <div className="max-h-[calc(100vh-180px)] overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}