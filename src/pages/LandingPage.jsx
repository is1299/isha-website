import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const palette = {
  cream: "#f7f2ef",
  paleYellow: "#fbf6d6",
  rose: "#e9cfc9",
  coral: "#d79a9f",
  yellow: "#dba623",
  sage: "#a9b79a",
  blue: "#9fc4c0",
  burgundy: "#4b0614",
};

const folders = [

  {

    title: "Projects",

    subtitle: "systems, code, experiments",

    path: "/about#projects",

    color: "#e9cfc9",

    top: "top-[8%]",

    tabLeft: "left-[8%]",

  },

  {

    title: "Experience",

    subtitle: "AI/ML, deployment, software",

    path: "/about#experience",

    color: "#9fc4c0",

    top: "top-[28%]",

    tabLeft: "left-[42%]",

  },

  {

    title: "Research",

    subtitle: "papers, models, exploration",

    path: "/about#research",

    color: "#dba623",

    top: "top-[48%]",

    tabLeft: "left-[18%]",

  },

  {

    title: "Interests",

    subtitle: "coffee, travel, useful AI",

    path: "/about#interests",

    color: "#a9b79a",

    top: "top-[68%]",

    tabLeft: "left-[55%]",

  },

];

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
            <button onClick={() => go("/about")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              About me
            </button>
            <button onClick={() => go("/about#projects")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Projects
            </button>
            <button onClick={() => go("/about#experience")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Experience
            </button>
            <button onClick={() => go("/about#education")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Education
            </button>
            <button onClick={() => go("/about#research")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Research
            </button>
            <button onClick={() => go("/about#interests")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Interests
            </button>
            <button onClick={() => go("/about#contact")} className="block w-full rounded-2xl px-4 py-3 text-left hover:bg-stone-100/70">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AboutStrip() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto mt-20 grid max-w-6xl gap-10 overflow-hidden rounded-[2.5rem] border border-stone-200/60 bg-[#fbf6d6] p-8 shadow-[0_18px_60px_rgba(80,70,60,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
          About me
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#4b0614] md:text-7xl">
          Isha Shah
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-800">
          AI/ML engineer and researcher building intelligent systems from
          research to real-world impact, with a human-centered approach.
        </p>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
          <div>
            <p className="text-4xl font-semibold text-[#4b0614]">3+</p>
            <p className="mt-1 text-xs text-stone-500">years research</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-[#4b0614]">peer-reviewed</p>
            <p className="mt-1 text-xs text-stone-500">publications</p>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[320px] md:block">
<div className="relative hidden min-h-[320px] items-center justify-center md:flex">
  <motion.img
    initial={{ opacity: 0, y: 18, rotate: -2 }}
    animate={{ opacity: 1, y: 0, rotate: -2 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    src="/public/Isha.png"
    alt="Isha Shah"
    draggable="false"
    onContextMenu={(e) => e.preventDefault()}
    className="h-[420px] w-[320px] object-cover shadow-[0_20px_50px_rgba(80,70,60,0.16)]"
    style={{
      borderRadius: "0.5rem",
    }}
  />

  <motion.div
    initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
    animate={{ opacity: 1, rotate: 5, scale: 1 }}
    transition={{ delay: 0.45 }}
    className="absolute bottom-10 right-2 rounded-2xl border border-[#4b0614]/20 bg-white/80 px-8 py-6 text-center text-[#4b0614] shadow-lg"
    style={{
      border: "1px solid rgba(75,6,20,0.15)",
    }}
  >
    <p className="text-xl leading-8">
      intelligent systems,
      <br />
      thoughtful design,
      <br />
      and useful AI
    </p>
  </motion.div>
</div>


      </div>

      <button
        onClick={() => navigate("/about")}
        className="absolute bottom-6 right-8 text-sm text-stone-600 transition hover:text-stone-950"
      >
        open about →
      </button>
    </motion.section>
  );
}

function FolderTab({ folder, index }) {
  const [opening, setOpening] = useState(false);
  const navigate = useNavigate();

  const openFolder = () => {
    setOpening(true);
    setTimeout(() => navigate(folder.path), 360);
  };

  return (
    <motion.button
      onClick={openFolder}
      initial={{ opacity: 0, x: -24 }}
      animate={opening ? { x: 28, opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.32, delay: index * 0.06 }}
      whileHover={{
        x: 20,
        transition: { duration: 0.2 },
      }}
      className={`absolute ${folder.top} left-0 z-10 h-28 w-[calc(100%+2rem)] px-10 py-6 text-left outline-none`}
      style={{
        backgroundColor: folder.color,
        borderRadius: "0 2rem 2rem 0",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.45), inset -16px -16px 28px rgba(80,70,60,0.08), 0 18px 38px rgba(80,70,60,0.16)",
      }}
    >
      <div
        className={`absolute -top-9 ${folder.tabLeft} h-10 w-56`}
        style={{
          backgroundColor: folder.color,
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.45), 0 -6px 18px rgba(80,70,60,0.08)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 rounded-r-[2rem] bg-gradient-to-br from-white/25 via-transparent to-black/5" />

      <div className="relative z-10 flex items-center justify-between pr-8">
        <div>
          <h2 className="text-2xl font-semibold text-stone-950">
            {folder.title}
          </h2>
          <p className="mt-1 text-sm text-stone-700">{folder.subtitle}</p>
        </div>

        <p className="text-sm text-stone-600">pull out →</p>
      </div>
    </motion.button>
  );
}

function FolderStrip() {

  return (

    <section className="mx-auto mt-14 max-w-6xl">

      <div className="mb-6 flex items-center justify-between px-2">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">

          Explore

        </p>

        <p className="text-sm text-stone-500">click a folder to open</p>

      </div>

      <div className="relative h-[560px] overflow-hidden rounded-[2.5rem] bg-white/35 shadow-[0_18px_60px_rgba(80,70,60,0.08)] ring-1 ring-stone-200/50 backdrop-blur">

        {folders.map((folder, index) => (

          <FolderTab key={folder.title} folder={folder} index={index} />

        ))}

      </div>

    </section>

  );

}

export default function LandingPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden px-6 pb-20 text-stone-900"
      style={{ backgroundColor: palette.cream }}
    >
      <MenuButton />
      <AboutStrip />
      <FolderStrip />
    </main>
  );
}