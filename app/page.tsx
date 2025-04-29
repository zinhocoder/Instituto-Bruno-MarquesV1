"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import Layout from "@/components/layout"
import Header from "@/components/header"
import { SpecialistsSection } from "@/components/specialists-section"
import TreatmentsCarousel from "@/components/treatments-carousel"
import { InstagramFeed } from "@/components/instagram-feed"
import ContactSection from "@/components/contact-section"
import FeedbackSection from "@/components/feedback-section"
import ResultsSection from "@/components/results-section"
import CoursesSection from "@/components/courses-section"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const heroPlugin = useRef(null)
  const aboutPlugin = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <Layout>
      <div className={`min-h-screen bg-white`}>
        {/* Header */}
        <Header />

        {/* Hero Section - Modernizada */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/IMG_3608.jpg" alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme sua <span className="text-[#D4AF37]">Beleza</span> e{" "}
                <span className="text-[#D4AF37]">Autoestima</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
                Rejuvenescimento facial e corporal com as técnicas mais avançadas e seguras do mercado
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] min-w-[200px]"
                  onClick={() => window.open("https://wa.me/5547999961355", "_blank")}
                >
                  Agende sua Consulta
                </Button>
                
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre o Instituto</h2>
                <p className="text-gray-600 mb-6">
                  O Instituto Bruno Marques é referência em tratamentos estéticos avançados, oferecendo soluções
                  personalizadas para rejuvenescimento facial e corporal. Nossa equipe de especialistas utiliza as mais
                  modernas técnicas e tecnologias para garantir resultados excepcionais e naturais.
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] border-none"
                  onClick={() => {
                    document.querySelector("#tratamentos")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Conheça nossos tratamentos
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/FullSizeRender.jpg?height=400&width=600"
                  alt="Instituto Bruno Marques"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="tratamentos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nossos Tratamentos</h2>
            <div className="relative">
              {(() => {
                const { carouselContent, scrollPrev, scrollNext, isMobile } = TreatmentsCarousel()
                return (
                  <div className="relative px-4 md:px-12">
                    {carouselContent}
                    <div className="flex justify-center mt-8 space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
                        onClick={scrollPrev}
                        aria-label="Tratamento anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
                        onClick={scrollNext}
                        aria-label="Próximo tratamento"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <CoursesSection />

        {/* Results Section - Redesenhada */}
        <ResultsSection />

        {/* Feedbacks Section - Redesenhada */}
        <FeedbackSection />

        {/* Specialists Section */}
        <SpecialistsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Instagram Feed / Blog Section */}
        <InstagramFeed />
      </div>
    </Layout>
  )
}
