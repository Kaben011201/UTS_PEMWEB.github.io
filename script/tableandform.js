let listData=JSON.parse(localStorage.getItem("data")) || [];

dataList();

function addListData(){
    const name = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const prodi = document.getElementById('prodi').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const date = document.getElementById('date').value;
    const alamat = document.getElementById('alamat').value;

    data={
        name:name,
        nim:nim,
        prodi:prodi,
        email:email,
        password:password,
        jenisKelamin:jenisKelamin,
        date:date,
        alamat:alamat
    }

    let checkData = (data) => {
        for(const x in data){
            if(data[x] === null || data[x] === ''){
                return false;
            }
        }
        return true;
    };

    if(checkData){
        listData.push(data);
        localStorage.setItem("data", JSON.stringify(listData));
        alert('Data telah ditambahkan');
    }

};

function dataList(){
    let allData = '';

    for(let i = 0; i < listData.length; i++){
        const name = listData[i].name;
        const nim = listData[i].nim;
        const prodi = listData[i].prodi;
        const email = listData[i].email;
        const password = listData[i].password;
        const jenisKelamin = listData[i].jenisKelamin;
        const date = listData[i].date;
        const alamat = listData[i].alamat;

        allData += `<tr>
                <td>${6+i}</td>
                <td>${name}</td>
                <td>${nim}</td>
                <td>${prodi}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${jenisKelamin}</td>
                <td>${date}</td>
                <td>${alamat}</td>
                </tr>`
    }

    document.querySelector('.listData').innerHTML += allData;
}

