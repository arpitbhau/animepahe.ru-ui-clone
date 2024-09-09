// JAI SHREE RAM

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })()
}

function searchBarAnimation() {
    document.addEventListener("click" , function (dets) {
        if (dets.target.className === "search") {
            let tl = gsap.timeline()

            tl.set(".search" , {border : "2px solid #BC0150"})
            tl.to(".search" , {
                width: "35%" , 
                ease: "ease" ,
                duration: .2
            })
        }
        else {
            let tl = gsap.timeline()
            tl.set(".search" , {border : "none"})
            tl.to(".search" , {
                width: "20%" , 
                ease: "ease" ,
                duration: .2
            })
        }
    })
}

function logoRedirect() {
    document.querySelector(".logo").addEventListener("click" , function () {
        location.href = "https://animepahe.ru/"
    })
}

function tabAniamtion() {

    document.querySelector(".c-r-b-top").addEventListener("click" , function (elem) {
        let id = elem.target.id

        elem.stopPropagation()

        if (elem.target.id === "tab1" ) {
            document.querySelector("#tab1").classList.add("tabBorder")
            document.querySelector("#tab2").classList.remove("tabBorder")


            document.querySelector(".summaryConatiner").style.display = `flex`
            document.querySelector(".recomendations").style.display = `none`
            
        }
        else if (elem.target.id === "tab2" ) {
            document.querySelector("#tab2").classList.add("tabBorder")
            document.querySelector("#tab1").classList.remove("tabBorder")
            
            
            document.querySelector(".recomendations").style.display = `flex`
            document.querySelector(".summaryConatiner").style.display = `none`
        }
    })





}

function coverAnimation() {

    let tl = gsap.timeline()

    window.addEventListener("load" , function () {
        tl.to(".animeCover" , {
            delay: .8 ,
            opacity: 1 ,
            ease: Expo.easeOut , 
            duration: 3
        })
    })

}

function posterAnimation() {

    let tlOver = gsap.timeline()
    let tlLeave = gsap.timeline()
    let overAnimating = false
    let leaveAnimating = false


    document.querySelector(".poster").addEventListener("mouseleave", function () {
        tlLeave.to(".posterVignette img", {
            opacity: 0,
            ease: Power2,
            duration: .4
        })
        tlLeave.to(".posterVignette", {
            opacity: 0,
            ease: Power2,
            duration: .6 ,
            onComplete: function () {
                gsap.set(".posterVignette", { opacity: 0 })
            }
        })
    })  


    document.querySelector(".poster").addEventListener("mouseover" , function () {
        if (!overAnimating) {
            overAnimating = true
            tlOver.to(".posterVignette" , {
                opacity: 1 , 
                ease: Power4 , 
                duration: .4
            })
            tlOver.to(".posterVignette img" , {
                opacity: 1 ,
                ease: Power4 , 
                duration: .4 ,
                onComplete: function () {
                    gsap.set(".posterVignette" , {opacity: 1})
                    overAnimating = false
                }
            })
        }
    })    






}

loco()
searchBarAnimation()
logoRedirect()
tabAniamtion()
coverAnimation()
posterAnimation()