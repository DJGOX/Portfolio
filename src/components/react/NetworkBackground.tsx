import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

type Props = {
  className?: string;
};

export default function NetworkBackground({ className }: Props) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // IMPORTANTE: tipado correcto para que outModes.default no marque error
  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    pauseOnBlur: false,
    pauseOnOutsideViewport: false,

    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 220, links: { opacity: 0.45 } },
      },
    },

    particles: {
      number: {
        value: 420,
        density: { enable: true, area: 900 },
      },

      color: { value: "#60a5fa" },

      links: {
        enable: true,
        color: "#60a5fa",
        distance: 140,
        opacity: 0.28,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1.35,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },

      opacity: { value: { min: 0.18, max: 0.55 } },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <div className={className} aria-hidden="true">
      <Particles
        init={particlesInit}
        style={{ width: "100%", height: "100%" }}
        options={options}
      />
    </div>
  );
}
