console.log('=== Script loaded ===');

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

console.log('envelope element:', envelope);
console.log('letter element:', letter);

if (!envelope) {
    console.error('ОШИБКА: конверт не найден!');
}
if (!letter) {
    console.error('ОШИБКА: письмо не найдено!');
}

envelope.addEventListener('click', function() {
    console.log('>>> КЛИК по конверту!');
    if (!envelope.classList.contains('opened')) {
        envelope.classList.add('opened');
        console.log('Класс "opened" добавлен к конверту');
        console.log('Конверт классы:', envelope.classList);

        setTimeout(() => {
            letter.classList.add('show');
            console.log('Класс "show" добавлен к письму');
            console.log('Письмо классы:', letter.classList);
            console.log('Письмо стили:', window.getComputedStyle(letter).opacity);
        }, 400);
    } else {
        console.log('Конверт уже открыт');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sakuraContainer = document.querySelector('.sakura-container');

    setInterval(() => {
        if (document.querySelectorAll('.sakura').length < 15) {
            const sakura = document.createElement('div');
            sakura.className = 'sakura';
            sakura.style.left = Math.random() * 100 + '%';
            sakura.style.animationDuration = (Math.random() * 5 + 8) + 's';
            sakura.style.animationDelay = '0s';
            sakuraContainer.appendChild(sakura);

            setTimeout(() => {
                sakura.remove();
            }, 15000);
        }
    }, 2000);
});