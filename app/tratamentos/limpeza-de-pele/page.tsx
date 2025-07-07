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

export default function LimpezaDePele() {
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
            src="/serv_facial_limp_pele_peeling_cristal.jpg.png"
            alt="Limpeza de Pele"
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
                Tratamento Estético
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Limpeza de <span className="text-gold">Pele</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Tratamento profundo para uma pele limpa, saudável e radiante. 
                Descubra o poder de uma limpeza profissional.
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
                      <div className="text-3xl font-bold text-gold mb-2">✓</div>
                      <p className="text-sm font-medium text-gray-700">Profissional</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Eficaz</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O que é Limpeza de Pele?</h2>
              <p className="text-gray-600 mb-6">
                A limpeza de pele é um procedimento estético que visa remover impurezas, cravos, células mortas e
                excesso de oleosidade da pele. Este tratamento proporciona uma renovação celular, deixando a pele mais
                limpa, saudável e radiante, além de prevenir problemas como acne e cravos.
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
                src="/serv_facial_limp_pele_peeling_cristal.jpg.png"
                alt="Limpeza de Pele"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para que serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Para que serve a Limpeza de Pele?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e benefícios deste tratamento essencial
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
                    <h4 className="text-lg font-semibold mb-2">Remoção de Impurezas</h4>
                    <p className="text-gray-600">Eliminar cravos, espinhas e células mortas que obstruem os poros.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Renovação Celular</h4>
                    <p className="text-gray-600">Estimular a renovação das células da pele para uma aparência mais jovem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Hidratação Profunda</h4>
                    <p className="text-gray-600">Restaurar a hidratação natural da pele e melhorar sua textura.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Prevenção de Acne</h4>
                    <p className="text-gray-600">Prevenir o surgimento de espinhas e manter a pele saudável.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/serv_facial_limp_pele_peeling_cristal.jpg.png"
                alt="Limpeza de Pele Profunda"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios da Limpeza de Pele</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como este tratamento pode transformar sua pele
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pele Mais Limpa",
                description: "Remoção completa de impurezas e células mortas",
                icon: "✨"
              },
              {
                title: "Poros Desobstruídos",
                description: "Eliminação de cravos e espinhas",
                icon: "🔍"
              },
              {
                title: "Hidratação Natural",
                description: "Restauração da umidade natural da pele",
                icon: "💧"
              },
              {
                title: "Prevenção de Acne",
                description: "Redução significativa de espinhas e cravos",
                icon: "🛡️"
              },
              {
                title: "Pele Mais Radiante",
                description: "Aparência mais jovem e saudável",
                icon: "🌟"
              },
              {
                title: "Melhor Absorção",
                description: "Produtos de skincare mais eficazes",
                icon: "📈"
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
              Tire suas dúvidas sobre a Limpeza de Pele
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Com que frequência devo fazer limpeza de pele?",
                  answer: "A frequência ideal varia de acordo com o tipo de pele. Para peles normais a secas, recomenda-se a cada 30-45 dias. Para peles oleosas ou com tendência à acne, a cada 20-30 dias. Consulte nossa especialista para um cronograma personalizado.",
                },
                {
                  question: "A limpeza de pele dói?",
                  answer: "O procedimento pode causar um leve desconforto durante a extração de cravos, mas não é doloroso. Utilizamos técnicas suaves e produtos que minimizam qualquer sensação desagradável.",
                },
                {
                  question: "Posso fazer limpeza de pele com espinhas?",
                  answer: "Sim, mas é importante que as espinhas não estejam inflamadas. Em casos de acne ativa, nossa especialista pode recomendar um tratamento prévio antes da limpeza profunda.",
                },
                {
                  question: "Quanto tempo dura o procedimento?",
                  answer: "Uma sessão completa de limpeza de pele dura aproximadamente 60-90 minutos, incluindo a preparação da pele, extração de impurezas e aplicação de máscaras hidratantes.",
                },
                {
                  question: "Há algum cuidado pós-tratamento?",
                  answer: "Sim, é importante evitar exposição solar por 24-48 horas, não usar maquiagem no mesmo dia e manter a pele bem hidratada. Nossa especialista fornecerá orientações específicas para seu caso.",
                },
                {
                  question: "A limpeza de pele é indicada para todos os tipos de pele?",
                  answer: "Sim, mas o protocolo pode variar. Peles secas, normais, oleosas e mistas podem se beneficiar da limpeza, cada uma com produtos e técnicas específicas para suas necessidades.",
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
                        <p className="text-lg font-bold">Limpeza de Pele</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Jéssica Dalago</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Esteticista Especializada</p>
                    <p className="text-gray-600 leading-relaxed">
                      Especialista em limpeza de pele profunda, microagulhamento e peelings químicos. 
                      Com vasta experiência em tratamentos faciais, Jéssica é dedicada a proporcionar 
                      tratamentos personalizados para uma pele saudável e radiante.
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
                        <span className="text-gray-700 text-sm">Especialista em Pele</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Técnicas Avançadas</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Tratamentos Personalizados</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Resultados Comprovados</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Atendimento Humanizado</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu compromisso é proporcionar tratamentos que devolvam a saúde e beleza 
                      natural da pele de cada paciente."
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossa Limpeza de Pele?</h2>
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
