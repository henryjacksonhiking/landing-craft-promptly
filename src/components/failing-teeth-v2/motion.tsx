import { useEffect, useRef, useState, type ReactNode } from 'react';
import { m, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Reveal({children,className='',delay=0}: {children:ReactNode;className?:string;delay?:number}) {
 const reduced=useReducedMotion();
 return <m.div className={`v2-reveal ${className}`} initial={false} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:reduced?0:.75,delay}}>{children}</m.div>;
}
export function MotionEffects() {
 const reduced=useReducedMotion(); const {scrollYProgress}=useScroll(); const progress=useSpring(scrollYProgress,{stiffness:100,damping:30}); const [show,setShow]=useState(false);
 useEffect(()=>{const update=()=>setShow(window.scrollY>700);window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{if(reduced)return;let disposed=false;let destroy:(()=>void)|undefined;import('lenis').then(({default:Lenis})=>{if(disposed)return;const lenis=new Lenis({autoRaf:true,anchors:true,duration:1.05});destroy=()=>lenis.destroy();});return()=>{disposed=true;destroy?.();};},[reduced]);
 useEffect(()=>{const nodes=document.querySelectorAll<HTMLElement>('.v2-reveal,.v2-marquee,.v2-hero,.v2-doctor,.v2-visit');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{entry.target.classList.toggle('v2-in-view',entry.isIntersecting);if(entry.isIntersecting)entry.target.classList.add('v2-seen');}),{threshold:.08});nodes.forEach(node=>observer.observe(node));return()=>observer.disconnect();},[]);
 return <><m.div className="v2-progress" style={{scaleX:progress}}/>{show&&<Button variant="outline" size="icon" className="v2-back-top" title="Back to top" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:reduced?'auto':'smooth'})}><svg viewBox="0 0 48 48" aria-hidden="true"><m.circle cx="24" cy="24" r="21" style={{pathLength:scrollYProgress}}/></svg><ArrowUp/></Button>}</>;
}
export function Counter({value,suffix=''}:{value:number;suffix?:string}) {
 const ref=useRef<HTMLSpanElement>(null);const active=useInView(ref,{once:true});const reduced=useReducedMotion();const [count,setCount]=useState(value);
 useEffect(()=>{if(!active||reduced)return;let frame=0;const start=performance.now();const tick=(now:number)=>{const p=Math.min((now-start)/1400,1);setCount(Math.round(value*(1-(1-p)**3)));if(p<1)frame=requestAnimationFrame(tick);};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);},[active,reduced,value]);
 return <span ref={ref} aria-label={`${value}${suffix}`}><span aria-hidden="true">{count}{suffix}</span></span>;
}
export function ScrollPhoto({src,alt,className=''}:{src:string;alt:string;className?:string}){
 const ref=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});const scale=useTransform(scrollYProgress,[0,.5,1],[1.12,1,1]);
 return <div ref={ref} className={`v2-photo ${className}`}><m.img src={src} alt={alt} loading="lazy" decoding="async" width="1000" height="750" style={{scale:reduced?1:scale}}/></div>;
}