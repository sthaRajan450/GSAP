// gsap.from("#box1", {
//   x: 1000,
//   delay: 2,
//   duration: 4,
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "50%",
//   scale: 2,
// });
// gsap.from("#box2", {
//   x: 500,
//   y: 500,
//   delay: 2,
//   duration: 4,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   y: 30,
//   stagger: -1,
// });

// gsap.from('#box',{
//     // borderRadius:'50%',
//     x:1200,
//     rotate:360,
//     duration:2,
//     delay:1,
//     repeat:-1,
//     yoyo:true
// })

// timeline
// let tl = gsap.timeline();
// tl.from("#nav h1", {
//   opacity: 0,
//   y: -30,
//   duration: 1,

// });
// tl.from(".part2 h2", {
//   opacity: 0,
//   duration: 0.5,
//   y:-20,
//   stagger: 0.3,
// });

// tl.from("#heading",{
//     opacity:0,
//     duration:1,
//     scale:0.5,

// })

//scrollTrigger
// gsap.from('#page2 #box',{
//     opacity:0,
//     scale:0,
//     rotate:360,
//     delay:1,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:'body',
//         markers:true,
//         start:'top 60%',
//         end:'top 30%',
//         scrub:2
//     }
// })

// gsap.from('#page1 h1',{
//     opacity:0,
//     x:500,
//     duration:2,
//     delay:1,
//     scrollTrigger:{
//         trigger:'#page1 h1',
//         duration:2,
//         markers:true,
//         start:'top 30%'
//     }
// })
// gsap.from('#page1 h2',{
//     opacity:0,
//     x:-500,
//     duration:2,
//     delay:1,
//     scrollTrigger:{
//         trigger:'#page1 h2',
//         duration:2,
//         markers:true,
//         start:'top 30%'
//     }

// })

// //pin
// gsap.to("#page2 h1", {
//   transform: "translateX(-50%)",
//   scrollTrigger: {
//     trigger: "#page2",
//     start: "top 0%",
//     end: "top -150%",
//     markers: true,
//     scrub: 2,
// pin: true,
//   },
// });

// svg animation
// let initialPath = `M 10 200 Q 500 200 990 200`;
// let finalPath = `M 10 200 Q 500 200 990 200`;

// let curve = document.querySelector("#curve");
// curve.addEventListener("mousemove", (e) => {
//   initialPath = `M 10 200 Q ${e.x} ${e.y} 990 200`;
//   gsap.to("svg path", {
//     attr: { d: initialPath },
//     ease:"power3.out"
//   });
// });
// curve.addEventListener("mouseleave", (e) => {
//   gsap.to('svg path',{
//     attr:{d:finalPath},
//     duration:2,
//     ease:"elastic.out(1.2,0.1)"
//   })
// });

//custom cursor

// const cursor = document.querySelector("#cursor");
// const imageDiv = document.getElementById("image");
// window.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     // transform:`translate(${e.x}px,${e.y}px)`

//     //best practice
//     x: e.x,
//     y: e.y,
//     duration: 0.5,

//     // ease: "back.out",
//   });
// });

// imageDiv.addEventListener("mouseenter", (e) => {
//   cursor.innerHTML=`View More`
//   gsap.to(cursor,{
//     scale:2,
//     background: '#ffffff8a'
//   })
// });
// imageDiv.addEventListener("mouseleave", (e) => {
//   cursor.innerHTML=``
//   gsap.to(cursor,{
//     scale:1,
//     background: 'red'
   
//   })
// });



