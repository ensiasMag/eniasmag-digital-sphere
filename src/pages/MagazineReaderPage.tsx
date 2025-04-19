
import MainLayout from "../components/layouts/MainLayout";
import MagazineReader from "../components/magazine/MagazineReader";
import { useParams } from "react-router-dom";

const MagazineReaderPage = () => {
  const { id } = useParams();
  
  // This is temporary data - in a real app, you would fetch this from your backend
  const magazineData = {
    title: "Example Magazine Issue",
    pdfUrl: "/sample.pdf" // This would be your actual PDF URL from the backend
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
