export default class RandomStringGenerator {
    getRandomStringOfGivenLength(length: number): string {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    getRandomString() {
        return Math.random()
            .toString(36)
            .slice(2, 18);
    }
}

