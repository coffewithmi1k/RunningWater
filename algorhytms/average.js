function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((el, acc) => acc+=el)/classPoints.length
    return average < yourPoints;
}

betterThanAverage([2, 3], 5);