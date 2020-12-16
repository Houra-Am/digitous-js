// 01 - Format
function formatDate(aaaa, mm, jj) {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
}
formatDate(1987, 03, 14)