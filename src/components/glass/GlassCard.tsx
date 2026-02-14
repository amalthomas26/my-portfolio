import type {ReactNode} from 'react';
import {cn} from "@/lib/utils"

type GlassCardProps ={
    children:ReactNode
    className?:string
}

export function GlassCard({children,className}:GlassCardProps){
    return (
        <div className={cn(
         "rounded-2xl bg-white/10 backdrop-blur-[16px] border border-white/20 shadow-xl",
         className
        )}
        >
            {children}

        </div>
    )
}