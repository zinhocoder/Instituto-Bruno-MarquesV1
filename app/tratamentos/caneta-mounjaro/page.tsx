"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function CanetaMounjaro() {
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

  const benefits = [
    "Controle eficaz do diabetes",
    "Redução significativa do peso",
    "Melhora dos níveis de glicose",
    "Acompanhamento médico especializado",
    "Tratamento personalizado",
  ]

  const feedbacks = [
    {
      name: "Maria Santos",
      comment: "O tratamento com Mounjaro mudou minha vida! Consegui controlar o diabetes e perder peso de forma saudável.",
    },
    {
      name: "João Silva",
      comment: "Excelente acompanhamento médico! O Dr. Bruno é muito atencioso e o tratamento está sendo muito eficaz.",
    },
    {
      name: "Ana Costa",
      comment: "Recomendo muito o Instituto Bruno Marques para tratamento com Mounjaro. Profissionais excelentes!",
    },
  ]

  const advantages = [
    {
      title: "Médico Especializado",
      description: "Dr. Bruno Marques é especialista em endocrinologia e medicina estética.",
    },
    {
      title: "Acompanhamento Completo",
      description: "Monitoramento constante dos resultados e ajustes quando necessário.",
    },
    {
      title: "Tratamento Personalizado",
      description: "Protocolo adaptado às suas necessidades e objetivos específicos.",
    },
    {
      title: "Medicamento Original",
      description: "Utilizamos apenas medicamentos originais e aprovados pela ANVISA.",
    },
    {
      title: "Ambiente Clínico",
      description: "Atendimento em ambiente médico seguro e confortável.",
    },
    {
      title: "Resultados Comprovados",
      description: "Tratamento com eficácia comprovada para diabetes e perda de peso.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Consulta+Endocrinologia+1",
      alt: "Sala de Consulta Endocrinologia",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Endocrinologia",
      alt: "Equipamentos para Endocrinologia",
    },
    {
      src: "/canetamounjaro.jpg",
      alt: "Caneta Mounjaro",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/25f4c19c-3e99-468e-9f35-777a0061bff5___42de9141f98677f3f543e3afc392aa41.png"
            alt="Caneta Mounjaro"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Tratamento Médico
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Caneta <span className="text-gold">Mounjaro</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Tratamento inovador para controle do diabetes tipo 2 e perda de peso, 
                com acompanhamento médico especializado do Dr. Bruno Marques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#agendamento" passHref>
                  <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Agende sua Consulta
                  </Button>
                </Link>
                <Link href="https://wa.me/554799961355" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚕️</div>
                      <p className="text-sm font-medium text-gray-700">Médico</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Eficaz</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💪</div>
                      <p className="text-sm font-medium text-gray-700">Seguro</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Acompanhado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para que serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Para que serve a Caneta Mounjaro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste tratamento médico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Objetivos do Tratamento</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Controle do Diabetes</h4>
                    <p className="text-gray-600">Manter os níveis de glicose controlados de forma eficaz.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Perda de Peso</h4>
                    <p className="text-gray-600">Promover perda de peso significativa e sustentável.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora Metabólica</h4>
                    <p className="text-gray-600">Melhorar o perfil metabólico e a saúde geral.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Acompanhamento Médico</h4>
                    <p className="text-gray-600">Garantir segurança e eficácia com monitoramento especializado.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/canetamounjaro.jpg"
                alt="Caneta Mounjaro - Tratamento Médico"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios da Caneta Mounjaro</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como este tratamento pode transformar sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Controle Glicêmico",
                description: "Controle eficaz dos níveis de glicose",
                icon: "⚕️"
              },
              {
                title: "Perda de Peso",
                description: "Redução significativa e sustentável",
                icon: "⚖️"
              },
              {
                title: "Segurança",
                description: "Medicamento aprovado e seguro",
                icon: "🛡️"
              },
              {
                title: "Eficácia",
                description: "Resultados comprovados cientificamente",
                icon: "✨"
              },
              {
                title: "Acompanhamento",
                description: "Monitoramento médico especializado",
                icon: "👨‍⚕️"
              },
              {
                title: "Qualidade de Vida",
                description: "Melhora significativa da saúde geral",
                icon: "🌟"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Como Funciona o Tratamento com Mounjaro?</h2>
              <p className="text-gray-600 mb-6">
                O Mounjaro (tirzepatida) é um medicamento inovador que atua como agonista dual dos receptores GLP-1 e GIP, 
                proporcionando controle eficaz da glicemia e perda de peso significativa. O tratamento é realizado com 
                acompanhamento médico especializado, garantindo segurança e eficácia.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              {isMobile ? (
                <Accordion type="single" collapsible className="w-full">
                  {benefits.map((benefit, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-7 text-gray-600 text-sm">
                          {benefit === "Controle eficaz do diabetes"
                            ? "Ajuda a manter os níveis de glicose controlados de forma eficaz."
                            : benefit === "Redução significativa do peso"
                              ? "Promove perda de peso significativa e sustentável."
                              : benefit === "Melhora dos níveis de glicose"
                                ? "Reduz os níveis de glicose no sangue de forma consistente."
                                : benefit === "Acompanhamento médico especializado"
                                  ? "Monitoramento constante por médico especialista em endocrinologia."
                                  : "Protocolo adaptado às suas necessidades e objetivos específicos."}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <Image
                src="/25f4c19c-3e99-468e-9f35-777a0061bff5___42de9141f98677f3f543e3afc392aa41.png"
                alt="Caneta Mounjaro"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Nosso Espaço */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Espaço</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Image
              src="/FullSizeRender.jpg"
              alt="Espaço Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <Image
              src="/IMG_4431.jpg"
              alt="Clínica Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <Image
              src="/FullSizeRender.png"
              alt="Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o tratamento com Mounjaro
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O que é a Caneta Mounjaro?",
                  answer: "Mounjaro (tirzepatida) é um medicamento inovador que atua como agonista dual dos receptores GLP-1 e GIP, proporcionando controle eficaz da glicemia e perda de peso significativa.",
                },
                {
                  question: "Quem pode usar o Mounjaro?",
                  answer: "Pacientes com diabetes tipo 2 e obesidade que necessitam de controle glicêmico e perda de peso. O tratamento deve ser prescrito e acompanhado por médico especialista.",
                },
                {
                  question: "Como funciona o tratamento?",
                  answer: "O medicamento é administrado por via subcutânea uma vez por semana, com dose ajustada conforme a resposta individual e acompanhamento médico regular.",
                },
                {
                  question: "Quais são os efeitos colaterais?",
                  answer: "Os efeitos colaterais mais comuns incluem náuseas, diarreia e diminuição do apetite. Todos os efeitos são monitorados pelo médico durante o tratamento.",
                },
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer: "Os primeiros resultados podem ser observados em 2-4 semanas, com melhora progressiva do controle glicêmico e perda de peso ao longo do tratamento.",
                },
                {
                  question: "O tratamento é seguro?",
                  answer: "Sim, o Mounjaro é aprovado pela ANVISA e FDA, com segurança comprovada em estudos clínicos. O acompanhamento médico garante a segurança do tratamento.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Especialista Responsável</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça o profissional que será responsável pelo seu tratamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <div className="relative h-full">
                    <Image
                      src="/bruno.jpg"
                      alt="Dr. Bruno Marques"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-gold/90 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm font-medium">Especialista em</p>
                        <p className="text-lg font-bold">Mounjaro</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Endocrinologia</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em tratamentos para diabetes e obesidade, o Dr. Bruno Marques possui 
                      vasta experiência em Mounjaro e outras terapias inovadoras para controle metabólico. 
                      Com conhecimento especializado em endocrinologia, garante acompanhamento médico seguro e eficaz.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Médico e Fisioterapeuta</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">15+ anos de experiência</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Especialista em Endocrinologia</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Técnicas avançadas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Resultados comprovados</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Milhares de pacientes</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu compromisso é proporcionar controle metabólico eficaz que melhore 
                      a qualidade de vida dos meus pacientes, sempre com segurança e acompanhamento especializado."
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://wa.me/554799961355" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gold hover:bg-[#D4AF37] text-white px-8 py-3 w-full sm:w-auto">
                        Agendar Consulta
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Escolher o Instituto Bruno Marques?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Pacientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {feedbacks.map((feedback, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{feedback.comment}"</p>
                  <p className="font-semibold text-gold">- {feedback.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Agendamento */}
      <section id="agendamento" className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Agende sua Consulta</h2>
          <p className="text-xl mb-8 text-white">
            Entre em contato conosco e descubra como o tratamento com Mounjaro pode transformar sua saúde!
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-gold hover:bg-gray-100"
              onClick={() => window.open("https://wa.me/554799961355", "_blank")}
            >
              Agendar via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
