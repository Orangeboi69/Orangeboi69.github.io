var g1 = 0;
var g2 = 0;
randomName = [
    "Orange",
    "Apple",
    "Banana",
    "Pineapple",
    "Watermelon",
    "Grape",
    "Strawberry",
    "Cherry",
    "Mango",
    "Pear",
    "Lemon",
    "Kiwi",
    "Blueberry",
    "Peach",
    "Raspberry",
    "Coconut",
    "Lime",
    "Grapefruit",
    "Dragonfruit",
    "Avocado",
    "Blackberry",
    "Pomegranate",
    "Cantaloupe",
    "Honeydew"
]
        function toggleMenu() {
            const menuLinks = document.querySelector('.menu-links');
            const bars = document.querySelectorAll('.bar');
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            hamburgerMenu.classList.add('open');
            menuLinks.classList.toggle('menu-open');
            bars.forEach(bar => bar.classList.toggle('change'));
            if (!menuLinks.classList.contains('menu-open')) {
                hamburgerMenu.classList.remove('open');
            }
        } //Maybe use an evenlistener? and use variables?
        function WebTitle() {
            let now = new Date();
            let month = now.getMonth();
            let day = now.getDay();
            var date = now.getDate();
            const daterepresnts = {
                0: "Sun",
                1: "Mon",
                2: "Tue",
                3: "Wed",
                4: "Thr",
                5: "Fri",
                6: "Sat"
            };
            const monthrepresents = {
                0: "Jan",
                1: "Feb",
                2: "Mar",
                3: "Apr",
                4: "May",
                5: "Jun",
                6: "Jul",
                7: "Aug",
                8: "Sep",
                9: "Oct",
                10: "Nov",
                11: "Dec"
            };
            if (date == 1) {
                date = date + "st";
            } else if (date == 2) {
                date = date + "nd";
            } else if (date == 3) {
                date = date + "rd";
            } else {
                date = date + "th";
            }
            document.title = "Orange's Shop - " + daterepresnts[day] + "," + date;
        }

        function de(e) {
            const i = e.substring(0, e.length - 4).substring(0, i.length - 4);
            return atob(i).substring(4);
        }
        window.addEventListener('scroll', function() {
            var hamburgerMenu = document.querySelector('.hamburger-menu');
            var scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
            // Add the 'scrolled' class to the hamburger menu when the user scrolls down
            hamburgerMenu.classList.add('scrolled');
            } else {
            // Remove the 'scrolled' class from the hamburger menu when the user scrolls back to the top
            hamburgerMenu.classList.remove('scrolled');
            }
        });
        function TH() {
            const element= document.querySelector('.trapezoid');
            const B = document.querySelector('.trapezoid');
            const BH = B.offsetHeight;  //BH - Border-Height(trapezoid)
            const BW = B.offsetWidth/4; //BW - Border-Width(trapezoid)
            const MBW = -BW;            //MBW - Minus Border-Width(trapezoid)
            element.style.setProperty("--trapeH", BH + "px")
            element.style.setProperty("--trapeW", BW + "px")
            element.style.setProperty("--MtrapeW", MBW+0.25 + "px")
            return BH, BW;
        }
        function game1(){
            g1 += 1;
            if (g1 == 5){
                alert("You found a easter egg! (game1 on work)");
                g1 = 0;
                g2++;
            } else if (g2 == 5){
                alert("Stop it!")
            }
        }
        function fetchItems(amount) {
            console.log("fetching target: http://orangeboi69.github.io/shop/src/data/data/${index}/item.json")
            console.log("start fetching items...");
            //Default Variables
            var defaultImg = "/shop/src/img/default.avif";
            function fetchItemSequentially(index) {
                console.log("fetching item: " + index);
                fetch(`/shop/src/data/${index}/item.json`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(my_JSON_object => {
                        var sObjImg = document.querySelector(`.item-${index} .s-image`);
                        var sObjN = document.querySelector(`.item-${index} .name`);
                        var sObjP = document.querySelector(`.item-${index} .price`);
                        var sObjBuy = document.querySelector(`.item-${index} .buy`);
                        var img = new Image();

                        // Set the src attribute to the image path
                        img.src = my_JSON_object.image;
                    
                        // Listen for the load event
                        img.onload = function() {
                            // The image path is valid
                            sObjImg.src = my_JSON_object.image;
                        };
                    
                        // Listen for the error event
                        img.onerror = function() {
                            // The image path is not valid
                            sObjImg.src = defaultImg; // Set to default image
                        };
                        sObjN.textContent = my_JSON_object.name;
                        if (my_JSON_object.name == "$random") {
                            sObjN.textContent = randomName[Math.floor(Math.random() * randomName.length)];
                        }
                        sObjP.textContent = my_JSON_object.price + "$";
                        sObjBuy.setAttribute("onclick", `window.location.href='${my_JSON_object.url}'`);
                    })
                    .catch(error => {
                        console.log('Fetch error: ', error);
                    });
            }
            for (let x = 0; x < amount; x++) {
              fetchItemSequentially(x+1);
            }
          }
        //TODO: make a function that changes item.json s data, so it's easiert to edit in server side.
        function sleep(ms) {

            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function main(){
                while (true){
                    TH();
                    await sleep(100);
                }
            }

        //Should work on a easter egg game

        console.log("Website by Orange :)");
        console.log("followings are the debug menus.");
        fetchItems(5);
        WebTitle();
        main()
