// Код для кнопки очистки текстаZ
clear.onclick = () => {document.querySelector('#text').innerHTML = ' '}

// Код для кнопки исчезания кнопки представлен в HTML

// Код для кнопки открытия меню
openMenu.onclick = menu;
var isOpen = false

function menu(){

    let openEvent = document.querySelector(".openEvent") // Контейнер
    let openMenu = document.querySelector("#openMenu")   // Кнопка

    if (isOpen === false) {                              // Если закрыто
      openMenu.innerHTML = "▼ Открыть меню"

      for (let i = 1; i < 4; i++) {
        let el = document.createElement("div")
        el.textContent = `◼️ Элемент меню ${i}`
        el.className = "elementMenu"
        openEvent.appendChild(el)
      }

      isOpen = true
    } 
    else {                                               // Если открыто

        openMenu.innerHTML = "▶ Открыть меню"
        var elements = document.querySelectorAll('.elementMenu')

        elements.forEach(element => {
            openEvent.removeChild(element);
        });

        isOpen = false;
    }
}


// Задача с мячем
field.onclick = function (event){

    // координаты поля #field относительно окна браузера
    let fieldCoords = this.getBoundingClientRect()

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2, 
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    }

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0

    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) 
      ballCoords.left = field.clientWidth - ball.clientWidth
    
    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) 
      ballCoords.top = field.clientHeight - ball.clientHeight

    // Установка новых координат мяча
    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'
}









