import Hero from "@/components/Hero";
import WhyMcq from "@/components/whyMcq";
import UpcomingExams from "@/components/UpcomingExams";
import Review from "@/components/Review";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../app/globals.css'; 

export default function Home() {
  return (
    <main>
       <Hero />
       <WhyMcq />
       <UpcomingExams />
       <Review />
    </main>
  );
}
