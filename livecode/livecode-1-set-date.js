let date, month, year = 0;
let monthName = '';
let isLeapYear = false;
let message = '';
let isValid = true;
let is31Days = true;
date = 21;
month = 7;
year = 2020;

// LeapYear
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

// Month Name
switch (month) {
    case 1:
        monthName = 'Januari'
        break;
    case 2:
        monthName = 'Februari';
        break;
    case 3:
        monthName = 'Maret';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'Mei';
        break;
    case 6:
        monthName = 'Juni';
        break;
    case 7:
        monthName = 'Juli';
        break;
    case 8:
        monthName = 'Agustus';
        break;
    case 9:
        monthName = 'September';
        break;
    case 10:
        monthName = 'Oktober';
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        monthName = 'Desember';
        break;
    default:
        monthName = '';
}

// 31 Days Check
if (isLeapYear && date > 29) {
    message = `Februari tahun ${year} hanya ada tanggal 1 sampai 29`;
    isValid = false;
} else if (!isLeapYear && date > 28) {
    message = `Februari tahun ${year} hanya ada tanggal 1 sampai 28`;
    isValid = false;
} else {
    message = `Tahun kabisat tidak terjadi pada ${year}`;
    isValid = false;
}

if (isValid) {
    console.log(`${date} ${monthName} ${year}`)
} else {
    console.log(message)
}
