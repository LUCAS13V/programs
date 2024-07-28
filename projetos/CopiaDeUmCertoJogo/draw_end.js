
function loop(){
    tela.position(0,0)
    tela.size("58%", "90vh")
    player.move()
    requestAnimationFrame(loop)
}loop()
