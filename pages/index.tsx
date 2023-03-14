import useLocoScroll from "@/utils/useLocoScroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLocoScroll();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.my-element h1', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.my-element',
          start: '10% 10%',
          scroller: '#main-container',
          markers: true,
        }
      })
      gsap.fromTo('.my-element2 h1', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.my-element2',
          start: '10% 10%',
          scroller: '#main-container',
          markers: true,
        }
      })
      gsap.fromTo('.my-element3 h1', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.my-element3',
          start: '10% 15%',
          scroller: '#main-container',
          markers: true,
        }
      })
    })
    return () => ctx.revert()
  }, []);

  return (
    <>
    <div className="my-element"><h1>Hello, world!</h1></div>
    <div className="my-element2"><h1>Hello, world!</h1></div>
    <div className="my-element3"><h1>Hello, world!</h1></div>
    </>
  )
}
