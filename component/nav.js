function navbar() {
    return `<div id="nav-con">
    <div id="logo">
        <p onclick="document.location='index.html'">Food Adda</p>
    </div>
    <div id="right">
        <div onclick="document.location='menu.html'" id="menu">
            <p class="nav-font">Menu</p>
        </div>
        <div>
            <p onclick="document.location='login.html'" class="nav-font">Login</p>
        </div>
        <div>
            <p onclick="document.location='signup.html'" class="nav-font">Signup</p>
        </div>
    </div>
</div>`
}

export default navbar;