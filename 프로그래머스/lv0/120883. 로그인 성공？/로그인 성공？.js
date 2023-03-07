function solution(id_pw, db) {
    let ID_CHECK = false;
    let PW_CHECK = false;

    db.map((item) => {
        if (item[0] === id_pw[0] && item[1] === id_pw[1]) {
            console.log(item)
            console.log(id_pw)
            ID_CHECK = true;
            PW_CHECK = true;
            return
        }
        if (item[0] === id_pw[0]) {
            ID_CHECK = true;
            if (item[1] === id_pw[1]) {
                PW_CHECK = true;
            }
        }
    })
    if (ID_CHECK && PW_CHECK) {
        return "login";
    } else if (ID_CHECK && PW_CHECK === false) {
        return "wrong pw";
    } else {
        return "fail";
    }
}