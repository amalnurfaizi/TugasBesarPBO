class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const prompt = require("prompt-sync")();

console.log('============================================')
console.log('===============Cough Identifier=============')
console.log('============================================')
console.log()
console.log('Silahkan Masukkan data diri')

const pasien = new Person(
    prompt('Masukkan nama : '),
    prompt('Masukkan Umur : ')
)

let exit = false

do {
    console.log('============================================')
    console.log('1. Lihat data diri')
    console.log('2. Input Gejala')
    console.log('3. Lihat Diagnosa')
    console.log('4. Keluar Program')
    let menu = prompt('Masukkan input : ')

    switch (menu){
        case '1' :
            console.log(`Nama: ${pasien.name}`);
            console.log(`Umur: ${pasien.age}`);
            console.log()
            break
        case '2' :
            console.log('============================================')
            console.log('Silahkan pilih daftar gejala dibawah ini sesuai dengan gejala yang anda alami')
            console.log('1. Batuk dengan disertai lendir')
            console.log('2. Batuk dengan sensasi gatal di tenggorokan')
            console.log('3. Batuk dengan disertai suara melengking')
            console.log('4. Batuk dengan disertai darah')
            var gejala = prompt('Masukkan input : ')
            break
        case '3' :
            console.log('============================================')
            console.log('Berdasarkan gejala yang anda alami, jenis batuk yang anda alami adalah : ')
            switch (gejala) {
                case '1' :
                    console.log('Batuk Berdahak')
                    console.log('Batuk ini memiliki ciri batuk yang disertai dengan adanya lendir')
                    console.log('Batuk ini biasa memiliki jangka waktu sekitar 2 minggu')
                    break
                case '2' :
                    console.log('Batuk Kering')
                    console.log('Batuk ini memiliki ciri batuk tanpa dahak yang disertai gatal pada tenggorokan')
                    console.log('Batuk ini biasa memiliki jangka waktu sekitar 2 minggu')
                    break
                case '3' :
                    console.log('Batuk Paroksismal')
                    console.log('Batuk ini memiliki ciri batuk tanpa dahak yang disertai dengan suara melengking')
                    console.log('Batuk ini biasa memiliki jangka waktu sekitar 1 minggu')
                    break
                case '4' :
                    console.log('Batuk Berdarah')
                    console.log('Bautk ini memiliki ciri batuk yang disertai keluarnya bercak darah')
                    console.log('Batuk ini tidak memiliki jangka waktu pasti bergantung pada parahnya kondisi')
                    break
            }
            break
        case '4' :
            exit = true
    }

} while (!exit)
