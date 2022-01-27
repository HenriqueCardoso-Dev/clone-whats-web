function changeTheme(){
    console.log('teste')
    let topCard = document.querySelector('.topCard')
    let headerChat = document.querySelector('.header-chat')
    let searchBarBox = document.querySelector('.search-bar-container')
    let searchBar = document.querySelector('.search-bar')
    let chats = document.querySelectorAll('.message')
    let tools = document.querySelector('.tools')
    let svgColor = document.querySelectorAll('svg')
    let contactBox= document.querySelector('.contactBox')
    let messageWriter = document.querySelector('#message-writer')
    // let fontColor = document.
    
    topCard.style.backgroundColor="#202C33"
    contactBox.style.borderColor="#2A3C46"
    headerChat.style.backgroundColor="#202c33"
    searchBar.style.backgroundColor="#202c33"
    tools.style.backgroundColor="#202c33"
    
    searchBarBox.style.backgroundColor="#111B21"
    
    chats.forEach(element=>{
        element.style.backgroundColor="#111B21"
        element.style.color="#fff"
        element.style.borderColor="#2A3C46"
    })
    
    
    svgColor.forEach(element=>{
        element.style.color="#AEBAC1"
    })

    messageWriter.style.backgroundColor="#2a3942"
};