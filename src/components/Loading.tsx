import { useEffect, useState, useRef } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const didStartTransition = useRef(false);

  // When percent hits 100, auto-advance once (useEffect to avoid multiple timeouts)
  useEffect(() => {
    if (percent < 100 || didStartTransition.current) return;
    didStartTransition.current = true;

    const t1 = setTimeout(() => setLoaded(true), 300);
    const t2 = setTimeout(() => setIsLoaded(true), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    setClicked(true);
    let cancelled = false;
    import("./utils/initialFX").then((module) => {
      if (cancelled) return;
      const t = setTimeout(() => {
        if (module.initialFX) module.initialFX();
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(t);
    });
    return () => {
      cancelled = true;
    };
  }, [isLoaded, setIsLoading]);

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          satyaraj<span className="loader-title-dot">.</span>dev
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Software Engineer</span> <span>Builder</span>
            <span> Software Engineer</span> <span>Builder</span>
          </Marquee>
        </div>
        <div className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}>
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Loading…</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
