getCSS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/1.css');
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let $style = $(`<style>${req.response}</style>`);
                $('head').append($style);
            } else {
                alert('加载CSS失败');
            }
        }
    }
    req.send();
}
getJS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/2.js');
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let $script = $(`<script>${req.response}</script>`);
                $('body').append($script);
            } else {
                alert('加载JS失败');
            }
        }
    }
    req.send();
}
getHTML.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/3.html');
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let $html = $(`${req.response}`);
                $('body').append($html);
            } else {
                alert('加载HTML失败');
            }
        }
    }
    req.send();
}
getXML.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/4.xml');
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                xmlDom = req.responseXML;
                xmlAlert = xmlDom.getElementsByTagName("warning")[0].textContent.trim();
                alert(xmlAlert);
            } else {
                alert('加载XML失败');
            }
        }
    }
    req.send();
}
getJSON.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/5.json');
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                console.log(JSON.parse(req.response).name);
                $('h1 span').text(JSON.parse(req.response).name);
            } else {
                alert('加载XML失败');
            }
        }
    }
    req.send();
}
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    if (n >= 3) {
        alert('到最后一页了');
    } else {
        request.open("GET", `/page${n + 1}`);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const array = JSON.parse(request.response);
                $('#pageUl').empty();
                array.forEach(item => {
                    const li = $(`<li>${item.id}</li>`);
                    $('#pageUl').append(li);
                });
                n += 1
            }
        };
        request.send();
    }
};