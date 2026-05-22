import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const palette = {
  cream: "#f7f2ef",
  rose: "#d79a9f",
  yellow: "#dba623",
  sage: "#a9b79a",
  blue: "#9fc4c0",
  purple: "#9c94b5",
  lavender: "#cfc7dc",
};

function SectionCard({ id, title, children, color }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-[2.5rem] border border-white/30 p-8 backdrop-blur-xl"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${color}22 0%, ${color}55 55%, ${color}88 100%)`,
          boxShadow:
            "inset 0 0 40px rgba(255,255,255,0.12), 0 18px 45px rgba(80,70,60,0.06)",
        }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
          {title}
        </h2>
        <div className="mt-6 leading-8 text-stone-700">{children}</div>
      </motion.div>
    </section>
  );
}
// function PhotoBooklet() {
//   const photos = [
//     "/photos/cafe.jpg",
//     "/photos/travel.jpg",
//     "/photos/matcha.jpg",
//     "/photos/design.jpg",
//   ];

//   return (
//     <div className="relative h-[420px] rounded-[2rem] bg-[#fbf6d6] p-8 shadow-sm ring-1 ring-stone-200/60">
//       <p className="absolute left-8 top-6 text-xs uppercase tracking-[0.2em] text-stone-400">
//         little things
//       </p>

//       {photos.map((src, index) => (
//         <motion.img
//           key={src}
//           src={src}
//           alt=""
//           draggable="false"
//           onContextMenu={(e) => e.preventDefault()}
//           initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -4 : 4 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           whileHover={{ y: -8, scale: 1.04, zIndex: 20 }}
//           transition={{ duration: 0.5, delay: index * 0.12 }}
//           className={`absolute h-40 w-32 object-cover shadow-lg ${
//             index === 0
//               ? "left-10 top-20 rotate-[-5deg]"
//               : index === 1
//               ? "left-40 top-28 rotate-[3deg]"
//               : index === 2
//               ? "right-28 top-16 rotate-[5deg]"
//               : "right-12 bottom-12 rotate-[-3deg]"
//           }`}
//         />
//       ))}

//       <div className="absolute bottom-8 left-8 rounded-full bg-white/70 px-5 py-2 text-sm text-stone-600">
//         cafés · travel · design · matcha
//       </div>
//     </div>
//   );
// }
export default function AboutPage() {
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");

        setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
          });
      }, 100);
    }
    }, [location]);

  return (
    <main
      className="min-h-screen overflow-x-hidden px-6 py-8 text-stone-900"
      style={{ backgroundColor: palette.cream }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="rounded-full bg-white/70 px-5 py-3 text-sm text-stone-700 shadow-sm ring-1 ring-stone-200/60"
        >
          ← back
        </button>

        <div className="hidden gap-6 text-sm text-stone-500 md:flex">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-16 py-24 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex rounded-full bg-white/70 px-5 py-2 text-sm text-stone-500 shadow-sm ring-1 ring-stone-200/60">
            About me
          </div>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
            Hi I'm Isha, 
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700">
           an AI engineer building models with curiosity, research, and intention.
            
          </p>

          <div className="mt-8 rounded-[2rem] bg-white/60 p-6 shadow-sm ring-1 ring-stone-200/50">
            <p className="text-lg leading-8 text-stone-700">

      I’ve always been drawn to the intersection of technology, creativity, and
      sustainability. During university, I led the software team for the
      Innovate Sustainable Design Club, where we worked on projects focused on
      renewable energy and practical sustainable design solutions. Our work went
      on to win design competitions across Canada.
    </p>

    <p className="text-lg leading-8 text-stone-700">
      A big reason I enjoy working in AI is because I genuinely believe
      technology can improve how people live and interact with the world — but
      only when it’s built thoughtfully. I’m especially interested in systems
      that solve real problems, make information more accessible, or create
      meaningful impact beyond just novelty.
    </p>
          </div>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.04, 0.98, 1.02, 1],
            borderRadius: [
              "48% 52% 49% 51%",
              "39% 61% 58% 42%",
              "61% 39% 43% 57%",
              "44% 56% 63% 37%",
              "55% 45% 41% 59%",
              "48% 52% 49% 51%",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto h-[300px] w-[300px] border border-white/30 backdrop-blur-xl md:h-[340px] md:w-[340px]"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${palette.purple}18 0%, ${palette.purple}22 34%, ${palette.purple}55 62%, ${palette.purple}99 82%, ${palette.purple}bb 100%)`,
            boxShadow:
              "inset 0 0 38px rgba(255,255,255,0.16), inset 0 0 70px rgba(80,70,60,0.06), 0 20px 55px rgba(80,70,60,0.08)",
          }}
        />
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 pb-28">
        <SectionCard id="projects" title="Projects" color={palette.rose}>
  <div className="space-y-6">
    <p>
      A mix of machine learning, trustworthy AI, computer vision, and applied
      research projects — mostly focused on building practical tools from
      research ideas.
    </p>
        <a
      href="https://is1299.github.io/CVD_riskPrediction/"
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
    >
      <p className="text-sm text-stone-500">Healthcare AI · Risk Prediction</p>
      <h3 className="mt-2 text-xl font-semibold text-stone-950">
        CVD Risk Prediction
      </h3>
      <p className="mt-3 leading-7 text-stone-700">
        A machine learning project focused on cardiovascular disease risk
        prediction and applied clinical decision-support workflows.
      </p>
    </a>

    <a
  href="https://github.com/is1299/trustworthyML"
  target="_blank"
  rel="noreferrer"
  className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
>
  <p className="text-sm text-stone-500">
    Trustworthy AI · Explainability
  </p>

  <h3 className="mt-2 text-xl font-semibold text-stone-950">
    trustworthyML
  </h3>

  <p className="mt-3 leading-7 text-stone-700">
    Experiments and tools exploring trustworthy machine learning,
    interpretability, reliability, and evaluation of AI systems in
    real-world settings.
  </p>
</a>

    <a
      href="https://github.com/is1299/AI-claim-check"
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
    >
      <p className="text-sm text-stone-500">Trustworthy AI · LLMs</p>
      <h3 className="mt-2 text-xl font-semibold text-stone-950">
        ClaimCheck AI
      </h3>
      <p className="mt-3 leading-7 text-stone-700">
        A lightweight app for analyzing hallucination risk and factual
        reliability in AI-generated text by extracting claims and assessing
        their reliability.
      </p>
    </a>

    <a
      href="https://github.com/is1299/affective-vision"
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
    >
      <p className="text-sm text-stone-500">Computer Vision · Deep Learning</p>
      <h3 className="mt-2 text-xl font-semibold text-stone-950">
        Affective Vision
      </h3>
      <p className="mt-3 leading-7 text-stone-700">
        A real-time facial expression analysis system that detects faces and
        predicts emotional states from webcam streams, images, and video input.
      </p>
    </a>



  </div>
</SectionCard>

        <SectionCard id="experience" title="Experience" color={palette.blue}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-stone-950">
                AI/ML Engineer
              </h3>
              <p className="mt-1 text-stone-600">
                BC Cancer Agency · Jun 2022 – Present · Kelowna, BC
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  Built and deployed multimodal machine learning systems
                  combining imaging and clinical data for real-world risk
                  prediction.
                </li>
                <li>
                  Developed NLP pipelines for large-scale clinical text
                  analysis, including bias and language-pattern detection across
                  patient records.
                </li>
                <li>
                  Deployed reproducible ML workflows using FastAPI, Docker, and
                  modern model development tooling.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-stone-950">
                Graduate Teaching Assistant
              </h3>
              <p className="mt-1 text-stone-600">
                University of British Columbia · Sep 2022 – Jan 2023 · Kelowna,
                BC
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  Led technical labs covering MPI, OpenMP, GPU optimization, and
                  performance-focused computing.
                </li>
                <li>
                  Supported students in parallel computing concepts and scalable
                  software development practices.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-stone-950">
                Software Development Engineer
              </h3>
              <p className="mt-1 text-stone-600">
                Godrej & Boyce Manufacturing · Sep 2020 – Aug 2021 · Mumbai,
                India
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  Improved performance of web and mobile applications across iOS
                  and Android platforms.
                </li>
                <li>
                  Fixed backend PHP/SQL issues to recover records and improve
                  reliability for thousands of users.
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="research" title="Research & Publications" color={palette.yellow}>
          <div className="space-y-6">
            <p>
              My research explores multimodal learning, representation learning,
              NLP, and intelligent systems designed for practical, real-world
              use.
            </p>

            <a
              href="https://doi.org/10.1007/978-3-031-77389-1_9"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
            >
              <p className="text-sm text-stone-500">
                ISVC 2024 · Springer LNCS
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-950">
                Investigating the Impact of a Foundational Medical Image Model
                for CT Classification
              </h3>
            </a>

            <a
              href="https://www.thegreenjournal.com/article/S0167-8140(26)00094-0/fulltext"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/20 bg-white/25 p-5 transition hover:scale-[1.01]"
            >
              <p className="text-sm text-stone-500">
                Radiotherapy & Oncology · The Green Journal
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-950">
                Artificial Intelligence Model for Cardiovascular Disease Risk
                Prediction in Breast Cancer Patients
              </h3>
            </a>

            <div className="rounded-2xl border border-white/20 bg-white/25 p-5">
              <p className="text-sm text-stone-500">
                AOCMP 2024 · Research Abstract
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-950">
                Performance of a Foundational CT Model for Cardiac Risk
                Prediction
              </h3>
            </div>
          </div>
        </SectionCard>

        <SectionCard
  id="education"
  title="Education & Awards"
  color={palette.lavender}
>
  <div className="space-y-10">
    <div>
      <h3 className="text-2xl font-semibold text-stone-950">
        Bachelor of Science
      </h3>

      <p className="mt-1 text-stone-600">
        Honours in Computer Science 
      </p>

      <p className="mt-2 text-stone-500">
        University of Mumbai
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-stone-950">
        Master of Science
      </h3>

      <p className="mt-1 text-stone-600">
        Computer Science 
      </p>

      <p className="mt-2 text-stone-500">
        University of British Columbia
      </p>
    </div>

    <div className="rounded-[1.8rem] bg-white/25 p-6">
      <h4 className="text-xl font-semibold text-stone-950">
        University Graduate Fellowship
      </h4>

      <p className="mt-1 text-stone-600">
        2023 – 2025
      </p>

      <p className="mt-2 text-stone-500">
        University of British Columbia
      </p>

      <p className="mt-4 leading-8 text-stone-700">
        University Graduate Fellowships (UGF) are awarded to current graduate
        students at UBC who demonstrate strong academic and research
        performance while enrolled in full-time thesis-based graduate programs.
      </p>
    </div>



    <div className="rounded-[1.8rem] bg-white/25 p-6">
      <h4 className="text-xl font-semibold text-stone-950">
        Graduate Student Research Award (GSRA)
      </h4>

      <p className="mt-1 text-stone-600">
        2022, 2023
      </p>

      <p className="mt-2 text-stone-500">
        University of British Columbia
      </p>
    </div>
  </div>
</SectionCard>


<SectionCard id="interests" title="Interests" color={palette.sage}>
  <div className="space-y-10">
    
    {/* TEXT */}
    <div className="max-w-3xl space-y-5 leading-8 text-stone-700">
      <p>
        Outside of work, I spend a lot of time exploring new cafés,
        searching for good matcha, traveling, attending conferences and finding inspiration
        in spaces that feel thoughtful and intentional.
      </p>

      <p>
        I’ve always been drawn to the intersection of technology,
        creativity, and sustainability. During university, I led the
        software team for the Innovate Sustainable Design Club, where we
        worked on projects focused on renewable energy and practical
        sustainable design solutions.
      </p>

      <p>
        A big reason I enjoy working in AI is because I genuinely
        believe technology can improve how people live and interact with
        the world — but only when it’s built thoughtfully.
      </p>
    </div>

    {/* FULL WIDTH PHOTO SPREAD */}
    <div className="relative h-[650px] overflow-hidden rounded-[2.5rem] bg-[#f7f2ef]/45">

      <div className="grid gap-5 rounded-[2.5rem] bg-[#f7f2ef]/45 p-5 md:grid-cols-3">
  {[
    "/photos/conf.png",
    "/photos/coffee2.png",
    "/photos/trav.png",
    "/photos/cafe.png",
    "/photos/teavel2.jpg",
].map((src, index) => (
    <motion.img
      key={src}
      src={src}
      alt=""
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="h-64 w-full rounded-[1.5rem] object-cover shadow-xl"
    />
  ))}
</div>
      <div className="absolute bottom-6 left-6 rounded-full bg-white/70 px-5 py-2 text-sm text-stone-600 backdrop-blur">
        cafés · travel · sustainability · design · matcha
      </div>
    </div>
  </div>




</SectionCard>
    

    




        <section id="contact" className="scroll-mt-24">
          <div className="rounded-[2.5rem] bg-stone-950 p-10 text-white">
            <h2 className="text-4xl font-semibold tracking-tight">
              Let’s connect.
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              

              <a
                href="https://github.com/is1299"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/isha-shah-64036620b"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </section>
      <button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="fixed bottom-6 right-6 z-50 rounded-full bg-white/80 px-5 py-3 text-sm text-stone-700 shadow-lg ring-1 ring-stone-200/60 backdrop-blur transition hover:scale-[1.03] hover:bg-white"
>
  ↑ Top
</button>
    </main>
  );
}
