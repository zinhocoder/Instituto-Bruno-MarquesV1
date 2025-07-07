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

export default function PreenchedoresCorporais() {
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
    "Aumento de volume em áreas específicas",
    "Correção de assimetrias corporais",
    "Melhoria do contorno e definição",
    "Resultados imediatos e duradouros",
    "Procedimento minimamente invasivo",
  ]

  const areas = [
    {
      title: "Glúteos",
      description: "Aumento e modelagem para glúteos mais definidos e volumosos.",
    },
    {
      title: "Panturrilhas",
      description: "Definição e aumento de volume para pernas mais torneadas.",
    },
    {
      title: "Braços",
      description: "Correção de assimetrias e melhoria do contorno dos braços.",
    },
  ]

  const feedbacks = [
    {
      name: "Mariana Costa",
      comment: "Os preenchedores corporais transformaram minha silhueta! Estou muito mais confiante com meu corpo.",
    },
    {
      name: "Juliana Mendes",
      comment: "Resultados incríveis! O procedimento foi rápido e os resultados superaram minhas expectativas.",
    },
    {
      name: "Camila Rodrigues",
      comment: "Excelente tratamento! A equipe do Dr. Bruno Marques é extremamente profissional e atenciosa.",
    },
  ]

  const advantages = [
    {
      title: "Produtos Premium",
      description: "Utilizamos apenas preenchedores de alta qualidade e segurança.",
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais altamente treinados em modelagem corporal.",
    },
    {
      title: "Resultados Naturais",
      description: "Foco em proporcionar um aumento de volume natural e harmonioso.",
    },
    {
      title: "Procedimento Personalizado",
      description: "Cada tratamento é adaptado às necessidades específicas do seu corpo.",
    },
    {
      title: "Ambiente Seguro",
      description: "Procedimentos realizados em ambiente clínico totalmente estéril.",
    },
    {
      title: "Acompanhamento Pós-procedimento",
      description: "Suporte completo para garantir sua satisfação e os melhores resultados.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Sala+Preenchedores+Corporais+1",
      alt: "Sala de Preenchedores Corporais",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Preenchedores+Corporais",
      alt: "Equipamentos para Preenchedores Corporais",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Procedimento+Preenchedores+Corporais",
      alt: "Procedimento de Preenchedores Corporais",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/Nutrologia-Goiania-Preenchedor-gluteo-com-acido-hialuronico-X-PMMA.png" alt="Preenchedores Corporais" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Modelagem Corporal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Preenchedores <span className="text-gold">Corporais</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Modelagem e definição corporal com preenchedores para resultados 
                naturais e duradouros. Transforme seu corpo sem cirurgia.
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
                      <div className="text-3xl font-bold text-gold mb-2">💪</div>
                      <p className="text-sm font-medium text-gray-700">Definido</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Durável</p>
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
            <h2 className="text-4xl font-bold mb-4">Para que servem os Preenchedores Corporais?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações desta técnica de modelagem
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
                    <h4 className="text-lg font-semibold mb-2">Modelagem Corporal</h4>
                    <p className="text-gray-600">Definir e modelar diferentes áreas do corpo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Aumento de Volume</h4>
                    <p className="text-gray-600">Aumentar volume em áreas específicas do corpo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Correção de Assimetrias</h4>
                    <p className="text-gray-600">Corrigir assimetrias e desproporções corporais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora do Contorno</h4>
                    <p className="text-gray-600">Melhorar o contorno e definição corporal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/Nutrologia-Goiania-Preenchedor-gluteo-com-acido-hialuronico-X-PMMA.png"
                alt="Preenchedores Corporais - Modelagem Corporal"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios dos Preenchedores Corporais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como esta técnica pode transformar seu corpo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modelagem Natural",
                description: "Resultados harmoniosos e naturais",
                icon: "💪"
              },
              {
                title: "Aumento de Volume",
                description: "Volume imediato em áreas específicas",
                icon: "✨"
              },
              {
                title: "Correção de Assimetrias",
                description: "Equilibra desproporções corporais",
                icon: "⚖️"
              },
              {
                title: "Contorno Definido",
                description: "Melhora da definição corporal",
                icon: "🌟"
              },
              {
                title: "Procedimento Seguro",
                description: "Técnica minimamente invasiva",
                icon: "🛡️"
              },
              {
                title: "Resultados Duradouros",
                description: "Efeitos que se mantêm por meses",
                icon: "💎"
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
              <h2 className="text-3xl font-bold mb-6">O que são Preenchedores Corporais?</h2>
              <p className="text-gray-600 mb-6">
                Os Preenchedores Corporais são substâncias injetáveis utilizadas para modelar e definir diferentes áreas
                do corpo. Eles são eficazes para aumentar o volume, corrigir assimetrias e melhorar o contorno corporal,
                proporcionando resultados naturais e duradouros.
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
                          {benefit === "Aumento de volume em áreas específicas"
                            ? "Realça áreas como glúteos, panturrilhas e outras regiões que necessitam de mais volume."
                            : benefit === "Correção de assimetrias corporais"
                              ? "Equilibra diferenças naturais entre os lados do corpo para uma aparência mais harmoniosa."
                              : benefit === "Melhoria do contorno e definição"
                                ? "Define o contorno corporal, criando curvas mais acentuadas e atraentes."
                                : benefit === "Resultados imediatos e duradouros"
                                  ? "Efeitos visíveis logo após o procedimento e que se mantêm por longo período."
                                  : "Técnica com mínima invasão e rápida recuperação."}
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
                src="/Nutrologia-Goiania-Preenchedor-gluteo-com-acido-hialuronico-X-PMMA.png"
                alt="Preenchedores Corporais"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Tratamento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Tratamento</h2>
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              {areas.map((area, index) => (
                <AccordionItem key={index} value={`area-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{area.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{area.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {areas.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>



      {/* Feedbacks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {feedbacks.map((feedback, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold" fill="#C4A052" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 break-words min-w-0 w-full">"{feedback.comment}"</p>
                  <p className="font-semibold">{feedback.name}</p>
                </CardContent>
              </Card>
            ))}
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
              Tire suas dúvidas sobre os Preenchedores Corporais
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O que são Preenchedores Corporais?",
                  answer: "Preenchedores Corporais são substâncias injetáveis utilizadas para modelar e definir diferentes áreas do corpo, proporcionando aumento de volume e correção de assimetrias.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Pacientes que desejam modelagem corporal, correção de assimetrias ou aumento de volume em áreas específicas. É necessário avaliação médica para determinar a elegibilidade.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "O procedimento é minimamente invasivo e bem tolerado. Pode haver leve desconforto, mas não é doloroso. Anestesia local é utilizada quando necessário.",
                },
                {
                  question: "Quando aparecem os resultados?",
                  answer: "Os resultados são imediatos! O aumento de volume é visível logo após o procedimento, com melhora progressiva nas semanas seguintes.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "A duração varia conforme o produto utilizado, geralmente entre 6-18 meses. Manutenção pode ser necessária para manter os efeitos.",
                },
                {
                  question: "O tratamento é seguro?",
                  answer: "Sim, quando realizado por profissionais qualificados. Utilizamos apenas produtos aprovados pela ANVISA e seguimos rigorosos protocolos de segurança.",
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
                        <p className="text-lg font-bold">Preenchedores Corporais</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Modelagem Corporal</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em modelagem corporal, o Dr. Bruno Marques possui 
                      vasta experiência em preenchedores corporais e técnicas de definição. 
                      Com conhecimento especializado, garante resultados naturais e seguros.
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
                        <span className="text-gray-700 text-sm">Especialista em Modelagem</span>
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
                      "Meu compromisso é proporcionar modelagem corporal natural e harmoniosa 
                      que devolva a confiança e autoestima dos meus pacientes."
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Preenchedores Corporais?</h2>
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              {advantages.map((vantagem, index) => (
                <AccordionItem key={index} value={`vantagem-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{vantagem.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{vantagem.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((vantagem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                    <p className="text-gray-600">{vantagem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu corpo?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Preenchedores Corporais hoje mesmo!</p>
          <div className="flex justify-center">
            <WhatsAppButton phoneNumber="554799961355" size="lg">
              Agendar Consulta
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Layout>
  )
}
