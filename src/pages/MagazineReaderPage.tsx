
import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import MagazineReader from "../components/magazine/MagazineReader";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

// Define magazine data interface
interface MagazineData {
  title: string;
  pdfUrl: string;
}

// Mock database of magazines with their PDFs
const magazineDatabase: Record<string, MagazineData> = {
  "insider-insights": {
    title: "Insider Insights - H.R's Golden Advice",
    pdfUrl: "/pdfs/insider-insights.pdf"
  },
  "first-edition": {
    title: "First Edition - Ink Knows No Boundaries",
    pdfUrl: "/pdfs/first-edition.pdf"
  },
  "career-success": {
    title: "Career Success 101 - Unlocking Insights To Be Recruited",
    pdfUrl: "/pdfs/career-success.pdf"
  },
  "tech-innovations": {
    title: "Tech Innovations - The Future is Now",
    pdfUrl: "/pdfs/tech-innovations.pdf"
  },
  "arts-culture": {
    title: "Arts & Culture - Expressions of Creativity",
    pdfUrl: "/pdfs/arts-culture.pdf"
  },
  "research-spotlight": {
    title: "Research Spotlight - Discoveries and Breakthroughs",
    pdfUrl: "/pdfs/research-spotlight.pdf"
  }
};

// Default magazine data if none is found
const defaultMagazineData = {
  title: "Example Magazine Issue",
  pdfUrl: "/pdfs/sample.pdf"
};

const MagazineReaderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [magazineData, setMagazineData] = useState<MagazineData>(defaultMagazineData);

  useEffect(() => {
    // Check if we're on a specific magazine route or using the id parameter
    const magazineId = location.pathname === "/magazine/insider-insights" ? "insider-insights" : id;
    
    if (magazineId && magazineDatabase[magazineId]) {
      setMagazineData(magazineDatabase[magazineId]);
    } else if (magazineId && !magazineDatabase[magazineId]) {
      // If magazine ID is not found in our database
      toast({
        title: "Magazine not found",
        description: `The magazine "${magazineId}" could not be found.`,
        variant: "destructive"
      });
      setMagazineData(defaultMagazineData);
    }
  }, [id, location.pathname]);

  return (
    <MainLayout>
      <MagazineReader
        title={magazineData.title}
        pdfUrl={magazineData.pdfUrl}
      />
    </MainLayout>
  );
};

export default MagazineReaderPage;
