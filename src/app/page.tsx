"use client";

import Animation from "@/components/Animation";
import animations from "./animations";

export default function App() {
  return (
    <>
      <div className="">
        {animations.map((item: any, index: number) => (
          <Animation key={index} animationData={item} />
        ))}
      </div>
    </>
  );
}
