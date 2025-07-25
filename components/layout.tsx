"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  // Detecta mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Insere o script do GTM no <head>
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KZ9C8T7D');
    `
    document.head.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KZ9C8T7D"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Conteúdo principal */}
      <main className="flex-grow">{children}</main>

      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/5547999961355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white rounded-full p-3 shadow-lg hover:from-[#D4AF37] hover:to-[#C4A052] transition-all duration-300 transform hover:scale-105"
        aria-label="Contato via WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-16">
        <div className="container mx-auto px-4">
          {isMobile ? (
            // Mobile Footer
            <div className="flex flex-col items-center text-center">
              {/* Logo centralizada */}
              <div className="mb-8 flex justify-center">
                <Image
                  src="/brunomarqueslogo.png"
                  alt="Instituto Bruno Marques Logo"
                  width={400}
                  height={400}
                  className="w-72 h-72"
                />
              </div>
              <p className="text-gray-300 mt-4 text-sm max-w-xs mx-auto">
                Referência em tratamentos estéticos avançados e cursos especializados.
              </p>

              {/* Contato Compacto */}
              <div className="mb-8 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-[#C4A052]">Contato</h3>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-[#C4A052]" />
                    <span>+55 47 99996-1355</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-center">
                    <MapPin className="w-4 h-4 text-[#C4A052] flex-shrink-0" />
                    <span>Rua 242 n°344 Sala 01, Itapema</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="https://wa.me/5547999961355" passHref>
                    <Button className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]">
                      Agendar Consulta
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Links Compactos */}
              <div className="grid grid-cols-2 gap-8 w-full mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#C4A052]">Tratamentos</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/tratamentos"
                        className="text-gray-300 hover:text-[#C4A052] transition-colors text-sm"
                      >
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#C4A052]">Cursos</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/cursos" className="text-gray-300 hover:text-[#C4A052] transition-colors text-sm">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Redes Sociais e Copyright */}
              <div className="border-t border-gray-800 pt-6 w-full text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <Link href="#" className="text-gray-400 hover:text-[#C4A052] transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#C4A052] transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-400 text-sm">&copy; 2025 Instituto Bruno Marques</p>
              </div>
            </div>
          ) : (
            // Desktop Footer (original)
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo e Descrição */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <Image
                    src="/instituto-11.png"
                    alt="Instituto Bruno Marques Logo"
                    width={400}
                    height={400}
                    className="w-80 h-80"
                  />

                </div>

                {/* Tratamentos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Tratamentos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                                        href="/tratamentos/harmonizacao-intima-masculina"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                Harmonização Íntima Masculina
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/botox" className="text-gray-300 hover:text-gold transition-colors">
                        Botox
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tratamentos/preenchimento-labial"
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        Preenchimento Labial
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/skinbooster" className="text-gray-300 hover:text-gold transition-colors">
                        Skinbooster
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos" className="text-gold hover:text-white transition-colors">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Cursos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Cursos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                                        href="/cursos/harmonizacao-intima-masculina"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                Harmonização Íntima Masculina
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/bioestimuladores" className="text-gray-300 hover:text-gold transition-colors">
                        Bioestimuladores
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/preenchedores" className="text-gray-300 hover:text-gold transition-colors">
                        Preenchedores
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/endolaser" className="text-gray-300 hover:text-gold transition-colors">
                        Endolaser
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos" className="text-gold hover:text-white transition-colors">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contato */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Contato</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5 text-gold" />
                      <span>+55 47 99996-1355</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>Rua 242 n°344 Sala 01, Itapema - Meia Praia</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span>Segunda a Sexta: 9h às 18h</span>
                    </li>
                    <li className="mt-4">
                      <Link href="https://wa.me/5547999961355" passHref>
                        <Button className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]">
                          Agendar Consulta
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Redes Sociais e Copyright */}
              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-center md:text-left">
                  &copy; 2025 Instituto Bruno Marques. Todos os direitos reservados. Desenvolvido por{" "}
                  <a
                    href="https://devpro.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gold"
                  >
                    DevPro
                  </a>
                  .
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <Link
                    href="https://facebook.com/institutobrunomarques"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com/institutobrunomarques"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  )
}
