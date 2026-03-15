"use client";

import React, { Suspense } from "react";
import CharacterModel from "@/components/Character";
import MainContainer from "@/components/MainContainer";
import { LoadingProvider } from "@/context/LoadingProvider";

export default function Home() {
  return (
    <LoadingProvider>
      <MainContainer>
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </LoadingProvider>
  );
}
