let x = 1;
document.querySelector('#bouton1').addEventListener("click", function (event) {
    if (x === 1) {
        x = 0;
        document.querySelector('.container').classList.add('overflo');
    } else {
        x = 1;
        document.querySelector('.container').classList.remove('overflo');
    }
    document.querySelector('#bouton2').addEventListener('click', function(event){
        console.log('test');
    })
})

/*
let x = 1;
document.querySelector('#b1').addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation(); 
    if (x === 1) {
        x = 0;
        document.querySelector('.cont').classList.add('overflo');
    } else {
        x = 1;
        document.querySelector('.cont').classList.remove('overflo');
    }
    document.querySelector('#b2').addEventListener('click', function(event){
        event.stopPropagation(); 
        event.preventDefault();
       const node1 = document.querySelector('#b1');
       const node2 = document.querySelector('#b2');
       const b1Value = node1.value;
       const b2Value = node2.value;
       node1.innerText = b2Value;
       node1.setAttribute('value', b2Value );
       node2.innerText = b1Value;
       node2.setAttribute('value', b1Value);
       console.log('1');
    })
})

*/