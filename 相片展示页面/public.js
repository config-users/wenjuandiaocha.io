function getRandomNumbers(num) {
    // 从1到65的范围内随机生成10个不重复的整数
    const numbers = [];
    while (numbers.length < num) {
        const random = Math.floor(Math.random() * 65) + 1; // 其中N是图片总数
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}
