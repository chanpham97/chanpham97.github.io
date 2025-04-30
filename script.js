const text = "welcome! i'm chan pham, a computer science educator with a software engineering background. i believe in designing experiences that are not only accessible but also empowering and critically conscious.";
const secondLineText = "explore my page to learn more about what i do!";
const typedText = document.getElementById('typed-text');
const iconLinks = document.getElementById('icon-links');

let index = 0;

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 30);
    } else {
        const spacer = document.createElement('div');
        spacer.classList.add('spacer');
        typedText.appendChild(spacer); 

        let secondIndex = 0;
        function typeSecondLine() {
            if (secondIndex < secondLineText.length) {
                typedText.innerHTML += secondLineText.charAt(secondIndex);
                secondIndex++;
                setTimeout(typeSecondLine, 30);
            } else {
                setTimeout(() => {
                    iconLinks.classList.add('show');
                    const links = iconLinks.querySelectorAll('a');
                    links.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('show');
                        }, index * 300);
                    });
                }, 500);
            }
        }
        setTimeout(typeSecondLine, 500);
    }
}

window.onload = type;
