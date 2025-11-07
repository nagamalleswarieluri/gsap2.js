gsap.from(".parent *",{

x:30,
y:40,
opacity:0,
duration:2,
delay:2,
stagger:0.5
})

gsap.from(".child2>h1",{
opacity:0,
duration:2,
delay:2,
stagger:0.5,
scale:0.5
})

gsap.from(".main>h1",{
rotate:360,
color:"yellow",
duration:2,
delay:1,
repeat:-1

})

gsap.from(".child3>img",{
opacity:0,
x:-400,
duration:2,
delay:2,
scrollTrigger:"child3>img"

})

gsap.from(".child3>p",{
opacity:0,
x:400,
duration:2,
delay:2,
scrollTrigger:".child3>p"


})




