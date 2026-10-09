import { LazyMotion, domAnimation, m, MotionConfig, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
export function MotionProvider({children}: {children: ReactNode}) { return <LazyMotion features={domAnimation}><MotionConfig reducedMotion="user">{children}</MotionConfig></LazyMotion>; }
export function Reveal({children, delay = 0, className = ""}: {children: ReactNode; delay?:number; className?:string}) {
  const reduced = useReducedMotion(); const [ready,setReady]=useState(false);
  useEffect(()=>setReady(true),[]);
  return <m.div className={className} initial={false} animate={ready && !reduced ? {opacity:0,y:20} : {opacity:1,y:0}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:reduced?0:.7,delay,ease:[.22,1,.36,1]}}>{children}</m.div>;
}
export function ScrollProgress() { const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:25}); return <m.div className="ax-progress" style={{scaleX}} aria-hidden="true"/>; }
export function DrawRail() { const reduced=useReducedMotion(); return <m.div className="ax-rail" initial={false} whileInView={{scaleX:1}} animate={{scaleX:reduced?1:0}} viewport={{once:true}} transition={{duration:reduced?0:1.5,ease:[.22,1,.36,1]}} aria-hidden="true"/>; }
