/**
 * Kamu sedang bertugas sebagai Tenaga Ahli di Dinas Kependudukan dan Pencatatan Sipil.
 * Suatu ketika Kepala Dinas meminta mu membuat kan sebuah aplikasi yang bisa menjabarkan arti kode dari sebuah NIK (Nomor Induk Kependudukan)
 * Aturan kode NIK yaitu:
 * NIK tidak lebih dan kurang dari 16 digit
 * 2 digit pertama merupakan kode provinsi
 * 2 digit berikutnya merupakan kode kab/kota
 * 2 digit berikutnya merupakan kecamatan
 * 6 digit berikutnya terdiri dari tanggal-bulan-tahun
 *   dimana jika gender perempuan maka tanggal ditambahkan 40 misalnya tanggal 4 jadi 4 + 40 = 44
 *   jika gender pria tetap
 * 4 digtt terakhir adalah urutan (increment), 0001, 0002, 0003 dst (atau bisa random)
 * Program harus menerapkan asynchronous (untuk antrean dan cetak ktp)
 *
 * Requirement:
 * 1. CRUD Data Provinsi
 * 2. CRUD Data Kabupaten/Kota
 * 3. CRUD Data Kecamatan
 * 4. Register Penduduk sekaligus Generate NIK
  */

// Model

// const city = {
//     id: 'string',
//     name: 'string',
//     provinceCode: 'string'
// }
//
// const district = {
//     id: 'string',
//     name: 'string',
//     cityCode: 'string'
// }
//
// const population = {
//     id: 'number',
//     name: 'string',
//     birthDate: {
//         date: 'number',
//         month: 'month',
//         year: 'number'
//     },
//     addrress: {
//         street: 'string',
//         number: 'string',
//         province: province,
//         city: city,
//         district: district
//     },
//     gender: 'string'
// }
//
// const response = {
//     code: 'string',
//     message: 'string',
//     data: {
//         nik: 'string',
//         detail: population,
//     }
// }

const { log } = console;
function randomTimeout(minSeconds, maxSeconds) {
    minSeconds = Math.ceil(minSeconds);
    maxSeconds = Math.floor(maxSeconds);
    return (Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds) * 1000;
}

const commonResponse = {
    successCode: '00',
    successMessage: 'Success',
    defaultErrorCode: 'XX',
    defaultErrorMessage: 'Something went wrong',
    dataExist: 'Data already exists',
    dataNotExist: 'Data not exist',
    isRequire: 'Can\'t add, there is missing property',
}

class Response {
    constructor() {
        this.response = {
            code: '',
            message: '',
            data: ''
        }
    }

    successMessage(data, msg = commonResponse.successMessage, code) {
        this.response.code = code;
        this.response.message = msg;
        this.response.data = data;
        return this.response;
    }

    errorMessage(msg = commonResponse.defaultErrorMessage, code) {
        this.response.code = code;
        this.response.message = msg;
        this.response.data = null;
        return this.response;
    }
}

class Province {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
}

class City {
    constructor(id,name,provinceCode) {
        this.id = id;
        this.name = name;
        this.provinceCode = provinceCode;
    }
}

class District {
    constructor(id,name,citiyCode) {
        this.id = id;
        this.name = name;
        this.citiyCode = citiyCode;
    }
}

class Person {
    constructor(id,name,gender,birthDate,placeOfBirth,provinceId,CityId,districtId) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.placeOfBirth = placeOfBirth;
        this.provinceId = provinceId;
        this.CityId = CityId;
        this.districtId = districtId;
    }
}

class ProvinceService {
    constructor() {
        this.province = [];
    }

     add(province) {
        return new Promise((resolve, reject) => {
            console.log( province ? `Menyimpan data ${province.name}...` : `Menyimpan data ...`);
            setTimeout(() => {
                if (province === undefined) {
                    reject(new Response().errorMessage('field can\'t be empty!', '400'));
                } else {
                    this.province.push(province);
                    resolve(new Response().successMessage(province, 'SUCCESS', '201'));
                }
            }, randomTimeout(1,3));
        })
    }

    get() {
        return new Promise((resolve, reject) => {
            console.log(`Melihat list provinsi...`);
            setTimeout(() => {
                if (this.province.length === 0) {
                    reject(new Response().errorMessage(commonResponse.dataNotExist, '400'));
                } else {
                    resolve(new Response().successMessage(this.province, commonResponse.successMessage, '200'));
                }
            }, randomTimeout(1, 3));
        })
    }

    getById(id) {
        console.log(`Melihat data provisi dengan id ${id}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const province = this.province.find((data) => data.id === id);
                this.province = this.province.filter((data) => data.id != id);
                if (!province) {
                    reject(new Response().errorMessage(commonResponse.dataNotExist, '400'));
                } else {
                    resolve(new Response().successMessage(province, commonResponse.successMessage, '200'));
                }
            }, randomTimeout(1, 3));
        })
    }

    delete(id) {
        console.log(`Menghapus data provisi dengan id ${id}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const province = this.province.find((data) => data.id === id);
                this.province = this.province.filter((data) => data.id != id);
                if (!province) {
                    reject(new Response().errorMessage(commonResponse.dataNotExist, '400'));
                } else {
                    resolve(new Response().successMessage(province, commonResponse.successMessage, '200'));
                }
            }, randomTimeout(1, 3));
        })
    }

    update(province) {

    }
}

class City {
    cities = [];
    constructor() {
        this.province = new Province()
    }

    add(city, provinceCode) {
        const province = this.province.getById(provinceCode)
        if (provinceCode === undefined) {
            return this.response = {
                code: '400',
                message: `field provinceCode can\'t be empty!`,
            }
        }

        if (province === undefined) {
            return this.response = {
                code: '400',
                message: `province with ID ${provinceCode} not found!`,
            }
        } else {
            city.provinceCode = province
            this.cities.push(city);
            return this.response = {
                code: '201',
                message: 'CREATED',
                data: city,
            }
        }
    }

    get() {
        return this.cities;
    }

    getById(id) {
        for (const city of this.cities) {
            if (city.id === id) {
                return city;
            }
        }
    }
}

class District {
    districts = [];
    constructor() {
        this.province = new Province();
        this.city = new City();
    }

    add(district, provinceCode, cityCode) {
        const city = this.city.getById(cityCode)
        const province = this.province.getById(provinceCode)
        if (provinceCode === undefined) {
            return this.response = {
                code: '400',
                message: `field provinceCode can\'t be empty!`,
            }
        } else if (cityCode === undefined) {
            return this.response = {
                code: '400',
                message: `field cityCode can\'t be empty!`,
            }
        }

        if (province === undefined) {
            return this.response = {
                code: '400',
                message: `province with ID ${provinceCode} not found!`,
            }
        } else if (city === undefined) {
            return this.response = {
                code: '400',
                message: `city with ID ${cityCode} not found!`,
            }
        } else {
            district.provinceCode = province
            district.cityCode = city
            this.districts.push(district);
            return this.response = {
                code: '201',
                message: 'CREATED',
                data: district,
            }
        }
    }

    get() {
        return this.districts;
    }

    getById(id) {
        for (const district of this.districts) {
            if (district.id === id) {
                return district;
            }
        }
    }
}

const province = new Province();
const addProvince01 = {id: 1, name: 'Lampung'};
const addProvince02 = {id: 2, name: 'Jawa Barat'};

const main = async () => {
    try {
        const addProv01 = await province.add(addProvince01);
        const addProv02 = await province.add(addProvince02);
        console.log(addProv01);
        console.log(addProv02);

        const listProv02 = await province.get();
        console.log(listProv02);

        const getProvinceId01 = await province.getById(1);
        console.log(getProvinceId01);
    } catch (err) {
        console.error(err)
    }
}
//
// console.log('LIST PROVINCE =================================================');
// console.log(province.get());
//
// console.log('GET BY ID PROVINCE =============================================');
// const get01 = province.getById('01');
// console.log(get01);
//
// const city = new City();
//
// console.log('ADD CITY ======================================================');
// const addCity01 = [
//     city.add({ id: '11', name: 'Bogor'}, '01'),
//     city.add({ id: '12', name: 'Bandung'}, '01'),
//     city.add({ id: '13', name: 'Jakarta Selatan'}, '02')
// ];
// console.log(addCity01);
//
// console.log('LIST CITY ======================================================');
// console.log(city.get());
//
// console.log('GET BY ID CITY =================================================');
// console.log(city.getById('11'));
//
// const district = new District();
//
// console.log('ADD DISTRICT ====================================================');
// const addDistrict01 = district.add({ id: '01', name: 'Bogor Barat'}, '01', '12');
// console.log(addDistrict01)
//
// console.log('LIST DISTRICT ===================================================');
// console.log(district.get());
//
// console.log('GET BY ID DISTRICT ==============================================');
// console.log(district.getById('01'));

main();

class Population {
    constructor() {}

    generate() {

    }

    printData() {

    }
}
