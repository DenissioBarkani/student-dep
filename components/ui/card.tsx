import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-2xl border shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function CardHover({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-hover"
      className={cn("rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.1),0_2px_6px_-2px_rgba(0,0,0,0.1)]", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHover, CardFooter, CardTitle, CardDescription, CardContent }
