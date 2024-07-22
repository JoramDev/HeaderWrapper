const d = document;

const $contenedor = document.querySelector('.container__encabezadoAnimado');

$contenedor.classList.add('is-loading');

window.addEventListener('load', function(){
    window.setTimeout(function(){
        $contenedor.classList.remove('is-loading');
    }, 100)
})



    var settings = {
        images: {
            'assets/img/bg01.jpg' : 'center',
            'assets/img/bg02.jpg' : 'center',
            'assets/img/bg03.jpg' : 'center',
            'assets/img/bg04.jpg' : 'center',
            'assets/img/bg05.jpg' : 'center',
            'assets/img/bg06.jpg' : 'center'
        },
        delay: 6000
    }


    var	pos = 0, lastPos = 0,
        $wrapper, $bgs = [], $bg,
        k, v;


    $wrapper = d.createElement('div')
    $wrapper.id = 'bg'
    $contenedor.appendChild($wrapper)

    for(k in settings.images){
        $bg = d.createElement('div')
            $bg.style.backgroundImage = 'url("' + k + '")'
            $bg.style.backgroundPosition = settings.images[k]

            $wrapper.appendChild($bg)

        $bgs.push($bg)
    }

    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

        // if ($bgs.length == 1 ||	!canUse('transition')){
        //     return
        // }

        window.setInterval(function() {

            lastPos = pos;
            pos++;

                if (pos >= $bgs.length)
                    pos = 0;

                $bgs[lastPos].classList.remove('top');
                $bgs[pos].classList.add('visible');
                $bgs[pos].classList.add('top');

                window.setTimeout(function() {
                    $bgs[lastPos].classList.remove('visible');
                }, settings.delay / 2);

        }, settings.delay);






        window.addEventListener("scroll", function(){
            const header = document.querySelector('.header');
            
            header.classList.toggle("active", window.scrollY > 150);
        })
        




