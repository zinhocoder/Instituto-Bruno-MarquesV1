"use client";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PreenchedoresPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar inicialmente
    checkIfMobile();

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg" alt="Preenchedores" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Tratamento Facial
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="text-gold">Preenchedores</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Harmonização facial para equilibrar proporções e preenchimento labial para um sorriso 
                mais atraente. Resultados naturais que realçam sua beleza única.
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
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Premium</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">🎯</div>
                      <p className="text-sm font-medium text-gray-700">Preciso</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💪</div>
                      <p className="text-sm font-medium text-gray-700">Durabilidade</p>
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
            <h2 className="text-4xl font-bold mb-4">Para que servem os Preenchedores?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações destes tratamentos especializados
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
                    <h4 className="text-lg font-semibold mb-2">Harmonização Facial</h4>
                    <p className="text-gray-600">Equilibrar proporções faciais e corrigir assimetrias para um rosto mais harmonioso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Restauração de Volume</h4>
                    <p className="text-gray-600">Repor volume perdido em regiões específicas do rosto devido ao envelhecimento.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Preenchimento Labial</h4>
                    <p className="text-gray-600">Aumentar volume e definir o contorno dos lábios para um sorriso mais atraente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento</h4>
                    <p className="text-gray-600">Suavizar rugas e linhas de expressão através do preenchimento estratégico.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/preenchedor.jpg"
                alt="Preenchedores - Harmonização Facial"
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
            <h2 className="text-4xl font-bold mb-4">Benefícios dos Preenchedores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como estes tratamentos podem transformar sua aparência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resultados Naturais",
                description: "Aparência harmoniosa e natural sem exageros",
                icon: "✨"
              },
              {
                title: "Durabilidade",
                description: "Efeitos que se mantêm por 6 a 18 meses",
                icon: "⏰"
              },
              {
                title: "Procedimento Rápido",
                description: "Aplicação em consultório com recuperação mínima",
                icon: "⚡"
              },
              {
                title: "Produtos Premium",
                description: "Utilização de ácido hialurônico de alta qualidade",
                icon: "💎"
              },
              {
                title: "Personalizado",
                description: "Tratamento adaptado às suas necessidades específicas",
                icon: "🎯"
              },
              {
                title: "Reversível",
                description: "Possibilidade de ajustes ou reversão se necessário",
                icon: "🔄"
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

      {/* Indicações Clínicas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Indicações Clínicas para Preenchedores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Procedimentos indicados para pacientes que apresentam alterações faciais específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔬</span>
                <h3 className="text-xl font-bold text-gray-800">Alterações Faciais</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Assimetrias faciais congênitas ou adquiridas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Perda de volume em regiões específicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Proporções faciais desequilibradas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Deficiência de volume labial</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📋</span>
                <h3 className="text-xl font-bold text-gray-800">Perfil do Paciente</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Pacientes com queixas estéticas específicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Boa saúde geral e expectativas realistas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Desejo de melhora na harmonia facial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Comprometimento com o tratamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importância do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Por Que Considerar o Tratamento?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Procedimentos que podem melhorar significativamente a harmonia facial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Harmonia Facial</h3>
              <p className="text-gray-600">
                Equilíbrio das proporções faciais para um resultado mais harmonioso e natural
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Técnica Avançada</h3>
              <p className="text-gray-600">
                Utilização de produtos de alta qualidade e técnicas modernas de aplicação
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Resultados Comprovados</h3>
              <p className="text-gray-600">
                Procedimentos com eficácia comprovada e resultados duradouros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedimentos */}
      <section className="py-16 bg-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Procedimentos Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Técnicas avançadas de harmonização facial e preenchimento labial para resultados naturais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Harmonização Facial</h3>
              <p className="text-gray-600 mb-6">
                Procedimento que utiliza ácido hialurônico de alta qualidade para equilibrar proporções faciais, 
                realçar pontos de luz e corrigir assimetrias. Resultado: harmonia facial natural e equilibrada.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Equilíbrio das proporções faciais</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Realce dos pontos de luz</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Correção de assimetrias</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
                alt="Harmonização Facial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-2">
              <Image
                src="/preenchimento_labial_tratamento.jpg"
                alt="Preenchimento Labial"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Preenchimento Labial</h3>
              <p className="text-gray-600 mb-6">
                Técnica especializada para definição do contorno labial, aumento de volume natural 
                e correção de assimetrias. Resultado: lábios harmoniosos e bem definidos.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Volume e definição labial</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Contorno labial definido</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Resultados naturais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Benefícios dos Procedimentos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vantagens técnicas e clínicas dos tratamentos de preenchimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Resultado Natural</h3>
              <p className="text-gray-600">
                Utilização de técnicas que preservam a expressão natural e 
                harmonizam com a anatomia facial individual.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Efeito Imediato</h3>
              <p className="text-gray-600">
                Resultados visíveis imediatamente após o procedimento, 
                com melhora progressiva nas primeiras semanas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Segurança</h3>
              <p className="text-gray-600">
                Procedimentos realizados por profissionais especializados, 
                com produtos certificados e técnicas validadas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Durabilidade</h3>
              <p className="text-gray-600">
                Resultados que se mantêm por 6 a 18 meses, dependendo do produto 
                e da área tratada.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalização</h3>
              <p className="text-gray-600">
                Avaliação individualizada para determinar a melhor abordagem 
                técnica para cada paciente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Técnica Minimamente Invasiva</h3>
              <p className="text-gray-600">
                Procedimentos com recuperação rápida e baixo risco 
                de complicações.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre Preenchedores
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Os preenchedores são seguros?",
                  answer: "Sim, quando realizados por profissionais qualificados. Utilizamos ácido hialurônico de alta qualidade, aprovado pela ANVISA, que é biocompatível e naturalmente absorvido pelo organismo.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "A durabilidade varia de 6 a 18 meses, dependendo do produto utilizado, área tratada e metabolismo individual. Lábios geralmente duram 6-12 meses, enquanto preenchimentos faciais podem durar 12-18 meses.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "A maioria dos pacientes relata apenas um leve desconforto. Utilizamos anestésico tópico e técnicas que minimizam a sensação. A aplicação é feita com agulhas muito finas para maior conforto.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os resultados são visíveis imediatamente após o procedimento. Nos primeiros dias pode haver leve inchaço, mas o resultado final é observado em 1-2 semanas, quando o produto se integra completamente.",
                },
                {
                  question: "Posso fazer ajustes depois?",
                  answer: "Sim, os preenchimentos com ácido hialurônico são reversíveis. Se necessário, podemos fazer ajustes ou até mesmo dissolver o produto com uma enzima específica.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos saudáveis que desejam harmonização facial ou preenchimento labial são candidatos ideais. Uma consulta de avaliação é essencial para determinar se o tratamento é adequado para cada caso.",
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
                        <p className="text-lg font-bold">Preenchedores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em harmonização facial e preenchimentos, o Dr. Bruno Marques possui 
                      vasta experiência em técnicas avançadas de preenchimento. Com conhecimento profundo da 
                      anatomia facial, garante resultados naturais e harmoniosos.
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
                        <span className="text-gray-700 text-sm">Especialista em Preenchimentos</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Técnica refinada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Resultados naturais</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Milhares de procedimentos</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu objetivo é proporcionar harmonização facial que preserve a expressão natural 
                      e realce a beleza única de cada paciente."
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
      <section id="agendamento" className="py-20 bg-gradient-to-r from-gold to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Harmonizar seu Rosto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende sua consulta e descubra como a harmonização facial e preenchimento labial 
            podem transformar sua aparência de forma natural
          </p>
          <Link href="https://wa.me/5547999961355" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 border-0">
              Agendar Consulta Agora
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
} 