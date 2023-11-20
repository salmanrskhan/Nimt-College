
$(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
        $('.nav-div').css('background', '#fde6b4');
    } else {
        $('.nav-div').css('background', 'transparent');
    }
});



let scrlBtn = document.getElementById("scrlTpBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrlTpBtn.style.display = "block";
    }
    else {
        scrlTpBtn.style.display = "none";
    }
}




function topFun() {
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}




$(window).scroll(function () {
    if ($(window).width() >= 991) { 
        if ($(window).scrollTop() >= 150) {
            $('#top-reg-from').css('display', 'none');
        } else {
            $('#top-reg-from').css('display', 'block');
        }
    } else {
        $('#top-reg-from').css('display', 'block'); 
    }
});





var acc = document.getElementsByClassName("according");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var pannel = this.nextElementSibling;

        if (pannel.style.display == "flex") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "flex";
        }
    });
}


// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         // Close all open panels
//         var allPanels = document.getElementsByClassName("panel");
//         for (var j = 0; j < allPanels.length; j++) {
//             allPanels[j].style.display = "none";
//         }

//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;

//         if (panel.style.display === "flex") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "flex";
//         }
//     });
// }


// // Get all elements with the class "according"
// var acc = document.querySelectorAll(".according");

// // Add a click event listener to each "according" button
// acc.forEach(function (button) {
//     button.addEventListener("click", function () {
//         // Toggle the "active" class for the clicked button
//         this.classList.toggle("active");

//         // Get the corresponding panel element
//         var panel = this.nextElementSibling;

//         // Check if the panel is currently displayed
//         if (panel.style.display === "flex") {
//             // If it's displayed, hide it
//             panel.style.display = "none";
//         } else {
//             // If it's hidden, show it
//             panel.style.display = "flex";

//             // Close all other open panels
//             var allPanels = document.querySelectorAll(".pannel");
//             allPanels.forEach(function (otherPanel) {
//                 if (otherPanel !== panel) {
//                     otherPanel.style.display = "none";
//                 }
//             });
//         }
//     });
// });




// Client Slider
$(".logo_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        575: {
            items: 3
        },
        767: {
            items: 4
        },
        991: {
            items: 6
        }
    }

});



// Review Section
$(".testmonial_slider_area").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        600: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        }
    }

});
// Review section end





// const courseArea = document.getElementById('faq');

// let isColorChanged = false;

// courseArea.addEventListener('click', () => {
//     if (isColorChanged) {
//         // Change back to the previous color
//         courseArea.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea.style.backgroundColor = 'red';
//         courseArea.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged = !isColorChanged;
// });



// const courseArea1 = document.getElementById('faq-1');

// let isColorChanged1 = false;

// courseArea1.addEventListener('click', () => {
//     if (isColorChanged1) {
//         // Change back to the previous color
//         courseArea1.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea1.style.backgroundColor = 'red';
//         courseArea1.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged1 = !isColorChanged;
// });



// const courseArea2 = document.getElementById('faq-2');

// let isColorChanged2 = false;

// courseArea2.addEventListener('click', () => {
//     if (isColorChanged2) {
//         // Change back to the previous color
//         courseArea2.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea2.style.backgroundColor = 'red';
//         courseArea2.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged = !isColorChanged;
// });



// const courseArea3 = document.getElementById('faq-3');

// let isColorChanged3 = false;

// courseArea3.addEventListener('click', () => {
//     if (isColorChanged3) {
//         // Change back to the previous color
//         courseArea3.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea3.style.backgroundColor = 'red';
//         courseArea3.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged = !isColorChanged;
// });


// const courseArea4 = document.getElementById('faq-4');

// let isColorChanged4 = false;

// courseArea4.addEventListener('click', () => {
//     if (isColorChanged4) {
//         // Change back to the previous color
//         courseArea4.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea4.style.backgroundColor = 'red';
//         courseArea4.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged = !isColorChanged;
// });


// const courseArea5 = document.getElementById('faq-5');

// let isColorChanged5 = false;

// courseArea5.addEventListener('click', () => {
//     if (isColorChanged5) {
//         // Change back to the previous color
//         courseArea5.style.backgroundColor = '#d8b18f';
   
//     } else {
//         // Change to a new color
//         courseArea5.style.backgroundColor = 'red';
//         courseArea5.style.color = 'black';
//     }
    
//     // Toggle the color change state
//     isColorChanged5 = !isColorChanged;
// });
