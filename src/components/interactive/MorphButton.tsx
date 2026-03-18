"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type MorphState = "idle" | "loading" | "success";

export function MorphButton() {
  const [state, setState] = useState<MorphState>("idle");

  const onClick = () => {
    setState("loading");
    window.setTimeout(() => setState("success"), 800);
    window.setTimeout(() => setState("idle"), 1800);
  };

  return (
    <Button variant="secondary" onClick={onClick} loading={state === "loading"}>
      {state === "idle" ? "Start" : state === "loading" ? "Loading..." : "Done"}
    </Button>
  );
}
