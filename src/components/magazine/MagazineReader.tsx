
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
  image?: string;
}

const MagazineReader = ({ pdfUrl, title }: MagazineReaderProps) => {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Mock PDF content with more realistic pages
  const pages = [
    {
      number: 1,
      content: "Career 101's Book",
      background: "bg-ensiasRed-50",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 2,
      content: `Table of Contents

1. Introduction to Career Planning
2. Resume Building Essentials
3. Interview Preparation
4. Networking Strategies
5. Professional Development
6. Industry Insights`,
      background: "bg-white"
    },
    {
      number: 3,
      content: `Chapter 1: Introduction to Career Planning

Understanding your career path is the first step towards professional success. This chapter covers:

• Self-assessment techniques
• Goal setting strategies
• Career path mapping
• Industry research methods`,
      background: "bg-white",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 4,
      content: `Chapter 2: Resume Building Essentials

Learn how to craft a compelling resume that stands out:

• Modern resume formats
• Key sections and content
• Action words and achievements
• Portfolio development`,
      background: "bg-white",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      number: 5,
      content: `Chapter 3: Interview Preparation

Master the art of interviewing:

• Common interview questions
• STAR method responses
• Body language tips
• Follow-up strategies`,
      background: "bg-white",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 6,
      content: "Thank you for reading!",
      background: "bg-ensiasRed-50"
    },
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
            style={{}}
            onInit={() => setTotalPages(pages.length)}
          >
            {pages.map((page) => (
              <div key={page.number} className={`${page.background} p-8 shadow-inner`}>
                <div className="h-full flex flex-col gap-6">
                  {page.image ? (
                    <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                      <img 
                        src={page.image} 
                        alt={`Page ${page.number}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="whitespace-pre-wrap text-lg">{page.content}</div>
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
