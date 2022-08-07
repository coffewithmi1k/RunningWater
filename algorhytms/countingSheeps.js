function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let arr = [];
    arr = arrayOfSheep.map((el) => el === true? 1 : 0).reduce((el, acc) => acc+=el);

    console.log(arr);
}

countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]);