    var clicked = 0;
    window.onmousemove = function (e) {
        var x = e.clientX;
        var midpoint = (window.screen.width/2);

        if (x > (midpoint+250)) {
            document.getElementById('capybara').style.transform = 'rotateZ(4deg)';
        }
        else if (x < (midpoint-250)) {
            document.getElementById('capybara').style.transform = 'rotateZ(-4deg)';
        }
        else {
            document.getElementById('capybara').style.transform = 'rotateZ(0deg)';
        }
    }

    function poop() {
        var links = ['https://www.youtube.com/watch?v=couz1CrlTdQ','https://www.youtube.com/watch?v=lP0GNfWSW30','https://www.youtube.com/watch?v=2VjpwYM05eo','https://www.youtube.com/watch?v=zfueGqaXp1g', 'https://www.youtube.com/watch?v=SCwcJsBYL3o', 'https://www.youtube.com/watch?v=APJZeNY6dKo', 'https://www.youtube.com/watch?v=IaLGdRx7prA', 'https://www.youtube.com/watch?v=QUqCWkPlLLc'];
        var capybara = links[Math.floor(Math.random()*links.length)];
        window.open(capybara);
    }

    var title = document.getElementById('secret');
    function secret() {
        if (clicked==0) {
            title.style.letterSpacing = '32px';
            var clicked = 1;
        }
        else if (clicked==1) {
            title.style.letterSpacing = 'auto';
            var clicked = 0;
        }
        else { console.log('error') }
    }
    title.onclick = secret();
