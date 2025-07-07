"use client"

import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
          {children}
        </div>
      </div>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex gap-1", className)} {...props} />,
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("w-full flex-[0_0_auto]", className)} {...props} />,
)
CarouselItem.displayName = "CarouselItem"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "absolute right-0 bottom-0 h-10 w-10 rounded-md bg-secondary text-secondary-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      aria-label="Go to next slide"
      {...props}
    />
  ),
)
CarouselNext.displayName = "CarouselNext"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "absolute left-0 bottom-0 h-10 w-10 rounded-md bg-secondary text-secondary-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      aria-label="Go to previous slide"
      {...props}
    />
  ),
)
CarouselPrevious.displayName = "CarouselPrevious"

function useCarousel() {
  const [api, setApi] = useState<any>(null)

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  return {
    api,
    setApi,
    scrollNext,
    scrollPrev,
  }
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel }
