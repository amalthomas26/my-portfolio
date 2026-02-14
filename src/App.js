import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "@/context/ThemeProvider";
import { FeedbackProvider } from "@/context/FeedbackProvider";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
export default function App() {
    return (_jsx(ThemeProvider, { children: _jsxs(FeedbackProvider, { children: [_jsx(Navbar, {}), _jsxs("main", { className: "\r\n            min-h-screen\r\n    overflow-x-hidden\r\n    bg-linearto-br\r\n    from-white\r\n    via-zinc-50\r\n    to-indigo-50\r\n    dark:from-zinc-950\r\n    dark:via-zinc-900\r\n    dark:to-black\r\n        ", children: [_jsx(Hero, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx(FeedbackModal, {})] }) }));
}
