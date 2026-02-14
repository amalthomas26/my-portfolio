import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "./button-variants";
import { cn } from "@/lib/utils";
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (_jsx(Comp, { ref: ref, className: cn(buttonVariants({ variant, size, className })), ...props }));
});
Button.displayName = "Button";
export { Button };
