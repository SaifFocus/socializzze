
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileOptimizedPartnerForm from "@/components/MobileOptimizedPartnerForm";

const PartnerForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <MobileOptimizedPartnerForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerForm;
