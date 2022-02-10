document.addEventListener('DOMContentLoaded', function () {


    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.className = 'h1';
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    div.appendChild(h1)


    let h2 = document.createElement('h2');
    h2.className = 'h2';
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    div.appendChild(h2);


    let h3 = document.createElement('h3');
    h3.className = 'h3';
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    div.appendChild(h3);


    let h4 = document.createElement('h4');
    h4.className = 'h4';
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    div.appendChild(h4);


    let h5 = document.createElement('h5');
    h5.className = 'h5';
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    div.appendChild(h5);


    let h6 = document.createElement('h6');
    h6.className = 'h6';
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    div.appendChild(h6);


    //colors array for headers eventListener
    let colorArr =
        ['purple',
            'green',
            'black',
            'red',
            'blue',
            'yellow',
            'light-grey',
            'aqua']

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * colorArr.length)];
        //const randomNum = Math.floor(Math.random)
        return randomColor;
        //event.target.style.color = colorArr[randomNum....]
    }

    h1.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add a new list item');
    button.appendChild(btnText);
    div.appendChild(button);
    button.className = 'listButton';
    button.addEventListener("click", addToList ,getRandomColor);
    
    let ul = document.createElement('ul');
    div.appendChild(ul);

    let liCount = 0;

    function addToList() {
        liCount++;
        let li = document.createElement('li');
        let liText = document.createTextNode("This is the list items " + liCount);
        li.appendChild(liText);
        ul.appendChild(li);
        

        li.addEventListener("click", function () {
            let randomColor = getRandomColor();
            li.style.color = randomColor;
        });

        
    };
});