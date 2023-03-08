var contacts = [
    // {
    //     id: 1,
    //     name: 'Chau', 
    //     phoneNumber: '123 456 789'
    // },
    // {
    //     id: 2,
    //     name: 'Bob', 
    //     phoneNumber: '123 456 123'
    // },
    // {
    //     id: 3,
    //     name: 'Jane', 
    //     phoneNumber: '123 456 987'
    // }
];
var contactListElement = document.getElementById('contact-list');

// Danh bạ được sắp xếp bằng tên theo bảng chữ cái
function sortByName(contactA, contactB) {
    var nameA = contactA.name.toLowerCase();
    var nameB = contactB.name.toLowerCase();
    return (nameA.localeCompare(nameB));
}

// Danh bạ contacts ban đầu được sắp xếp lại (ko tạo mảng mới)
// contacts.sort(sortByName);

// Tạo hàm làm từng ô danh bạ (gộp lạitrong renderHTML bên dưới)
// function make_card(item){
//     return `
//     <div class='card'>
//         <div class='card-body'>
//             <div>${item.name}</div>
//             <div>${item.phoneNumber}</div>
//         </div>
//     </div>
//     `;
// };


// Tạo hàm: In ra danh bạ bằng cách map từng object trong mảng contacts với hàm make_card thành 1 mảng mới gọi là contactListHTML
function renderHtml (data) {
var contactListHTML = data.sort(sortByName).map((item) => {
    return `
        <div class='card'>
            <div class='card-body d-flex justify-content-between'>
                <div>${item.name}</div>
                <div>${item.phoneNumber}</div>
            </div>
        </div>
        `;
    });
    contactListElement.innerHTML = contactListHTML;
};

// Thêm mới danh bạ với tên và số điện thoại
// CHÚ Ý: Khai báo biến với getElementById đừng lấy value, hãy để trong function hẵng tạo biến lấy value.
const inputName = document.getElementById('name');
const inputPhoneNumber = document.getElementById('phone');

function add() {
    const name = inputName.value;
    const phoneNumber = inputPhoneNumber.value;
    const newContact = {
                id: contacts.length + 1,
                name: name,
                phoneNumber: phoneNumber
            };  
    contacts.push(newContact);
    renderHtml(contacts);
};


// Xử lí vấn đề dấu trong chữ cái (tone mark/thanh, diacritical marks/dấu phụ âm)
// Credit: <script src="https://gist.github.com/bluzky/b8c205c98ff3318907b30c3e0da4bf3f.js"></script>
function stringToSlug(str) {
    // remove accents
    var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
        to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i=0, l=from.length ; i < l ; i++) {
      str = str.replace(RegExp(from[i], "gi"), to[i]);
    }
  
    str = str.toLowerCase()
          .trim()
          .replace(/[^a-z0-9\-]/g, ' ')
          .replace(/-+/g, ' ');
  
    return str;
  }

// Tìm kiếm danh bạ theo tên và số điện thoại
const search_input = document.getElementById('search');

function search(){
    const searchValue = search_input.value;
    const searchValue_norm = stringToSlug(searchValue);
    const filteredContacts = contacts.filter((item) => {
        const name_norm = stringToSlug(item.name);
        return name_norm.toLowerCase().includes(searchValue_norm.toLowerCase()) || item.phoneNumber.includes(searchValue);
    });
    renderHtml(filteredContacts);
}
// Xoá các danh bạ bị trùng số điện thoại
const newContacts = [];
function del_dup() {
  
    contacts.forEach((element) => {
        const isExisting = newContacts.find((item) => {return item.phoneNumber === element.phoneNumber;});
        if (!isExisting) {
            newContacts.push(element);
        }
    });
    renderHtml(newContacts);
};
// Nhớ render lại toàn bộ (để nó sort và in ra đầy đủ danh bạ được sắp xếp)
renderHtml(newContacts);