
import MainLayout from "../components/layouts/MainLayout";
import MagazineReader from "../components/magazine/MagazineReader";
import { useParams, useLocation } from "react-router-dom";

const MagazineReaderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // Check if we're on the insider-insights route
  const isInsiderInsights = location.pathname === "/magazine/insider-insights";
  
  // Set up magazine data based on the route
  const magazineData = {
    title: isInsiderInsights ? "Insider Insights - H.R's Golden Advice" : "Example Magazine Issue",
    pdfUrl: "/sample.pdf"
  };

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
