
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MagazineReaderProps {
  pdfUrl: string;
  title: string;
}

const MagazineReader = ({ pdfUrl, title }: MagazineReaderProps) => {
  const flipBookRef = useRef(null);

  // For demo purposes, we'll use placeholder pages
  const pages = [
    { content: "Cover Page", background: "bg-white" },
    { content: "Table of Contents", background: "bg-gray-50" },
    { content: "Chapter 1", background: "bg-white" },
    { content: "Chapter 2", background: "bg-gray-50" },
    { content: "Chapter 3", background: "bg-white" },
    { content: "Back Cover", background: "bg-gray-50" },
  ];

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      
      <div className="relative w-full aspect-[2/1.4] bg-gray-100 shadow-xl rounded-lg overflow-hidden">
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
        >
          {pages.map((page, index) => (
            <div key={index} className={`${page.background} p-8 shadow-inner`}>
              <div className="h-full flex items-center justify-center text-xl">
                {page.content}
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div className="flex gap-4 mt-8">
        <Button
          variant="outline"
          onClick={() => (flipBookRef.current as any)?.pageFlip().flipPrev()}
        >
          <ChevronLeft className="mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => (flipBookRef.current as any)?.pageFlip().flipNext()}
        >
          Next
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default MagazineReader;
