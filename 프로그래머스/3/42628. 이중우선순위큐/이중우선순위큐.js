function solution(operations) {
    let queue = [];

    for (let op of operations) {
        const [command, value] = op.split(' ');

        if (command === 'I') {
            queue.push(Number(value));
        } else if (command === 'D' && queue.length > 0) {
            if (value === '1') {
                const maxIndex = queue.indexOf(Math.max(...queue));
                queue.splice(maxIndex, 1);
            } else if (value === '-1') {
                const minIndex = queue.indexOf(Math.min(...queue));
                queue.splice(minIndex, 1);
            }
        }
    }

    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [Math.max(...queue), Math.min(...queue)];
    }
}