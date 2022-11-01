class Refrigerator {
    constructor(action) {
        this.action = action
    }
    fridge = [];
    save(item, cb) {
        setTimeout(() => {
            cb(`SAVE: item ${item} sudah disimpan`);
            this.fridge.push(item);
        }, 1000);
    };
    take(item, cb) {
        setTimeout(() => {
            if (!this.fridge.includes(item)) {
                cb(`TAKE: item ${item} tidak ada`);
            } else {
                cb(`TAKE: item ${item} diambil`);
                const i = this.fridge.indexOf(item);
                this.fridge.splice(i, 1);
            }
        }, 1000);
    };
    open(cb) {
        setTimeout(() => {
            return cb(this.fridge);
        }, 1000);

        setTimeout(() => {
            console.log('Kulkas terbuka');
            this.action(save, take, open);
        }, 1000);
    };
}
const refrigerator = new Refrigerator()

refrigerator((simpan, ambil, lihat) => {
    refrigerator.open((isi) => {
        console.log('isi saat ini: ', isi);
        refrigerator.save('Gajah', (output) => {
            console.log(output);
            refrigerator.save('Nanas', (output) => {
                console.log(output);
                refrigerator.open((isi) => {
                    console.log('isi saat ini: ', isi)
                    refrigerator.take('Gajah', (output) => {
                        console.log(output);
                        refrigerator.take('Gajah', (output) => {
                            console.log(output);
                            refrigerator.open((isi) => {
                                console.log('isi saat ini: ', isi)
                            });
                        });
                    });
                });
            });
        });
    });
})


