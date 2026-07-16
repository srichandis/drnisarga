"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center max-w-md px-6">
            <h1 className="text-3xl font-bold text-[#0b3b80]">Service Not Found</h1>
            <p className="mt-4 text-gray-600">
              The service you are looking for does not exist or may have been moved.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-800"
            >
              <ArrowLeft className="h-4 w-4" />
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .map((s) => ({ slug: s.slug, title: s.title, shortName: s.shortName }));

  return <ServicePageLayout service={service} relatedServices={relatedServices} />;
}
