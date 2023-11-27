function solution(name, yearning, photo) {
    const result = [];

    for (const pic of photo) {
        let totalYearning = 0;
        
        for (const person of pic) {
            const index = name.indexOf(person);
            if (index !== -1) {
                totalYearning += yearning[index];
            }
        }

        result.push(totalYearning);
    }

    return result;
}