"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Endolaser() {
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
          <Image src="/IMG_6621.jpg" alt="Endolift" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Tratamento Corporal e Facial
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="text-gold">Endolift</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Redução de gordura localizada e rejuvenescimento com tecnologia laser de fibra óptica. 
                Resultados visíveis e duradouros para corpo e rosto.
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
                      <div className="text-3xl font-bold text-gold mb-2">🔥</div>
                      <p className="text-sm font-medium text-gray-700">Redução</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Tecnologia</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">🛡️</div>
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
            <h2 className="text-4xl font-bold mb-4">Para que serve o Endolift?</h2>
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
                    <h4 className="text-lg font-semibold mb-2">Redução de Gordura Localizada</h4>
                    <p className="text-gray-600">Eliminar depósitos de gordura resistentes em áreas específicas do corpo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tratamento de Celulite</h4>
                    <p className="text-gray-600">Reduzir a aparência da celulite e melhorar a textura da pele.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento Facial</h4>
                    <p className="text-gray-600">Estimular a produção de colágeno para uma pele mais firme e jovem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora da Flacidez</h4>
                    <p className="text-gray-600">Tensionar tecidos flácidos através da estimulação de colágeno.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/IMG_6621.jpg"
                alt="Endolift - Tecnologia Laser"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios do Endolift</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que esta tecnologia é considerada revolucionária
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Avançada",
                description: "Laser de fibra óptica de última geração",
                icon: "🔬"
              },
              {
                title: "Redução Eficaz",
                description: "Eliminação de gordura localizada comprovada",
                icon: "🔥"
              },
              {
                title: "Minimamente Invasivo",
                description: "Procedimento com recuperação rápida",
                icon: "💉"
              },
              {
                title: "Estimulação Natural",
                description: "Ativa a produção natural de colágeno",
                icon: "✨"
              },
              {
                title: "Resultados Duradouros",
                description: "Efeitos que se mantêm por longo período",
                icon: "⏰"
              },
              {
                title: "Versatilidade",
                description: "Aplicável em rosto e corpo",
                icon: "🎯"
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
                  src="/IMG_6621.jpg?height=400&width=600&text=Endolaser"
                  alt="Endolaser"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">O que é Endolift?</h2>
                <p className="text-gray-600 mb-6">
                  O Endolift é um tratamento revolucionário que utiliza tecnologia laser de fibra óptica para 
                  redução de gordura localizada, rejuvenescimento facial e corporal. Este procedimento minimamente 
                  invasivo é especialmente eficaz para tratar flacidez, celulite, rugas finas e melhorar 
                  significativamente a textura da pele, proporcionando resultados visíveis com recuperação rápida.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <div className="space-y-2">
                  {[
                    "Redução de gordura localizada",
                    "Tratamento de celulite e flacidez",
                    "Rejuvenescimento facial e corporal",
                    "Melhoria na textura e firmeza da pele",
                    "Estimulação da produção de colágeno",
                    "Procedimento minimamente invasivo",
                    "Resultados duradouros",
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
                <h2 className="text-3xl font-bold mb-6">O que é Endolift?</h2>
                <p className="text-gray-600 mb-6">
                  O Endolift é um tratamento revolucionário que utiliza tecnologia laser de fibra óptica para 
                  redução de gordura localizada, rejuvenescimento facial e corporal. Este procedimento minimamente 
                  invasivo é especialmente eficaz para tratar flacidez, celulite, rugas finas e melhorar 
                  significativamente a textura da pele, proporcionando resultados visíveis com recuperação rápida.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <ul className="space-y-2">
                  {[
                    "Redução de gordura localizada",
                    "Tratamento de celulite e flacidez",
                    "Rejuvenescimento facial e corporal",
                    "Melhoria na textura e firmeza da pele",
                    "Estimulação da produção de colágeno",
                    "Procedimento minimamente invasivo",
                    "Resultados duradouros",
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
                  src="/IMG_6621.jpg?height=400&width=600&text=Endolaser"
                  alt="Endolaser"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona o Endolift</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fibra Óptica Laser",
                description: "Fibra óptica de laser é inserida sob a pele para tratamento preciso das áreas-alvo.",
              },
              {
                title: "Redução de Gordura",
                description: "O laser dissolve células de gordura localizada e estimula o metabolismo lipídico.",
              },
              {
                title: "Estimulação de Colágeno",
                description:
                  "O calor gerado estimula a produção de colágeno e elastina, resultando em pele mais firme e jovem.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Endolift
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O Endolift é eficaz para redução de gordura localizada?",
                  answer: "Sim! O Endolift é especialmente eficaz para redução de gordura localizada. A tecnologia laser de fibra óptica dissolve as células de gordura e estimula o metabolismo lipídico, resultando em redução significativa de gordura em áreas específicas como abdômen, flancos, braços e papada.",
                },
                {
                  question: "O tratamento é doloroso?",
                  answer: "O Endolift é geralmente bem tolerado. Os pacientes podem sentir uma sensação de calor durante o procedimento, mas anestesia local é aplicada para garantir o conforto total.",
                },
                {
                  question: "Quantas sessões são necessárias?",
                  answer: "O número de sessões varia de acordo com as necessidades individuais e a área tratada. Geralmente, de 1 a 3 sessões são recomendadas para resultados ótimos, com intervalos de 4-6 semanas entre as sessões.",
                },
                {
                  question: "Qual é o tempo de recuperação?",
                  answer: "O tempo de recuperação é mínimo. A maioria dos pacientes pode retornar às suas atividades normais imediatamente após o tratamento, com apenas uma leve vermelhidão e inchaço que desaparecem em 2-3 dias.",
                },
                {
                  question: "Quais áreas podem ser tratadas?",
                  answer: "O Endolift pode ser aplicado em diversas áreas: facial (papada, bochechas), corporal (abdômen, flancos, braços, coxas, glúteos) e para tratamento de celulite. Cada área é tratada com protocolos específicos para resultados otimizados.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os primeiros resultados podem ser observados em 2-4 semanas após o tratamento. O efeito máximo é atingido em aproximadamente 2-3 meses, quando a produção de colágeno é estimulada e a gordura é metabolizada.",
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
                        <p className="text-lg font-bold">Endolift</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em tratamentos corporais e faciais, o Dr. Bruno Marques possui vasta 
                      experiência em Endolift e outras tecnologias avançadas. Com conhecimento profundo da 
                      anatomia e técnicas inovadoras, garante resultados excepcionais.
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
                        <span className="text-gray-700 text-sm">Especialista em Endolift</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Tecnologia avançada</span>
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
                      "Meu compromisso é oferecer tratamentos corporais e faciais que proporcionem 
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

      {/* CTA Section */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para reduzir gordura localizada?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Endolift hoje mesmo!</p>
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
