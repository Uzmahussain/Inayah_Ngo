// 1. to execute javascript firstly we have to link js file in html file
// HOW - 2. to link javascript file we use the tag name script tag <script>
// WHERE - Always use script tag in footer after body tag

// var glonal scope
// const constant value
// let block level scope

function openkro() {
    // declearing container
    let sidebar = document.getElementById('openid');
    //manipulating css or dom manupulate

    sidebar.style.width = '20%';
    sidebar.style.transition = '1s all';
}

function closebar() {

    let sidebar = document.getElementById('openid');

    sidebar.style.width = '0%';
    sidebar.style.transition = '1s all';
}