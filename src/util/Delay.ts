export default class Timer {
    public static async delay(time: number) {
        return new Promise(resolve => {
            setTimeout(() => {resolve(1)}, time)
        })
    }
}