class BangunDatar {
    constructor(nama) {
        this.nama = nama;
    }

    luas() {
        return "";
    }

    keliling() {
        return "";
    }

    get getName() {
        return this.nama;
    }

    set setName(x) {
        this.nama = x;
    }
}

class Lingkaran extends BangunDatar {
    // versi 1
    constructor(name, jariJari) {
        super(name);
        this.jariJari = jariJari;

        // this.name = "Lingkaran" ????
    }

    luas() {
        return Math.PI * this.jariJari * this.jariJari;
    }

    keliling() {
        return Math.PI * this.jariJari * 2;
    }
}

class Persegi extends BangunDatar {
    // versi 1
    constructor(name, sisi) {
        super(name);
        this.sisi = sisi;

        // this.name = "Persegi" ????
    }

    luas() {
        return this.sisi * this.sisi;
    }

    keliling() {
        return this.sisi * 4;
    }
}

let lingkaran = new Lingkaran("lingkaran", 10);
console.log("lingkaran.luas()", lingkaran.luas());
console.log("lingkaran.keliling()", lingkaran.keliling());

let persegi = new Persegi("persegi", 10);
console.log("persegi.luas()", persegi.luas());
console.log("persegi.keliling()", persegi.keliling());
