"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FiosDePDO() {
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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/blog20230526.jpg" alt="Fios de PDO" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Lifting Não Cirúrgico
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Fios de <span className="text-gold">PDO</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Lifting não cirúrgico para um efeito rejuvenescedor imediato 
                e estimulação natural de colágeno.
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
                      <p className="text-sm font-medium text-gray-700">Imediato</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💪</div>
                      <p className="text-sm font-medium text-gray-700">Firme</p>
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
            <h2 className="text-4xl font-bold mb-4">Para que servem os Fios de PDO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste tratamento de lifting não cirúrgico
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
                    <h4 className="text-lg font-semibold mb-2">Estimulação de Colágeno</h4>
                    <p className="text-gray-600">Ativar a produção natural de colágeno para firmeza e elasticidade duradouras.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Estimulação de Colágeno</h4>
                    <p className="text-gray-600">Ativar a produção natural de colágeno para firmeza e elasticidade duradouras.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento Progressivo</h4>
                    <p className="text-gray-600">Promover melhora gradual da qualidade da pele através da estimulação natural.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Redução de Flacidez</h4>
                    <p className="text-gray-600">Corrigir a flacidez facial de forma natural e progressiva.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/blog20230526.jpg"
                alt="Fios de PDO - Lifting Não Cirúrgico"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios dos Fios de PDO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como este tratamento pode transformar sua aparência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Estimulação Natural",
                description: "Ativa a produção de colágeno",
                icon: "🌱"
              },
              {
                title: "Rejuvenescimento Progressivo",
                description: "Melhora gradual da qualidade da pele",
                icon: "✨"
              },
              {
                title: "Durabilidade",
                description: "Resultados que se mantêm por longo período",
                icon: "⏰"
              },
              {
                title: "Procedimento Seguro",
                description: "Técnica minimamente invasiva",
                icon: "🛡️"
              },
              {
                title: "Recuperação Rápida",
                description: "Retorno às atividades em poucos dias",
                icon: "🚀"
              },
              {
                title: "Tratamento Natural",
                description: "Utiliza o próprio organismo para regeneração",
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
          {isMobile ? (
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/blog20230526.jpg"
                  alt="Fios de PDO"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">O que são Fios de PDO?</h2>
                <p className="text-gray-600 mb-6">
                  Os fios de PDO (Polidioxanona) são uma técnica de rejuvenescimento facial não cirúrgica que utiliza
                  fios absorvíveis para estimular a produção de colágeno. Este tratamento oferece melhora progressiva 
                  da qualidade da pele através da estimulação natural do organismo.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <div className="space-y-2">
                  {[
                    "Estimulação da produção de colágeno",
                    "Rejuvenescimento progressivo",
                    "Melhora da qualidade da pele",
                    "Redução de flacidez",
                    "Procedimento minimamente invasivo",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">O que são Fios de PDO?</h2>
                <p className="text-gray-600 mb-6">
                  Os fios de PDO (Polidioxanona) são uma técnica de rejuvenescimento facial não cirúrgica que utiliza
                  fios absorvíveis para estimular a produção de colágeno. Este tratamento oferece melhora progressiva 
                  da qualidade da pele através da estimulação natural do organismo.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <ul className="space-y-2">
                  {[
                    "Estimulação da produção de colágeno",
                    "Rejuvenescimento progressivo",
                    "Melhora da qualidade da pele",
                    "Redução de flacidez",
                    "Procedimento minimamente invasivo",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src="/blog20230526.jpg"
                  alt="Fios de PDO"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>



      {/* Feedbacks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fernanda Oliveira",
                comment: "Os fios de PDO transformaram meu rosto! O efeito lifting foi imediato e natural.",
              },
              {
                name: "Ricardo Santos",
                comment: "Excelente tratamento! Notei uma melhora significativa na flacidez do meu rosto.",
              },
              {
                name: "Amanda Lima",
                comment: "Adorei os resultados! Minha pele está mais firme e com aparência muito mais jovem.",
              },
            ].map((feedback, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold" fill="#C4A052" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{feedback.comment}"</p>
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
              Tire suas dúvidas sobre os Fios de PDO
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O que são os Fios de PDO?",
                  answer: "Fios de PDO (Polidioxanona) são fios absorvíveis utilizados para realizar lifting facial não cirúrgico. Eles proporcionam suporte mecânico imediato e estimulam a produção de colágeno.",
                },
                {
                  question: "Quantas sessões são necessárias?",
                  answer: "Geralmente são necessárias de 1 a 2 sessões, dependendo do grau de flacidez e dos resultados desejados. O intervalo entre as sessões é de 6 a 12 meses.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os resultados são visíveis imediatamente após o procedimento, com melhora progressiva nos meses seguintes devido à estimulação de colágeno.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "O procedimento é realizado com anestesia local, sendo bem tolerado. Pode haver leve desconforto durante a aplicação, mas é minimizado com técnicas adequadas.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "Os resultados dos Fios de PDO duram de 12 a 18 meses, dependendo do tipo de pele e cuidados pós-procedimento. A estimulação de colágeno pode prolongar os efeitos.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos com flacidez facial leve a moderada, que desejam um lifting não cirúrgico são candidatos ideais. Uma consulta de avaliação determinará se o tratamento é adequado.",
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
                        <p className="text-lg font-bold">Fios de PDO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em lifting não cirúrgico, o Dr. Bruno Marques possui 
                      vasta experiência em Fios de PDO e outras técnicas de rejuvenescimento facial. 
                      Com conhecimento especializado em medicina estética, garante resultados naturais e duradouros.
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
                        <span className="text-gray-700 text-sm">Especialista em Lifting</span>
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
                      "Meu objetivo é proporcionar um lifting natural que devolva a juventude 
                      e firmeza ao rosto dos meus pacientes, sempre com resultados naturais."
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Fios de PDO?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Avançada",
                description: "Utilizamos os fios de PDO mais modernos e seguros do mercado.",
              },
              {
                title: "Profissionais Especializados",
                description: "Nossa equipe é altamente treinada em técnicas de aplicação de fios.",
              },
              {
                title: "Resultados Naturais",
                description: "Focamos em proporcionar um lifting natural, sem aparência artificial.",
              },
              {
                title: "Procedimento Personalizado",
                description: "Cada tratamento é adaptado às necessidades específicas do seu rosto.",
              },
              {
                title: "Ambiente Seguro",
                description: "Procedimentos realizados em ambiente clínico totalmente estéril.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte completo para garantir sua satisfação e os melhores resultados.",
              },
            ].map((vantagem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                  <p className="text-gray-600">{vantagem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para rejuvenescer sua pele?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Fios de PDO hoje mesmo!</p>
          <Link href="https://wa.me/554799961355" passHref>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
                Agendar Consulta
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
