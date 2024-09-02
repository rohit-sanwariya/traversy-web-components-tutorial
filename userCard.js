const template = document.createElement('template');
template.innerHTML = `
<style>
    h3{
    color:green;
    }
</style>
<div>
    <h3><h3>
    <slot name="name"></slot>
    <button>click me</button>
</div>
`;
class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        
    }
    toggleInfo(e){
    
            console.log("hello world",e)
      
    }
    connectedCallback(){
        this.shadowRoot.querySelector('button').addEventListener('click',(e)=>this.toggleInfo(e));
    }


    disconnectedCallback(){
        this.shadowRoot.querySelector('button').removeEventListener('click',()=>this.toggleInfo())
    }

}

window.customElements.define('user-card',UserCard);