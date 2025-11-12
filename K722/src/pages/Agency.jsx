import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import image01 from "../assets/images/agency/image01.jpg"
import image02 from "../assets/images/agency/image02.jpg"
import image03 from "../assets/images/agency/image03.jpg"
import image04 from "../assets/images/agency/image04.jpg"
import image05 from "../assets/images/agency/image05.jpg"
import image06 from "../assets/images/agency/image06.jpg"
import image07 from "../assets/images/agency/image07.jpg"
import image08 from "../assets/images/agency/image08.jpg"
import image09 from "../assets/images/agency/image09.jpg"
import image10 from "../assets/images/agency/image10.jpg"
import image11 from "../assets/images/agency/image11.jpg"
import image12 from "../assets/images/agency/image12.jpg"
import image13 from "../assets/images/agency/image13.jpg"
import image14 from "../assets/images/agency/image14.jpg"

export default function Agency() {

  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12, image13, image14];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 10%",
        end: "top -150%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
          // console.log(imageRef.current.src)
        }
      }
    })
  });

  return (
    <>
      <div className='section1 py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-40 left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src={image01} alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-4xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      {/* <div className='section2 h-screen'>
        <div className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-96 left-[30vw] bg-red-500'>
          <img className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
