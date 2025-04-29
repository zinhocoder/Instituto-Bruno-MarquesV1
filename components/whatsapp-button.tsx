"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function WhatsAppButton({ phoneNumber, children, className, size = "default" }: WhatsAppButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)

    // Simular um pequeno atraso antes de redirecionar
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}`, "_blank")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] ${className}`}
      size={size}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Iniciando atendimento...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
