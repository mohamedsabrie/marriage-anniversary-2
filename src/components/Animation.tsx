import React from "react";
import Lottie from "react-lottie";

export default function Animation({ animationData }: any) {
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        //   isStopped={this.state.isStopped}
        //   isPaused={this.state.isPaused}
      />
    </div>
  );
}
