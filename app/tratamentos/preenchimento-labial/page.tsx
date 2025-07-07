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

export default function PreenchimentoLabial() {
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
    "Aumento do volume labial",
    "Correção de assimetrias",
    "Definição do contorno dos lábios",
    "Suavização de linhas ao redor da boca",
    "Hidratação e rejuvenescimento dos lábios",
  ]

  const feedbacks = [
    {
      name: "Mariana Costa",
      comment: "Adorei o resultado do meu preenchimento labial! Ficou super natural e harmonioso.",
    },
    {
      name: "Juliana Mendes",
      comment: "A equipe do Dr. Bruno Marques é incrível! Me senti segura e satisfeita com o procedimento.",
    },
    {
      name: "Camila Rodrigues",
      comment: "Minha autoestima melhorou muito após o preenchimento. Recomendo a todos!",
    },
  ]

  const advantages = [
    {
      title: "Produtos Premium",
      description: "Utilizamos preenchedores de alta qualidade e segurança.",
    },
    {
      title: "Técnica Avançada",
      description: "Profissionais especializados em técnicas de preenchimento labial.",
    },
    {
      title: "Resultados Naturais",
      description: "Foco em realçar a beleza natural dos seus lábios.",
    },
    {
      title: "Procedimento Personalizado",
      description: "Cada tratamento é adaptado às suas necessidades e desejos.",
    },
    {
      title: "Ambiente Estéril",
      description: "Procedimentos realizados em ambiente clínico totalmente seguro.",
    },
    {
      title: "Acompanhamento Pós-procedimento",
      description: "Suporte completo para garantir sua satisfação e bem-estar.",
    },
  ]

  const spaceImages = [
    {
      src: "/FullSizeRender.jpg?height=300&width=400&text=Sala+Preenchimento+1",
      alt: "Sala de Preenchimento Labial",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Produtos+Preenchimento",
      alt: "Produtos para Preenchimento",
    },
    {
      src: "/IMG_4428 (1).jpg?height=300&width=400&text=Consultório+Preenchimento",
      alt: "Consultório para Preenchimento",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/preenchimento_labial_tratamento.jpg"
            alt="Preenchimento Labial"
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
                Tratamento Labial
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Preenchimento <span className="text-gold">Labial</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Realce a beleza dos seus lábios com naturalidade e técnicas avançadas 
                para um sorriso mais harmonioso e atraente.
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
                      <div className="text-3xl font-bold text-gold mb-2">💋</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Harmonioso</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
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
            <h2 className="text-4xl font-bold mb-4">Para que serve o Preenchimento Labial?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste tratamento labial
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
                    <p className="text-gray-600">Proporcionar lábios mais volumosos e definidos de forma natural.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Correção de Assimetrias</h4>
                    <p className="text-gray-600">Equilibrar diferenças naturais entre os lábios superior e inferior.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Definição do Contorno</h4>
                    <p className="text-gray-600">Melhorar a definição e o formato dos lábios para maior harmonia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento</h4>
                    <p className="text-gray-600">Suavizar linhas ao redor da boca e restaurar a juventude labial.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/preenchimento_labial_tratamento.jpg"
                alt="Preenchimento Labial - Tratamento Labial"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios do Preenchimento Labial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como este tratamento pode transformar seu sorriso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volume Natural",
                description: "Lábios mais volumosos e definidos",
                icon: "💋"
              },
              {
                title: "Harmonia Facial",
                description: "Melhora a proporção e equilíbrio do rosto",
                icon: "✨"
              },
              {
                title: "Correção de Assimetrias",
                description: "Equilibra diferenças entre os lábios",
                icon: "⚖️"
              },
              {
                title: "Rejuvenescimento",
                description: "Suaviza linhas ao redor da boca",
                icon: "🌱"
              },
              {
                title: "Resultados Imediatos",
                description: "Efeitos visíveis logo após o procedimento",
                icon: "⚡"
              },
              {
                title: "Procedimento Seguro",
                description: "Técnica minimamente invasiva e segura",
                icon: "🛡️"
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
              <h2 className="text-3xl font-bold mb-6">O que é Preenchimento Labial?</h2>
              <p className="text-gray-600 mb-6">
                O preenchimento labial é um procedimento estético que visa aumentar o volume e definir o contorno dos
                lábios, proporcionando um sorriso mais harmonioso e atraente. Utilizamos produtos seguros e técnicas
                modernas para garantir resultados naturais e personalizados.
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
                          {benefit === "Aumento do volume labial"
                            ? "Proporciona lábios mais volumosos e definidos de acordo com seu desejo."
                            : benefit === "Correção de assimetrias"
                              ? "Equilibra diferenças naturais entre os lábios superior e inferior."
                              : benefit === "Definição do contorno dos lábios"
                                ? "Cria um contorno mais definido e atraente para os lábios."
                                : benefit === "Suavização de linhas ao redor da boca"
                                  ? "Reduz as linhas finas ao redor da boca, conhecidas como 'código de barras'."
                                  : "Proporciona lábios mais hidratados e com aparência mais jovem."}
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
                src="/preenchimento_labial_tratamento.jpg"
                alt="Preenchimento Labial"
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

      {/* Fotos do Espaço */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nosso Espaço</h2>

          {isMobile ? (
            <Carousel className="max-w-xs mx-auto">
              <CarouselContent>
                {[
                  {
                    src: "/FullSizeRender.jpg",
                    alt: "Espaço Instituto Bruno Marques",
                  },
                  {
                    src: "/IMG_4431.jpg",
                    alt: "Clínica Instituto Bruno Marques",
                  },
                  {
                    src: "/FullSizeRender.png",
                    alt: "Instituto Bruno Marques",
                  },
                ].map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-2">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
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
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Preenchimento Labial
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O que é o Preenchimento Labial?",
                  answer: "Preenchimento Labial é um procedimento estético que utiliza ácido hialurônico para aumentar o volume e definir o contorno dos lábios, proporcionando um sorriso mais harmonioso e atraente.",
                },
                {
                  question: "Quantas sessões são necessárias?",
                  answer: "Geralmente uma sessão é suficiente para alcançar o resultado desejado. Dependendo do caso, podem ser necessárias sessões de manutenção a cada 6-12 meses.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os resultados são visíveis imediatamente após o procedimento, com melhora progressiva nos dias seguintes conforme o produto se integra aos tecidos.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "O procedimento é realizado com anestésico tópico, sendo bem tolerado. Pode haver leve desconforto durante a aplicação, mas é minimizado com técnicas adequadas.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "Os resultados do Preenchimento Labial duram de 6 a 12 meses, dependendo do tipo de produto utilizado e características individuais da pele.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos que desejam aumentar o volume dos lábios, corrigir assimetrias ou melhorar o contorno labial são candidatos ideais. Uma consulta de avaliação determinará se o tratamento é adequado.",
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
              Conheça o profissional que será responsável pelo seu tratamento
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
                        <p className="text-lg font-bold">Preenchimento Labial</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Jéssica Dalago</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Especialista dedicada em tratamentos labiais, Jéssica Dalago possui 
                      vasta experiência em Preenchimento Labial e outras técnicas de harmonização facial. 
                      Com conhecimento especializado em estética, garante resultados naturais e harmoniosos.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Especialista em Estética</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">10+ anos de experiência</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Especialista em Labiais</span>
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

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu objetivo é realçar a beleza natural dos lábios dos meus pacientes, 
                      sempre com resultados harmoniosos e naturais."
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso Preenchimento Labial?</h2>
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
      <section id="agendamento" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para realçar a beleza dos seus lábios?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Preenchimento Labial hoje mesmo!</p>
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
