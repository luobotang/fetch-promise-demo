import 'whatwg-fetch'
import 'es6-promise/auto'

document.getElementById('btn-fetch').addEventListener('click', function () {
    fetch('/data.json').then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data)
    })
})