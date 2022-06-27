bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    } else if (input.buttonIsPressed(Button.B)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
