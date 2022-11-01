const merah = "Berhenti"
const kuning = "Hati-hati"
const hijau = "Jalan"

const Merah = () => {
    setTimeout(() => {
        console.log(merah)
    }, 1000)
}

const Kuning = (callback) => {
    setTimeout( () => {
        console.log(kuning)
        callback()
    }, 2000)

}

const Hijau = () => {
    setTimeout(()=> {
        console.log(hijau)
    }, 1000)

}

Merah()
Kuning(Hijau)
