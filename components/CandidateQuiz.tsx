"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Option = { label: string; score: number; flag?: string };
type Question = { question: string; subtext?: string; reinforcement: string; options: Option[] };

const questions: Question[] = [
  {
    question: "Are you 18 years or older?",
    reinforcement: "Great — let's keep going!",
    options: [
      { label: "Yes, I'm 18 or older", score: 2 },
      { label: "No, I'm under 18", score: 0, flag: "age" },
    ],
  },
  {
    question: "How are your gums doing?",
    subtext: "Healthy gums make for a more comfortable and effective session.",
    reinforcement: "Good to know — on to the next one.",
    options: [
      { label: "Healthy — no issues at all", score: 2 },
      { label: "Occasionally sensitive but generally fine", score: 1 },
      { label: "I notice bleeding or swelling", score: 0, flag: "gums" },
    ],
  },
  {
    question: "Are your front teeth free of active cavities?",
    subtext: "Treating cavities first means a safer session and a better result.",
    reinforcement: "Perfect — that's what we like to hear.",
    options: [
      { label: "Yes, no cavities I know of", score: 2 },
      { label: "I have a cavity that needs treatment", score: 0, flag: "cavity" },
      { label: "Not sure — I haven't checked recently", score: 1 },
    ],
  },
  {
    question: "What kind of staining are you looking to remove?",
    subtext: "Our 44% hydrogen peroxide gel targets all of these.",
    reinforcement: "You're on the right track — we handle this every day.",
    options: [
      { label: "Coffee or tea stains", score: 2 },
      { label: "Red wine or dark foods", score: 2 },
      { label: "Age-related or genetic yellowing", score: 2 },
      { label: "All of the above", score: 2 },
    ],
  },
  {
    question: "Do you have crowns, veneers, or bonding on your front teeth?",
    subtext: "Whitening only affects natural enamel — not dental restorations.",
    reinforcement: "Noted — we'll walk you through what to expect.",
    options: [
      { label: "No, all natural teeth", score: 2 },
      { label: "Yes, one or two pieces", score: 1 },
      { label: "Yes, several on my front teeth", score: 1 },
    ],
  },
  {
    question: "When are you hoping to see your brighter smile?",
    reinforcement: "Love the motivation — let's make it happen.",
    options: [
      { label: "As soon as possible!", score: 2 },
      { label: "Within the next few months", score: 2 },
      { label: "Just exploring for now", score: 2 },
    ],
  },
];

type Result = { emoji: string; headline: string; body: string; cta: boolean; accent: boolean };

function getResult(score: number, flags: string[]): Result {
  if (flags.includes("age")) {
    return {
      emoji: "⏳",
      headline: "Come back when you're 18!",
      body: "Professional whitening is most effective and safe after age 18. Great oral habits in the meantime set the foundation for a brilliant future smile.",
      cta: false,
      accent: false,
    };
  }
  if (flags.includes("gums") || flags.includes("cavity")) {
    return {
      emoji: "🦷",
      headline: "A quick check-up first.",
      body: "Based on your answers, we'd recommend addressing any gum or cavity concerns with your dentist before whitening. Treating those first means a more comfortable session and a better result.",
      cta: false,
      accent: false,
    };
  }
  if (score >= 10) {
    return {
      emoji: "✨",
      headline: "You're an excellent candidate!",
      body: "Your answers check every box. You can expect dramatic, long-lasting results in a single session — exactly what Lumen is built for.",
      cta: true,
      accent: true,
    };
  }
  if (score >= 7) {
    return {
      emoji: "😊",
      headline: "You look like a great candidate!",
      body: "There are a couple of things worth discussing at your visit, but overall you're a strong fit for professional LED whitening. We'll make sure you leave thrilled.",
      cta: true,
      accent: true,
    };
  }
  return {
    emoji: "💬",
    headline: "You may still be a great fit — let's talk.",
    body: "A few of your answers flag things we'd want to discuss first. Reach out before booking so we can set you up for the best possible result.",
    cta: true,
    accent: false,
  };
}

export function CandidateQuiz() {
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [flags, setFlags] = useState<string[]>([]);
  const [reinforcement, setReinforcement] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  function handleAnswer(option: Option, idx: number) {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    setReinforcement(questions[current].reinforcement);

    setTimeout(() => {
      const newScore = score + option.score;
      const newFlags = option.flag ? [...flags, option.flag] : flags;
      setScore(newScore);
      setFlags(newFlags);
      setReinforcement("");
      setSelectedIdx(null);
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
      } else {
        setPhase("result");
      }
    }, 850);
  }

  function reset() {
    setPhase("intro");
    setCurrent(0);
    setScore(0);
    setFlags([]);
    setReinforcement("");
    setSelectedIdx(null);
  }

  const progressPct = reinforcement
    ? ((current + 1) / questions.length) * 100
    : (current / questions.length) * 100;

  const result = getResult(score, flags);

  return (
    <section id="quiz" className="bg-primary-soft py-24 sm:py-32">
      <Container className="max-w-2xl">
        <FadeUp className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Find out
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Are you a good candidate?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
            Six quick questions. Instant, personalized result. No email required.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-white">
            <AnimatePresence mode="wait">
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-12 text-center sm:px-12"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-4xl">
                    ✨
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Take the 60-second quiz
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-muted">
                    Find out if professional LED teeth whitening is right for you.
                    No commitment. No email.
                  </p>
                  <div className="mt-8">
                    <Button size="lg" onClick={() => setPhase("quiz")}>
                      Start the quiz
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {phase === "quiz" && (
                <motion.div
                  key={`q-${current}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-10 sm:px-12"
                >
                  <div className="mb-8">
                    <div className="mb-2 flex items-center justify-between text-sm text-muted">
                      <span>Question {current + 1} of {questions.length}</span>
                      <span>{Math.round(progressPct)}% complete</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-soft">
                      <motion.div
                        className="h-full rounded-full bg-primary-dark"
                        animate={{ width: `${progressPct}%` }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold leading-snug text-foreground sm:text-[28px]">
                    {questions[current].question}
                  </h3>
                  {questions[current].subtext && (
                    <p className="mt-2 text-[15px] text-muted">
                      {questions[current].subtext}
                    </p>
                  )}

                  <AnimatePresence>
                    {reinforcement && (
                      <motion.p
                        key="reinforcement"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-dark"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0" />
                        {reinforcement}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <ul className="mt-6 space-y-3">
                    {questions[current].options.map((opt, idx) => (
                      <li key={opt.label}>
                        <button
                          type="button"
                          onClick={() => handleAnswer(opt, idx)}
                          disabled={selectedIdx !== null}
                          className={cn(
                            "w-full rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition-all duration-200",
                            selectedIdx === idx
                              ? "border-primary-dark bg-primary-soft text-foreground"
                              : "border-border text-foreground hover:border-primary-dark hover:bg-primary-soft",
                            selectedIdx !== null && selectedIdx !== idx && "opacity-40"
                          )}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {phase === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-12 text-center sm:px-12"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-4xl">
                    {result.emoji}
                  </div>
                  <h3
                    className={cn(
                      "text-2xl font-semibold sm:text-3xl",
                      result.accent ? "text-primary-dark" : "text-foreground"
                    )}
                  >
                    {result.headline}
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-muted">
                    {result.body}
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-3">
                    {result.cta && (
                      <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="lg">
                          Book your session
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={reset}
                      className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Retake the quiz
                    </button>
                  </div>

                  <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted">
                    This quiz is for informational purposes only and is not a substitute for
                    professional dental consultation. Results may vary by individual.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
