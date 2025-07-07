"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import Layout from "@/components/layout"
import { SpecialistsSection } from "@/components/specialists-section"
import TreatmentsCarousel from "@/components/treatments-carousel"
import { InstagramFeed } from "@/components/instagram-feed"
import ContactSection from "@/components/contact-section"
import FeedbackSection from "@/components/feedback-section"
import ResultsSection from "@/components/results-section"
import CoursesSection from "@/components/courses-section"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

export default function Home() {
  const heroPlugin = useRef(null)
  const aboutPlugin = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <div className={`min-h-screen bg-white`}>
        {/* Hero Section - Slides Automáticos */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Header interno com logo e menu */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
              {isMobile ? (
                // Mobile Header
                <div className="pt-2 pb-16 flex justify-center items-center relative">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="z-30 p-2 rounded-full bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white absolute right-0 top-4"
                    aria-label="Menu"
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {/* Menu Mobile Overlay */}
                  {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
                      {/* Botão Fechar */}
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:bg-[#D4AF37] transition-colors duration-300"
                        aria-label="Fechar Menu"
                      >
                        <X size={24} />
                      </button>
                      
                      <nav className="flex flex-col items-center space-y-6 px-4 w-full max-h-[80vh] overflow-y-auto">
                        <Link href="/" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold">
                          Início
                        </Link>
                        <Link href="/tratamentos" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold">
                          Tratamentos
                        </Link>
                        <Link href="/cursos" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold">
                          Cursos
                        </Link>
                        <Link href="#resultados" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold" onClick={() => {
                          document.querySelector("#resultados")?.scrollIntoView({ behavior: "smooth" })
                          setIsMobileMenuOpen(false)
                        }}>
                          Resultados
                        </Link>
                        <Link href="#feedbacks" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold" onClick={() => {
                          document.querySelector("#feedbacks")?.scrollIntoView({ behavior: "smooth" })
                          setIsMobileMenuOpen(false)
                        }}>
                          Feedbacks
                        </Link>
                        <Link href="#blog" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold" onClick={() => {
                          document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" })
                          setIsMobileMenuOpen(false)
                        }}>
                          Blog
                        </Link>
                        <Link href="#contato" className="text-white text-xl hover:text-[#C4A052] transition-colors duration-300 font-semibold" onClick={() => {
                          document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
                          setIsMobileMenuOpen(false)
                        }}>
                          Contato
                        </Link>
                      </nav>
                    </div>
                  )}
                </div>
              ) : (
                // Desktop Header com logo e menu
                <div className="py-4">
                  <div className="flex items-start relative">
                    <Link href="/" className="z-20">
                      <Image
                        src="/brunomarqueslogo.png"
                        alt="Instituto Bruno Marques"
                        width={500}
                        height={500}
                        className="w-80 h-80"
                      />
                    </Link>
                    
                    {/* Menu Desktop Centralizado */}
                    <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] rounded-full px-8 py-3 shadow-md">
                      <Link href="/" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold">
                        Início
                      </Link>
                      <Link href="/tratamentos" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold">
                        Tratamentos
                      </Link>
                      <Link href="/cursos" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold">
                        Cursos
                      </Link>
                      <Link href="#resultados" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#resultados")?.scrollIntoView({ behavior: "smooth" })
                      }}>
                        Resultados
                      </Link>
                      <Link href="#feedbacks" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#feedbacks")?.scrollIntoView({ behavior: "smooth" })
                      }}>
                        Feedbacks
                      </Link>
                      <Link href="#blog" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" })
                      }}>
                        Blog
                      </Link>
                      <Link href="#contato" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
                      }}>
                        Contato
                      </Link>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Slide 1 - Transforme sua Beleza */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/IMG_3608.jpg" alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
            
            {/* Elementos decorativos sutis */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
              <div className="text-center max-w-4xl mx-auto">
                {/* Título refinado */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    <span className="text-white animate-fade-in-up font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Transforme</span>
                    <br />
                    <span className="shimmer-text animate-fade-in-up animation-delay-200 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      sua Beleza
                    </span>
                    <br />
                    <span className="text-white animate-fade-in-up animation-delay-400 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">e</span>
                    <br />
                    <span className="shimmer-text animate-fade-in-up animation-delay-600 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      Autoestima
                    </span>
                  </h1>
                </div>
                
                {/* Subtítulo elegante */}
                <p className="text-lg md:text-xl mb-10 text-white font-semibold leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-800 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Rejuvenescimento facial e corporal com as técnicas mais avançadas e seguras do mercado, 
                  proporcionando resultados naturais e duradouros.
                </p>
                
                {/* Botões elegantes */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
                  <Link href="https://wa.me/5547999961355" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-gold/20 transition-all duration-300 transform hover:scale-105 border-0"
                    >
                      Agende sua Consulta
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 text-black hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      const element = document.querySelector("#tratamentos")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Conheça os Tratamentos
                  </Button>
                </div>
                
                {/* Indicadores de qualidade */}
                <div className="flex justify-center items-center gap-8 mt-12 animate-fade-in-up animation-delay-1200">
                  <div className="flex items-center text-white font-medium text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-lg">✓</span>
                    Profissionais Especializados
                  </div>
                  <div className="flex items-center text-white font-medium text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-lg">✓</span>
                    Tecnologia Avançada
                  </div>
                  <div className="flex items-center text-white font-medium text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-lg">✓</span>
                    Resultados Naturais
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Excelência em Estética */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/jessicabanner.jpg" alt="Excelência em Estética" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
            
            {/* Elementos decorativos sutis */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
              <div className="text-center max-w-4xl mx-auto">
                {/* Título elegante */}
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                    <span className="text-white animate-fade-in-up font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Melhores</span>
                    <br />
                    <span className="shimmer-text animate-fade-in-up animation-delay-200 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      Especialistas
                    </span>
                    <br />
                    <span className="text-white animate-fade-in-up animation-delay-400 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Melhores</span>
                    <br />
                    <span className="shimmer-text animate-fade-in-up animation-delay-600 font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      Resultados
                    </span>
                  </h1>
                </div>
                
                {/* Subtítulo elegante */}
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-white font-semibold leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-800 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] px-4">
                  Equipe especializada com os equipamentos mais avançados do mercado, 
                  garantindo resultados excepcionais e naturais para sua autoestima.
                </p>
                
                {/* Botões elegantes */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-1000 px-4">
                  <Link href="https://wa.me/5547999961355" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-gold/20 transition-all duration-300 transform hover:scale-105 border-0"
                    >
                      Agende sua Consulta
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 text-black hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      const element = document.querySelector("#tratamentos")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Conheça os Tratamentos
                  </Button>
                </div>
                
                {/* Indicadores de qualidade */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 animate-fade-in-up animation-delay-1200">
                  <div className="flex items-center text-white font-medium text-xs sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-base sm:text-lg">👨‍⚕️</span>
                    <span className="hidden sm:inline">Especialistas Qualificados</span>
                    <span className="sm:hidden">Especialistas</span>
                  </div>
                  <div className="flex items-center text-white font-medium text-xs sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-base sm:text-lg">🔬</span>
                    <span className="hidden sm:inline">Equipamentos Avançados</span>
                    <span className="sm:hidden">Equipamentos</span>
                  </div>
                  <div className="flex items-center text-white font-medium text-xs sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="text-gold mr-2 text-base sm:text-lg">✨</span>
                    <span className="hidden sm:inline">Resultados Excepcionais</span>
                    <span className="sm:hidden">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores de slide */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-white' : 'bg-white/40'}`}
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-white' : 'bg-white/40'}`}
            />
          </div>

          {/* Scroll indicator sutil */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-white font-medium drop-shadow-lg">
              <span className="text-xs mb-2">Role para descobrir</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
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
