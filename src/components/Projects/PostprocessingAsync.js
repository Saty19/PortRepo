import { lazy } from "react";

export const Bloom = lazy(async () => {
  const module = await import("@react-three/postprocessing");
  return { default: module.Bloom };
});

export const EffectComposer = lazy(async () => {
  const module = await import("@react-three/postprocessing");
  return { default: module.EffectComposer };
});

export const SMAA = lazy(async () => {
  const module = await import("@react-three/postprocessing");
  return { default: module.SMAA };
});
