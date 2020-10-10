const volumeKubusDanBalok = (sisiKubus, ...sisiBalok) => {
    const volKubus = sisiKubus * sisiKubus * sisiKubus;

    let volBalok = 1;
    for (let i = 0; i < sisiBalok.length; i++) {
        if (i >= 3) {
            continue;
        }

        volBalok *= sisiBalok[i];
    }

    let hasil = `Volume Kubus : ${volKubus} dan Volume Balok : ${volBalok}`;
    console.log(hasil);
};

volumeKubusDanBalok(10, 10, 10, 10);
