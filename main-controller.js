export class MainController{
    constructor({

    })

    render(){
       const mainContainer = document.getElementById('main-container');
       
       const button1 = document.createElement('button');
       button1.appendChild(document.createTextNode('fire1'));
       mainContainer.appendChild(button1);

       const button2 = document.createElement('button');
       button2.appendChild(document.createTextNode('fire2'));
       mainContainer.appendChild(button2);

       const button3 = document.createElement('button');
       button1.appendChild(document.createTextNode('fire3'));
       mainContainer.appendChild(button3);

    }
}