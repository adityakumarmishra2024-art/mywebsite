function showLove() {

    const message =
        document.getElementById("loveMessage");

    message.innerHTML =
        "Gulu ❤️ You are very special to me! 💕";

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["❤️", "💖", "💕", "💗", "💓", "💞"][
                Math.floor(Math.random() * 6)
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            (20 + Math.random() * 35) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const duration =
            2000 + Math.random() * 3000;


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 200}px)
                         rotate(${Math.random() * 720}deg)
                         scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            heart.remove();

        }, duration);
    }
}


/* Automatic little heart effect */

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.opacity = "0.7";

    heart.style.zIndex = "-1";

    document.body.appendChild(heart);


    const animation =
        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 0
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)`,
                    opacity: 0.8
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 200}px)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    5000 + Math.random() * 4000,
                easing: "linear"
            }
        );


    animation.onfinish = () => {

        heart.remove();

    };

}, 1000);
