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

export default function JatoDePlasma() {
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
    "Remoção de cravos e impurezas",
    "Desobstrução dos poros",
    "Controle da oleosidade",
    "Prevenção de acne",
    "Renovação celular",
  ]

  const feedbacks = [
    {
      name: "Juliana Mendes",
      comment: "A limpeza de pele transformou minha pele! Nunca mais tive problemas com cravos e espinhas.",
    },
    {
      name: "Mariana Costa",
      comment: "Excelente tratamento! Minha pele ficou muito mais limpa e radiante após a primeira sessão.",
    },
    {
      name: "Camila Rodrigues",
      comment: "Faço limpeza de pele regularmente no Instituto Bruno Marques e os resultados são sempre incríveis!",
    },
  ]

  const advantages = [
    {
      title: "Tecnologia Avançada",
      description: "Utilizamos equipamentos e produtos de última geração.",
    },
    {
      title: "Profissionais Especializados",
      description: "Nossa equipe é altamente treinada em tratamentos faciais.",
    },
    {
      title: "Tratamento Personalizado",
      description: "Adaptamos o procedimento ao seu tipo de pele e necessidades específicas.",
    },
    {
      title: "Produtos de Qualidade",
      description: "Utilizamos apenas produtos dermatologicamente testados e de alta qualidade.",
    },
    {
      title: "Ambiente Estéril",
      description: "Procedimentos realizados em ambiente clínico totalmente seguro.",
    },
    {
      title: "Resultados Visíveis",
      description: "Melhora imediata na aparência e textura da pele após o procedimento.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Sala+Limpeza+Pele+1",
      alt: "Sala de Limpeza de Pele",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Limpeza+Pele",
      alt: "Equipamentos para Limpeza de Pele",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Produtos+Limpeza+Pele",
      alt: "Produtos para Limpeza de Pele",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/O-que-e-o-jato-de-plasma_Entenda-agora.png"
            alt="Jato de Plasma"
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
                Tecnologia Avançada
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Jato de <span className="text-gold">Plasma</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Tecnologia avançada e não invasiva que utiliza o quarto estado da matéria 
                para rejuvenescer a pele e tratar imperfeições faciais e corporais.
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
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Avançado</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">🔬</div>
                      <p className="text-sm font-medium text-gray-700">Preciso</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Eficaz</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Seguro</p>
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
            <h2 className="text-4xl font-bold mb-4">Para que serve o Jato de Plasma?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações desta tecnologia revolucionária
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
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento Facial</h4>
                    <p className="text-gray-600">Estimular a produção de colágeno e elastina para uma pele mais firme e jovem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tratamento de Imperfeições</h4>
                    <p className="text-gray-600">Reduzir rugas, linhas de expressão e manchas na pele.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contração de Tecidos</h4>
                    <p className="text-gray-600">Promover o enrijecimento natural da pele através da regeneração celular.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Harmonização Facial</h4>
                    <p className="text-gray-600">Criar equilíbrio e simetria facial através de aplicações precisas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/plasmax.jpg"
                alt="Jato de Plasma - Tecnologia Avançada"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios do Jato de Plasma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que esta tecnologia é considerada revolucionária
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Avançada",
                description: "Utiliza o quarto estado da matéria para resultados superiores",
                icon: "🔬"
              },
              {
                title: "Não Invasivo",
                description: "Procedimento sem cortes ou agulhas",
                icon: "🛡️"
              },
              {
                title: "Precisão Absoluta",
                description: "Aplicação milimétrica para resultados controlados",
                icon: "🎯"
              },
              {
                title: "Estimulação Natural",
                description: "Ativa a produção natural de colágeno",
                icon: "✨"
              },
              {
                title: "Recuperação Rápida",
                description: "Período de recuperação reduzido",
                icon: "⚡"
              },
              {
                title: "Resultados Duradouros",
                description: "Efeitos que se mantêm por longo período",
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
              <h2 className="text-3xl font-bold mb-6">Como Funciona o Jato de Plasma?</h2>
              <p className="text-gray-600 mb-6">
                 O procedimento utiliza um dispositivo que converte energia elétrica em plasma, criando um arco de
                  plasma que não toca diretamente a pele. Este jato de plasma gera uma microlesão controlada na
                  superfície da pele, estimulando a produção de colágeno e elastina, promovendo a regeneração celular e
                  a contração dos tecidos.
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
                          {benefit === "Remoção de cravos e impurezas"
                            ? "Elimina cravos, células mortas e impurezas acumuladas nos poros."
                            : benefit === "Desobstrução dos poros"
                              ? "Limpa profundamente os poros, permitindo que a pele respire melhor."
                              : benefit === "Controle da oleosidade"
                                ? "Ajuda a regular a produção de sebo, reduzindo o brilho excessivo."
                                : benefit === "Prevenção de acne"
                                  ? "Previne o surgimento de espinhas e cravos ao manter os poros limpos."
                                  : "Estimula a renovação das células da pele, deixando-a mais luminosa."}
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
                src="/O-que-e-o-jato-de-plasma_Entenda-agora.png"
                alt="Jato de Plasma"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Feedbacks */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Jato de Plasma
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O Jato de Plasma é seguro?",
                  answer: "Sim, o Jato de Plasma é um procedimento seguro quando realizado por profissionais qualificados. A tecnologia utiliza plasma frio que não queima a pele, apenas cria microlesões controladas para estimular a regeneração.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "A maioria dos pacientes relata apenas um leve desconforto durante o procedimento. A sensação é descrita como pequenos alfinetadas. Em casos de maior sensibilidade, pode ser aplicado anestésico tópico.",
                },
                {
                  question: "Quantas sessões são necessárias?",
                  answer: "O número de sessões varia de acordo com o objetivo e a área tratada. Geralmente são necessárias de 1 a 3 sessões, com intervalo de 30-45 dias entre elas para resultados ótimos.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os primeiros resultados podem ser observados em 7-15 dias após o procedimento. O efeito máximo é atingido em aproximadamente 30-45 dias, quando a produção de colágeno é estimulada.",
                },
                {
                  question: "Há período de recuperação?",
                  answer: "Sim, há um período de recuperação de 7-10 dias. Durante este período, podem aparecer pequenas crostas que caem naturalmente. É importante seguir as orientações pós-procedimento.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos saudáveis que desejam rejuvenescimento facial ou tratamento de imperfeições são candidatos ideais. Uma consulta de avaliação é essencial para determinar se o tratamento é adequado.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm border">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Especialista Responsável</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a profissional que será responsável pelo seu tratamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <div className="relative h-full">
                    <Image
                      src="/jessica.jpg"
                      alt="Jéssica Dalago"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-gold/90 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm font-medium">Especialista em</p>
                        <p className="text-lg font-bold">Jato de Plasma</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Jéssica Dalago</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Esteticista Especializada</p>
                    <p className="text-gray-600 leading-relaxed">
                      Especialista em Jato de Plasma, blefaroplastia sem cortes e retirada de sinais. 
                      Com vasta experiência em tratamentos avançados, Jéssica é dedicada a proporcionar 
                      procedimentos seguros e eficazes com tecnologia de ponta.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Esteticista Formada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Especialista em Plasma</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Tecnologia Avançada</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Procedimentos Seguros</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Resultados Comprovados</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Atendimento Personalizado</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu compromisso é oferecer tratamentos avançados e seguros que proporcionem 
                      resultados excepcionais e satisfação total aos meus pacientes."
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso Jato de Plasma?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Pronto para renovar sua pele?</h2>
          <p className="text-xl mb-8">Agende sua sessão de Limpeza de Pele hoje mesmo!</p>
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
