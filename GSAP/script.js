// gsap.to("#box", {
//     x: 1300,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "aqua",
//     rotate: 360,
//     borderRadius: "50%",
//     scale: 0.5, 
// })

// gsap.from("h1",{
//     y: 50,
//     duration: 0.5,
//     opacity: 0,
//     delay: 0.5,
//     stagger: 0.2,
//     scale: 0.5,
//     color: "red",
// })

// var tl = gsap.timeline()

// tl.to('#box1', {
//     x: 1300,
//     duration: 2,
//     delay: 1,
// })
// tl.to('#box2', {
//     x: 1300,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
// })
// tl.to('#box3', {
//     x: 1300,
//     duration: 2,
//     delay: 1,
//     rotate: -360,
// })

gsap.from("#page1 #box", {
    scale: 0,
    rotate: 360,
    delay: 1,
})
gsap.from("#page2 #box", {
    scale: 0,
    rotate: 360,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: 'body',
        markers: true,
        start: "top 60%",
        end: "top 30%",
        // scrub: true,
    },
})
gsap.from("#page3 #box", {
    scale: 0,
    rotate: 360,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        // scrub: true,
    }
})