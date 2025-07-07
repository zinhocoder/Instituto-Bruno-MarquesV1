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

export default function GluteoMax() {
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
    "Aumento do volume dos glúteos",
    "Melhora da forma e contorno",
    "Resultados naturais e duradouros",
    "Procedimento minimamente invasivo",
    "Recuperação rápida",
  ]

  const feedbacks = [
    {
      name: "Ana Paula Silva",
      comment: "O Glúteo Max superou minhas expectativas! Meus glúteos ficaram muito mais definidos e naturais.",
    },
    {
      name: "Fernanda Costa",
      comment: "Excelente tratamento! A recuperação foi rápida e os resultados são incríveis.",
    },
    {
      name: "Carolina Mendes",
      comment: "Recomendo muito o Glúteo Max no Instituto Bruno Marques. Profissionais excelentes!",
    },
  ]

  const advantages = [
    {
      title: "Tecnologia Avançada",
      description: "Utilizamos produtos de alta qualidade e técnicas modernas.",
    },
    {
      title: "Profissionais Especializados",
      description: "Nossa equipe é altamente treinada em procedimentos corporais.",
    },
    {
      title: "Tratamento Personalizado",
      description: "Adaptamos o procedimento às suas necessidades e objetivos específicos.",
    },
    {
      title: "Produtos de Qualidade",
      description: "Utilizamos apenas produtos aprovados pela ANVISA e de alta qualidade.",
    },
    {
      title: "Ambiente Seguro",
      description: "Procedimentos realizados em ambiente clínico totalmente seguro.",
    },
    {
      title: "Resultados Visíveis",
      description: "Melhora significativa na forma e volume dos glúteos após o procedimento.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Sala+Gluteo+Max+1",
      alt: "Sala de Procedimento Glúteo Max",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Gluteo+Max",
      alt: "Equipamentos para Glúteo Max",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Produtos+Gluteo+Max",
      alt: "Produtos para Glúteo Max",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/gluteomax.png"
            alt="Glúteo Max"
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
                Procedimento Corporal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Glúteo <span className="text-gold">Max</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Procedimento inovador para aumento e modelagem dos glúteos com resultados 
                naturais e duradouros, proporcionando mais volume e definição.
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
            <h2 className="text-4xl font-bold mb-4">Para que serve o Glúteo Max?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste procedimento corporal
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
                    <h4 className="text-lg font-semibold mb-2">Aumento de Volume</h4>
                    <p className="text-gray-600">Proporcionar aumento significativo do volume da região glútea.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Modelagem e Definição</h4>
                    <p className="text-gray-600">Definir e modelar os glúteos para contornos mais harmoniosos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora da Proporção</h4>
                    <p className="text-gray-600">Melhorar a proporção corporal e a silhueta geral.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Resultados Naturais</h4>
                    <p className="text-gray-600">Proporcionar resultados naturais e duradouros sem cirurgia.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/gluteomax.png"
                alt="Glúteo Max - Procedimento Corporal"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios do Glúteo Max</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como este tratamento pode transformar sua silhueta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volume Aumentado",
                description: "Aumento significativo do volume dos glúteos",
                icon: "💪"
              },
              {
                title: "Forma Melhorada",
                description: "Modelagem e definição dos contornos",
                icon: "✨"
              },
              {
                title: "Resultados Naturais",
                description: "Aparência natural e harmoniosa",
                icon: "🌟"
              },
              {
                title: "Procedimento Seguro",
                description: "Técnica minimamente invasiva",
                icon: "🛡️"
              },
              {
                title: "Recuperação Rápida",
                description: "Retorno às atividades em poucos dias",
                icon: "⚡"
              },
              {
                title: "Durabilidade",
                description: "Resultados que se mantêm por longo período",
                icon: "⏰"
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
              <h2 className="text-3xl font-bold mb-6">Como Funciona o Glúteo Max?</h2>
              <p className="text-gray-600 mb-6">
                O Glúteo Max é um procedimento que utiliza preenchedores específicos para aumentar o volume e melhorar a forma dos glúteos. 
                O tratamento é realizado com produtos de alta qualidade que proporcionam resultados naturais e duradouros, 
                sem a necessidade de cirurgia invasiva.
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
                          {benefit === "Aumento do volume dos glúteos"
                            ? "Proporciona aumento significativo do volume da região glútea de forma natural."
                            : benefit === "Melhora da forma e contorno"
                              ? "Define e modela os glúteos, criando contornos mais harmoniosos."
                              : benefit === "Resultados naturais e duradouros"
                                ? "Os resultados são naturais e podem durar de 12 a 18 meses."
                              : benefit === "Procedimento minimamente invasivo"
                                ? "Procedimento realizado com agulhas finas, sem necessidade de cirurgia."
                                : "Recuperação rápida, permitindo retorno às atividades normais em poucos dias."}
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
                src="/gluteomax.png"
                alt="Glúteo Max"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
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
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossas Pacientes Dizem</h2>
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
              Tire suas dúvidas sobre o Glúteo Max
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O que é o Glúteo Max?",
                  answer: "Glúteo Max é um procedimento que utiliza preenchedores específicos para aumentar o volume e melhorar a forma dos glúteos, proporcionando resultados naturais e duradouros sem cirurgia invasiva.",
                },
                {
                  question: "Quantas sessões são necessárias?",
                  answer: "Geralmente uma sessão é suficiente para alcançar o resultado desejado. Dependendo do caso, podem ser necessárias sessões de manutenção a cada 12-18 meses.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os resultados são visíveis imediatamente após o procedimento, com melhora progressiva nos dias seguintes conforme o produto se integra aos tecidos.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "O procedimento é realizado com anestésico local, sendo bem tolerado. Pode haver leve desconforto durante a aplicação, mas é minimizado com técnicas adequadas.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "Os resultados do Glúteo Max duram de 12 a 18 meses, dependendo do tipo de produto utilizado e características individuais.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos que desejam aumentar o volume dos glúteos, melhorar a forma ou corrigir assimetrias são candidatos ideais. Uma consulta de avaliação determinará se o tratamento é adequado.",
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
                        <p className="text-lg font-bold">Glúteo Max</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em procedimentos corporais, o Dr. Bruno Marques possui 
                      vasta experiência em Glúteo Max e outras técnicas de modelagem corporal. 
                      Com conhecimento especializado em medicina estética, garante resultados naturais e seguros.
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
                        <span className="text-gray-700 text-sm">Especialista em Corporal</span>
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
                        <span className="text-gray-700 text-sm">Milhares de procedimentos</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu objetivo é proporcionar modelagem corporal que devolva a confiança 
                      e autoestima aos meus pacientes, sempre com resultados naturais."
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

      {/* Agendamento */}
      <section id="agendamento" className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Agende sua Consulta</h2>
          <p className="text-xl mb-8 text-white">
            Entre em contato conosco e descubra como o Glúteo Max pode transformar sua autoestima!
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
