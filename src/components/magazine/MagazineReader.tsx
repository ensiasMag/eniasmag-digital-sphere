
import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface MagazineReaderProps {
  pdfUrl: string;
  title: string;
}

interface PageProps {
  number: number;
  content: string;
  background: string;
}

const MagazineReader = ({ pdfUrl, title }: MagazineReaderProps) => {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1);

  // For demo purposes, we'll use placeholder pages
  const pages = [
    { content: "Cover Page", background: "bg-white", number: 1 },
    { content: "Table of Contents", background: "bg-gray-50", number: 2 },
    { content: "Chapter 1", background: "bg-white", number: 3 },
    { content: "Chapter 2", background: "bg-gray-50", number: 4 },
    { content: "Chapter 3", background: "bg-white", number: 5 },
    { content: "Back Cover", background: "bg-gray-50", number: 6 },
  ];

  const handlePageFlip = (e: any) => {
    setCurrentPage(e.data + 1);
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      
      <div className="relative w-full aspect-[2/1.4] bg-gray-100 shadow-xl rounded-lg overflow-hidden">
        <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }} className="transition-transform">
          <HTMLFlipBook
            ref={flipBookRef}
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            showCover={true}
            mobileScrollSupport={true}
            className="demo-book"
            onFlip={handlePageFlip}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            clickEventForward={false}
            useMouseEvents={true}
            swipeDistance={0}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {pages.map((page) => (
              <div key={page.number} className={`${page.background} p-8 shadow-inner`}>
                <div className="h-full flex items-center justify-center text-xl">
                  {page.content}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => (flipBookRef.current as any)?.pageFlip().flipPrev()}
          >
            <ChevronLeft className="mr-2" />
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => (flipBookRef.current as any)?.pageFlip().flipNext()}
          >
            Next
            <ChevronRight className="ml-2" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={zoomOut}
            disabled={zoom <= 0.5}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-600 min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={zoomIn}
            disabled={zoom >= 2}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MagazineReader;
