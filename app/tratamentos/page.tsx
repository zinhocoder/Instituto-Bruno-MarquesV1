"use client"

import Layout from "@/components/layout"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const treatments = [
  {
    name: "Harmonização Íntima Masculina",
    description: "Procedimento para harmonização e modelagem íntima masculina.",
    image: "/photo_2023-05-12_15-13-08.png?height=300&width=400&text=Harmonizacao+Intima+Masculina",
    link: "/tratamentos/harmonizacao-intima-masculina",
  },
  {
    name: "Preenchimento Labial",
    description: "Aumento e definição dos lábios para um sorriso mais harmonioso.",
    image: "preenchimento_labial_tratamento.jpg",
    link: "/tratamentos/preenchimento-labial",
  },
  {
    name: "Botox",
    description: "Suavização de rugas e linhas de expressão para uma aparência mais jovem.",
    image: "botox.png",
    link: "/tratamentos/botox",
  },
  {
    name: "Skinbooster",
    description: "Hidratação profunda e revitalização da pele para um brilho natural.",
    image: "images.jpeg",
    link: "/tratamentos/skinbooster",
  },
  {
    name: "Bioestimuladores de Colágeno",
    description: "Estímulo natural da produção de colágeno para uma pele mais firme.",
    image: "Bioestimulador-de-Colageno-1-1024x768.jpg",
    link: "/tratamentos/bioestimuladores-de-colageno",
  },
  {
    name: "Fios de PDO",
    description: "Lifting não cirúrgico para um efeito rejuvenescedor imediato.",
    image: "blog20230526.jpg",
    link: "/tratamentos/fios-de-pdo",
  },
  {
    name: "Ultrassom Microfocado",
    description: "Tecnologia avançada para lifting e firmeza da pele.",
    image: "/720x720-7.jpg?height=300&width=400&text=Ultrassom+Microfocado",
    link: "/tratamentos/ultrassom-microfocado",
  },
  {
    name: "Endolaser",
    description: "Tratamento a laser para rejuvenescimento facial e corporal.",
    image: "/IMG_6621.jpg?height=300&width=400&text=Endolaser",
    link: "/tratamentos/endolaser",
  },
  {
    name: "Preenchedores Corporais",
    description: "Modelagem e definição corporal com preenchedores.",
    image:
      "/Nutrologia-Goiania-Preenchedor-gluteo-com-acido-hialuronico-X-PMMA.png?height=300&width=400&text=Preenchedores+Corporais",
    link: "/tratamentos/preenchedores-corporais",
  },
  {
    name: "Harmonização Facial",
    description: "Técnicas avançadas para equilibrar e realçar os traços faciais.",
    image: "conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg",
    link: "/tratamentos/harmonizacao-facial",
  },
  {
    name: "Transplante Capilar",
    description: "Solução definitiva para a calvície e rarefação capilar.",
    image:
      "/transplante-capilar-implante-capilar-bio-renew-medicina-estetica.png?height=300&width=400&text=Transplante+Capilar",
    link: "/tratamentos/transplante-capilar",
  },
  {
    name: "Limpeza de Pele",
    description: "Tratamento profundo para uma pele limpa e radiante.",
    image: "/serv_facial_limp_pele_peeling_cristal.jpg.png?height=300&width=400&text=Limpeza+de+Pele",
    link: "/tratamentos/limpeza-de-pele",
  },
  {
    name: "Temporal Facelifting",
    description: "Técnica inovadora para lifting facial não cirúrgico.",
    image: "/lifting-facial-não-cirúrgico.jpeg?height=300&width=400&text=Temporal+Facelifting",
    link: "/tratamentos/temporal-face-liffting",
  },
  {
    name: "Acompanhamento com Caneta Mounjaro",
    description: "Acompanhamento clínico especializado para tratamento com Mounjaro.",
    image: "/25f4c19c-3e99-468e-9f35-777a0061bff5___42de9141f98677f3f543e3afc392aa41.png?height=300&width=400&text=Caneta+Mounjaro",
    link: "/tratamentos/caneta-mounjaro",
  },
  {
    name: "Jato de Plasma",
    description: "Tecnologia avançada para rejuvenescimento e tratamento de imperfeições da pele.",
    image: "/O-que-e-o-jato-de-plasma_Entenda-agora.png?height=300&width=400&text=Jato+de+Plasma",
    link: "/tratamentos/jato-de-plasma",
  },
  {
    name: "Glúteo Max",
    description: "Procedimento para aumento e modelagem dos glúteos com resultados naturais.",
    image: "/gluteomax.png?height=300&width=400&text=Glúteo+Max",
    link: "/tratamentos/gluteo-max",
  },
]

export default function Treatments() {
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
      <Header />
      <div className="container mx-auto px-4 py-12 mt-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossos Tratamentos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="p-4 md:p-6 flex flex-col h-full">
                <div className="aspect-[4/3] relative mb-4 overflow-hidden rounded-md">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{treatment.name}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2 flex-grow">{treatment.description}</p>
                <div className="mt-auto">
                  <Link href={treatment.link} passHref>
                    <Button className="w-full bg-gold hover:bg-[#D4AF37] text-white">Saiba Mais</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
