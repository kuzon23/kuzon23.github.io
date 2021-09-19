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
        document.getElementById('projects').style.backgroundPosition = x.toString() + 'px';
    }
    function poop() {
        var links = ['https://www.youtube.com/watch?v=couz1CrlTdQ','https://www.youtube.com/watch?v=lP0GNfWSW30','https://www.youtube.com/watch?v=2VjpwYM05eo','https://www.youtube.com/watch?v=zfueGqaXp1g', 'https://www.youtube.com/watch?v=SCwcJsBYL3o', 'https://www.youtube.com/watch?v=APJZeNY6dKo', 'https://www.youtube.com/watch?v=IaLGdRx7prA', 'https://www.youtube.com/watch?v=QUqCWkPlLLc'];
        var capybara = links[Math.floor(Math.random()*links.length)];
        window.open(capybara);
    }
