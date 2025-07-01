"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CursoPreenchedores() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Curso de Preenchedores (Facial e Corporal)</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Curso de Preenchedores"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre o Curso</h2>
            <p className="text-gray-700 mb-6">
              O curso de Preenchedores oferece uma formação completa sobre o uso de preenchedores faciais e corporais.
              Aprenda as técnicas mais avançadas para realizar procedimentos de aumento de volume, correção de
              assimetrias e rejuvenescimento.
            </p>
            <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Tipos de preenchedores e suas indicações</li>
              <li>Anatomia facial e corporal aplicada</li>
              <li>Técnicas de aplicação seguras e eficazes</li>
              <li>Protocolos para diferentes áreas de tratamento</li>
              <li>Manejo de complicações e efeitos adversos</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Informações do Curso:</h3>
            <ul className="list-none text-gray-700 mb-6">
              <li>
                <strong>Duração:</strong> 24 horas
              </li>
              <li>
                <strong>Modalidade:</strong> Presencial com prática em modelos
              </li>
              <li>
                <strong>Certificação:</strong> Certificado de conclusão emitido pelo Instituto Bruno Marques
              </li>
            </ul>
            <Button
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
              onClick={() => window.open("https://wa.me/554799961355", "_blank")}
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
