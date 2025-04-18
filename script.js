gsap.from("#box1", {
  x: 1000,
  delay: 2,
  duration: 4,
  rotate: 360,
  backgroundColor: "yellow",
  borderRadius: "50%",
  scale: 2,
});
gsap.from("#box2", {
  x: 500,
  y: 500,
  delay: 2,
  duration: 4,
});

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: -1,
});



gsap.from('#box',{
    // borderRadius:'50%',
    x:1200,
    rotate:360,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})