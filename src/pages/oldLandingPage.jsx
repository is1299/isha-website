import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const palette = {
  cream: "#f7f2ef",
  rose: "#d79a9f",
  yellow: "#dba623",
  sage: "#a9b79a",
  blue: "#9fc4c0",
};

function VennBlob({
  title,
  subtitle,
  color,
  className,
  delay = 0,
  section,
  floatX = [0, 6, -5, 0],
  floatY = [0, -7, 5, 0],
  duration = 8,
}) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(`/about#${section}`)}
      initial={{ opacity: 0, scale: 0.72 }}
      animate={{
        opacity: 1,
        x: floatX,
        y: floatY,
        scale: [1, 1.06, 0.98, 1.03, 1],
        borderRadius: [
          "48% 52% 49% 51%",
          "39% 61% 58% 42%",
          "61% 39% 43% 57%",
          "44% 56% 63% 37%",
          "55% 45% 41% 59%",
          "48% 52% 49% 51%",
        ],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        x: { duration, repeat: Infinity, ease: "easeInOut", delay },
        y: {
          duration: duration + 1.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.4,
        },
        scale: {
          duration: duration + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.8,
        },
        borderRadius: {
          duration: duration + 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.2,
        },
      }}
      whileHover={{
        scale: 1.11,
        zIndex: 30,
        transition: { duration: 0.25 },
      }}
      className={`absolute z-10 flex h-[320px] w-[340px] items-center justify-center border border-white/20 p-8 text-center outline-none backdrop-blur-xl transition md:h-[390px] md:w-[420px] ${className}`}
      style={{
        background: `
          radial-gradient(
            circle at 50% 50%,
            ${color}14 0%,
            ${color}22 34%,
            ${color}55 62%,
            ${color}99 82%,
            ${color}bb 100%
          )
        `,
        boxShadow:
          "inset 0 0 38px rgba(255,255,255,0.16), inset 0 0 70px rgba(80,70,60,0.06), 0 20px 55px rgba(80,70,60,0.08)",
      }}
    >
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
          {title}
        </h2>
        <p className="mt-4 whitespace-pre-line text-base leading-6 text-stone-700">
          {subtitle}
        </p>
      </div>
    </motion.button>
  );
}

function MenuButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="absolute right-6 top-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-white/75 shadow-sm ring-1 ring-stone-200/60 backdrop-blur transition hover:bg-white"
        aria-label="Open menu"
      >
        <span className="h-0.5 w-5 rounded-full bg-stone-700" />
        <span className="h-0.5 w-5 rounded-full bg-stone-700" />
        <span className="h-0.5 w-5 rounded-full bg-stone-700" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="mt-3 w-48 rounded-3xl bg-white/85 p-3 text-sm text-stone-700 shadow-xl ring-1 ring-stone-200/70 backdrop-blur-xl"
          >
            <button
              onClick={() => go("/about")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              About me
            </button>
            <button
              onClick={() => go("/about#projects")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              Projects
            </button>
            <button
              onClick={() => go("/about#experience")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              Experience
            </button>
            <button
              onClick={() => go("/about#research")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              Research
            </button>
            <button
              onClick={() => go("/about#interests")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              Interests
            </button>
            <button
              onClick={() => go("/about#contact")}
              className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CenterIntersection() {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/about")}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.22 },
      }}
      animate={{
        scale: [1, 1.04, 0.99, 1.02, 1],
        borderRadius: [
          "46% 54% 52% 48%",
          "57% 43% 45% 55%",
          "42% 58% 59% 41%",
          "52% 48% 43% 57%",
          "46% 54% 52% 48%",
        ],
      }}
      transition={{
        scale: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        borderRadius: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute left-1/2 top-1/2 z-40 flex h-[200px] w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/40 p-6 text-center text-stone-800 shadow-[0_25px_70px_rgba(80,70,60,0.10)] outline-none backdrop-blur-2xl md:h-[225px] md:w-[200px]"
      style={{
        background:
          "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95), rgba(207,200,218,0.78) 38%, rgba(156,148,181,0.42) 100%)",
        boxShadow:
          "inset 16px 16px 36px rgba(255,255,255,0.34), inset -16px -16px 36px rgba(60,50,80,0.08), 0 28px 70px rgba(80,70,60,0.12)",
        filter: "brightness(1.08)",
      }}
    >
      <div>
        <p className="text-sm tracking-tight text-stone-600">
          where it meets
        </p>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-stone-950">
          me
        </p>
      </div>
    </motion.button>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen overflow-hidden text-stone-900"
      style={{ backgroundColor: palette.cream }}
    >
      <section className="relative flex min-h-screen flex-col items-center px-6 py-12">
        <MenuButton />

        <div className="mt-10 inline-flex rounded-full bg-white/70 px-5 py-2 text-sm text-stone-500 shadow-sm ring-1 ring-stone-200/60 backdrop-blur">
          AI/ML Engineer · Research · Intelligent Systems
        </div>

        <div className="mt-14 max-w-4xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
            Hi, I’m Isha.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-700">
            I build intelligent systems from research to real-world impact, with
            a human-centered approach.
          </p>


        </div>

        <div className="relative mt-12 h-[700px] w-full max-w-[980px] md:h-[790px]">
          <VennBlob
            title="Projects"
            subtitle={"systems, code,\nexperiments"}
            color={palette.rose}
            section="projects"
            delay={0.1}
            duration={7.8}
            floatX={[0, 6, -5, 0]}
            floatY={[0, -7, 5, 0]}
            className="left-[8%] top-[6%]"
          />

          <VennBlob
            title="Experience"
            subtitle={"AI/ML,\ndeployment"}
            color={palette.blue}
            section="experience"
            delay={0.55}
            duration={8.6}
            floatX={[0, -6, 5, 0]}
            floatY={[0, 7, -5, 0]}
            className="right-[8%] top-[6%]"
          />

          <VennBlob
            title="Research"
            subtitle={"papers &\nexploration"}
            color={palette.yellow}
            section="research"
            delay={1}
            duration={9.2}
            floatX={[0, 5, -6, 0]}
            floatY={[0, 7, -5, 0]}
            className="left-[12%] top-[38%]"
          />

          <VennBlob
            title="Interests"
            subtitle={"coffee, travel,\nuseful AI"}
            color={palette.sage}
            section="interests"
            delay={1.45}
            duration={8.1}
            floatX={[0, -5, 6, 0]}
            floatY={[0, -6, 7, 0]}
            className="right-[12%] top-[38%]"
          />

          <CenterIntersection />
        </div>
      </section>
    </main>
  );
}